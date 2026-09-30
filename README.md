# BahatiBox static prototype

BahatiBox is now built with plain HTML, CSS, and vanilla JavaScript—no React, Next.js, build framework, or runtime dependencies are needed. The site is responsive and designed mobile-first.

## Start locally

Install Node.js 20 or newer, then run `npm run dev` from the project directory. Open the local address printed by the server (normally `http://localhost:3000`; if that port is busy it automatically tries the next one). `npm run start` runs the same lightweight static server. For deployment, upload the HTML files, `styles.css`, `styles/`, and `app.js` to any static host.

## Pages

- `index.html` — home, featured prizes, how it works and illustrative winners
- `raffles.html` — raffle cards with working category and ticket-price filters
- `raffle.html?slug=iphone-15-pro` — selected prize details, participants and quantity links
- `checkout.html?raffle=iphone-15-pro&quantity=2` — order preview
- `sign-in.html` — local, tab-scoped demo profile
- `seller.html`, `dashboard.html`, `draw.html`, `admin.html`
- `terms.html`, `privacy.html`, `responsible-play.html`

Run `npm run build` to verify the expected static pages and shared assets; `npm run check` checks JavaScript syntax. Product photos come from Unsplash and therefore need internet access.

## Prototype limitations

Raffle counts, ticket/payment history, winner names/results, seller profiles and marketplace metrics are illustrative. Checkout never contacts M-Pesa or issues tickets; sign-in is not authentication; seller/admin forms do not submit data; and no random draw, payout or refund is conducted. The static website has no database, backend, or secure user accounts. Draft legal pages need review by qualified Kenyan counsel. Integrate server-side authentication, data validation, payment callbacks, idempotency, auditability, verified draw logic, privacy and applicable Kenyan legal safeguards before production.
