import type { Metadata } from "next";

import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story, philosophy, and handcrafted approach behind HR's Choco Bliss, a premium homemade chocolate brand from Vadodara."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="About HR's Choco Bliss"
          title="A warm handcrafted brand built around taste, detail, and gift-worthy presentation."
          description="HR’s Choco Bliss was created to turn handcrafted chocolates into a thoughtful, premium experience. Every piece is made with attention to taste, texture, freshness, and presentation—so each order feels personal and gift-worthy."
        />
        <div className="rounded-[36px] bg-gradient-to-br from-mocha via-truffle to-espresso p-8 text-cream shadow-luxe">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
          <p className="mt-6 font-display text-4xl leading-tight">
            From our home to your sweetest celebrations.
          </p>
          <p className="mt-5 text-base leading-8 text-cream/78">
            The brand is rooted in making chocolates that feel more thoughtful than ordinary store-bought treats, with a boutique finish that fits gifting beautifully.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard
          title="Our Philosophy"
          description="Luxury can feel warm, personal, and handmade when every detail is crafted intentionally."
        />
        <FeatureCard
          title="Handcrafted"
          description="Small-batch preparation allows better quality control, care, and consistency in every order."
        />
        <FeatureCard
          title="Premium Presentation"
          description="Gifting matters, so packaging and finish are designed to feel polished and occasion-ready."
        />
        <FeatureCard
          title="Personal Touch"
          description="Each order is handled with a boutique mindset so customers feel supported, seen, and celebrated."
        />
      </section>
    </div>
  );
}
