import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HR's Choco Bliss for chocolate orders, custom gift boxes, WhatsApp enquiries, and premium gifting support in Vadodara."
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s plan your next chocolate order, gifting box, or custom hamper."
        description="Reach out for product orders, custom gifting, festive enquiries, or premium bulk requests."
      />

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <ContactForm />
        <aside className="grid gap-5 rounded-[32px] border border-mocha/10 bg-white p-8 shadow-soft">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">WhatsApp</p>
            <Link href={brand.whatsappLink} className="mt-2 block font-display text-3xl text-mocha">
              +91 {brand.whatsapp}
            </Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">Instagram</p>
            <Link href={brand.instagram} className="mt-2 block text-sm text-espresso transition hover:text-caramel">
              @hrschocobliss
            </Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">Email</p>
            <a href={`mailto:${brand.email}`} className="mt-2 block text-sm text-espresso transition hover:text-caramel">
              {brand.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">Location</p>
            <p className="mt-2 text-sm text-espresso">{brand.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-caramel">Facebook</p>
            <Link href={brand.facebook} className="mt-2 block text-sm text-espresso transition hover:text-caramel">
              Visit Facebook Page
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
