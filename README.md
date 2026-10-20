# The Melt District — Gourmet Grilled Cheese & Comfort Food Truck Website

A premium, modern, playful, and nostalgic customer-facing food truck website built using **HTML5, CSS3, and JavaScript**. 

Combining nostalgic American comfort food with modern street-food culinary craft, **The Melt District** showcases artisanal grilled cheese sandwiches, fire-roasted tomato bisques, and loaded comfort sides served straight off the mobile griddle window.

---

## 🌟 Key Highlights & Design System

- **Dashboard: NO.** Customer-focused, brand-led culinary website.
- **Brand Aesthetic:** Warm cheddar yellow (`#F59E0B`), deep tomato red (`#DC2626`), creamy off-white (`#FFFDF9`), rich charcoal/dark brown (`#1C1917`), and muted sage green (`#15803D`).
- **Typography:** Expressive headings in Google Font `Bebas Neue` paired with clean, accessible body copy in `Plus Jakarta Sans`.
- **Theme Support:** Fully functional **Dark Mode & Light Mode** toggle on all pages with zero flash and `localStorage` persistence.
- **Layout Direction:** Complete **RTL (Right-to-Left) and LTR** support using CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline-start`) with persistent header control.
- **Universal Shopping Cart:** Live cart drawer across every single page. Add items, adjust quantities, calculate subtotal in **Indian Rupees (₹)**, apply discount codes (`CHEDDAR20`), persist in `localStorage`, and test with a simulated checkout modal.
- **Interactive BYO Sandwich Engine:** Step-by-step custom sandwich builder on Home Page 2 that dynamically calculates prices and adds custom builds to the cart.
- **Animations & Performance:** Fluid scroll reveals powered by `IntersectionObserver`, staggered cards, soft transforms, and strict adherence to `prefers-reduced-motion`.

---

## 📄 Pages & Structure

| Page | File | Description |
| :--- | :--- | :--- |
| **Home Page 1** | [`index.html`](index.html) | High-conversion main food truck landing page with golden cheese-pull hero, value propositions, featured melts with add-to-cart, comfort combos, griddle steps, testimonials, live tracker preview, and Instagram gallery. |
| **Home Page 2** | [`home-2.html`](home-2.html) | Editorial signature experience with asymmetrical masonry composition, cheese profile selector, tasting notes, 24-inch cheese pull science, interactive **Build-Your-Own Sandwiches engine**, and behind-the-scenes culture. |
| **About Us** | [`about.html`](about.html) | Brand origin story from a 1974 step-van, four rules of the griddle, crew profiles (Kabir, Devika, Rohan), interactive timeline from 2021 to 2026, and customer love letters. |
| **Menu** | [`menu.html`](menu.html) | Complete catalog with 6 categories, live search, dietary filters (🟢 Veg / 🔴 Non-Veg), prices in ₹, Quick View nutrition modal, and instant add-to-cart. |
| **Find The Truck** | [`find-the-truck.html`](find-the-truck.html) | Live curbside radar with day-of-week schedule filters, interactive SVG city map with clickable location pins, turn-by-turn directions links, and upcoming festival calendar. |
| **Contact Us** | [`contact.html`](contact.html) | Contact hotline cards, commissary depot info, parking guidelines, and a validated booking inquiry form (strict letter-only names, email, phone, future date) with demo feedback modal. |
| **Service Details** | [`service-details.html`](service-details.html) | Private catering packages (Street Party ₹450, Connoisseur ₹650, Celebration ₹850), 4-step workflow, and working FAQ accordion. |
| **Blog** | [`blog.html`](blog.html) | The Melt Journal featuring article cards, real-time search, category filters, and featured stories. |
| **Blog Details** | [`blog-details.html`](blog-details.html) | Full article reading experience with large hero photography, sticky Table of Contents, inline tips, working social sharing triggers (Twitter, WhatsApp, Copy Link), and related posts. |

---

## 🛠️ Code Architecture

```
griled/
├── index.html                  # Home 1 - Main Food Truck Landing Page
├── home-2.html                 # Home 2 - Signature Grilled Cheese Experience
├── about.html                  # About Us - Story, Crew, Mission & Timeline
├── menu.html                   # Menu - Categorized dishes, search & quick view
├── find-the-truck.html         # Find The Truck - Schedule, SVG radar & directions
├── contact.html                # Contact Us - Booking inquiry form with validation
├── service-details.html        # Service Details - Catering packages & FAQ accordion
├── blog.html                   # Blog - The Melt Journal listing & search
├── blog-details.html           # Blog Details - Full article, TOC & social shares
├── assets/
│   ├── css/
│   │   └── style.css           # Complete CSS system, tokens, dark mode, RTL, responsive
│   └── js/
│       ├── main.js             # Theme toggle, RTL toggle, sticky header, mobile drawer, toasts
│       ├── cart.js             # Universal cart drawer, localStorage, promo codes, checkout modal
│       ├── menu.js             # Menu rendering, multi-filtering, search, quick view modal
│       ├── contact.js          # Form validation (strict name, email, phone, date) & demo modal
│       └── blog.js             # Blog search, category filtering & social sharing
└── README.md
```

---

## 🚀 Running and Testing Locally

No build tools or compilers are required. The project is built with vanilla HTML5, CSS3, and JavaScript.

### Option 1: Direct File Open
Simply double-click [`index.html`](index.html) in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

Using Node.js (`npx serve`):
```bash
npx serve .
```

---

## 🧪 Testing Checklist Verified

- [x] **Theme Switcher:** Toggles seamlessly between warm cream light mode and dark charcoal mode without text contrast issues. Persists in `localStorage`.
- [x] **RTL / LTR Switcher:** Dynamically switches `dir="rtl"` and `dir="ltr"` on the `<html>` root, using CSS logical properties. Persists in `localStorage`.
- [x] **Shopping Cart:** Works across all 9 pages. Allows adding items, updating quantity, removing items, applying `CHEDDAR20` for 20% discount, and demo checkout modal with clean feedback.
- [x] **Home 1 vs Home 2:** Completely distinct layouts, hero compositions, storytelling, and interactive widgets.
- [x] **Menu Search & Filtering:** Category tabs and search bar operate together without lag. Quick View modal displays detailed ingredients and nutrition.
- [x] **Booking Form Validation:** Strict validation preventing numbers in name fields, checking email formats, 10+ phone digits, future event date, and displaying an accessible demonstration confirmation modal.
- [x] **Interactive FAQ Accordion:** Smooth CSS transitions for expanding/collapsing answers on the Service Details page.
- [x] **Interactive City Radar Map:** Clickable SVG map pins on the Find The Truck page that focus location cards and open direction links.
- [x] **Responsive Layout:** Tested from mobile devices (320px, 375px, 425px) to tablets (768px) and desktop screens (1024px, 1440px). Zero horizontal scrolling.
