import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from 'markdown-to-jsx'
import Image from 'next/image'
import Link from 'next/link'
import { GradientHeading } from '@/components/ui/gradient-heading'
import RelatedProjects from '@/components/works/RelatedProjects'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'

type Props = {
  params: {
    slug: string
  }
}

type ProjectData = {
  title: string
  description: string
  heroImage: string
  tags: string[]
  year: string
  client: string
  services: string[]
  websiteLink?: string
  testimonial?: string
  content: string
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug) as ProjectData
  const allProjects = getAllProjects()
  
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
                src={project.heroImage}
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
              <Markdown
                options={{
                  overrides: {
                    h1: {
                      component: ({ children }) => (
                        <h1 className="text-3xl font-bold font-calendas mt-12 mb-6 text-neutral-900 dark:text-white">
                          {children}
                        </h1>
                      )
                    },
                    h2: {
                      component: ({ children }) => (
                        <h2 className="text-2xl font-bold font-calendas mt-10 mb-4 text-neutral-900 dark:text-white">
                          {children}
                        </h2>
                      )
                    },
                    h3: {
                      component: ({ children }) => (
                        <h3 className="text-xl font-bold font-calendas mt-8 mb-3 text-neutral-900 dark:text-white">
                          {children}
                        </h3>
                      )
                    },
                    p: {
                      component: ({ children }) => (
                        <p className="mb-6 leading-7 text-neutral-600 dark:text-neutral-400">
                          {children}
                        </p>
                      )
                    },
                    ul: {
                      component: ({ children }) => (
                        <ul className="mb-6 ml-6 space-y-3 list-disc marker:text-[#4361ee]">
                          {children}
                        </ul>
                      )
                    },
                    li: {
                      component: ({ children }) => (
                        <li className="text-neutral-600 dark:text-neutral-400 pl-2">
                          {children}
                        </li>
                      )
                    },
                    strong: {
                      component: ({ children }) => (
                        <strong className="font-semibold text-neutral-900 dark:text-white">
                          {children}
                        </strong>
                      )
                    },
                    em: {
                      component: ({ children }) => (
                        <em className="italic">
                          {children}
                        </em>
                      )
                    }
                  }
                }}
              >
                {project.content}
              </Markdown>
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
          <RelatedProjects 
            currentSlug={slug}
            currentServices={project.services}
            allProjects={allProjects}
          />
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug) as ProjectData

  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }

  return {
    title: `${project.title} | Chennai Web Solutions`,
    description: project.description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/works/${slug}`
    }
  }
} 