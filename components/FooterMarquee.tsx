const marqueeItems = [
  "Window King delivers premium uPVC and aluminium windows engineered for reliable performance, elegant finish and long-lasting comfort",
  "Explore sliding windows, casement windows, fixed windows, sliding doors and custom design solutions for modern spaces",
];

export default function FooterMarquee() {
  return (
    <section className="grid w-full grid-cols-[148px_1fr] border-y border-white/20 bg-white shadow-xl sm:grid-cols-[178px_1fr]">
      <div className="flex h-14 items-center justify-center bg-[#362A71] px-4 text-sm font-black uppercase text-white sm:px-6 sm:text-base">
        What&apos;s New
      </div>
      <div className="flex h-14 min-w-0 items-center overflow-hidden bg-white text-[#362A71]">
        <div className="footer-marquee-track flex w-max items-center gap-12 px-8">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="whitespace-nowrap text-sm font-bold"
            >
              <span className="mr-4 inline-block h-2 w-2 rounded-full bg-[#F85A21] align-middle" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
