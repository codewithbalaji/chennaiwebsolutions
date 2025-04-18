import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { GradientHeading } from '@/components/ui/gradient-heading'
import { getTeamMemberBySlug } from '@/lib/about'

type Props = {
  params: {
    slug: string
  }
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = params
  const member = getTeamMemberBySlug(slug)
  
  if (!member) {
    notFound()
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white to-neutral-50/50 dark:from-slate-900 dark:to-slate-900 transition-colors duration-300">
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
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30" />
            </div>
            <div>
              <GradientHeading variant="default" size="xxl" weight="bold" className="mb-6">
                {member.name}
              </GradientHeading>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const member = getTeamMemberBySlug(slug)

  if (!member) {
    return {
      title: 'Team Member Not Found'
    }
  }

  return {
    title: `${member.name} | Chennai Web Solutions`,
    description: member.bio,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about/${slug}`
    }
  }
}
