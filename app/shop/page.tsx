import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/SectionHeading";

const modules = [
  {
    slug: "audit-console",
    title: "Audit Console",
    detail: "Plan stocktakes by warehouse, assign site staff, upload Excel masters, and run reconciliation."
  },
  {
    slug: "mobile-count",
    title: "Mobile Count",
    detail: "A handheld-first flow for location scan, item scan, UOM selection, and quantity capture."
  },
  {
    slug: "variance-reports",
    title: "Variance Reports",
    detail: "Review first-vs-second and physical-vs-system differences with export-ready report layouts."
  }
];

export const metadata: Metadata = {
  title: "Role Workspaces",
  description: "Role workspaces and modules for the Asa Buy stocktake platform."
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Modules"
        title="Explore the primary application workspaces."
        description="Each module below represents a focused area of the stocktake process."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {modules.map((module) => (
          <Link
            key={module.slug}
            href={`/shop/${module.slug}`}
            className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-cyan-300"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Module</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{module.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{module.detail}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
