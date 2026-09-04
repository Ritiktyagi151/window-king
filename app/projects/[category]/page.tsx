import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCategoryPage } from "@/components/ProjectsPage";
import { getProjectCategory, projectCategories } from "@/lib/projects";

type PageProps = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  const project = getProjectCategory(category);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projectCategories.map((project) => ({ category: project.slug }));
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  const project = getProjectCategory(category);

  if (!project) {
    notFound();
  }

  return <ProjectCategoryPage project={project} />;
}
