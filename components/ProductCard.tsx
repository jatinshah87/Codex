import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-mocha/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative aspect-[4/4.6] overflow-hidden bg-gradient-to-br from-blush via-cream to-almond">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-truffle backdrop-blur">
          {product.label}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-caramel">
              {product.category}
            </p>
            <h3 className="mt-2 font-display text-2xl text-mocha">{product.name}</h3>
          </div>
          <p className="text-sm font-semibold text-truffle">{product.price}</p>
        </div>
        <p className="text-sm leading-6 text-espresso/78">{product.shortDescription}</p>
        <div className="flex items-center gap-3">
          <Link
            href={`/shop/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-mocha px-4 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
          >
            View Details
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-mocha/15 px-4 py-3 text-sm font-semibold text-mocha transition hover:border-caramel hover:text-caramel"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
