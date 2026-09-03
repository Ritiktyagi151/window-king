import ProfileSection from "./components/ProfileSection";
import RawDocumentContent from "@/components/RawDocumentContent";

export default function About() {
  return (
    <main className="bg-white pt-28">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
          About Window King
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-none text-[#362A71] sm:text-5xl md:text-6xl">
          WINDOW KING PRIVATE LIMITED
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
          Established in 2021, WINDOW KING PRIVATE LIMITED is a trusted
          manufacturer and supplier of uPVC glass windows from Puri, known for
          quality products and dependable service.
        </p>
      </section>
      <ProfileSection />
      <RawDocumentContent
        title="About Window King Source Content"
        documents={[
          {
            title: "Window King About Us",
            fileName: "window king About us.txt",
          },
        ]}
      />
    </main>
  );
}
