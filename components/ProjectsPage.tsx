import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { projectCategories, type ProjectCategory } from "@/lib/projects";

export function ProjectsIndexPage() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
            Window King Projects
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase text-[#362A71] sm:text-5xl">
            Project Portfolio
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Explore Window King installations across residential, commercial,
            gallery, and completed project categories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projectCategories.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCategoryPage({ project }: { project: ProjectCategory }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
              Window King Projects
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase text-[#362A71] sm:text-5xl">
              {project.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              {project.description}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div
                  key={stat}
                  className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-bold text-[#362A71]"
                >
                  <CheckCircle2 size={18} className="text-[#F85A21]" />
                  {stat}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F85A21] px-7 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-[#362A71]"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-lg shadow-2xl md:min-h-[520px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#362A71]/70 to-transparent" />
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F85A21]">
                Project Images
              </p>
              
            </div>
            <p className="max-w-md text-sm leading-6 text-gray-500">
              Real Window King project visuals for design, finish, and space
              reference.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.slice(0, 6).map((image, index) => (
              <div
                key={`${project.slug}-${image}-${index}`}
                className="relative min-h-[240px] overflow-hidden rounded-lg bg-gray-100 shadow-md sm:min-h-[280px]"
              >
                <Image
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectCategory }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid min-h-[260px] overflow-hidden rounded-lg bg-[#120d2b] shadow-lg sm:grid-cols-[220px_1fr]"
    >
      <div className="relative min-h-[220px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 220px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center p-6">
        <h3 className="text-2xl font-black uppercase text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-white/75">
          {project.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase text-[#F85A21]">
          View Details
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
