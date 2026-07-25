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
import { site } from "@/data/site";

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.acronym,
    url: site.canonicalUrl,
    logo: `${site.canonicalUrl}${site.logo}`,
    foundingDate: site.established,
    location: {
      "@type": "Place",
      name: site.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Agona Nsaba",
        addressRegion: "Central Region",
        addressCountry: "GH",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
    </>
  );
}
