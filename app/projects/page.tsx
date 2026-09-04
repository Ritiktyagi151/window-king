import type { Metadata } from "next";
import { ProjectsIndexPage } from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Window King residential, commercial, gallery, and completed projects.",
};

export default function Page() {
  return <ProjectsIndexPage />;
}
