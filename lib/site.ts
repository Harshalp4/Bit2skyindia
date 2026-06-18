// Central site config. Swap the domain here to propagate everywhere.
export const SITE = {
  name: "Bit2Sky Technologies",
  legalName: "Bit2Sky Technologies Pvt. Ltd.",
  shortName: "Bit2Sky",
  tagline: "Transforming Businesses Through Software, Cloud & AI",
  description:
    "Bit2Sky Technologies is a software development and digital transformation company in Navi Mumbai building custom software, web & mobile apps, AI automation, Azure cloud and healthcare platforms.",
  url: "https://bit2skyindia.com",
  domain: "bit2skyindia.com",
  email: "hello@bit2skyindia.com",
  phone: "+91-22-0000-0000",
  foundingYear: 2014,
  address: {
    locality: "Navi Mumbai",
    region: "Maharashtra",
    country: "IN",
    postalCode: "400614",
    street: "Navi Mumbai, Maharashtra",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/bit2sky",
    twitter: "https://twitter.com/bit2sky",
    github: "https://github.com/bit2sky",
  },
  ogImage: "/images/og-cover.png",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
