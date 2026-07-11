const mailerLiteEndpoint = "https://connect.mailerlite.com/api/subscribers";

interface NewsletterPayload {
  firstName?: unknown;
  email?: unknown;
  website?: unknown;
}

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function readPayload(request: Request): Promise<NewsletterPayload> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as NewsletterPayload;
  }

  const formData = await request.formData();

  return {
    firstName: formData.get("firstName"),
    email: formData.get("email"),
    website: formData.get("website"),
  };
}

export async function POST(request: Request) {
  let body: NewsletterPayload;

  try {
    body = await readPayload(request);
  } catch {
    return Response.json(
      { message: "Please submit the form again with valid details." },
      { status: 400 },
    );
  }

  if (cleanText(body.website, 200)) {
    return Response.json({
      message: "You're in. A fresh note of encouragement is on its way.",
    });
  }

  const firstName = cleanText(body.firstName, 80);
  const email = cleanText(body.email, 200).toLowerCase();

  if (!firstName || !email) {
    return Response.json(
      { message: "Please enter your first name and email address." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return Response.json(
      {
        message:
          "Newsletter delivery is ready, but MailerLite is not configured yet.",
        code: "MAILERLITE_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const mailerLiteResponse = await fetch(mailerLiteEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      fields: {
        name: firstName,
      },
      groups: [groupId],
    }),
  });

  if (!mailerLiteResponse.ok) {
    const errorText = await mailerLiteResponse.text();
    console.error(
      "MailerLite newsletter subscription failed",
      mailerLiteResponse.status,
      errorText,
    );

    if (mailerLiteResponse.status === 422) {
      return Response.json(
        { message: "Please check your email address and try again." },
        { status: 400 },
      );
    }

    if (
      mailerLiteResponse.status === 401 ||
      mailerLiteResponse.status === 403
    ) {
      return Response.json(
        {
          message:
            "Newsletter delivery is not authorized yet. Please try again soon.",
        },
        { status: 502 },
      );
    }

    return Response.json(
      {
        message: "We couldn't add you just yet. Please try again in a moment.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    message: "You're in. A fresh note of encouragement is on its way.",
  });
}
