import Link from "next/link";

import { brand, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-mocha/10 bg-[#f3e7db]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <p className="font-display text-3xl text-mocha">{brand.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-espresso/78">
            Premium handmade chocolates crafted for gifting, celebrations, and indulgent everyday moments in {brand.location}.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-caramel">Navigate</p>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-espresso transition hover:text-caramel">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-caramel">Connect</p>
          <div className="mt-4 grid gap-3 text-sm text-espresso">
            <Link href={brand.instagram} className="transition hover:text-caramel">
              Instagram
            </Link>
            <Link href={brand.facebook} className="transition hover:text-caramel">
              Facebook
            </Link>
            <Link href={brand.whatsappLink} className="transition hover:text-caramel">
              WhatsApp: +91 {brand.whatsapp}
            </Link>
            <a href={`mailto:${brand.email}`} className="transition hover:text-caramel">
              {brand.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-mocha/10 px-4 py-5 text-center text-sm text-espresso/70">
        © 2026 {brand.name}. Crafted with warmth for sweet gifting moments.
      </div>
    </footer>
  );
}
