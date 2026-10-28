import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/case-studies", priority: 0.9 },
    { path: "/how-we-work", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
    { path: "/accessibility", priority: 0.2 },
  ];

  return [
    ...routes.map((route) => ({
      url: `${site.domain}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${site.domain}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...caseStudies.map((study) => ({
      url: `${site.domain}/case-studies/${study.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
