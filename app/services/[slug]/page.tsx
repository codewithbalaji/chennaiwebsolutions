import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/services/ServiceDetail';
import { site } from '@/app/site';

// Import services data
const services = [
  {
    title: "WEBSITE DESIGN",
    description: "Chennai web solutions design/redesign your website in a cost efficient manner and according to the trend",
    icon: "/icons/website-design.svg",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100",
    slug: "website-design",
    unsplashImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
    longDescription: `
      Our website design service focuses on creating visually stunning and user-friendly websites that captivate your audience. We combine aesthetics with functionality to deliver websites that not only look great but also perform exceptionally well.
      
      Our design process includes:
      - Understanding your brand identity and target audience
      - Creating wireframes and prototypes
      - Developing responsive designs that work on all devices
      - Implementing modern UI/UX principles
      - Ensuring accessibility and usability
      
      We stay updated with the latest design trends and technologies to ensure your website stands out from the competition.
    `,
    features: [
      "Custom design tailored to your brand",
      "Responsive layouts for all devices",
      "User experience optimization",
      "Modern and clean aesthetics",
      "Fast loading pages",
      "SEO-friendly structure"
    ],
    process: [
      "Discovery and requirement gathering",
      "Wireframing and prototyping",
      "Visual design",
      "Client feedback and revisions",
      "Finalization and handover"
    ]
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description: "Chennai web Developers are skilled and experience in using the latest website building technologies to give out the best performing site",
    icon: "/icons/website-development.svg",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100",
    slug: "website-development",
    unsplashImage: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=1200&auto=format&fit=crop",
    longDescription: `
      Our website development service transforms designs into fully functional websites with clean code and optimal performance. We use the latest technologies and frameworks to build websites that are fast, secure, and scalable.
      
      Our development expertise includes:
      - Front-end development using HTML5, CSS3, JavaScript
      - Modern frameworks like React, Next.js, and Vue.js
      - Back-end development with Node.js, PHP, and Python
      - Database design and implementation
      - API integration and development
      - Performance optimization
      
      We follow best practices in coding standards and ensure your website is built with future scalability in mind.
    `,
    features: [
      "Clean, maintainable code",
      "Performance optimization",
      "Cross-browser compatibility",
      "Integration with third-party services",
      "Content management systems",
      "Custom functionality development"
    ],
    process: [
      "Technical planning and architecture",
      "Front-end development",
      "Back-end development",
      "Testing and quality assurance",
      "Deployment and launch"
    ]
  },
  {
    title: "APP DEVELOPMENT",
    description: "The user-friendly and responsive mobile applications make your business easily approachable for the clients",
    icon: "/icons/app-development.svg",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100",
    slug: "app-development",
    unsplashImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
    longDescription: `
      Our app development service creates powerful, user-friendly mobile applications for iOS and Android platforms. We focus on delivering apps that provide exceptional user experiences while meeting your business objectives.
      
      Our app development capabilities include:
      - Native iOS and Android development
      - Cross-platform development using React Native and Flutter
      - UI/UX design for mobile interfaces
      - API integration and backend services
      - App store optimization and submission
      - Ongoing maintenance and updates
      
      We build apps that are not only visually appealing but also performant and scalable.
    `,
    features: [
      "Native and cross-platform development",
      "Intuitive user interfaces",
      "Offline functionality",
      "Push notifications",
      "Analytics integration",
      "Secure authentication"
    ],
    process: [
      "Requirement analysis",
      "UI/UX design",
      "Development and coding",
      "Testing across devices",
      "Deployment to app stores",
      "Maintenance and updates"
    ]
  },
  {
    title: "SEO",
    description: "Our SEO experts utilize the keywords to the fullest to rank high. We make your website get optimized as per the Search engine criteria",
    icon: "/icons/seo.svg",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100",
    slug: "seo",
    unsplashImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop",
    longDescription: `
      Our SEO service helps improve your website's visibility in search engine results, driving more organic traffic and potential customers to your business. We implement proven strategies to boost your rankings for relevant keywords.
      
      Our SEO approach includes:
      - Comprehensive website audit and analysis
      - Keyword research and strategy development
      - On-page optimization
      - Technical SEO improvements
      - Content strategy and creation
      - Link building and off-page optimization
      - Regular performance reporting
      
      We stay updated with the latest search engine algorithms to ensure your website maintains and improves its rankings over time.
    `,
    features: [
      "Keyword research and analysis",
      "On-page optimization",
      "Technical SEO",
      "Content optimization",
      "Link building",
      "Local SEO",
      "Performance tracking"
    ],
    process: [
      "SEO audit and analysis",
      "Strategy development",
      "Implementation of on-page changes",
      "Content creation and optimization",
      "Off-page SEO activities",
      "Monitoring and reporting"
    ]
  },
  {
    title: "E-COMMERCE",
    description: "we provide e-commerce solutions to help your business thrive in the online world and make your business more popular and more profitable",
    icon: "/icons/e-commerce.svg",
    color: "from-blue-400 to-blue-500",
    iconBg: "bg-blue-100",
    slug: "e-commerce",
    unsplashImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    longDescription: `
      Our e-commerce service helps businesses establish and grow their online stores. We create custom e-commerce solutions that are user-friendly, secure, and optimized for conversions.
      
      Our e-commerce expertise includes:
      - Platform selection and setup (Shopify, WooCommerce, Magento)
      - Custom e-commerce website development
      - Product catalog management
      - Payment gateway integration
      - Shipping and tax configuration
      - Inventory management systems
      - Mobile-optimized shopping experiences
      
      We focus on creating e-commerce stores that not only look great but also convert visitors into customers.
    `,
    features: [
      "User-friendly product catalogs",
      "Secure payment processing",
      "Inventory management",
      "Order tracking",
      "Customer account management",
      "Mobile shopping optimization",
      "Marketing integration"
    ],
    process: [
      "Platform selection",
      "Store design and setup",
      "Product catalog creation",
      "Payment and shipping setup",
      "Testing and quality assurance",
      "Launch and marketing"
    ]
  },
  {
    title: "DIGITAL MARKETING",
    description: "Our strength of digital marketing experts use their relevant industry experience to make your brand more popular on different social media platforms such as Facebook, YouTube, Google+, Twitter, etc",
    icon: "/icons/digital-marketing.svg",
    color: "from-red-400 to-red-500",
    iconBg: "bg-red-100",
    slug: "digital-marketing",
    unsplashImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
    longDescription: `
      Our digital marketing service helps businesses increase their online presence, reach their target audience, and drive conversions. We create comprehensive digital marketing strategies tailored to your specific goals.
      
      Our digital marketing services include:
      - Social media marketing and management
      - Pay-per-click (PPC) advertising
      - Email marketing campaigns
      - Content marketing
      - Influencer marketing
      - Analytics and performance tracking
      - Conversion rate optimization
      
      We use data-driven approaches to maximize your return on investment and achieve measurable results.
    `,
    features: [
      "Social media marketing",
      "PPC advertising",
      "Email marketing",
      "Content marketing",
      "Influencer partnerships",
      "Analytics and reporting",
      "Conversion optimization"
    ],
    process: [
      "Marketing audit and goal setting",
      "Strategy development",
      "Campaign creation",
      "Implementation and launch",
      "Monitoring and optimization",
      "Reporting and analysis"
    ]
  }
];

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await params before accessing its properties
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return {
    title: `${service.title} | ${site.name}`,
    description: service.description,
    keywords: [service.title.toLowerCase(), ...service.title.toLowerCase().split(' '), 'service', 'chennai'],
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.description,
      url: `${site.url}/services/${service.slug}`,
      siteName: site.name,
      images: [
        {
          url: `${site.url}/images/services/${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  // Await params before accessing its properties
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetail service={service} />;
}
