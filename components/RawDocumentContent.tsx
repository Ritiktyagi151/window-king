import fs from "fs";
import path from "path";

type RawDocument = {
  title: string;
  fileName: string;
};

export default function RawDocumentContent({
  eyebrow = "Client Source Content",
  title = "Raw Document Content",
  documents,
}: {
  eyebrow?: string;
  title?: string;
  documents: RawDocument[];
}) {
  const loadedDocuments = documents
    .map((document) => ({
      ...document,
      lines: readRawDocument(document.fileName),
    }))
    .filter((document) => document.lines.length > 0);

  if (loadedDocuments.length === 0) return null;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#F85A21] sm:tracking-[0.35em]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#362A71] sm:text-4xl">
          {title}
        </h2>

        <div className="mt-8 space-y-8">
          {loadedDocuments.map((document) => (
            <article
              key={document.fileName}
              className="rounded-2xl border border-[#362A71]/10 bg-[#fbfbfd] p-5 shadow-sm md:p-8"
            >
              <h3 className="text-xl font-black uppercase text-[#362A71]">
                {document.title}
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                {document.lines.map((line, index) => (
                  <p key={`${document.fileName}-${index}`}>{line}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function readRawDocument(fileName: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "raw-data",
    "extracted",
    fileName
  );

  if (!fs.existsSync(filePath)) return [];

  return fs
    .readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}
