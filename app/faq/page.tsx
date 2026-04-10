import type { Metadata } from "next";

import { FAQItem } from "@/components/FAQItem";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ and Delivery Info",
  description:
    "Find answers about storage instructions, delivery timelines, custom order lead times, gifting FAQs, shelf life, and the order process for HR's Choco Bliss."
};

const deliveryFaqs = [
  {
    question: "How should I store the chocolates?",
    answer:
      "Keep them in a cool, dry place away from heat and direct sunlight. Light refrigeration can help in warmer weather, but bring them to room temperature before serving."
  },
  {
    question: "What are your delivery timelines?",
    answer:
      "Delivery timelines depend on order size and customization, but standard orders are generally fulfilled faster than custom gifting requests."
  },
  {
    question: "How much lead time do custom orders need?",
    answer:
      "Custom gifting and bulk orders usually need advance notice so presentation, quantity, and finishing details can be planned properly."
  },
  {
    question: "What is the shelf life?",
    answer:
      "Shelf life varies by product type and weather conditions, but freshness guidance is shared clearly with each order."
  },
  {
    question: "How does the order process work?",
    answer:
      "Browse the collection, send a WhatsApp or Instagram enquiry, confirm your requirements, and then receive order and customization guidance."
  }
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQ / Delivery Info"
        title="Answers for storage, lead times, ordering, and gifting details."
        description="Everything customers usually want to know before placing a premium handmade chocolate order."
      />
      <div className="grid gap-4">
        {[...faqs, ...deliveryFaqs].map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
