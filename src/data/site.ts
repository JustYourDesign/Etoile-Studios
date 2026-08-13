export const siteInfo = {
  name: "Etoile Studios",
  legalName: "Etoile Studios Pty Ltd",
  founder: "Lesedi Mokhunoane",
  foundedYear: 2023,
  tagline: "Photography that captures the moment and story",
  heroSub: "Subtle Beauty, Bold Impact",
  description:
    "Etoile Studios is a multimedia company specialising in Photography, Videography, Content creation, and other forms of design.",
  email: "Lesedi.etoile@gmail.com",
  phone: "+27 60 872 4564",
  phoneHref: "tel:+27608724564",
  address: {
    line1: "55 Carmen Place",
    line2: "Sandown, Sandton, 2196",
    city: "Johannesburg",
  },
  instagram: [
    { handle: "@etoile studios", href: "https://instagram.com/etoilestudios" },
    { handle: "@rpiofficial_lesley", href: "https://instagram.com/rpiofficial_lesley" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
