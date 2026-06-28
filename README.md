# Docker Mastery

A professional, modern Docker course website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Dark tech-style theme with Docker blue accent
- Glassmorphism cards and blur navbar
- Responsive design for all devices
- SEO-optimized with metadata, Open Graph, and Twitter cards
- Complete Docker roadmap (15 steps)
- Categorized Docker commands reference
- Unified labs page with corrected and practice tabs
- Deployment guide for GitHub Pages and Netlify
- Static export compatible
- No backend or database required

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero section, features, benefits, course structure |
| Roadmap | `/roadmap` | 15-step Docker learning roadmap |
| Commands | `/commands` | Categorized Docker commands reference |
| Labs | `/labs` | Unified lab page with corrected and practice tabs |
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
│   │   └── page.tsx
│   └── deployment/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky blur navbar
│   │   ├── Footer.tsx      # Professional footer
│   │   └── Container.tsx   # Centralized container wrapper
│   ├── shared/
│   │   ├── Hero.tsx        # Home hero section
│   │   ├── SectionTitle.tsx # Section heading component
│   │   ├── FeatureCard.tsx # Feature card component
│   │   ├── CommandCard.tsx # Command display card
│   │   ├── CodeBlock.tsx   # Code block with copy
│   │   ├── PageHeader.tsx  # Page header wrapper
│   │   └── WhyDockerCarousel.tsx # Responsive benefits carousel
│   ├── labs/
│   │   └── LabsTabs.tsx    # Tabbed corrected/practice lab UI
│   └── roadmap/
│       └── RoadmapStepCard.tsx # Timeline step card
├── data/
│   ├── site.ts             # Site config (name, url, author)
│   ├── navigation.ts       # Nav link definitions
│   ├── icons.tsx           # SVG icon components
│   ├── roadmap.ts          # Roadmap step definitions
│   ├── commands.ts         # Commands data
│   └── labs.ts             # Lab step definitions
├── public/
│   ├── docker-logo.png     # Docker logo (PNG fallback)
│   └── docker-logo.png     # Docker logo
├── lib/
│   ├── utils.ts            # Utility functions (cn)
│   └── metadata.ts         # SEO metadata helper
├── types/
│   └── index.ts            # Shared TypeScript types
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
