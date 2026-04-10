import Image from "next/image";
import Link from "next/link";

import { brand, featuredBadges, products, siteBase } from "@/lib/data";

export function HeroSection() {
  const heroProducts = products.slice(0, 3);

  return (
    <section className="relative overflow-hidden rounded-[40px] bg-hero-mesh px-6 py-10 text-cream shadow-luxe sm:px-10 sm:py-14 lg:px-14 lg:py-16">
      <div className="absolute inset-0 bg-glow-radial" />
      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
            {brand.tagline}
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Indulgence, handcrafted for every sweet moment.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-cream/82 sm:text-lg">
            Premium homemade chocolates created in small batches with elegant presentation, refined taste, and gifting-worthy charm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-mocha transition hover:bg-[#ddb87c]"
            >
              Shop Collection
            </Link>
            <Link
              href="/gifting"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
            >
              Custom Gifting
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {featuredBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cream/88 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-4 backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
              <Image
                src={`${siteBase}/images/brand/hero-poster.png`}
                alt="HR's Choco Bliss chocolate hero visual"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-[30px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.26em] text-gold">Featured Gift Box</p>
              <h2 className="mt-3 font-display text-3xl text-cream">Boutique gifting with a warm premium touch.</h2>
              <p className="mt-3 text-sm leading-7 text-cream/76">
                Thoughtfully packed chocolates for birthdays, festive gifting, client hampers, and intimate celebrations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroProducts.map((product, index) => (
                <div
                  key={product.slug}
                  className={`rounded-[28px] border border-white/10 bg-white/10 p-4 backdrop-blur ${index === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-xl text-cream">{product.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-gold">{product.category}</p>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-cream">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
