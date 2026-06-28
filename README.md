# Docker Mastery

A professional, modern Docker course website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Dark tech-style theme with Docker blue accent
- Glassmorphism cards and blur navbar
- Responsive design for all devices
- SEO-optimized with metadata, Open Graph, and Twitter cards
- Complete Docker roadmap (15 steps)
- Categorized Docker commands reference
- Corrected lab with full Node.js containerization
- Practice lab for hands-on learning
- Deployment guide for GitHub Pages and Netlify
- Static export compatible
- No backend or database required

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero section, features, benefits, course structure |
| Roadmap | `/roadmap` | 15-step Docker learning roadmap |
| Commands | `/commands` | Categorized Docker commands reference |
| Corrected Lab | `/labs/corrected` | Full Node.js containerization lab |
| Practice Lab | `/labs/practice` | Incomplete lab for student practice |
| Deployment | `/deployment` | GitHub Pages and Netlify deployment guide |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Inline SVG
- **Fonts:** Inter (UI), JetBrains Mono (code)

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

```bash
git clone <your-repo-url>
cd docker-mastery
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

The static output will be in the `out/` directory.

## Deployment

### GitHub Pages

1. Push the repository to GitHub
2. Go to Settings > Pages > Source: GitHub Actions
3. The included `.github/workflows/deploy.yml` will automatically build and deploy on push to `main`

### Netlify

1. Push the repository to GitHub
2. Create a Netlify account and connect your GitHub repo
3. Netlify automatically detects settings from `netlify.toml`
4. Build command: `npm run build`
5. Publish directory: `out`
6. Click Deploy

Or use the CLI:

```bash
npm install -g netlify-cli
netlify login
netlify init
npm run build
netlify deploy --prod --dir=out
```

## Project Structure

```
docker-mastery/
├── app/
│   ├── layout.tsx          # Root layout with metadata and SEO
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots
│   ├── not-found.tsx       # 404 page
│   ├── roadmap/
│   │   └── page.tsx
│   ├── commands/
│   │   └── page.tsx
│   ├── labs/
│   │   ├── corrected/
│   │   │   └── page.tsx
│   │   └── practice/
│   │       └── page.tsx
│   └── deployment/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx          # Sticky blur navbar
│   ├── Footer.tsx          # Professional footer
│   ├── Hero.tsx            # Home hero section
│   ├── SectionTitle.tsx    # Section heading component
│   ├── FeatureCard.tsx     # Feature card component
│   ├── CommandCard.tsx     # Command display card
│   └── CodeBlock.tsx       # Code block with copy
├── data/
│   ├── roadmap.ts          # Roadmap step definitions
│   ├── commands.ts         # Commands data
│   └── labs.ts             # Lab step definitions
├── public/
│   ├── docker-logo.svg     # Docker logo
│   └── docker-logo.png     # Docker logo (PNG fallback)
├── next.config.js          # Static export config
├── netlify.toml            # Netlify config
├── tailwind.config.ts      # Tailwind theme
└── package.json
```

## Author

**Nourhene Ben Othmen**

- LinkedIn: [Nourhene Ben Othmen](https://www.linkedin.com/in/nourhene-ben-othmen-dev/)
- GitHub: [@Nourhenebenothmen22](https://github.com/Nourhenebenothmen22)
- WhatsApp: [21832010](https://wa.me/21832010)
- Instagram: [@nourhene_ben_othmen](https://www.instagram.com/nourhene_ben_othmen/)

## License

MIT
