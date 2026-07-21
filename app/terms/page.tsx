import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms And Conditions",
  description: "Read Window King's website terms and conditions for use of services, quotations, orders, warranties, and support.",
};

const sections = [
  {
    title: "Use Of Website",
    body: "By using this website, you agree to access it only for lawful purposes and not misuse, damage, interrupt, or attempt unauthorized access to any part of the website.",
  },
  {
    title: "Product Information",
    body: "Product images, descriptions, sizes, finishes, and specifications are provided for general understanding. Final details may vary based on site conditions, selected materials, technical feasibility, and confirmed quotations.",
  },
  {
    title: "Quotations And Orders",
    body: "Any quotation shared by Window King is based on the information available at that time. Final pricing, timelines, and scope are confirmed after measurement, technical review, and written approval.",
  },
  {
    title: "Installation And Site Readiness",
    body: "Customers are responsible for providing safe site access and required readiness before installation. Delays caused by site conditions, approvals, or unavailable access may affect delivery or installation timelines.",
  },
  {
    title: "Warranty And Service",
    body: "Warranty and service terms depend on the selected product, installation scope, and written purchase documents. Damage caused by misuse, unauthorized modification, accident, or improper maintenance may not be covered.",
  },
  {
    title: "Limitation Of Liability",
    body: "Window King is not liable for indirect, incidental, or consequential losses arising from website use, service delays, third-party issues, or circumstances beyond reasonable control.",
  },
  {
    title: "Changes To Terms",
    body: "We may update these terms from time to time. Continued use of the website after updates means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-[#f4f7f9] px-4 pt-40 pb-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 border-l-4 border-[#F85A21] pl-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
            Window King
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#362A71] md:text-6xl">
            Terms And Conditions
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
            These terms govern use of the Window King website, enquiries, product information, quotations, and related services.
          </p>
        </div>

        <div className="bg-white p-6 shadow-xl shadow-[#362A71]/5 md:p-10">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Last updated: July 21, 2026
          </p>

          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.title} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                <h2 className="mb-3 text-xl font-black text-[#362A71]">
                  {section.title}
                </h2>
                <p className="text-sm leading-7 text-gray-600">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
