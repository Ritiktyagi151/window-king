import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Window King's privacy policy for information about data collection, use, protection, and customer rights.",
};

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect your name, phone number, email address, project location, product requirements, and any message you submit through our enquiry, contact, or consultation forms.",
  },
  {
    title: "How We Use Information",
    body: "Your information is used to respond to enquiries, schedule consultations, share quotations, provide product support, improve our services, and communicate important updates related to Window King products and services.",
  },
  {
    title: "Information Sharing",
    body: "We do not sell your personal information. We may share necessary details with trusted team members, installation partners, service providers, or authorities when required to complete your request or comply with applicable law.",
  },
  {
    title: "Data Security",
    body: "We use reasonable administrative, technical, and operational safeguards to protect personal information from unauthorized access, misuse, loss, or disclosure.",
  },
  {
    title: "Cookies And Analytics",
    body: "Our website may use cookies or analytics tools to understand visitor behavior, improve website performance, and deliver a better browsing experience.",
  },
  {
    title: "Your Choices",
    body: "You may request correction, update, or deletion of your personal information by contacting us. You may also opt out of non-essential promotional communication.",
  },
  {
    title: "Contact Us",
    body: "For privacy-related questions, please contact Window King through the contact page or call our support team at +91 7065500903.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-[#f4f7f9] px-4 pt-40 pb-20 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 border-l-4 border-[#F85A21] pl-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
            Window King
          </p>
          <h1 className="text-4xl font-black tracking-tight text-[#362A71] md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
            This Privacy Policy explains how Window King Private Limited collects, uses, and protects information provided by customers and website visitors.
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
