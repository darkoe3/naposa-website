import AboutPreview from "@/components/home/AboutPreview";
import AssociationHighlights from "@/components/home/AssociationHighlights";
import ContactCallout from "@/components/home/ContactCallout";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import LeadershipPreview from "@/components/home/LeadershipPreview";
import MembershipCallout from "@/components/home/MembershipCallout";
import NewsPreview from "@/components/home/NewsPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import SchoolPreview from "@/components/home/SchoolPreview";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <AssociationHighlights />
      <AboutPreview />
      <SchoolPreview />
      <LeadershipPreview />
      <MembershipCallout />
      <ProjectsPreview />
      <NewsPreview />
      <GalleryPreview />
      <ContactCallout />
    </main>
  );
}
