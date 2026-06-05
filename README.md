# LossRunner — marketing landing page

Next.js (App Router) + Tailwind v4 + TypeScript rebuild of the
`reference/lossrunner-landing.html` design, redone in the apple.com
visual language: a light surface (white + `#f5f5f7`), SF Pro type on a
closed ramp, an 8-pt grid, hairline separators, restrained motion, and a
single cinematic dark band for rhythm.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in CALENDLY_URL and MYSQL_* as needed
npm run dev                  # http://localhost:3000
```

## Configuration

All site configuration is via environment variables:

| Variable                   | Purpose                                              |
| -------------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_CALENDLY_URL` | URL used by every "Book a call" CTA                  |
| `MYSQL_HOST`               | DB host for early-access form submissions            |
| `MYSQL_PORT`               | Default `3306`                                       |
| `MYSQL_USER`               |                                                      |
| `MYSQL_PASSWORD`           |                                                      |
| `MYSQL_DATABASE`           |                                                      |

If any required `MYSQL_*` value is missing, `POST /api/early-access`
still returns `{ ok: true }` and logs the submission to the server
console — handy for local dev before the database is provisioned.

## Database setup

```bash
mysql -u <user> -p <database> < db/schema.sql
```

Creates the `early_access` table (`id`, `email` UNIQUE, `ip`,
`user_agent`, `created_at`).

## Structure

```
app/
  layout.tsx                  # SF Pro stack (Inter fallback) + metadata
  page.tsx                    # composes the section components
  globals.css                 # design tokens, type ramp + reveal animation
  api/early-access/route.ts   # form POST handler
components/
  Nav · Hero · PainSection · HowItWorks
  ReturnBand (the dark band) · WhoFor · FinalCTA · Footer
  ui/ Button (+ ArrowLink) · Container · Eyebrow · Kicker · Reveal · InboxMock
lib/
  db.ts                       # mysql2 pool (lazy, optional)
  env.ts                      # CALENDLY_URL, CONTACT_EMAIL
db/schema.sql                 # early_access table
```
