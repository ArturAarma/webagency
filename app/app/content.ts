export const siteContent = {
  agency: {
    name: 'Northline Studio',
    tagline: 'Responsive websites for growing Estonian businesses.',
    description: 'We design and build clean, fast, mobile-first websites for early-stage and small businesses across Estonia.',
    location: 'Tallinn, Estonia',
  },
  contact: {
    email: 'hello@northline.studio',
    phone: '+372 5555 0000',
    address: 'Parnu mnt 10, 10148 Tallinn, Estonia',
    hours: ['Mon-Fri: 09:00-18:00', 'Sat-Sun: By appointment'],
    formspreeEndpoint: 'https://formspree.io/f/your-form-id',
  },
  hero: {
    eyebrow: 'Website agency in Estonia',
    headline: 'Websites that feel premium, load fast, and grow with your business.',
    subcopy: 'We design and build responsive sites that help small Estonian businesses look established from day one.',
    primaryCta: { label: 'Request a free call', href: '#contact' },
    secondaryCta: { label: 'View services', href: '#services' },
  },
  services: [
    {
      name: 'Launch Website',
      price: 'from €690',
      description: '1-3 page responsive site. Perfect for new businesses.',
      features: ['Custom design', 'Mobile-first', 'Contact form & map'],
    },
    {
      name: 'Growing Business Site',
      price: 'from €1,190',
      description: 'Multi-page site to explain services and capture leads.',
      features: ['Up to 6 pages', 'SEO and analytics setup', 'Blog section ready'],
    },
    {
      name: 'Care & Support',
      price: 'from €39 / month',
      description: 'Ongoing help with updates and keeping your site healthy.',
      features: ['Monthly content edits', 'Performance checks', 'Design improvements'],
    },
  ],
  about: {
    title: 'Built for small, growing businesses',
    body: [
      'Most Estonian businesses just need a website that is clean, trustworthy, and easy to update.',
      'We work with founders at the start — local services, studios, cafes, and solo professionals.',
      'Short call, clear structure, fast first draft, then focused refinements until it feels right.',
    ],
  },
  founders: [
    { name: 'Markus K.', role: 'Founder & Developer', bio: 'Focuses on performance, accessibility, and clean code.' },
    { name: 'Liis R.', role: 'Designer & Strategy', bio: 'Turns your message into a visual story that feels premium but honest.' },
  ],
  testimonials: [
    { quote: 'Our site started bringing in leads within the first month.', name: 'Kristjan', role: 'Owner, local services' },
    { quote: 'They turned our messy ideas into a calm, trustworthy site.', name: 'Anna', role: 'Founder, creative studio' },
  ],
  faq: [
    { q: 'Who is this for?', a: 'Small and early-stage businesses that want a clean, modern site.' },
    { q: 'How long does a project take?', a: 'Most launch websites are ready in 1-3 weeks.' },
    { q: 'Do you help with content?', a: 'Yes. We help structure your content and give guidance on photos.' },
    { q: 'Can the site grow later?', a: 'Yes. We build with growth in mind so you can add pages as the business grows.' },
  ],
  seo: {
    title: 'Northline Studio - Websites for Small Businesses in Estonia',
    description: 'Northline Studio builds fast, responsive websites for small and growing businesses in Estonia.',
  },
} as const;