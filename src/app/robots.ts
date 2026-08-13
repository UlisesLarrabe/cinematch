import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/room/create"],
      disallow: "/room/",
    },
    sitemap: "https://cinematch.fun/sitemap.xml",
  };
}
