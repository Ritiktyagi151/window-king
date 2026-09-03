import Link from "next/link";
import RawDocumentContent from "./RawDocumentContent";

export type MarketingMetric = {
  label: string;
  value: string;
};

export type MarketingItem = {
  title: string;
  description: string;
};

export type MarketingPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  metrics: MarketingMetric[];
  pillars: MarketingItem[];
  highlights: MarketingItem[];
  sourceDocuments?: { title: string; fileName: string }[];
};

export default function MarketingPage({
  content,
}: {
  content: MarketingPageContent;
}) {
  return (
    <div className="min-h-screen bg-[#f7f5ff] pb-16 pt-32 md:pb-24 md:pt-36">
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-[#362A71] text-white shadow-2xl md:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[1.3fr_0.9fr]">
            <div className="px-6 py-12 md:px-14 md:py-20">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21] sm:tracking-[0.45em]">
                {content.eyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-black uppercase leading-tight tracking-tighter sm:text-5xl md:text-7xl md:leading-[0.95]">
                {content.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                {content.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href={content.primaryCta.href}
                  className="rounded-full bg-[#F85A21] px-7 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-white"
                >
                  {content.primaryCta.label}
                </Link>
                {content.secondaryCta ? (
                  <Link
                    href={content.secondaryCta.href}
                    className="rounded-full border border-white/20 px-7 py-3 text-center text-sm font-black uppercase tracking-[0.18em] text-white"
                  >
                    {content.secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="border-t border-white/10 bg-white/6 px-6 py-12 backdrop-blur-sm md:px-10 md:py-16 lg:border-l lg:border-t-0">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-white/60 sm:tracking-[0.35em]">
                Snapshot
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {content.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/8 p-5 md:rounded-[1.75rem] md:p-6"
                  >
                    <p className="text-3xl font-black text-white">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/65">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-8 px-4 sm:px-6 md:mt-16 lg:grid-cols-[1fr_1.15fr]">
        <div className="rounded-2xl border border-[#362A71]/8 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21] sm:tracking-[0.35em]">
            Core Strengths
          </p>
          <div className="mt-8 space-y-6">
            {content.pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0"
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F85A21]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#362A71]">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#F85A21]/10 bg-[#fffaf7] p-6 shadow-sm md:rounded-[2rem] md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#362A71] sm:tracking-[0.35em]">
            What You Can Expect
          </p>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {content.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-[1.5rem] bg-white p-6 border border-[#362A71]/8"
              >
                <h3 className="text-[#362A71] text-lg font-black uppercase">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.sourceDocuments ? (
        <RawDocumentContent
          title={`${content.title} Source Content`}
          documents={content.sourceDocuments}
        />
      ) : null}
    </div>
  );
}
