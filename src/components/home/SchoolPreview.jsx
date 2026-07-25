import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SchoolPreview() {
  return (
    <section className="bg-cream py-16 md:py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-white shadow-soft">
          <Image
            src="/images/naposa/school-campus.jpg"
            alt="Campus view at Nsaba Presbyterian Senior High School"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </div>
        <SectionHeading
          eyebrow="Our Alma Mater"
          title="Nsaba Presbyterian Senior High School"
        >
          Located in Agona Nsaba in Ghana&apos;s Central Region, Nsaba
          Presbyterian Senior High School continues to shape lives through
          learning, character and service. The school is currently led by Rev.
          Osafo-Amankwah.
        </SectionHeading>
      </div>
    </section>
  );
}
