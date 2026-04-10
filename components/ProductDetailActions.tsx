"use client";

import { useState } from "react";
import Link from "next/link";

type ProductDetailActionsProps = {
  productName: string;
};

export function ProductDetailActions({ productName }: ProductDetailActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const whatsappHref = `https://wa.me/919725151379?text=${encodeURIComponent(
    `Hello HR's Choco Bliss, I'm interested in ${productName}.`
  )}`;

  return (
    <div className="space-y-5">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-caramel">
          Quantity
        </p>
        <div className="inline-flex items-center rounded-full border border-mocha/10 bg-white p-1">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="h-10 w-10 rounded-full text-lg text-mocha transition hover:bg-cream"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="min-w-12 text-center text-sm font-semibold text-mocha">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((value) => value + 1)}
            className="h-10 w-10 rounded-full text-lg text-mocha transition hover:bg-cream"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-mocha px-6 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
        >
          Add to Cart
        </button>
        <Link
          href={whatsappHref}
          className="inline-flex items-center rounded-full border border-mocha/15 px-6 py-3 text-sm font-semibold text-mocha transition hover:border-caramel hover:text-caramel"
        >
          WhatsApp Enquiry
        </Link>
      </div>
    </div>
  );
}
