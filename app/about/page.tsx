import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";
import { technicalMilestones, workflowSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solution Blueprint",
  description: "Detailed blueprint for the Asa Buy warehouse stocktake application."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <SectionHeading
          eyebrow="Blueprint"
          title="Asa Buy is being shaped as a warehouse stocktake control tower, not just a counting screen."
          description="The solution blueprint below reflects the exact business flow you described: plan by warehouse, assign by site, count by barcode location, reconcile against system stock, and export audit-ready variance reports."
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {workflowSteps.map((step) => (
          <div key={step.phase} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <p className="text-sm font-semibold text-cyan-700">{step.phase}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[36px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
        <SectionHeading
          eyebrow="Production Scope"
          title="Recommended delivery direction for Android, iOS, tablets, and browser-based operations."
          description="This concept is already designed responsively, and these are the technical milestones I would use to take it into a production build."
          tone="inverse"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {technicalMilestones.map((milestone) => (
            <div key={milestone} className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
              {milestone}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
