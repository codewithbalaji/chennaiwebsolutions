import { client } from '@/sanity/lib/client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import { Metadata } from 'next';
import { site } from '@/site';

type Props = {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
    const query = `
      *[_type == 'post' && slug.current == $slug] {
        _id,
        title,
        description,
        image
      }[0]
    `;
  
    const data = await client.fetch(query, { slug: params.slug });
  
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
                <div className="relative w-full h-96 my-8">
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
                <a href={value.url} className="text-blue-500 hover:underline">
                    {value.text}
                </a>
            ) : (
                <div className="my-8">
                    <a
                        href={value.url}
                        className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 inline-block"
                    >
                        {value.text}
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
                    className="text-blue-600 hover:underline"
                >
                    {children}
                </a>
            );
        },
        code: ({ children }) => (
            <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
                {children}
            </code>
        ),
    },
    block: {
        h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-12 mb-4">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-10 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-xl font-bold mt-8 mb-4">{children}</h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-lg font-bold mt-6 mb-4">{children}</h4>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-200 pl-4 italic my-6">
                {children}
            </blockquote>
        ),
        normal: ({ children }) => (
            <p className="mb-4 leading-relaxed">{children}</p>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
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

export default async function BlogPostPage({ 
    params 
}: { 
    params: { slug: string } 
}) {
    const { slug } = await params
    const post = await getPost(slug)
    
    
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
        <div className="flex flex-col items-center w-full bg-background">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 pt-8 pb-16">
                {/* Top Resource Tag and Date */}
                <div className="mb-4 flex items-center space-x-2">
                    <span className="px-2 py-1 text-xs bg-gray-200 rounded-full text-black">Blog</span>
                    <span className="text-xs text-muted-foreground">{formatDate(post._createdAt)}</span>
                </div>
                
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                
                {/* Author */}
                <div className="flex items-center space-x-2 mb-8">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={post.author?.image ? urlFor(post.author.image).url() : ''} />
                        <AvatarFallback>{post.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{post.author?.name || 'Author'}</span>
                </div>
                
                {/* Main Image */}
                <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                    <Image 
                        src={urlFor(post.image).url()} 
                        alt={post.title} 
                        fill 
                        className="object-cover" 
                        priority
                    />
                </div>
                
                {/* Description */}
                {post.description && (
                    <div className="mb-8">
                        <p className="text-lg text-muted-foreground leading-relaxed">
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
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="flex items-center space-x-4">
                            <Link href={`/about/${post.author.slug.current}`}>
                                <Avatar className="h-16 w-16 cursor-pointer hover:opacity-80 transition-opacity">
                                    <AvatarImage src={post.author?.image ? urlFor(post.author.image).url() : ''} />
                                    <AvatarFallback>{post.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                                </Avatar>
                            </Link>
                            <div>
                                <Link href={`/about/${post.author.slug.current}`} className="hover:text-primary transition-colors">
                                    <h3 className="text-xl font-semibold">{post.author.name}</h3>
                                </Link>
                                <p className="text-sm text-muted-foreground">Author</p>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-2">Related Posts</h2>
                            <p className="text-sm text-muted-foreground">View all</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link 
                                    key={relatedPost._id} 
                                    href={`/blog/${relatedPost.slug.current}`}
                                    className="group cursor-pointer block"
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="relative h-48 w-full overflow-hidden rounded-lg mb-3">
                                            <Image
                                                src={urlFor(relatedPost.image).url()}
                                                fill
                                                alt={relatedPost.title}
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <span className="px-2 py-1 text-xs bg-gray-100 text-black rounded-full">Blog</span>
                                                <span className="text-xs text-muted-foreground">{formatDate(relatedPost._createdAt)}</span>
                                            </div>
                                            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                                {relatedPost.title}
                                            </h3>
                                            <div className="flex items-center space-x-2">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarImage src={relatedPost.author?.image ? urlFor(relatedPost.author.image).url() : ''} />
                                                    <AvatarFallback>{relatedPost.author?.name?.substring(0, 2) || 'AU'}</AvatarFallback>
                                                </Avatar>
                                                <span className="text-sm">{relatedPost.author?.name || 'Author'}</span>
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
    );
}