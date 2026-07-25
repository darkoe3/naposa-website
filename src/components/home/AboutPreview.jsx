import { Award, HeartHandshake, Link2, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    name: "Connection",
    icon: Link2,
    description:
      "Strengthening lifelong relationships across year groups, professions and locations.",
  },
  {
    name: "Service",
    icon: HeartHandshake,
    description:
      "Bringing together alumni expertise and resources to support our alma mater.",
  },
  {
    name: "Legacy",
    icon: Sparkles,
    description:
      "Preserving our shared history while creating opportunities for future generations.",
  },
  {
    name: "Excellence",
    icon: Award,
    description:
      "Upholding the values, character and distinguished identity of Nsaba Presbyterian.",
  },
];

export default function AboutPreview() {
  return (
    <section id="about" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="About NAPOSA"
          title="Rooted in Service, United by Purpose."
        >
          NAPOSA brings together past students of Nsaba Presbyterian Senior High
          School to sustain lifelong relationships, support the school and
          create meaningful opportunities for current and future generations.
        </SectionHeading>
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className="rounded-md border border-line bg-cream/50 p-5">
                  <Icon className="text-royal" size={24} aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-extrabold text-navy">{value.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-4 rounded-md border border-line bg-white px-4 py-3 text-sm text-muted">
            Value statements are provisional and will be aligned with the
            official NAPOSA Constitution.
          </p>
          <Button href="#contact" variant="outline" className="mt-7">
            Discover NAPOSA
          </Button>
        </div>
      </div>
    </section>
  );
}
