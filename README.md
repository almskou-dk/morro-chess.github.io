# ♟ MORRO — The World of Chess

> **Strategy. Precision. Passion for the board.**

MORRO is a premium chess storefront concept focused on boards, pieces, clocks, travel equipment, training tools, storage and collector sets.

The project is designed as a polished static e-commerce experience with a strong editorial identity, responsive layouts, local assets and a lightweight JavaScript shopping bag.

## Highlights

- Premium dark, wood and brass visual direction.
- Responsive storefront for desktop, tablet and mobile.
- 12 curated chess products.
- 8 product categories.
- Local product imagery with consistent square framing.
- Featured products section.
- Category browsing.
- Product filtering and sorting.
- Quick-view product modal.
- Persistent shopping bag using `localStorage`.
- Demo checkout interaction.
- Dedicated About page.
- Dedicated Support page.
- Contact form demo.
- GitHub Pages friendly structure.
- No external product image dependencies.

## Product categories

- Luxury Sets
- Boards
- Chess Pieces
- Clocks
- Travel
- Training
- Storage
- Collectors

## Product catalog

1. Heritage Walnut Tournament Set — $149.00
2. Grandmaster Walnut Board — $129.00
3. Classic Staunton Piece Set — $58.00
4. Pro Digital Chess Clock — $49.00
5. Heritage Analog Chess Clock — $119.00
6. Championship Folding Set — $129.00
7. Tournament Green Board — $89.00
8. Weighted Rosewood Pieces — $79.00
9. Collector Storage Case — $99.00
10. Championship Carry Bag — $74.00
11. Demonstration Training Board — $109.00
12. Royal Display Set — $189.00

## Project structure

```text
morro-chess/
├── index.html
├── pages/
│   ├── shop.html
│   ├── about.html
│   └── contact.html
├── assets/
│   └── images/
│       ├── branding/
│       ├── categories/
│       ├── hero/
│       └── products/
├── css/
│   └── style.css
├── js/
│   └── app.js
├── README.md
├── RELEASE_NOTES.md
└── .nojekyll
```

## Technologies

- HTML5
- CSS3
- JavaScript
- Local image assets
- Browser `localStorage`

## Shopping bag

The storefront includes a client-side shopping bag with:

- Add to bag
- Remove from bag
- Quantity tracking
- Persistent browser storage
- Automatic subtotal calculation
- Product images inside the bag

The checkout button is intentionally a demo action and is not connected to a payment provider.

## Support

**MORRO Chess Support**

- Email: support@morrochess.example
- Phone: +1 (312) 555-0148
- Example location: Chicago, IL 60601, USA
- Hours: Mon–Fri · 9:00 AM–6:00 PM CT

Replace the demonstration contact details before a production launch.

## Imagery

The storefront uses original generated product imagery created for this project and optimized locally for web delivery. The logo was also generated specifically for MORRO.

No remote product-image URLs are required for the storefront to render.

## Running locally

Open `index.html` directly in a browser, or use a local static server.

Example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## GitHub Pages

The project is structured for static hosting. The `.nojekyll` file is included so GitHub Pages can serve the project without Jekyll processing.

## Customization

To add a product:

1. Add a new object to `window.MORRO_PRODUCTS` in the HTML or move the data to a JSON source.
2. Place the matching image in `assets/images/products/`.
3. Keep the image filename synchronized with the product object.
4. Add the category if required by the shop filter.
5. Test the product card, quick view and shopping bag.

## Production checklist

Before using MORRO as a real commercial store:

- Replace demo support information.
- Connect checkout to a real payment provider.
- Add real inventory data.
- Add shipping rules.
- Add tax handling.
- Add legal and privacy pages.
- Add real social links.
- Replace any demonstration copy as required.
- Test all links after deployment.
- Test the store on mobile and desktop.
- Confirm all product images and prices before launch.

## Status

**Status:** Project in development  
**Version:** 1.0.0  
**Type:** Static e-commerce storefront concept

---

© 2026 MORRO Chess. All rights reserved.
