# Travel Diaries

Modern, multi-page travel studio landing site built with semantic HTML, modular CSS, and a touch of vanilla JavaScript. The project was designed as a learning playground, but it is production-ready for hosting via GitHub Pages or any static host so outside visitors can explore the experience.

## Highlights

- Responsive layout powered by a single `style.css` with CSS Grid/Flexbox utilities.
- Sticky header, mobile nav toggle, hero call-to-action, testimonial cards, and pricing table components.
- Dedicated pages for destinations, tours, blog teasers, about, and contact so future content drops in cleanly.
- Lightweight JavaScript (`assets/js/main.js`) that only handles progressive enhancements such as the mobile nav drawer.
- Uses web-safe typography via Google Fonts and Unsplash imagery (credit the original photographers if you go public).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home page with hero, “How it works”, featured trips, departures, and testimonials. |
| `destinations.html` | Curated destination cards or itineraries. |
| `tours.html` | Listing of upcoming or customizable tours. |
| `blog.html` | Space for travel stories or announcements. |
| `about.html` | Studio story, values, and team introduction. |
| `contact.html` | Inquiry form and contact touchpoints. |

## Tech Stack

- HTML5 + CSS3 (no frameworks required)
- Vanilla JavaScript for interactive bits
- Google Fonts + Unsplash assets

## Getting Started

```bash
# 1. Clone
git clone https://github.com/<your-username>/travel-desk.git
cd travel-desk

# 2. Open any page directly
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux

# Optional: serve with a local web server for clean relative links
python -m http.server 8000
```

Navigate to `http://localhost:8000` and browse the site.

## Project Structure

```
travel-desk/
├── index.html
├── about.html
├── blog.html
├── contact.html
├── destinations.html
├── tours.html
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## Deploying to GitHub Pages

1. Push the repository to GitHub.
2. In **Settings › Pages**, choose the `main` branch (root) as the source.
3. Save — GitHub will publish at `https://<your-username>.github.io/travel-desk/`.
4. Share that URL publicly; changes pushed to `main` will redeploy automatically.

## Customization Tips

- Update hero copy, tour data, and testimonials directly in `index.html`.
- Swap imagery by editing the inline `background-image` URLs or moving assets locally under `assets/img/`.
- Extend styles in `assets/css/style.css`; common utilities (grid, buttons, cards) are already defined to reuse.
- Enhance navigation or interactivity inside `assets/js/main.js` to keep behavior centralized.

## Contributing / Issues

Open issues or pull requests for enhancements, accessibility tweaks, or additional pages. For larger changes, outline the proposal first so reviewers can give early feedback.

## License

No explicit license has been added yet. If you intend to open-source this project, consider adding a LICENSE file (MIT, Apache-2.0, etc.) before sharing publicly.

ghp_1654X1thBdr5JzaCoQlcYGabUqXbEE2Cg3ZU7wT
