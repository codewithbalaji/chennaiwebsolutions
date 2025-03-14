import { client } from '@/sanity/lib/client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import { Metadata } from 'next';
import { site } from '@/app/site';
import { GradientHeading } from "@/components/ui/gradient-heading";

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    
    const query = `
      *[_type == 'post' && slug.current == $slug] {
        _id,
        title,
        description,
        image
      }[0]
    `;

    const data = await client.fetch(query, { slug });
  


  
    return {
      applicationName: site.name,
      creator: "Chennai Web Solutions",
      metadataBase: new URL(site.url),
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: urlFor(data.image).url(),
        type: "article",
        locale: "en_IN",
      },
      authors: [{ name: "Chennai Web Solutions" }]
    };
  }
  

// Define custom components for the Portable Text renderer
const ptComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            return (
                <div className="relative w-full h-96 my-8 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={urlFor(value).url()}
                        alt={value.alt || 'Blog image'}
                        fill
                        className="object-contain"
                    />
                </div>
            );
        },
        callToAction: ({ value, isInline }) => 
            isInline ? (
                <a href={value.url} className="text-[#4361ee] hover:underline">
                    {value.text}
                </a>
            ) : (
                <div className="my-8">
                    <a
                        href={value.url}
                        className="inline-flex items-center px-6 py-3 rounded-full text-white bg-[#4361ee] hover:bg-[#4361ee]/90 transition-colors shadow-lg shadow-blue-500/25"
                    >
                        {value.text}
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            ),
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a 
                    href={value.href} 
                    rel={rel} 
                    className="text-[#4361ee] hover:underline"
                >
                    {children}
                </a>
            );
        },
        code: ({ children }) => (
            <code className="bg-neutral-100 dark:bg-zinc-800 rounded px-2 py-1 font-mono text-sm">
                {children}
            </code>
        ),
    },
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-12 mb-4 font-calendas">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-10 mb-4 font-calendas">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold mt-8 mb-4 font-calendas">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-bold mt-6 mb-4 font-calendas">{children}</h4>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#4361ee] pl-4 italic my-6 text-neutral-600 dark:text-neutral-400">
                {children}
            </blockquote>
        ),
        normal: ({ children }) => (
            <p className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">{children}</p>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-600 dark:text-neutral-400">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2 text-neutral-600 dark:text-neutral-400">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,
        number: ({ children }) => <li>{children}</li>,
    },
};

async function getPost(slug: string): Promise<Post> {
    const query = `
        *[ _type == 'post' && slug.current == $slug ] {
            _createdAt,
            _id,
            title,
            description,
            content,
            image,
            author->
        }[0]
    `
    return await client.fetch(query, { slug })
}

async function getRelatedPosts(currentPostId: string) {
    const query = `
        *[_type == 'post' && _id != $currentPostId] | order(_createdAt desc)[0...3] {
            _id,
            title,
            description,
            slug,
            _createdAt,
            image,
            author->
        }
    `;
    return await client.fetch(query, { currentPostId });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post = await getPost(slug);
    
    if (!post) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Post not found</h1>
                    <p className="mt-2">The post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                </div>
            </div>
        );
    }

    const relatedPosts = await getRelatedPosts(post._id);

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
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
                    {/* Top Resource Tag and Date */}
                    <div className="mb-6 flex items-center justify-center space-x-2">
                        <span className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full">Blog</span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(post._createdAt)}</span>
                    </div>
                    
                    {/* Title */}
                    <div className="text-center mb-8">
                        <GradientHeading variant="default" size="xxl" weight="bold" className="mb-6">
                            {post.title}
                        </GradientHeading>
                        
                        {/* Author */}
                        <div className="flex items-center justify-center space-x-3">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={post.author?.image ? urlFor(post.author.image).url() : ''} />
                                <AvatarFallback>{post.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start">
                                <span className="font-medium">{post.author?.name || 'Author'}</span>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">Author</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Main Image */}
                    <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                            src={urlFor(post.image).url()} 
                            alt={post.title} 
                            fill 
                            className="object-cover" 
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30" />
                    </div>
                    
                    {/* Description */}
                    {post.description && (
                        <div className="mb-12">
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                {post.description}
                            </p>
                        </div>
                    )}
                    
                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <PortableText 
                            value={post.content} 
                            components={ptComponents}
                        />
                    </div>
                    
                    {/* Author Bio */}
                    {post.author && (
                        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                            <div className="flex items-center space-x-4">
                                <Link href={`/about/${post.author.slug.current}`}>
                                    <Avatar className="h-16 w-16 cursor-pointer hover:opacity-80 transition-opacity">
                                        <AvatarImage src={post.author?.image ? urlFor(post.author.image).url() : ''} />
                                        <AvatarFallback>{post.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                                    </Avatar>
                                </Link>
                                <div>
                                    <Link href={`/about/${post.author.slug.current}`} className="hover:text-[#4361ee] transition-colors">
                                        <h3 className="text-xl font-bold font-calendas">{post.author.name}</h3>
                                    </Link>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Author</p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl font-bold font-calendas mb-4">Related Posts</h2>
                                <p className="text-neutral-600 dark:text-neutral-400">Discover more articles</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost) => (
                                    <Link 
                                        key={relatedPost._id} 
                                        href={`/blog/${relatedPost.slug.current}`}
                                        className="group"
                                    >
                                        <div className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={urlFor(relatedPost.image).url()}
                                                    fill
                                                    alt={relatedPost.title}
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                            <div className="p-6 space-y-3">
                                                <div className="flex items-center space-x-2">
                                                    <span className="px-3 py-1 text-xs font-semibold bg-[#4361ee]/10 text-[#4361ee] rounded-full">Blog</span>
                                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(relatedPost._createdAt)}</span>
                                                </div>
                                                <h3 className="text-lg font-bold font-calendas group-hover:text-[#4361ee] transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                                <div className="flex items-center space-x-3">
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={relatedPost.author?.image ? urlFor(relatedPost.author.image).url() : ''} />
                                                        <AvatarFallback>{relatedPost.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                                                    </Avatar>
                                                    <span className="text-sm font-medium">{relatedPost.author?.name || 'Author'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}