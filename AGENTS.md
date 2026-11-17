# Devos — instructions for coding agents

Devos is a bilingual (English/Spanish), Bible-centered, Christ-centered Christian parenting product. Read README.md and docs/PRODUCT.md before major work.

## Non-negotiable product principles
- **Two equal experiences:** morning school-run devotionals and parent-read bedtime stories. Neither is a secondary feature.
- **Morning:** audio-first, eyes-free after starting playback, brief and conversational. Drivers must not use interactive controls while driving. Browser speech synthesis is a demo only; evaluate reliable recorded audio for production.
- **Bedtime:** parent speaks, child listens. Low-light, warm dark colors, readable typography, no animations, autoplay, confetti, scores, streak prompts, gamification or attention traps.
- **Stories:** age-relevant characters (ages 3–5 and 6–10 initially), relatable childhood struggles, a kind and credible resolution, natural biblical reflection and short prayer. Enough narrative depth for a real connection moment.
- Parents guide the relationship; the product supports them. Minimize children's screen exposure.
- Keep Bible and Christ central without denomination-specific devotional practices. Manually review theological accuracy and references before public marketing.
- Premium, calm, welcoming, accessible. Do not manufacture testimonials or claims.

## Engineering
- Next.js App Router + strict TypeScript. Preserve locale parity across pages and experiences.
- Supabase credentials stay server-side. Never commit keys or personally identifiable user data.
- Do not claim integrations or analytics work unless tested.
- Keep content editable in `content/experiences.ts`. Samples are **editorial drafts**, not a complete 7-day challenge.
- Maintain accessibility: semantic content, sufficient contrast, keyboard navigation, reduced motion.
- Do not start paid ads until signup rate limiting, privacy notice, analytics consent, and unsubscribe/email flow are ready.
