export const siteBase = process.env.NODE_ENV === "production" ? "/Codex" : "";

export type UserRole = "Super Admin" | "Audit" | "Staff";

export type RoleSummary = {
  role: UserRole;
  title: string;
  description: string;
  responsibilities: string[];
  highlight: string;
};

export type WarehouseNode = {
  warehouse: string;
  sites: {
    name: string;
    code: string;
    firstCheck: string;
    secondCheck: string;
    locations: {
      code: string;
      label: string;
      barcode: string;
    }[];
  }[];
};

export type ItemMasterRecord = {
  itemNumber: string;
  description: string;
  category: string;
  warehouse: string;
  site: string;
  location: string;
  uoms: string[];
};

export type StockTakePlan = {
  warehouse: string;
  cycle: string;
  auditOwner: string;
  status: "Draft" | "Assigned" | "In Progress" | "Ready for Reconciliation";
  sites: {
    site: string;
    firstCheck: string;
    secondCheck: string;
    dueDate: string;
  }[];
};

export type VarianceRow = {
  itemNumber: string;
  location: string;
  uom: string;
  firstCheck: number;
  secondCheck: number;
  systemStock: number;
};

export const brand = {
  name: "Asa Buy",
  tagline: "Warehouse Stocktake Platform",
  description:
    "A mobile-first stock audit application for planning, counting, reconciliation, and Excel-based reporting across warehouses, sites, and barcode locations.",
  location: "Multi-warehouse operations",
  whatsapp: "0000000000",
  whatsappLink: "#overview",
  instagram: "#overview",
  facebook: "#overview",
  email: "ops@asabuy.example.com"
};

export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#workflow", label: "Workflow" },
  { href: "#roles", label: "Roles" },
  { href: "#mobile", label: "Mobile Count" },
  { href: "#reports", label: "Reports" }
];

export const platformStats = [
  { label: "User roles", value: "3", note: "Super Admin, Audit, Staff" },
  { label: "Warehouse hierarchy", value: "4-level", note: "Warehouse -> Site -> Location -> Barcode" },
  { label: "Variance reports", value: "2", note: "First vs Second and Physical vs System" },
  { label: "Input channels", value: "Excel + Scan", note: "Master uploads and live handheld counting" }
];

export const roleSummaries: RoleSummary[] = [
  {
    role: "Super Admin",
    title: "Controls structure, users, and compliance settings",
    description:
      "Super admins govern master setup across warehouses, sites, locations, user roles, and audit readiness.",
    responsibilities: [
      "Create warehouses, sites, and barcode-enabled locations",
      "Manage users and role-based permissions",
      "Monitor stocktake completion and operational exceptions"
    ],
    highlight: "Owns the platform setup and access control."
  },
  {
    role: "Audit",
    title: "Plans stocktakes and performs reconciliation",
    description:
      "Audit users create warehouse-specific stocktake plans, assign first and second check staff, upload Excel masters, and publish variance reports.",
    responsibilities: [
      "Create stocktake plans by warehouse and site",
      "Upload item master and current system stock through Excel",
      "Run variance analysis and export reports to Excel"
    ],
    highlight: "Owns plan creation, imports, reconciliation, and reporting."
  },
  {
    role: "Staff",
    title: "Executes the physical count on handheld or tablet",
    description:
      "Staff users perform first and second checks by scanning location and item barcodes, selecting UOM, and entering physical quantity.",
    responsibilities: [
      "Receive assigned site tasks for first or second check",
      "Scan location code and item code from the floor",
      "Record quantities by pack size or UOM such as carton or each"
    ],
    highlight: "Owns accurate physical stock capture in the warehouse."
  }
];

export const workflowSteps = [
  {
    phase: "1. Master Setup",
    detail:
      "Audit uploads item master and current stock through Excel. Each item carries number, description, category, warehouse, site, location, and UOM mapping."
  },
  {
    phase: "2. Plan Creation",
    detail:
      "Audit creates a stocktake plan for a warehouse, selects the cycle, and assigns first and second check staff for each site."
  },
  {
    phase: "3. Physical Counting",
    detail:
      "Assigned staff use a mobile device with barcode scanner to scan location, scan item, choose UOM, enter quantity, and save the count."
  },
  {
    phase: "4. Reconciliation",
    detail:
      "After counts finish, audit uploads or confirms system stock and the platform compares first check, second check, and system quantities."
  },
  {
    phase: "5. Reporting",
    detail:
      "Users review variances, filter by warehouse/site/item/location, and export Excel reports for follow-up and sign-off."
  }
];

export const warehouseTree: WarehouseNode[] = [
  {
    warehouse: "Central Distribution Hub",
    sites: [
      {
        name: "Site A",
        code: "SA",
        firstCheck: "R. Patel",
        secondCheck: "J. Khan",
        locations: [
          { code: "A-01-01", label: "Fast moving aisle", barcode: "LOC-A-01-01" },
          { code: "A-02-04", label: "Bulk pallet rack", barcode: "LOC-A-02-04" }
        ]
      },
      {
        name: "Site B",
        code: "SB",
        firstCheck: "L. Mehta",
        secondCheck: "S. Nair",
        locations: [
          { code: "B-01-02", label: "Returns cage", barcode: "LOC-B-01-02" },
          { code: "B-03-05", label: "Reserve storage", barcode: "LOC-B-03-05" }
        ]
      }
    ]
  },
  {
    warehouse: "West Regional Warehouse",
    sites: [
      {
        name: "Site C",
        code: "SC",
        firstCheck: "A. Joseph",
        secondCheck: "P. Shah",
        locations: [
          { code: "C-05-01", label: "Carton pick face", barcode: "LOC-C-05-01" },
          { code: "C-06-03", label: "Overflow lane", barcode: "LOC-C-06-03" }
        ]
      }
    ]
  }
];

export const itemMasterRecords: ItemMasterRecord[] = [
  {
    itemNumber: "ITM-100245",
    description: "Industrial gloves nitrile blue",
    category: "Safety Consumables",
    warehouse: "Central Distribution Hub",
    site: "Site A",
    location: "A-01-01",
    uoms: ["Carton", "Each"]
  },
  {
    itemNumber: "ITM-200118",
    description: "LED inspection torch",
    category: "Maintenance Tools",
    warehouse: "Central Distribution Hub",
    site: "Site B",
    location: "B-03-05",
    uoms: ["Box", "Each"]
  },
  {
    itemNumber: "ITM-310907",
    description: "Packaging tape heavy duty",
    category: "Packaging",
    warehouse: "West Regional Warehouse",
    site: "Site C",
    location: "C-05-01",
    uoms: ["Bundle", "Roll"]
  }
];

export const stockTakePlans: StockTakePlan[] = [
  {
    warehouse: "Central Distribution Hub",
    cycle: "April 2026 Week 3",
    auditOwner: "Audit Team North",
    status: "In Progress",
    sites: [
      { site: "Site A", firstCheck: "R. Patel", secondCheck: "J. Khan", dueDate: "16 Apr 2026" },
      { site: "Site B", firstCheck: "L. Mehta", secondCheck: "S. Nair", dueDate: "17 Apr 2026" }
    ]
  },
  {
    warehouse: "West Regional Warehouse",
    cycle: "April 2026 Week 4",
    auditOwner: "Audit Team West",
    status: "Assigned",
    sites: [{ site: "Site C", firstCheck: "A. Joseph", secondCheck: "P. Shah", dueDate: "21 Apr 2026" }]
  }
];

export const varianceRows: VarianceRow[] = [
  {
    itemNumber: "ITM-100245",
    location: "A-01-01",
    uom: "Carton",
    firstCheck: 24,
    secondCheck: 22,
    systemStock: 23
  },
  {
    itemNumber: "ITM-200118",
    location: "B-03-05",
    uom: "Each",
    firstCheck: 117,
    secondCheck: 117,
    systemStock: 121
  },
  {
    itemNumber: "ITM-310907",
    location: "C-05-01",
    uom: "Roll",
    firstCheck: 46,
    secondCheck: 44,
    systemStock: 44
  }
];

export const mobileCountSteps = [
  "Open assigned stocktake task by warehouse and site",
  "Scan location barcode to confirm the rack/bin",
  "Scan item barcode or enter item number manually",
  "Select pack size or UOM such as carton, bundle, box, or each",
  "Enter physical quantity and submit the count",
  "Repeat until the assigned site reaches 100% completion"
];

export const uploadModules = [
  {
    title: "Item Master Upload",
    detail:
      "Excel upload for item number, description, category, warehouse, site, location, barcode link, and UOM definitions."
  },
  {
    title: "System Stock Upload",
    detail:
      "Excel upload for current stock balances by item, location, and UOM before running reconciliation."
  },
  {
    title: "Variance Export",
    detail:
      "Excel download of variance between first and second check, and Excel download of physical versus system stock."
  }
];

export const technicalMilestones = [
  "Responsive web application optimized for Android tablets, iPads, and mobile handheld devices",
  "Barcode-driven counting flow designed for rugged scanners and camera-based scanning integration later",
  "Role-based access model prepared for secure login and audit traceability",
  "Excel import/export-ready UI prepared for backend parsing and validation services"
];

export type Product = {
  slug: string;
  name: string;
  category: string;
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

export const featuredBadges = [
  "Barcode led",
  "Audit ready",
  "Excel compatible",
  "Tablet friendly"
];

export const products: Product[] = [
  {
    slug: "audit-console",
    name: "Audit Console",
    category: "Control",
    price: "Module",
    shortDescription: "Create plans, assign staff, import masters, and reconcile stocktake cycles.",
    description:
      "The Audit Console is the core operational workspace for creating stocktake plans, assigning first and second checks, and publishing variance reports.",
    ingredients: ["Planning", "Assignments", "Excel import", "Variance analysis"],
    shelfLife: "Live operational module.",
    giftingNote: "Supports warehouse-specific cycles and audit reviews.",
    label: "Core",
    image: `${siteBase}/images/brand/hero-poster.png`,
    gallery: [`${siteBase}/images/brand/hero-poster.png`]
  }
];

export const faqs = [
  {
    question: "Can users count stock by location and item barcode?",
    answer: "Yes. The staff counting flow is designed around scanning location and item codes before entering quantities."
  }
];

export const giftingTypes = [
  "Warehouse planning",
  "Barcode counting",
  "Excel reconciliation",
  "Variance export"
];

export const shopCategories = ["All", "Control"] as const;
