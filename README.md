# QuikFikr - Landing Page

A modern, responsive landing page for QuikFikr, an on-demand home services platform tailored for users in tier 2 and 3 Indian cities.

## Features

- 🎨 Modern, clean design with soft purple color scheme (#8854C0)
- 📱 Fully responsive (mobile-first approach)
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🎨 Styled with Tailwind CSS
- 📦 Component-based architecture

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd QuikFikr-Website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
QuikFikr-Website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── HeroSection.tsx      # Hero section with app mockup
│   ├── FeaturesSection.tsx  # Features showcase
│   ├── HowItWorksSection.tsx # 3-step process explanation
│   ├── TestimonialsSection.tsx # User testimonials
│   ├── FAQSection.tsx       # Frequently asked questions
│   ├── CTABanner.tsx        # Call-to-action banner
│   └── Footer.tsx           # Footer with links and social media
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Sections Included

1. **Hero Section** - Tagline, app mockup, and CTA button
2. **Features Section** - Three feature cards showcasing key benefits
3. **How It Works** - Three-step process with icons and QR code
4. **Testimonials** - User reviews with ratings and stats
5. **FAQ Section** - Accordion-style frequently asked questions
6. **CTA Banner** - Waitlist signup with progress indicator
7. **Footer** - Links, social media, and copyright

## Technologies Used

- **Next.js 14** - React framework with app directory
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Color Scheme

- Primary Purple: `#8854C0`
- Light gradients from purple to white
- Clean whites and soft grays
- Bright, friendly UI elements

## Performance Features

- Server-side rendering with Next.js
- Optimized animations with Framer Motion
- Mobile-first responsive design
- Clean, semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 QuikFikr. All rights reserved. 