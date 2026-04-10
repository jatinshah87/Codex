"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { brand, navLinks, siteBase } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-caramel/20 bg-white">
            <Image src={`${siteBase}/images/brand/logo.png`} alt={brand.name} fill className="object-cover" />
          </div>
          <div>
            <p className="font-display text-xl text-mocha">{brand.name}</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-caramel">
              {brand.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-espresso transition hover:text-caramel"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={brand.whatsappLink}
            className="inline-flex items-center rounded-full bg-mocha px-5 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
          >
            Order Now
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-mocha/10 p-2 text-mocha lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-mocha/10 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-espresso transition hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={brand.whatsappLink}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-mocha px-5 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
            >
              Order Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
