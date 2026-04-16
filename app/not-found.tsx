import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Not Found</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight text-slate-950">This Asa Buy module does not exist.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
        The page you tried to open is not part of the current stocktake application prototype.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
      >
        Return to dashboard
      </Link>
    </div>
  );
}
