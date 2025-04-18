import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blogs";
import { getAllProjects } from "@/lib/projects";

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

  ]);



  // Team member pages
  const teamPages = teamMembers.map(member => ({
    url: `${baseUrl}/about/${member}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog post pages
  const blogPostPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Project pages
  const projectPages = projects.map(project => ({
    url: `${baseUrl}/works/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...teamPages,
    ...blogPostPages,
    ...projectPages,
  ];
} 