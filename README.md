# Devos website

Bilingual Christian parenting validation landing page. Built with Next.js, TypeScript and Supabase.

## Setup

1. Node.js 20+: `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Create Supabase project; run `supabase/schema.sql` in SQL editor.
4. Configure `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. Never commit secrets.
5. `npm run dev`, visit http://localhost:3000/en or /es.

Deploy with Vercel after setting environment variables. Signup endpoint returns 503 until configured. This is currently a waitlist, not a delivered seven-day challenge.

## Before advertising

Add consent-aware analytics, proper unsubscribe/email delivery, rate limiting, privacy policy, and complete editorial review of seven days of content. Verify accessibility, Bible translation rights, brand name availability, and functionality.
