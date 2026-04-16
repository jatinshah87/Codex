import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

const roadmap = [
  {
    stage: "Phase 1",
    title: "Responsive stocktake web application",
    detail: "Deliver the core audit planning, counting, Excel upload, and variance reporting workflows in a browser-first interface that works well on tablets and scanners."
  },
  {
    stage: "Phase 2",
    title: "Backend services and database",
    detail: "Add authentication, warehouse masters, item masters, counting transactions, Excel parsing, reconciliation jobs, and role-based permissions."
  },
  {
    stage: "Phase 3",
    title: "Native mobile extensions",
    detail: "Extend the same workflow into Android and iOS application packages if the business needs app-store distribution, offline mode, or deeper scanner integration."
  }
];

export const metadata: Metadata = {
  title: "Delivery Roadmap",
  description: "Delivery roadmap for the Asa Buy stocktake platform."
};

export default function GiftingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Roadmap"
        title="A practical delivery path from concept to production rollout."
        description="This phased roadmap is how I would take Asa Buy from the current responsive application concept to a full warehouse-ready solution."
      />
      <div className="grid gap-5">
        {roadmap.map((item) => (
          <div key={item.stage} className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">{item.stage}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
