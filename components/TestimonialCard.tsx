type TestimonialCardProps = {
  quote: string;
  author: string;
};

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <article className="rounded-[28px] border border-white/50 bg-white/85 p-8 shadow-soft backdrop-blur">
      <p className="font-display text-2xl leading-9 text-mocha">“{quote}”</p>
      <p className="mt-6 text-sm uppercase tracking-[0.24em] text-caramel">{author}</p>
    </article>
  );
}
