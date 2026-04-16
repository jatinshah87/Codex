import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/SectionHeading";

const moduleContent = {
  "audit-console": {
    title: "Audit Console",
    description:
      "The audit console is where stocktake cycles are created, sites are assigned, Excel files are uploaded, and variances are reviewed.",
    bullets: [
      "Create plans by warehouse and cycle",
      "Assign first check and second check users by site",
      "Upload item master and current stock from Excel",
      "Publish downloadable variance reports"
    ]
  },
  "mobile-count": {
    title: "Mobile Count",
    description:
      "The mobile count module is intentionally simple so staff can count quickly from a handheld or tablet on the warehouse floor.",
    bullets: [
      "Scan location barcode first",
      "Scan item code second",
      "Select UOM and enter physical quantity",
      "Save counts against the assigned site and plan"
    ]
  },
  "variance-reports": {
    title: "Variance Reports",
    description:
      "The reporting module highlights mismatches between first and second checks, and between physical counts and system balances.",
    bullets: [
      "First check versus second check variance",
      "Counted stock versus system stock variance",
      "Warehouse, site, location, and item filters",
      "Excel export for audit sign-off"
    ]
  }
} as const;

type ModuleSlug = keyof typeof moduleContent;

type ModulePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ModulePageProps): Promise<Metadata> {
  const { slug } = await params;
  const module = moduleContent[slug as ModuleSlug];

  if (!module) {
    return { title: "Module Not Found" };
  }

  return {
    title: module.title,
    description: module.description
  };
}

export function generateStaticParams() {
  return Object.keys(moduleContent).map((slug) => ({ slug }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  const module = moduleContent[slug as ModuleSlug];

  if (!module) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SectionHeading eyebrow="Workspace" title={module.title} description={module.description} />
      </section>
      <section className="grid gap-4">
        {module.bullets.map((bullet) => (
          <div key={bullet} className="rounded-[28px] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            {bullet}
          </div>
        ))}
      </section>
    </div>
  );
}
