type FeatureCardProps = {
  title: string;
  description: string;
  accent?: string;
  tone?: "default" | "inverse";
};

export function FeatureCard({
  title,
  description,
  accent = "from-white/90 to-blush/40",
  tone = "default"
}: FeatureCardProps) {
  const titleColor = tone === "inverse" ? "text-cream" : "text-mocha";
  const bodyColor = tone === "inverse" ? "text-cream/76" : "text-espresso/80";
  const iconColor = tone === "inverse" ? "bg-white/10" : "bg-mocha/8";

  return (
    <article className={`rounded-[28px] border border-white/60 bg-gradient-to-br ${accent} p-6 shadow-soft backdrop-blur`}>
      <div className={`mb-4 h-11 w-11 rounded-full ${iconColor}`} />
      <h3 className={`font-display text-xl ${titleColor}`}>{title}</h3>
      <p className={`mt-3 text-sm leading-6 ${bodyColor}`}>{description}</p>
    </article>
  );
}
