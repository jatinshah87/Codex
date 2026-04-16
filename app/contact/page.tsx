import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

const implementationNotes = [
  "Authentication with role-based access for Super Admin, Audit, and Staff users",
  "Warehouse, site, location, and barcode master maintenance",
  "Excel upload validation for item master and system stock files",
  "Stocktake transaction history with audit trail by user, time, and device",
  "Excel export service for both variance reports"
];

export const metadata: Metadata = {
  title: "Implementation Notes",
  description: "Implementation notes and build considerations for Asa Buy."
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Implementation Notes"
        title="What would come next after this application concept."
        description="The current build demonstrates the product structure and user flows. These are the backend and platform layers I would add next for a live deployment."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {implementationNotes.map((note) => (
          <div key={note} className="rounded-[28px] border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}
