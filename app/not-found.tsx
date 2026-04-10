import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-caramel">
        Page Not Found
      </p>
      <h1 className="mt-5 font-display text-4xl leading-tight text-mocha sm:text-5xl">
        This chocolate trail ends here.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-espresso/78">
        The page you were looking for may have moved, but the collection is still ready to explore.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/shop"
          className="inline-flex items-center rounded-full bg-mocha px-6 py-3 text-sm font-semibold text-cream transition hover:bg-espresso"
        >
          Browse Shop
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-mocha/10 px-6 py-3 text-sm font-semibold text-mocha transition hover:border-caramel hover:text-caramel"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
