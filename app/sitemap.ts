import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Service slugs for static generation
const servicesSlugs = [
  "website-design",
  "website-development",
  "app-development",
  "seo",
  "e-commerce",
  "digital-marketing",
];

// Team members
const teamMembers = [
  "balaji-d",
  "santhosh-d",
  "deepan-b",
  "joshua-vince",
  "yogeshwaran-b"
];

// Location pages for SEO
const locationSlugs = [
  "chennai",
  "tamil-nadu",
  "erode",
  "salem",
  "coimbatore",
  "madurai",
  "trichy",
  "pondicherry",
  "kerala",
  "ambattur",
  "thiruvallur",
  "avadi",
  "india",
  "mumbai",
  "delhi",
  "bangalore",
  "hyderabad",
  "kolkata",
  "pune",
  "noida",
];


interface SanityDocument {
  slug: {
    current: string;
  };
  _updatedAt: string;
}

async function getAllBlogPosts() {
  const query = `*[_type == "post"] {
    slug,
    _updatedAt
  }`;
  return client.fetch<SanityDocument[]>(query);
}

async function getAllProjects() {
  const query = `*[_type == "project"] {
    slug,
    _updatedAt
  }`;
  return client.fetch<SanityDocument[]>(query);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogPosts, projects] = await Promise.all([
    getAllBlogPosts(),
    getAllProjects(),
  ]);

  // Static pages with enhanced SEO priority
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Service pages with location variants
  const servicePages = servicesSlugs.flatMap(slug => [
    // Main service page
    {
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // Location variants for SEO (these will redirect to main service page)
    ...locationSlugs.map(location => ({
      url: `${baseUrl}/services/${slug}/in/${location}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  ]);

  // Location-based service index pages
  const locationServicePages = locationSlugs.map(location => ({
    url: `${baseUrl}/services/in/${location}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Team member pages
  const teamPages = teamMembers.map(member => ({
    url: `${baseUrl}/about/${member}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog post pages
  const blogPostPages = blogPosts.map((post: SanityDocument) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Project pages
  const projectPages = projects.map((project: SanityDocument) => ({
    url: `${baseUrl}/works/${project.slug.current}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationServicePages,
    ...teamPages,
    ...blogPostPages,
    ...projectPages,
  ];
} 