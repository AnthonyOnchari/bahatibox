const prizes = [
  { slug: "iphone-15-pro", title: "iPhone 15 Pro · 256GB", category: "Phones", seller: "Nairobi Tech House", price: 150, sold: 72, days: 2, value: "KES 189,000", photo: "photo-1592899677977-9c10ca588bbd", description: "A little upgrade to make every day feel new. This iPhone 15 Pro comes with 256GB storage, a stunning camera system, and a one-year local warranty." },
  { slug: "macbook-air", title: "MacBook Air M2 · 13 inch", category: "Laptops", seller: "The Gadget Spot", price: 250, sold: 48, days: 4, value: "KES 164,000", photo: "photo-1496181133206-80ce9b88a853", description: "Light, lovely and ready for whatever you’re working on. Includes the 13-inch MacBook Air with M2 chip, 8GB unified memory and 256GB SSD." },
  { slug: "home-refresh", title: "The home refresh bundle", category: "Home & living", seller: "Soko Living", price: 100, sold: 86, days: 1, value: "KES 78,000", photo: "photo-1555041469-a586c61ea9bc", description: "Bring a fresh feeling home with a cozy accent chair, handwoven throw and locally made cushion set. Delivery included within Nairobi." },
  { slug: "headphones", title: "Sony WH-1000XM5 headphones", category: "Electronics", seller: "Nairobi Tech House", price: 90, sold: 34, days: 6, value: "KES 49,000", photo: "photo-1505740420928-5e560c06d30e", description: "Premium over-ear headphones with immersive sound, noise cancelling, and comfortable all-day listening." },
  { slug: "coffee-maker", title: "De’Longhi coffee maker", category: "Home & living", seller: "Soko Living", price: 120, sold: 61, days: 3, value: "KES 36,000", photo: "photo-1495474472287-4d71bcdd2085", description: "Bring your café ritual home with this stylish coffee maker and a starter selection of locally roasted beans." },
  { slug: "tablet", title: "Samsung Galaxy Tab S9", category: "Phones", seller: "The Gadget Spot", price: 180, sold: 25, days: 8, value: "KES 115,000", photo: "photo-1544244015-0df4b3ffc6b0", description: "A versatile tablet for work, creativity and downtime, with a vivid screen and an included S Pen." },
];
const icons = {
  gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v9H4v-9m-2-5h20v5H2zm10 0v14M12 7H7.5a2.5 2.5 0 1 1 2.4-3.2C10.4 5.2 12 7 12 7Zm0 0h4.5a2.5 2.5 0 1 0-2.4-3.2C13.6 5.2 12 7 12 7Z"/></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  verified: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 12 2 2 4-4"/><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9a3 3 0 0 0 0 6v4h20v-4a3 3 0 0 1 0-6V5H2z"/><path d="M13 5v2m0 4v2m0 4v2"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18m-5 5h2M7 5V3h11v2"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8m-4-4v4M7 4h10v5a5 5 0 0 1-10 0zm10 2h4v2a4 4 0 0 1-4 4M7 6H3v2a4 4 0 0 0 4 4"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
};
const sessionKey = "bahatibox-demo-user";
const photoUrl = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
const safe = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

function header() {
  const user = readUser();
  const navLinks = '<a href="raffles.html">Explore</a><a href="index.html#how-it-works">How it works</a><a href="seller.html">For sellers</a><a href="draw.html">Draw room</a>';
  return `<header class="site-header"><div class="nav-wrap"><a href="index.html" class="brand" aria-label="BahatiBox home"><span class="brand-mark">${icons.gift}</span><span>bahati<span class="brand-accent">box</span></span></a><nav class="nav-links" id="main-nav" aria-label="Main navigation">${navLinks}<a class="mobile-account" href="${user ? "dashboard.html" : "sign-in.html"}">${user ? `Hi, ${safe(user.name)}` : "Sign in / Create account"}</a></nav><div class="nav-actions">${user ? `<a href="dashboard.html" class="account-link">${icons.user} ${safe(user.name)}</a><button class="signout-button" type="button" data-signout aria-label="Sign out">↪</button>` : `<a href="sign-in.html" class="account-link">${icons.user} Sign in</a>`}<a href="raffles.html" class="button button-dark nav-cta">Find a prize <span>↗</span></a></div><button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="main-nav" data-menu>${icons.menu}</button></div></header>`;
}
function footer() {
  return `<footer class="footer"><div class="footer-inner"><a href="index.html" class="brand"><span class="brand-mark">${icons.gift}</span><span>bahati<span class="brand-accent">box</span></span></a><small>© 2026 BahatiBox · A demo marketplace concept</small><div class="footer-links"><a href="terms.html">Terms</a><a href="privacy.html">Privacy</a><a href="responsible-play.html">Responsible play · 18+</a><a href="admin.html">Admin</a></div></div></footer>`;
}
function raffleCard(item) {
  return `<article class="raffle-card"><a href="raffle.html?slug=${encodeURIComponent(item.slug)}"><div class="raffle-image"><img class="prize-photo" src="${photoUrl(item.photo, 700)}" alt="${safe(item.title)}" loading="lazy" decoding="async"><span class="tag">${safe(item.category)}</span><span class="heart-btn" aria-hidden="true">♡</span></div><div class="raffle-info"><div class="seller-line">${safe(item.seller)} <span class="verified-tick" title="Seller profile reviewed">✓</span></div><h3>${safe(item.title)}</h3><div class="raffle-price-row"><div><div class="price-label">Ticket price</div><div class="ticket-price">KES ${item.price} <span>/ ticket</span></div></div><div class="countdown">DRAW IN<strong>${icons.clock}${item.days}d 08h</strong></div></div><div class="progress-track"><div class="progress-value" style="width:${item.sold}%"></div></div><div class="progress-line"><span><strong>${item.sold}%</strong> tickets sold</span><span>${100 - item.sold}% left</span></div></div></a></article>`;
}
function homePage() {
  return `<section class="hero"><div class="hero-copy-wrap"><div class="eyebrow"><span class="eyebrow-dot"></span>A little luck looks good on you</div><h1>That thing<br>you want? <em>Closer.</em></h1><p class="hero-copy">Find brilliant prizes from Kenyan sellers and enter for a chance to make them yours. Pick a prize, choose your tickets, and follow the draw.</p><div class="hero-buttons"><a class="button button-dark" href="raffles.html">Explore the draws ${icons.arrow}</a><a class="text-link" href="#how-it-works">How it works ↓</a></div><div class="hero-proof"><span class="avatar-stack"><i>J</i><i>A</i><i>M</i></span><span><strong>Little tickets, big daydreams</strong></span>${icons.verified}<span>See every ticket count</span></div></div><div class="hero-visual" aria-label="iPhone prize photo"><div class="hero-sun"></div><div class="orbit"></div><div class="hero-product"><img class="hero-product-image" src="${photoUrl(prizes[0].photo, 900)}" alt="iPhone smartphone prize"><span class="product-chip">YOUR NEXT LITTLE WIN</span></div><div class="floating-card draw-card">UP NEXT<strong>Fresh prizes, every week</strong></div><div class="floating-card verified-card"><span class="verified-icon">${icons.check}</span>Seller reviewed</div></div></section><section class="section raffles-section"><div class="section-inner"><div class="section-heading"><div><div class="section-topline"><span class="eyebrow-dot"></span>Curated for your wish list</div><h2>Currently catching eyes.</h2><p>Good finds from sellers across Kenya. Take a closer look.</p></div><a class="arrow-link" href="raffles.html">All prizes ${icons.arrow}</a></div><div class="raffle-grid">${prizes.slice(0, 3).map(raffleCard).join("")}</div></div></section><section class="section steps-section" id="how-it-works"><div class="section-inner"><div class="center-heading"><div class="section-topline">Simple, clear, and fun</div><h2>Here’s the good part.</h2><p>Three little steps from “I love that” to “could it be me?”</p></div><div class="steps-grid"><article class="step-card"><span class="step-number">01</span><div class="step-icon">${icons.ticket}</div><h3>Find your maybe</h3><p>Browse prize listings and check their price, ticket progress and closing date before you enter.</p></article><article class="step-card"><span class="step-number">02</span><div class="step-icon">${icons.wallet}</div><h3>Choose your tickets</h3><p>Pick a quantity and follow the checkout steps. Your entries should be visible in your account.</p></article><article class="step-card"><span class="step-number">03</span><div class="step-icon">${icons.trophy}</div><h3>Follow the draw</h3><p>See the result and draw details when entries close. No mystery about the ticket count.</p></article></div></div></section><section class="section winner-section"><div class="section-inner"><div class="winner-heading"><div><div class="section-topline">The latest happy endings</div><h2>People, prizes, good news.</h2></div><span class="live-pill"><i></i> COMMUNITY</span></div><div class="winner-strip">${[["😊", "Wanjiku M. · Kiambu", "Air fryer draw", "#BB-0284"], ["🙂", "Brian K. · Mombasa", "Samsung TV draw", "#BB-0279"], ["😄", "Akinyi O. · Kisumu", "Weekend stay draw", "#BB-0271"]].map(([face, name, prize, id]) => `<div class="winner-item"><span class="winner-face">${face}</span><div class="winner-copy"><strong>${name}</strong>${prize}</div><span class="winner-prize">${id}<br>Demo</span></div>`).join("")}</div><p class="demo-caption">Illustrative entries only — no real winners or draws are represented.</p></div></section><section class="cta-section"><div class="cta-box"><div><h2>Your shop could be someone’s daydream.</h2><p>Meet new customers by sharing a prize they’ll love.</p></div><a href="seller.html" class="button button-lime">Sell on BahatiBox ${icons.arrow}</a></div></section>`;
}
function listingPage() {
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>Your next little thrill</div><h1>Find your kind of win.</h1><p>Demo prize listings. Browse by category and ticket price.</p></div><section class="section raffles-section listing-section"><div class="section-inner"><div class="filter-row" aria-label="Filter raffles"><div class="category-filters">${["All prizes", "Phones", "Laptops", "Electronics", "Home & living"].map((category, index) => `<button type="button" class="filter-chip ${index === 0 ? "active" : ""}" data-category="${category}">${category}</button>`).join("")}</div><label class="visually-hidden" for="max-price">Maximum ticket price</label><select id="max-price" class="filter-chip"><option value="any">Any price</option><option value="100">Under KES 100</option><option value="150">Under KES 150</option><option value="250">Under KES 250</option></select></div><div class="raffle-grid" id="raffle-list">${prizes.map(raffleCard).join("")}</div><p class="demo-caption center-caption">Ticket counts are demo data and do not update from purchases.</p></div></section>`;
}
function detailPage() {
  const query = new URLSearchParams(location.search);
  const item = prizes.find((prize) => prize.slug === query.get("slug")) || prizes[0];
  document.title = `${item.title} — BahatiBox`;
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>${safe(item.category)}</div><h1>${safe(item.title)}</h1><p>One wonderful prize. A fair, public draw. Maybe your name on the happy list.</p></div><div class="portal-wrap detail-layout"><div><div class="raffle-image detail-image"><img class="prize-photo" src="${photoUrl(item.photo, 1200)}" alt="${safe(item.title)}" fetchpriority="high"></div><section class="portal-panel"><h2>About this prize</h2><p class="body-copy">${safe(item.description)}</p><p class="body-copy">Prize value <strong>${item.value}</strong></p><div class="seller-line">Offered by ${safe(item.seller)} <span class="verified-tick">✓</span></div></section><section class="portal-panel"><h2>Recent participants</h2>${["M*** Wanjiku", "B*** Otieno", "A*** Naliaka", "K*** Mwangi"].map((name, index) => `<div class="portal-row"><span>${name}</span><span class="muted-text">Ticket #${String(182 + index * 17).padStart(4, "0")}</span></div>`).join("")}</section></div><aside><section class="portal-panel"><span class="status-pill">${icons.check} Demo seller profile</span><h2 class="detail-card-title">${safe(item.title)}</h2><p class="body-copy">Prize value ${item.value}</p><div class="raffle-price-row detail-price"><div><div class="price-label">Each ticket</div><div class="ticket-price">KES ${item.price}</div></div><div class="countdown">DRAW IN<strong>${icons.clock}${item.days}d 08h</strong></div></div><div class="progress-track"><div class="progress-value" style="width:${item.sold}%"></div></div><div class="progress-line"><span><strong>${item.sold}%</strong> sold</span><span>${100 - item.sold}% remaining</span></div><p class="body-copy quantity-label">Choose ticket quantity</p><div class="quantity-links">${[1, 2, 5].map((quantity) => `<a class="filter-chip" href="checkout.html?raffle=${encodeURIComponent(item.slug)}&quantity=${quantity}">${quantity} ${quantity === 1 ? "ticket" : "tickets"}</a>`).join("")}</div><a href="checkout.html?raffle=${encodeURIComponent(item.slug)}&quantity=1" class="button button-dark full-button">Buy tickets ${icons.ticket}</a><p class="demo-caption">Checkout is a preview only. No payment is taken.</p></section><section class="portal-panel"><h2>Fair from start to finish</h2><p class="body-copy">${icons.check} Public ticket count<br>${icons.check} Draw record for everyone<br>${icons.check} Refund terms before entry</p></section></aside></div>`;
}
function checkoutPage() {
  const params = new URLSearchParams(location.search);
  const item = prizes.find((prize) => prize.slug === params.get("raffle")) || prizes[0];
  const rawQuantity = Number.parseInt(params.get("quantity") || "1", 10);
  const quantity = Number.isFinite(rawQuantity) ? Math.max(1, Math.min(rawQuantity, 20)) : 1;
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>Demo checkout</div><h1>One last little step.</h1><p>This preview does not connect to M-Pesa or charge your phone.</p></div><div class="portal-wrap checkout-wrap"><section class="portal-panel"><h2>Order summary</h2><div class="portal-row"><span>${safe(item.title)} · ${quantity} ${quantity === 1 ? "ticket" : "tickets"}</span><strong>KES ${quantity * item.price}</strong></div><div class="portal-row"><span>Service fee</span><span>KES 0</span></div><div class="portal-row"><strong>Total</strong><strong>KES ${quantity * item.price}</strong></div></section><section class="portal-panel" id="checkout-panel"><h2>Pay with M-Pesa</h2><p class="body-copy">The STK-push action below is a non-functional demo; no request is sent.</p><form id="checkout-form"><label class="form-field">M-Pesa phone number<input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="07XX XXX XXX" pattern="[+0-9 ]{9,15}" required></label><button class="button button-dark full-button" type="submit">Preview STK prompt</button></form><p class="demo-note">${icons.lock} Demo only: no payment or ticket confirmation is performed.</p></section></div>`;
}
function signInPage() {
  return `<div class="signin-shell"><aside class="signin-aside"><a href="index.html" class="brand"><span class="brand-mark">${icons.gift}</span><span>bahati<span class="brand-yellow">box</span></span></a><div><h2>Your next<br>happy story<br>starts <em>here.</em></h2><p>Keep your entries, favourite finds and draw updates together in one little place.</p></div><span class="signin-footnote">BahatiBox demo marketplace · Kenya</span></aside><div class="signin-card-wrap"><section class="signin-card"><div class="section-topline">Your BahatiBox account</div><h1>Welcome in.</h1><p>Choose a display name to open a local demo account.</p><form id="signin-form"><label class="form-field">Display name<input name="name" autocomplete="nickname" placeholder="e.g. Wanjiku" minlength="2" required></label><p class="signin-error" id="signin-error" role="alert" hidden></p><button class="button button-dark full-button" type="submit">Continue to your account ${icons.arrow}</button></form><div class="demo-note">${icons.lock} Demo only: your display name stays in this tab. This is not secure authentication.</div></section></div></div>`;
}
function sellerPage() {
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>Seller space · Demo</div><h1>Sell something lovely.</h1><p>Preview the information a seller could submit. This static demo does not upload or store forms.</p></div><div class="portal-wrap"><form class="portal-panel demo-form"><h2>Seller profile</h2><div class="form-grid"><label class="form-field">Business or seller name<input placeholder="Your shop name" required></label><label class="form-field">Contact phone<input placeholder="07XX XXX XXX" type="tel" required></label><label class="form-field full">About your business<textarea rows="3" placeholder="What do you sell?"></textarea></label></div><button class="button button-dark" type="submit">Preview seller submission</button><p class="demo-caption form-feedback" hidden>Demo only — nothing has been submitted or saved.</p></form><form class="portal-panel demo-form"><h2>List a prize</h2><div class="form-grid"><label class="form-field">Prize name<input placeholder="e.g. Wireless headphones" required></label><label class="form-field">Prize value (KES)<input type="number" placeholder="50000" required></label><label class="form-field">Ticket price (KES)<input type="number" placeholder="100" required></label><label class="form-field">Ticket target<input type="number" placeholder="500" required></label><label class="form-field">Raffle deadline<input type="date"></label><label class="form-field">Prize photos<input type="file" accept="image/*" multiple></label><label class="form-field full">Prize description<textarea rows="3" placeholder="Describe the prize and delivery details"></textarea></label></div><button class="button button-dark" type="submit">Preview listing</button><p class="demo-caption form-feedback" hidden>Demo only — no listing or image has been uploaded.</p></form></div>`;
}
function dashboardPage() {
  const user = readUser();
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>Your demo account</div><h1>${user ? `Hello, ${safe(user.name)}.` : "Your account."}</h1><p>Illustrative dashboard content. Ticket and payment details are not live records.</p></div><div class="portal-wrap"><div class="portal-stats"><div class="stat-card"><span>Tickets in draws</span><strong>08</strong></div><div class="stat-card"><span>Wins shown (demo)</span><strong>01</strong></div><div class="stat-card"><span>Total spent (demo)</span><strong>KES 1,250</strong></div></div><section class="portal-panel"><h2>My tickets · Sample data</h2>${[["iPhone 15 Pro · 256GB", "#BB-1842, #BB-1843", "Draw in 2 days"], ["Weekend escape for two", "#BB-1771", "Draw in 5 days"], ["Home refresh bundle", "#BB-1608, #BB-1609", "Draw in 1 day"]].map(([title, tickets, timing]) => `<div class="portal-row"><span><strong>${title}</strong><br><small class="muted-text">${tickets}</small></span><span class="status-pill">${timing}</span></div>`).join("")}</section><section class="portal-panel"><h2>Payment history · Sample data</h2><div class="portal-row"><span>M-Pesa · iPhone raffle</span><span>KES 300 · Demo</span></div><div class="portal-row"><span>M-Pesa · Weekend escape</span><span>KES 250 · Demo</span></div><a href="raffles.html" class="button button-dark">Explore prizes ${icons.arrow}</a></section></div>`;
}
function drawPage() {
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>Public draw room · Demo</div><h1>Good luck to everyone.</h1><p>Draw details should be available for everyone to review. This prototype does not conduct a random draw.</p></div><div class="portal-wrap"><section class="draw-stage"><div class="draw-ball">🎉</div><h2>Every entry deserves a fair draw.</h2><p>Live random selection and verification are not enabled here. Results below are illustrative samples.</p><a href="raffles.html" class="button button-dark">Browse demo prizes</a></section><section class="portal-panel"><h2>Sample public results · Not real draws</h2>${[["BB-0284", "Air fryer · Wanjiku M. (ticket #0142)", "30 Sep 2025"], ["BB-0279", "Samsung TV · Brian K. (ticket #0088)", "28 Sep 2025"]].map(([id, result, date]) => `<div class="portal-row"><span><strong>${id}</strong><br><small class="muted-text">${result}</small></span><span class="muted-text">${date}</span></div>`).join("")}</section></div>`;
}
function adminPage() {
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>Admin overview · Demo</div><h1>Marketplace overview.</h1><p>Example management interface. This static page does not perform admin actions or verify users.</p></div><div class="portal-wrap"><div class="portal-stats"><div class="stat-card"><span>Pending approvals (demo)</span><strong>06</strong></div><div class="stat-card"><span>Active raffles (demo)</span><strong>24</strong></div><div class="stat-card"><span>Gross sales (demo)</span><strong>KES 482k</strong></div></div><section class="portal-panel"><h2>Sample review queue</h2>${[["Nairobi Tech House", "iPhone 15 Pro · Seller profile"], ["Soko Living", "Home refresh bundle · Prize listing"], ["The Gadget Spot", "MacBook Air M2 · Prize listing"]].map(([seller, item]) => `<div class="portal-row"><span><strong>${item}</strong><br><small class="muted-text">${seller}</small></span><span class="status-pill status-pending">Example only</span></div>`).join("")}</section><section class="portal-panel"><h2>Admin safety note</h2><p class="body-copy">Production approval, draw control, payments and payouts require authenticated and audited server-side services.</p></section></div>`;
}
const legalPages = {
  terms: { title: "Terms of service", intro: "These draft terms describe the intended BahatiBox experience. They require review by qualified Kenyan counsel before launch.", sections: [["Eligibility", "You must be at least 18 years old and legally able to participate in your location. We may ask for age and identity checks."], ["Raffle listings", "Listings must clearly state the prize, ticket price, ticket target, close date, seller and refund conditions. Listings are subject to review."], ["Payment and refunds", "Payments should be processed by an authorized payment provider. If a raffle does not meet its disclosed target by the deadline, eligible ticket holders receive a refund under the published policy."], ["Draws", "A draw should only proceed under the published rules, after entries close. Results and audit details should be made public."]] },
  privacy: { title: "Privacy notice", intro: "This draft privacy notice explains the data a production BahatiBox service may need. It must be reviewed against Kenyan data protection law before launch.", sections: [["Information collected", "Account contact details, seller verification details, raffle entries, payment references and support requests may be collected when needed."], ["How information is used", "Information is used to operate accounts, deliver tickets, process payments through providers, verify sellers, conduct draws, prevent abuse and meet legal obligations."], ["Your choices", "Production users should have a clear way to request access, correction or deletion, subject to legal and transaction-record obligations."]] },
  "responsible-play": { title: "Responsible play · 18+", intro: "BahatiBox is intended for adults aged 18 and over. Raffle tickets involve chance; there is no guaranteed win.", sections: [["Set a limit", "Only spend what you can afford to lose. Decide your budget before buying tickets and do not borrow to participate."], ["Take a pause", "If participating stops feeling fun or affects your wellbeing, step away and seek support from someone you trust."], ["No guaranteed returns", "A ticket is not an investment. Odds depend on the total number of valid tickets in a draw."], ["Age and location", "Participation is limited to adults in locations where the service is lawful. Further safeguards and support contacts must be added before launch."]] },
};
function legalPage() {
  const page = legalPages[document.body.dataset.legal] || legalPages.terms;
  document.title = `${page.title} — BahatiBox`;
  return `<div class="page-hero"><div class="eyebrow"><span class="eyebrow-dot"></span>BahatiBox · Good to know</div><h1>${page.title}.</h1><p>${page.intro}</p></div><div class="portal-wrap"><article class="portal-panel legal-copy">${page.sections.map(([heading, text]) => `<section><h2>${heading}</h2><p>${text}</p></section>`).join("")}<p class="legal-date">Draft content · Not legal advice. Please seek qualified Kenyan legal review before launch.</p></article></div>`;
}
function readUser() {
  try { return JSON.parse(sessionStorage.getItem(sessionKey) || "null"); } catch { return null; }
}
function bindInteractions(page) {
  const menuButton = document.querySelector("[data-menu]");
  menuButton?.addEventListener("click", () => {
    const nav = document.getElementById("main-nav");
    const isOpen = nav.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menuButton.innerHTML = isOpen ? icons.close : icons.menu;
  });
  document.querySelector("[data-signout]")?.addEventListener("click", () => {
    sessionStorage.removeItem(sessionKey);
    location.href = "index.html";
  });
  if (page === "raffles") bindFilters();
  if (page === "sign-in") bindSignIn();
  if (page === "checkout") bindCheckout();
  if (page === "seller") bindSellerForms();
}
function bindFilters() {
  let category = "All prizes";
  const maxPrice = document.getElementById("max-price");
  const list = document.getElementById("raffle-list");
  function update() {
    const visible = prizes.filter(item => (category === "All prizes" || item.category === category) && (maxPrice.value === "any" || item.price <= Number(maxPrice.value)));
    list.innerHTML = visible.length ? visible.map(raffleCard).join("") : '<p class="portal-panel">No prizes match those filters. Try another category or price.</p>';
    list.querySelectorAll("img").forEach(image => image.loading = "lazy");
  }
  document.querySelectorAll("[data-category]").forEach(button => button.addEventListener("click", () => {
    category = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach(item => item.classList.toggle("active", item === button));
    update();
  }));
  maxPrice.addEventListener("change", update);
}
function bindSignIn() {
  document.getElementById("signin-form").addEventListener("submit", event => {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get("name").trim();
    if (name.length < 2) {
      document.getElementById("signin-error").hidden = false;
      document.getElementById("signin-error").textContent = "Enter at least two characters for your display name.";
      return;
    }
    sessionStorage.setItem(sessionKey, JSON.stringify({ name }));
    location.href = "dashboard.html";
  });
}
function bindCheckout() {
  document.getElementById("checkout-form").addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("checkout-panel").innerHTML = '<div class="checkout-message"><span class="verified-icon">' + icons.check + '</span><h2>Demo request preview</h2><p class="body-copy">No STK push was sent and no payment or ticket was created. Connect a verified payment backend before accepting payments.</p><span class="status-pill status-pending">Payment provider not connected</span></div>';
  });
}
function bindSellerForms() {
  document.querySelectorAll(".demo-form").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    form.querySelector(".form-feedback").hidden = false;
  }));
}
function render() {
  document.getElementById("site-header").innerHTML = header();
  const page = document.body.dataset.page;
  const renderers = { home: homePage, raffles: listingPage, raffle: detailPage, checkout: checkoutPage, "sign-in": signInPage, seller: sellerPage, dashboard: dashboardPage, draw: drawPage, admin: adminPage, legal: legalPage };
  document.getElementById("app").innerHTML = (renderers[page] || homePage)();
  document.getElementById("site-footer").innerHTML = footer();
  bindInteractions(page);
}

document.addEventListener("DOMContentLoaded", render);
