import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://inside-reset2027.com").replace(/\/$/, "");

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
