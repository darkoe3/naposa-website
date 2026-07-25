import Image from "next/image";
import PlaceholderBadge from "@/components/ui/PlaceholderBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  return (
    <section id="projects" className="bg-cream py-16 md:py-20 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Building Progress Together."
          >
            Our projects will transform alumni commitment into lasting support
            for students, the school and the wider NAPOSA community.
          </SectionHeading>
          <button
            type="button"
            disabled
            className="inline-flex min-h-11 shrink-0 cursor-not-allowed items-center justify-center whitespace-nowrap rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-muted"
            aria-label="View all projects coming soon"
          >
            View All Projects
          </button>
        </div>
        <p className="mt-6 rounded-md border border-line bg-white px-4 py-3 text-sm text-muted">
          The project areas below are provisional examples and will be replaced
          with officially approved NAPOSA initiatives.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-navy">
                <Image
                  src={project.featuredImage}
                  alt={`${project.title} provisional image`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-88"
                />
              </div>
              <div className="p-5">
                <PlaceholderBadge>Provisional Project</PlaceholderBadge>
                <h3 className="mt-4 text-xl font-extrabold text-navy">{project.title}</h3>
                <p className="mt-2 text-sm font-bold text-royal">{project.category}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
