import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, giftingTypes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Custom Orders and Gifting",
  description:
    "Request premium chocolate gift boxes, custom hampers, event favors, and celebration-ready homemade chocolates from HR's Choco Bliss."
};

export default function GiftingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[40px] bg-hero-mesh px-6 py-12 text-cream shadow-luxe sm:px-10 lg:px-14">
        <SectionHeading
          eyebrow="Custom Orders / Gifting"
          title="Boutique chocolate gifting made for meaningful celebrations."
          description="Choose HR's Choco Bliss for premium presentation, small-batch freshness, and custom gifting details that help every order feel warm, elegant, and memorable."
          tone="inverse"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {giftingTypes.map((item, index) => (
          <FeatureCard
            key={item}
            title={item}
            description="Custom assortments, refined packaging, and order support tailored to your occasion and gifting scale."
            accent={index % 2 === 0 ? "from-white/90 to-blush/50" : "from-white/90 to-[#f0e4d7]"}
          />
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6 rounded-[32px] border border-mocha/10 bg-white p-8 shadow-soft">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A thoughtful gifting experience, not just a box of chocolates."
            description="Every custom order is designed with taste, visual polish, and occasion-readiness in mind."
          />
          <div className="grid gap-4 text-sm leading-7 text-espresso/78">
            <p>Packaging customization available for birthdays, festive hampers, and celebration boxes.</p>
            <p>Message card options can be added to make gifts feel personal and beautifully finished.</p>
            <p>Bulk order enquiries are supported for festive gifting, return favors, and corporate gifting needs.</p>
          </div>
          <Link
            href={brand.whatsappLink}
            className="inline-flex items-center rounded-full bg-mocha px-6 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
          >
            Start Your Gifting Enquiry
          </Link>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>

      <CTASection
        title="Need a custom quote for gifting or bulk orders?"
        description="Share your occasion, quantity, preferred style, and delivery timeline. WhatsApp and Instagram enquiries are both welcome."
      />
    </div>
  );
}
