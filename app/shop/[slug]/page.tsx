import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ProductDetailActions } from "@/components/ProductDetailActions";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/lib/data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found"
    };
  }

  return {
    title: product.name,
    description: product.shortDescription
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-[36px] bg-gradient-to-br from-blush via-cream to-almond shadow-luxe">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.gallery.map((item) => (
              <div key={item} className="relative aspect-square overflow-hidden rounded-[24px] border border-mocha/10 bg-white shadow-soft">
                <Image src={item} alt={product.name} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">{product.category}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-mocha sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-2xl font-semibold text-truffle">{product.price}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-espresso/78">{product.description}</p>
          </div>

          <div className="grid gap-5 rounded-[32px] border border-mocha/10 bg-white p-7 shadow-soft">
            <div>
              <h2 className="font-display text-2xl text-mocha">Ingredients</h2>
              <p className="mt-3 text-sm leading-7 text-espresso/78">
                {product.ingredients.join(", ")}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-mocha">Shelf Life</h2>
              <p className="mt-3 text-sm leading-7 text-espresso/78">{product.shelfLife}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-mocha">Gifting & Customization</h2>
              <p className="mt-3 text-sm leading-7 text-espresso/78">{product.giftingNote}</p>
            </div>
          </div>

          <ProductDetailActions productName={product.name} />
        </div>
      </section>

      <section className="rounded-[36px] border border-mocha/10 bg-white p-8 shadow-soft">
        <SectionHeading
          eyebrow="Why It Feels Premium"
          title="Handmade to look polished and taste beautifully balanced."
          description="Each product page is set up so real product photography can be swapped in later without changing layout structure. The current gallery uses local brand imagery to preserve a launch-ready look from day one."
        />
      </section>
    </div>
  );
}
