# WebAgency - Estonian Web Design Agency Website

A modern, responsive Next.js website for a web design agency based in Estonia. Built with clean, semantic React components and easy-to-customize content structure.

## Features

- 🎨 **Modern Design** - Premium, smooth UI with reactive background
- 📱 **Mobile-First** - Fully responsive across all devices
- ⚡ **Fast Performance** - Optimized Next.js 14 with static generation
- 🎯 **SEO Ready** - Semantic HTML and metadata configuration
- 🔧 **Easy Customization** - All content in a single config file
- 💼 **Complete Sections** - Hero, Services, About, Testimonials, FAQ, Contact, Founders

## Tech Stack

- **Framework:** Next.js 14.2.3 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Variables + Modern CSS
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ArturAarma/webagency.git
cd webagency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Content

All website content (text, services, testimonials, etc.) is centralized in `app/content.ts`. Simply edit this file to update:

- Agency name and contact information
- Services and pricing
- Testimonials
- FAQ questions and answers
- Founder information

### Styling

Global styles and CSS variables are in `app/globals.css`. Modify the `:root` variables to change:

- Primary colors
- Typography
- Spacing
- Responsive breakpoints

## Project Structure

```
webagency/
├── app/
│   ├── content.ts       # All website content
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:

- Netlify
- AWS Amplify
- Railway
- Render

## Contact Form Integration

The contact form is ready to be integrated with:

- **Formspree:** Update the endpoint in `app/content.ts`
- **Custom API:** Create an API route in `app/api/contact/route.ts`
- **Email Service:** Integrate with SendGrid, Resend, or similar

## License

MIT License - feel free to use this template for your own projects!

## Author

Built by Artur Aarma

---

For questions or support, please open an issue on GitHub.
