export type PricingTier = {
  name: "Bronze" | "Silver" | "Gold";
  startingFrom: number;
  includes: string[];
};

export type ServicePackage = {
  slug: string;
  title: string;
  tiers: PricingTier[];
};

export const servicePackages: ServicePackage[] = [
  {
    slug: "event",
    title: "Event Photography",
    tiers: [
      {
        name: "Bronze",
        startingFrom: 2500,
        includes: ["2 hours of coverage", "40+ high-res photos", "72-hour delivery of 5 sneak-peek images"],
      },
      {
        name: "Silver",
        startingFrom: 5000,
        includes: [
          "Up to 4 hours of coverage",
          "120+ edited high-res photos",
          "1x 60-second event highlight reel (vertical, for socials)",
        ],
      },
      {
        name: "Gold",
        startingFrom: 11000,
        includes: [
          "Up to 8 hours of coverage",
          "400+ edited photos",
          "1x 90-second premium highlight video + raw social clips",
          "1x 60-second event highlight reel (vertical)",
          "1x 20-second time-lapse of the event",
        ],
      },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Photography",
    tiers: [
      {
        name: "Bronze",
        startingFrom: 1200,
        includes: ["20–25 high-res interior/exterior photos", "Professional colour & perspective correction"],
      },
      {
        name: "Silver",
        startingFrom: 3000,
        includes: ["30–35 high-res photos", "1x 60-second social media reel / walkthrough video (basic cuts)"],
      },
      {
        name: "Gold",
        startingFrom: 5000,
        includes: [
          "60+ photos",
          "Detail & lifestyle close-up shots",
          "1x 60-second social media reel / walkthrough video (basic cuts)",
          "1x detailed cinematic walkthrough video (transitions & music)",
        ],
      },
    ],
  },
  {
    slug: "graduation",
    title: "Graduation Photography",
    tiers: [
      {
        name: "Bronze",
        startingFrom: 1200,
        includes: [
          "30–45 minutes of shoot time",
          "1 graduate only (no family/friends)",
          "15 high-res edited digital images",
          "Fast-tracked 48-hour delivery of 2 “Announce” images",
          "Perfect for LinkedIn, CVs, and quick social posts",
        ],
      },
      {
        name: "Silver",
        startingFrom: 2700,
        includes: [
          "1 hour shoot time on location",
          "Graduate + up to 4 family members/friends",
          "30 high-res edited images (solo portraits, family groups, candid cap-toss shots)",
          "1x 30-second transition reel",
        ],
      },
      {
        name: "Gold",
        startingFrom: 5000,
        includes: [
          "2 hours of shoot time (campus landmarks + nearby locations)",
          "80+ high-res edited images",
          "Unlimited family & friends",
          "1x 60-second cinematic highlight reel",
          "Prioritized 5-day delivery for the full gallery",
        ],
      },
    ],
  },
  {
    slug: "matric-dance",
    title: "Matric Dance Photography",
    tiers: [
      {
        name: "Bronze",
        startingFrom: 1500,
        includes: [
          "1 hour of shoot time",
          "Matriculant & date only (no family/friends)",
          "20 high-res edited digital images",
          "2-week turnaround time",
          "Perfect for quick social posts",
        ],
      },
      {
        name: "Silver",
        startingFrom: 3500,
        includes: [
          "2 hour shoot time on location",
          "Matriculant & date + up to 5 family members/friends",
          "40 high-res edited images (solo portraits, family groups, candid car shots)",
          "7 business days turnaround",
        ],
      },
      {
        name: "Gold",
        startingFrom: 6000,
        includes: [
          "4 hours of shoot time (landmarks + nearby locations)",
          "80 high-res edited images",
          "Unlimited family & friends",
          "Prioritized 5-day delivery for the full gallery",
        ],
      },
    ],
  },
  {
    slug: "fashion",
    title: "Fashion & Portfolio Photography",
    tiers: [
      {
        name: "Bronze",
        startingFrom: 2000,
        includes: ["1-hour shoot (natural light / on location)", "2 outfits/looks", "10 high-end retouched beauty/editorial images"],
      },
      {
        name: "Silver",
        startingFrom: 3500,
        includes: [
          "2-hour shoot (outdoor or client's space)",
          "4 outfits/looks",
          "20 retouched images",
          "2x 30-second transition/behind-the-scenes reels",
        ],
      },
      {
        name: "Gold",
        startingFrom: 5500,
        includes: [
          "2x 30-second transition/behind-the-scenes reels",
          "Up to 6 looks",
          "35 retouched images",
          "2x polished 30-second high-end fashion reels",
        ],
      },
    ],
  },
  {
    slug: "birthday",
    title: "Birthday Celebrations",
    tiers: [
      {
        name: "Bronze",
        startingFrom: 1500,
        includes: [
          "2 hours of coverage",
          "Decor setup, key family/friend groups, cake cutting, candids",
          "30+ high-res edited photos via private digital gallery",
          "48-hour delivery of 5 “Thank You” images for the host to share",
        ],
      },
      {
        name: "Silver",
        startingFrom: 3500,
        includes: ["Up to 3 hours of coverage", "50+ edited high-res photos", "1x 60-second high-energy Instagram Reel / TikTok"],
      },
      {
        name: "Gold",
        startingFrom: 6000,
        includes: [
          "Up to 5 hours of coverage",
          "80+ edited photos",
          "1x 90-second premium highlight video + raw social clips",
          "3x raw vertical video clips (ready to post immediately on stories)",
          "Prioritized 4-day delivery of the full gallery",
        ],
      },
    ],
  },
];

export const faq = [
  {
    question: "How do I book a photo session with you?",
    answer:
      "Through the booking system, send a DM on our Instagram page, or contact us through the “Contact Me” button.",
  },
  {
    question: "Can I customize a photography package to fit my specific needs?",
    answer:
      "Yes. Adjustments can be made based on client needs, but please be informed prices may increase based on the request.",
  },
  {
    question: "How long does it take to receive the final edited images?",
    answer: "Allow 5–9 business days for images to be edited and sent.",
  },
  {
    question: "How do I prepare for a portrait session with you?",
    answer: "Have outfits and props ready before the shoot if needed; please request beforehand.",
  },
  {
    question: "How many products can be photographed during a product photography session?",
    answer: "A maximum of 3 products per session.",
  },
];
