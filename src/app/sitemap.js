import { site } from "@/data/site";

export default function sitemap() {
  return [
    {
      url: `${site.canonicalUrl}/news/65th-anniversary-launch`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.canonicalUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.canonicalUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.canonicalUrl}/personalities`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.canonicalUrl}/personalities/rev-dr-kwabena-aboagye`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${site.canonicalUrl}/personalities/john-peter-dunn`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
