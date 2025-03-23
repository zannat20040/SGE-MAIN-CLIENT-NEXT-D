// src/app/api/sitemap/route.js
import universities from "../../../../public/json/ukUni.json";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Static routes
  const staticRoutes = [
    "/",
    "/study-destinations",
    "/study-destinations/study-in-the-uk",
    "/study-destinations/study-in-the-usa",
    "/study-destinations/study-in-the-australia",
    "/study-destinations/study-in-the-switzerland",
    "/study-destinations/study-in-the-canada",
    "/study-destinations/study-in-the-germany",
  ];

  // Filter universities based on some condition (e.g., exclude certain names)
  const dynamicRoutes = universities
    .filter((university) => university.Name !== "Excluded University Name") // Exclude specific entries
    .map((university) => {
      const encodedName = encodeURIComponent(
        university.Name.replace(/\s+/g, "-")
      );
      return `/study-destinations/study-in-the-uk/${encodedName}`;
    });

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map(
          (route) => `
        <url>
          <loc>${baseUrl}${route}</loc>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
