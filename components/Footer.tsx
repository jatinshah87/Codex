import Image from "next/image";
import Link from "next/link";

import { brand } from "@/lib/data";

const quickLinks = [
  { href: "/about", label: "Solution Blueprint" },
  { href: "/gifting", label: "Delivery Roadmap" },
  { href: "/shop", label: "Role Workspaces" },
  { href: "/faq", label: "Stocktake FAQ" }
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_1fr] lg:px-8">
        <div>
          <div className="relative h-14 w-[210px] overflow-hidden rounded-xl bg-white px-2 py-1">
            <Image src="/asabuy-logo.svg" alt={`${brand.name} logo`} fill className="object-contain" />
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            {brand.description}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Navigate</p>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Designed For</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-300">
            <p>Warehouse stocktakes</p>
            <p>Android handheld devices</p>
            <p>iPad and tablet operations</p>
            <p>Excel-based audit reconciliation</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-400">
        © 2026 {brand.name}. Multi-warehouse stock audit and reconciliation platform concept.
      </div>
    </footer>
  );
}
