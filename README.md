# The Lady Derby

A premium, responsive single-page website for Deborah Judah-Mensah — The Lady
Derby. Built with Next.js App Router, TypeScript, Tailwind CSS v4, `next/font`,
`next/image`, and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
```

## Editing the website

- Global brand details and navigation: `src/content/site.ts`
- Landing-page copy and lists: `src/content/landing.ts`
- Ebook resources: `src/content/products.ts`
- Social profile URLs: `src/content/social.ts`
- Brand theme and global styles: `src/app/globals.css`
- Brand images and ebook covers: `public/images/`

Keep the existing image filenames when replacing an asset to avoid a code
change. The fourth ebook currently uses a designed placeholder because a cover
was not supplied.

## Forms

Copy `.env.example` to `.env.local` and provide the values needed by your form
providers.

The contact form posts to `/api/contact`. It validates and sanitizes the
request, then sends the enquiry through Resend to `CONTACT_TO_EMAIL`:

- `RESEND_API_KEY=<resend-api-key>`
- `RESEND_FROM_EMAIL="The Lady Derby Website <info@theladyderbyconsult.com>"`
- `CONTACT_TO_EMAIL=info@theladyderbyconsult.com`

`RESEND_FROM_EMAIL` must use an email address from a domain verified in Resend.

The newsletter form posts to `/api/newsletter`. It validates and sanitizes the
request, then creates or updates the subscriber in MailerLite and adds them to
`MAILERLITE_GROUP_ID` when `MAILERLITE_API_KEY` is set.

The lead magnet form posts `FormData` to the public HTTPS endpoint in:

- `NEXT_PUBLIC_LEAD_MAGNET_FORM_ACTION`

This can point to MailerLite, Formspree, or a compatible custom endpoint. The
frontend displays clear setup guidance instead of pretending a submission
succeeded when no endpoint is configured.

The free resource PDF itself should be delivered by the chosen email
automation. No PDF was included in the supplied assets.

## Deploying to Vercel

1. Push the project to a Git repository.
2. Import it into Vercel as a Next.js project.
3. Add the variables from `.env.example` in Project Settings → Environment
   Variables.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
5. Add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` for the
   contact form.
6. Add `MAILERLITE_API_KEY` and `MAILERLITE_GROUP_ID` for newsletter
   subscriptions.
7. Deploy and submit a test newsletter signup, lead-magnet request, and contact
   enquiry.

The build provides the landing page, privacy policy, contact route,
`robots.txt`, `sitemap.xml`, Open Graph metadata, and JSON-LD schema.
