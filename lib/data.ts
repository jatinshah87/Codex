export type Product = {
  slug: string;
  name: string;
  category: "Truffles" | "Gift Hampers" | "Assorted Boxes" | "Custom Orders";
  price: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  shelfLife: string;
  giftingNote: string;
  label: string;
  image: string;
  gallery: string[];
};

export const brand = {
  name: "HR's Choco Bliss",
  tagline: "Premium Handmade Chocolates",
  location: "Vadodara, Gujarat, India",
  whatsapp: "9725151379",
  whatsappLink:
    "https://wa.me/919725151379?text=Hello%20HR's%20Choco%20Bliss,%20I%20would%20love%20to%20place%20an%20order.",
  instagram:
    "https://www.instagram.com/hrschocobliss/?utm_source=ig_web_button_share_sheet",
  facebook: "https://www.facebook.com/profile.php?id=61578409451544",
  email: "hello@hrschocobliss.com"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/gifting", label: "Gifting" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const featuredBadges = [
  "Handcrafted",
  "Freshly Made",
  "Gift Ready",
  "Premium Finish"
];

export const trustFeatures = [
  {
    title: "Small-batch handcrafted chocolates",
    description:
      "Made with a personal touch in carefully curated batches for better taste, texture, and finish."
  },
  {
    title: "Premium ingredients and refined finish",
    description:
      "Elegant flavor pairings and a boutique look designed to feel indulgent from first glance to final bite."
  },
  {
    title: "Elegant gifting and festive presentation",
    description:
      "Boxes, hampers, and occasion-ready assortments created to feel thoughtful, polished, and celebratory."
  },
  {
    title: "Freshly prepared with attention to detail",
    description:
      "Orders are prepared with care so freshness, quality, and presentation stay beautifully aligned."
  }
];

export const products: Product[] = [
  {
    slug: "velvet-truffle-box",
    name: "Velvet Truffle Box",
    category: "Truffles",
    price: "₹699",
    shortDescription: "A refined box of rich handmade truffles with a smooth, indulgent finish.",
    description:
      "Velvet Truffle Box is designed for the buyer who wants elegant chocolate gifting with a luxurious feel. Each piece is finished for a boutique presentation and balanced sweetness.",
    ingredients: ["Premium chocolate", "Cocoa solids", "Milk solids", "Nuts", "Natural flavorings"],
    shelfLife: "Best enjoyed within 10 to 12 days when stored in a cool, dry place.",
    giftingNote:
      "Available with ribbon finishing, occasion tags, and custom message cards for gifting.",
    label: "Best Seller",
    image: "/images/products/collection-1.png",
    gallery: [
      "/images/products/collection-1.png",
      "/images/products/collection-2.png",
      "/images/products/collection-3.png"
    ]
  },
  {
    slug: "celebration-gift-hamper",
    name: "Celebration Gift Hamper",
    category: "Gift Hampers",
    price: "₹1,299",
    shortDescription: "A festive gifting hamper curated for birthdays, celebrations, and premium surprises.",
    description:
      "This hamper blends handmade chocolates, elegant packaging, and a gift-worthy presentation for celebrations that deserve warmth and charm.",
    ingredients: ["Assorted chocolates", "Decorative inclusions", "Milk solids", "Dark chocolate", "Seasonal accents"],
    shelfLife: "Best enjoyed within 8 to 10 days for peak freshness and texture.",
    giftingNote:
      "Custom hamper styling is available for birthdays, festive gifting, return gifts, and corporate boxes.",
    label: "Festive Pick",
    image: "/images/products/collection-2.png",
    gallery: [
      "/images/products/collection-2.png",
      "/images/products/collection-1.png",
      "/images/products/collection-3.png"
    ]
  },
  {
    slug: "assorted-bliss-collection",
    name: "Assorted Bliss Collection",
    category: "Assorted Boxes",
    price: "₹849",
    shortDescription: "A boutique assortment of signature shapes, textures, and flavors for elegant sharing.",
    description:
      "Assorted Bliss Collection brings together signature bites in a premium box that works beautifully for both indulgent self-treats and thoughtful gifting.",
    ingredients: ["White chocolate", "Dark chocolate", "Milk chocolate", "Sprinkles", "Cocoa butter"],
    shelfLife: "Best enjoyed within 10 days when refrigerated lightly and served at room temperature.",
    giftingNote:
      "Ideal for birthdays, festive orders, and personalized gift boxes with curated flavor mixes.",
    label: "Signature",
    image: "/images/products/collection-3.png",
    gallery: [
      "/images/products/collection-3.png",
      "/images/products/collection-1.png",
      "/images/products/collection-2.png"
    ]
  },
  {
    slug: "custom-occasion-box",
    name: "Custom Occasion Box",
    category: "Custom Orders",
    price: "Quote on Request",
    shortDescription: "Tailored chocolate gifting designed around your occasion, theme, and presentation style.",
    description:
      "From birthdays to premium event favors, Custom Occasion Box lets you personalize flavors, packaging, quantity, and presentation for a more memorable gifting experience.",
    ingredients: ["Customized by preference", "Chocolate base of choice", "Decorative toppings", "Personalized inserts"],
    shelfLife: "Shelf life varies by customization; details are shared at the time of order confirmation.",
    giftingNote:
      "Designed for personalized gifting, themed events, festive boxes, and large-volume enquiries.",
    label: "Made for You",
    image: "/images/products/collection-1.png",
    gallery: [
      "/images/products/collection-1.png",
      "/images/products/collection-2.png",
      "/images/products/collection-3.png"
    ]
  }
];

export const testimonials = [
  {
    quote:
      "The taste, the finish, and the packaging all felt premium. It looked beautiful and tasted even better.",
    author: "A gifting customer from Vadodara"
  },
  {
    quote:
      "Perfect for gifting. The chocolates felt thoughtful, fresh, and far more special than store-bought options.",
    author: "Birthday order customer"
  },
  {
    quote:
      "The custom box felt personal and elegant. Everyone asked where the chocolates were from.",
    author: "Event hamper buyer"
  }
];

export const faqs = [
  {
    question: "Do you take custom orders?",
    answer:
      "Yes. HR's Choco Bliss accepts custom gifting, themed boxes, hamper requests, and bulk celebration orders based on availability and lead time."
  },
  {
    question: "How fresh are the chocolates?",
    answer:
      "Chocolates are prepared in small batches with freshness in mind, so they arrive tasting rich, smooth, and gifting-ready."
  },
  {
    question: "Do you offer gifting options?",
    answer:
      "Yes. Elegant gift boxes, hampers, message cards, and presentation upgrades can be arranged for birthdays, festive gifting, and premium occasions."
  },
  {
    question: "How do I place an order?",
    answer:
      "You can browse the collection, then enquire or order through WhatsApp or Instagram for quick confirmation, customization, and quote support."
  }
];

export const giftingTypes = [
  "Birthdays and personal celebrations",
  "Return gifts and intimate party favors",
  "Festive hampers and occasion boxes",
  "Corporate gifting and client hampers"
];

export const shopCategories = ["All", "Truffles", "Gift Hampers", "Assorted Boxes", "Custom Orders"] as const;
