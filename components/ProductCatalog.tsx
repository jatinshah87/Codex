"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "@/components/ProductCard";
import { products, shopCategories } from "@/lib/data";

export function ProductCatalog() {
  const [category, setCategory] = useState<(typeof shopCategories)[number]>("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    const visible =
      category === "All"
        ? [...products]
        : products.filter((product) => product.category === category);

    if (sortBy === "price-low") {
      visible.sort((a, b) => a.price.localeCompare(b.price, undefined, { numeric: true }));
    }

    if (sortBy === "name") {
      visible.sort((a, b) => a.name.localeCompare(b.name));
    }

    return visible;
  }, [category, sortBy]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 rounded-[28px] border border-mocha/10 bg-white p-6 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {shopCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === item
                  ? "bg-mocha text-cream"
                  : "border border-mocha/10 text-espresso hover:border-caramel hover:text-caramel"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-3 text-sm font-medium text-espresso">
          Sort by
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-full border border-mocha/10 bg-cream px-4 py-2 outline-none transition focus:border-caramel"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
