"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-[24px] border border-mocha/10 bg-white shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-xl text-mocha">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-caramel transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? <p className="px-6 pb-6 text-sm leading-7 text-espresso/78">{answer}</p> : null}
    </article>
  );
}
