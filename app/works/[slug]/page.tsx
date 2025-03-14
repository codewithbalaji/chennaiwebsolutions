import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import RelatedProjects from "@/components/works/RelatedProjects"
import { GradientHeading } from "@/components/ui/gradient-heading"

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
    <article className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-neutral-50/50 dark:from-slate-900 dark:to-slate-900 transition-colors duration-300">
      {/* Background dots pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {Array.from({ length: 20 }).map((_, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex justify-around">
              {Array.from({ length: 30 }).map((_, colIndex) => (
                <div 
                  key={`dot-${rowIndex}-${colIndex}`} 
                  className="w-1 h-1 rounded-full bg-gray-400 dark:bg-white m-6"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex flex-col gap-4 text-center mb-8">
              <GradientHeading variant="default" size="xxl" weight="bold">
                {project.title}
              </GradientHeading>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>
            <div className="relative h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={urlFor(project.heroImage).url()}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30" />
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 font-calendas">About the Project</h2>
              <div className="prose dark:prose-invert max-w-none prose-headings:font-calendas prose-p:text-neutral-600 dark:prose-p:text-neutral-400">
                <PortableText value={project.content} />
              </div>
            </div>
            
            <div className="space-y-8 bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg h-fit">
              <div>
                <h3 className="font-semibold mb-2 text-[#4361ee]">Client</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[#4361ee]">Year</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{project.year}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[#4361ee]">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service: string) => (
                    <span
                      key={service}
                      className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              {project.tags && (
                <div>
                  <h3 className="font-semibold mb-2 text-[#4361ee]">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold bg-neutral-100 dark:bg-zinc-800 text-neutral-600 dark:text-neutral-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.websiteLink && (
                <div>
                  <h3 className="font-semibold mb-2 text-[#4361ee]">Website</h3>
                  <Link
                    href={project.websiteLink}
                    target="_blank"
                    className="inline-flex items-center text-[#4361ee] hover:underline gap-2 group"
                  >
                    Visit Website 
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Testimonial Section */}
          {project.testimonial && (
            <div className="mb-24 bg-white dark:bg-zinc-900 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 text-[#4361ee]/10 dark:text-[#4361ee]/5">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-6 font-calendas">Client Testimonial</h2>
              <blockquote className="text-lg italic text-neutral-600 dark:text-neutral-400 relative z-10">
                &quot;{project.testimonial}&quot;
              </blockquote>
              <p className="mt-4 font-semibold text-[#4361ee]">— {project.client}</p>
            </div>
          )}

          {/* Related Projects Section */}
          {project.relatedProjects && project.relatedProjects.length > 0 && (
            <RelatedProjects projects={project.relatedProjects} />
          )}
        </div>
      </div>
    </article>
  )
} 