import type { Metadata } from "next";

import { ProductCatalog } from "@/components/ProductCatalog";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Shop Premium Handmade Chocolates",
  description:
    "Browse handcrafted chocolate boxes, boutique gifting hampers, and premium homemade chocolates from HR's Choco Bliss."
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Shop"
        title="Premium collections for gifting, celebrations, and sweet indulgence."
        description="Choose from signature chocolate boxes, boutique assortments, and occasion-ready gift hampers designed to feel polished and memorable."
      />
      <ProductCatalog />
    </div>
  );
}
