# Milk & Honey Coffee Co. Website

A modern, responsive website for Milk & Honey Coffee Co. in Topeka, Kansas, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Homepage** with hero slideshow and feature sections
- **Menu Page** with full menu items, search functionality, and online ordering cart (frontend ready for backend integration)
- **About Page** showcasing the business story, team, and community involvement
- **Locations Page** with hours, contact information, and map integration
- **Reviews Page** with customer reviews, filtering, and sorting
- **Responsive Design** optimized for all devices
- **Warm Coffee & Rustic Theme** with custom color palette

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Next/Image** - Optimized image handling

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx           # Homepage
│   ├── menu/              # Menu page and components
│   ├── about/             # About page and components
│   ├── locations/         # Locations page and components
│   ├── reviews/           # Reviews page and components
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # Shared UI components
├── data/                  # Static data files
├── lib/                   # Utilities
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
└── public/               # Static assets
```

## Configuration

### Google Maps Integration

To enable the embedded map on the Locations page, add your Google Maps API key to `app/locations/page.tsx` (replace `YOUR_API_KEY`).

### Social Media Links

Update social media links in `data/images.ts` under `businessInfo.socialMedia`.

### Online Ordering Backend

The online ordering cart is ready for backend integration. Connect your payment processor in `app/menu/components/Cart.tsx` in the `handleCheckout` function.

## Customization

- **Colors**: Modify the color palette in `tailwind.config.ts`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Menu Items**: Edit `data/menu.ts`
- **Reviews**: Edit `data/reviews.ts`
- **Business Info**: Edit `data/images.ts`

## License

All rights reserved - Milk & Honey Coffee Co.
