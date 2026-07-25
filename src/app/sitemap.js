import { site } from "@/data/site";

export default function sitemap() {
  return [
    {
      url: `${site.canonicalUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
