import Link from "next/link";

import { brand } from "@/lib/data";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to turn your next occasion into something sweeter?",
  description = "Place orders on WhatsApp, enquire on Instagram, or request a custom gifting quote for celebrations, festive boxes, and premium hampers."
}: CTASectionProps) {
  return (
    <section className="rounded-[36px] bg-hero-mesh px-6 py-12 text-cream shadow-luxe sm:px-10 lg:px-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
            Order With Ease
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-cream/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={brand.whatsappLink}
            className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-mocha transition hover:bg-[#ddb87c]"
          >
            WhatsApp Us
          </Link>
          <Link
            href={brand.instagram}
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
