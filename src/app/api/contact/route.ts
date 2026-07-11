import { CONTACT_EMAIL } from "@/lib/constants";

const resendEndpoint = "https://api.resend.com/emails";
const defaultFromEmail =
  "The Lady Derby Website <hello@theladyderbyconsult.com>";

const enquiryTypes = new Set([
  "Speaking",
  "Mentorship / Coaching",
  "Collaboration",
  "Partnership",
  "General Enquiry",
]);

interface ContactPayload {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  organization?: unknown;
  phone?: unknown;
  enquiryType?: unknown;
  message?: unknown;
}

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&"'<>]/g,
    (character) =>
      ({
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#039;",
        "<": "&lt;",
        ">": "&gt;",
      })[character] || character,
  );
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendEmail({
  apiKey,
  from,
  html,
  replyTo,
  subject,
  text,
  to,
}: {
  apiKey: string;
  from: string;
  html: string;
  replyTo?: string;
  subject: string;
  text: string;
  to: string | string[];
}) {
  const payload: Record<string, unknown> = {
    from,
    html,
    subject,
    text,
    to: Array.isArray(to) ? to : [to],
  };

  if (replyTo) {
    payload.reply_to = replyTo;
  }

  return fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { message: "Please submit the form again with valid details." },
      { status: 400 },
    );
  }

  const firstName = cleanText(body.firstName, 80);
  const lastName = cleanText(body.lastName, 80);
  const email = cleanText(body.email, 200).toLowerCase();
  const organization = cleanText(body.organization, 160);
  const phone = cleanText(body.phone, 40);
  const enquiryType = cleanText(body.enquiryType, 60);
  const message = cleanText(body.message, 5000);

  if (!firstName || !email || !message || !enquiryTypes.has(enquiryType)) {
    return Response.json(
      {
        message:
          "Please complete your first name, email, enquiry type, and message.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || defaultFromEmail;

  if (!apiKey) {
    return Response.json(
      {
        message:
          "The enquiry form is ready, but email delivery has not been configured yet. Please email info@theladyderbyconsult.com directly.",
        code: "EMAIL_PROVIDER_NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(`${firstName} ${lastName}`.trim());
  const safeEmail = escapeHtml(email);
  const safeOrganization = escapeHtml(organization || "Not provided");
  const safePhone = escapeHtml(phone || "Not provided");
  const safeEnquiryType = escapeHtml(enquiryType);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const ownerEmailResponse = await sendEmail({
    apiKey,
    from: fromEmail,
    html: `
      <div style="font-family:Arial,sans-serif;color:#363637;line-height:1.6">
        <h1 style="color:#93151B">New website enquiry</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrganization}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Enquiry type:</strong> ${safeEnquiryType}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      </div>
    `,
    replyTo: email,
    subject: `New ${enquiryType} enquiry from ${firstName}`,
    text: [
      "New website enquiry",
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      `Organization: ${organization || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Enquiry type: ${enquiryType}`,
      "",
      message,
    ].join("\n"),
    to: toEmail,
  });

  if (!ownerEmailResponse.ok) {
    const errorText = await ownerEmailResponse.text();
    console.error(
      "Resend contact delivery failed",
      ownerEmailResponse.status,
      errorText,
    );
    return Response.json(
      {
        message:
          "We couldn't deliver your enquiry right now. Please email info@theladyderbyconsult.com directly.",
      },
      { status: 502 },
    );
  }

  const confirmationResponse = await sendEmail({
    apiKey,
    from: fromEmail,
    html: `
      <div style="font-family:Arial,sans-serif;color:#363637;line-height:1.6">
        <h1 style="color:#93151B">Thank you for reaching out</h1>
        <p>Hi ${escapeHtml(firstName)},</p>
        <p>Your message has been received by The Lady Derby team. We will review your enquiry and respond soon.</p>
        <p><strong>Your enquiry type:</strong> ${safeEnquiryType}</p>
        <p style="color:#6F6662">If you need to add anything, you can reply directly to this email.</p>
      </div>
    `,
    replyTo: toEmail,
    subject: "We received your enquiry - The Lady Derby",
    text: [
      `Hi ${firstName},`,
      "",
      "Your message has been received by The Lady Derby team. We will review your enquiry and respond soon.",
      "",
      `Your enquiry type: ${enquiryType}`,
      "",
      "If you need to add anything, you can reply directly to this email.",
    ].join("\n"),
    to: email,
  });

  if (!confirmationResponse.ok) {
    const errorText = await confirmationResponse.text();
    console.error(
      "Resend contact confirmation failed",
      confirmationResponse.status,
      errorText,
    );
  }

  return Response.json({
    message: "Thank you for reaching out. Deborah's team will be in touch soon.",
  });
}
