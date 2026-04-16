import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "Can the staff use barcode scanners?",
    answer:
      "Yes. The counting flow is suitable for handheld devices that send barcode values as keyboard input, and it can later support native camera or scanner SDK integration."
  },
  {
    question: "Can the app support both first check and second check?",
    answer:
      "Yes. Each site in a stocktake plan can have separate first check and second check users, and the reporting layer compares both result sets."
  },
  {
    question: "Can item master and stock be uploaded from Excel?",
    answer:
      "Yes. The audit workspace is designed with dedicated import points for item master creation and system stock creation before reconciliation."
  },
  {
    question: "Will variance reports be downloadable in Excel?",
    answer:
      "Yes. The reporting module is built around two exportable reports: first check versus second check, and counted stock versus system stock."
  }
];

export const metadata: Metadata = {
  title: "Stocktake FAQ",
  description: "Frequently asked questions for the Asa Buy stocktake application."
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Quick answers about the stocktake process and the app capability."
        description="These answers reflect the operational model currently implemented in the application concept."
      />
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <h3 className="text-lg font-semibold tracking-tight text-slate-950">{faq.question}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
