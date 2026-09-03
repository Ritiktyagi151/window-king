import RawDocumentContent from "@/components/RawDocumentContent";

export const metadata = {
  title: "Raw Client Documents | Window King",
  description: "Exact extracted client document content used for Window King website pages.",
};

export default function RawDataPage() {
  return (
    <main className="bg-white pt-28">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#F85A21]">
          Source Library
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-[#362A71] sm:text-5xl">
          Raw Client Documents
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
          This page renders the extracted document text without rewriting the
          original lines or paragraphs.
        </p>
      </section>

      <RawDocumentContent
        title="All Extracted Documents"
        documents={[
          { title: "Window King About Us", fileName: "window king About us.txt" },
          { title: "Why Window King", fileName: "Why Window King .txt" },
          { title: "Why Choose uPVC", fileName: "Why Choose uPVC.txt" },
          { title: "Content for B2B Potal", fileName: "Content for B2B Potal.txt" },
          { title: "About Us", fileName: "About Us.txt" },
        ]}
      />
    </main>
  );
}
