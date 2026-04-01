export const agency = {
  name: "WebCraft Estonia",
  tagline: "We build websites that grow your business",
  description: "Premium web agency based in Estonia, helping small businesses establish a strong online presence.",
  email: "hello@webcraft.ee",
  phone: "+372 5555 1234",
  address: "Rapla, Estonia",
  formspreEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

export const services = [
  {
    title: "Landing Page",
    price: "From €299",
    description: "A beautiful, fast-loading landing page to showcase your business and convert visitors into customers.",
    features: ["Mobile-first design", "SEO optimized", "Contact form", "1 revision round"],
  },
  {
    title: "Business Website",
    price: "From €599",
    description: "Full multi-page website with all the sections your business needs to look professional online.",
    features: ["Up to 5 pages", "CMS integration", "Analytics setup", "2 revision rounds"],
  },
  {
    title: "E-Commerce Store",
    price: "From €999",
    description: "A complete online store with product listings, cart, checkout and payment integration.",
    features: ["Product catalog", "Payment gateway", "Order management", "3 revision rounds"],
  },
];

export const testimonials = [
  {
    name: "Maris Tamm",
    company: "Tamm Bakery, Rapla",
    text: "WebCraft built us a stunning website in under 2 weeks. Our online orders tripled!",
    rating: 5,
  },
  {
    name: "Jaan Kask",
    company: "Kask Auto Service",
    text: "Professional, fast, and the result was beyond our expectations. Highly recommended.",
    rating: 5,
  },
  {
    name: "Liis Pärn",
    company: "Pärn Florist",
    text: "Finally a website we are proud to share with customers. Modern, clean, and easy to update.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "A standard landing page takes 1-2 weeks. A full business website typically takes 2-4 weeks depending on content and feedback speed.",
  },
  {
    question: "Do I need to provide content?",
    answer: "You provide the key info (logo, text, photos). We handle layout, design, and optimization. We can also help with copywriting.",
  },
  {
    question: "Will my website work on mobile?",
    answer: "Absolutely. All our websites are mobile-first and tested across devices and browsers.",
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes! We can integrate a simple CMS so you can update text and images without touching code.",
  },
  {
    question: "What happens after the website is launched?",
    answer: "We offer 30 days of free support after launch. After that, we have affordable maintenance packages.",
  },
];

export const founders = [
  {
    name: "Artur Aarma",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with a passion for clean code and fast websites. Based in Estonia.",
  },
  {
    name: "Co-Founder",
    role: "Design & Strategy",
    bio: "Creative director focused on user experience and brand identity for Estonian businesses.",
  },
];

export const contact = {
  email: agency.email,
  phone: agency.phone,
  address: agency.address,
  formspreEndpoint: agency.formspreEndpoint,
};

export const seo = {
  title: `${agency.name} | ${agency.tagline}`,
  description: agency.description,
};

export const siteContent = {
  agency,
  hero: {
    eyebrow: agency.tagline,
    headline: "Premium websites that work",
    subcopy: agency.description,
    primaryCta: { label: "Get Started", href: "#services" },
    secondaryCta: { label: "View Our Work", href: "#testimonials" },
  },
  services,
  testimonials,
  faq: faqs,
  contact,
  founders,
  seo,
};
