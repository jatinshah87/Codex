type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "inverse" ? "text-white" : "text-slate-950";
  const bodyColor = tone === "inverse" ? "text-slate-300" : "text-slate-600";
  const eyebrowColor = tone === "inverse" ? "text-cyan-300" : "text-cyan-700";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-3xl leading-tight tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${bodyColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
