import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

const routes = [
  {
    path: "/",
    priority: 1,
  },
  {
    path: "/about",
    priority: 0.8,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date("2026-05-28"),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
