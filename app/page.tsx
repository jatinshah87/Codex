import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { FAQItem } from "@/components/FAQItem";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroSection } from "@/components/HeroSection";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";
import { faqs, products, testimonials, trustFeatures } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-20 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <HeroSection />

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {trustFeatures.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            accent={index % 2 === 0 ? "from-white/90 to-blush/50" : "from-white/90 to-[#f0e4d7]"}
          />
        ))}
      </section>

      <section className="space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Featured Collections"
            title="A boutique selection made to delight, gift, and celebrate."
            description="Explore signature boxes, festive hampers, and custom-ready assortments that bring together beauty, flavor, and presentation."
          />
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full border border-mocha/10 px-5 py-3 text-sm font-semibold text-mocha transition hover:border-caramel hover:text-caramel"
          >
            View Full Collection
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="rounded-[40px] bg-hero-mesh px-6 py-12 text-cream shadow-luxe sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Custom Gifting"
            title="Thoughtful gifting, wrapped in chocolate and charm."
            description="Make occasions feel more personal with custom boxes, signature assortments, and gifting experiences designed to look as refined as they taste."
            tone="inverse"
          />
          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              title="Signature Chocolates"
              description="Curated flavors and shapes for heartfelt gifting with a warm boutique finish."
              accent="from-white/12 to-white/5"
              tone="inverse"
            />
            <FeatureCard
              title="Gift Boxes"
              description="Elegant packaging styled for birthdays, festive moments, return gifts, and premium surprises."
              accent="from-white/12 to-white/5"
              tone="inverse"
            />
            <FeatureCard
              title="Custom Orders"
              description="Tailored quantity, presentation, and occasion-focused details for events and hampers."
              accent="from-white/12 to-white/5"
              tone="inverse"
            />
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[32px] bg-gradient-to-br from-mocha to-truffle p-4 text-cream shadow-luxe">
            <div className="h-full rounded-[26px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-gold">Crafted in Vadodara</p>
              <p className="mt-6 font-display text-3xl leading-tight">
                Small-batch chocolates with personal warmth and premium presentation.
              </p>
            </div>
          </div>
          <div className="rounded-[32px] bg-gradient-to-br from-blush to-white p-4 shadow-soft">
            <div className="h-full rounded-[26px] border border-mocha/10 bg-white/70 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-caramel">Gift-worthy Finish</p>
              <p className="mt-6 font-display text-3xl leading-tight text-mocha">
                Designed to feel indulgent before the box is even opened.
              </p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Every order is made to feel personal, polished, and delightfully memorable."
            description="HR’s Choco Bliss was created to turn handcrafted chocolates into a thoughtful, premium experience. Every piece is made with attention to taste, texture, freshness, and presentation—so each order feels personal and gift-worthy."
          />
          <Link
            href="/about"
            className="mt-8 inline-flex items-center rounded-full bg-mocha px-6 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
          >
            Read Our Story
          </Link>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Customers remember both the taste and the thoughtful finish."
          description="Boutique gifting works best when the chocolates feel as special as the occasion."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.quote}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="FAQ Preview"
          title="Helpful answers for ordering, freshness, and gifting."
          description="A few quick details before you place your next chocolate order."
          align="center"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
