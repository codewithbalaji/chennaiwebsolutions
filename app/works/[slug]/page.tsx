import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import RelatedProjects from "@/components/works/RelatedProjects"

type Props = {
  params: {
    slug: string
  }
}

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    description,
    heroImage,
    tags,
    year,
    client,
    services,
    websiteLink,
    content,
    testimonial,
    "relatedProjects": *[_type == "project" && slug.current != $slug && count(services[@ in ^.services]) > 0][0...3]{
      title,
      description,
      heroImage,
      slug,
      services
    }
  }`

  const project = await client.fetch(query, { slug })
  return project
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-b from-white to-neutral-100 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex flex-col gap-4 text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">{project.description}</p>
          </div>
          <div className="relative h-[60vh] rounded-2xl overflow-hidden">
            <Image
              src={urlFor(project.heroImage).url()}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">About the Project</h2>
            <div className="prose dark:prose-invert max-w-none">
              <PortableText value={project.content} />
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-2">Client</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{project.client}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Year</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{project.year}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service: string) => (
                  <span
                    key={service}
                    className="px-3 py-1 text-sm bg-[#4361ee]/10 text-[#4361ee] rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            {project.tags && (
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-neutral-100 dark:bg-zinc-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.websiteLink && (
              <div>
                <h3 className="font-semibold mb-2">Website</h3>
                <Link
                  href={project.websiteLink}
                  target="_blank"
                  className="text-[#4361ee] hover:underline"
                >
                  Visit Website →
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Testimonial Section */}
        {project.testimonial && (
          <div className="mb-24 bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6">Client Testimonial</h2>
            <blockquote className="text-lg italic text-neutral-600 dark:text-neutral-400">
              &quot;{project.testimonial}&quot;
            </blockquote>
            <p className="mt-4 font-semibold">— {project.client}</p>
          </div>
        )}

        {/* Related Projects Section */}
        {project.relatedProjects && project.relatedProjects.length > 0 && (
          <RelatedProjects projects={project.relatedProjects} />
        )}
      </div>
    </article>
  )
} 