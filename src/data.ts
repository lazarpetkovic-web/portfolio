/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, SkillGroup, Metric, TimelineEvent } from './types';

export const METRICS: Metric[] = [
  {
    id: 'exp',
    value: '6+',
    label: 'Years Experience',
    description: 'Combining robust full-stack architectures with React, automated CMS pipelines, and high-performance database integrations.'
  },
  {
    id: 'completed',
    value: '42+',
    label: 'Projects Delivered',
    description: 'Bespoke corporate spaces, custom real estate, and digital menu architectures.'
  },
  {
    id: 'clients',
    value: '100%',
    label: 'Client Trust Rate',
    description: 'Delivering stellar performance speed, secure API channels, and highly responsive codebases that scale business metrics.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Engineering',
    skills: [
      { name: 'React / Next.js', level: 95, iconName: 'React' },
      { name: 'TypeScript', level: 90, iconName: 'FileCode' },
      { name: 'Tailwind CSS', level: 98, iconName: 'Palette' },
      { name: 'Node.js & APIs', level: 85, iconName: 'Server' },
      { name: 'Framer Motion', level: 92, iconName: 'Sparkles' }
    ]
  },
  {
    category: 'Web Architecture & Systems',
    skills: [
      { name: 'Database Design & SQL', level: 88, iconName: 'Database' },
      { name: 'Webflow CMS Architecture', level: 96, iconName: 'Globe' },
      { name: 'REST & GraphQL APIs', level: 90, iconName: 'Server' },
      { name: 'Cloud Deployments', level: 85, iconName: 'Rocket' },
      { name: 'UI Engineering (Figma)', level: 92, iconName: 'Figma' }
    ]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2022 - Present',
    role: 'Freelance Full-Stack Developer',
    company: 'Self-Employed (LP Digital)',
    description: 'Crafting end-to-end web products, custom API integrations, and robust commercial presentations with next-gen frameworks (Next.js, TypeScript, Webflow).'
  },
  {
    year: '2021 - 2022',
    role: 'Software Engineer (Frontend)',
    company: 'Apex Software Labs',
    description: 'Built and optimized scalable corporate portals, implemented standardized state management, and streamlined deployment pipelines.'
  },
  {
    year: '2019 - 2021',
    role: 'Junior Full-Stack Developer',
    company: 'FlowTech Solutions',
    description: 'Developed core web interfaces, engineered relational database schemas, and integrated third-party REST APIs for client solutions.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 18,
    title: "Karios",
    description:
      "Real-time intelligence platform for engineering teams. Karios monitors workflows in real time, surfaces anomalies before they compound, and gives teams the context to act - featuring smart queues, natural language queries, live health status monitoring, and seamless integrations with tools like Slack, GitHub, Datadog, and more.",
    image: "/projects/kairos/main.jpg",
    galleryImages: [
      "/projects/kairos/gallery-1.jpg",
      "/projects/kairos/gallery-2.jpg",
      "/projects/kairos/gallery-3.jpg",
    ],
    tags: ["SaaS", "Real-time", "Monitoring"],
    link: "https://karios-iota.vercel.app/",
    category: "SaaS",
    caseStudy: {
      challenge: "Karios needed a high-conversion landing page that communicated complex real-time monitoring capabilities to both technical decision-makers and engineering teams. The challenge was to showcase powerful backend features - smart queuing, anomaly detection, natural language querying - in an instantly understandable, visually compelling way without overwhelming visitors.",
      solution: "Designed and built a clean, modern SaaS landing page with live-demo visual elements (metrics stream, health status indicators, smart queue UI) to instantly convey product value. Used a dark-accented palette, clear feature sections, tiered pricing, social proof, and a friction-free early access flow to drive conversions.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    },
  },
  {
    id: 1,
    title: "RB Construction",
    description:
      "Digital presentation of a residential building and apartment offerings, designed to provide potential buyers with clear insights into construction quality, location, and apartment layouts. The website presents all information about the building, available units, and the purchasing process in a modern and transparent way.",
    image: "/projects/rb-construction/main.avif",
    galleryImages: [
      "/projects/rb-construction/gallery-1.avif",
      "/projects/rb-construction/gallery-2.avif",
      "/projects/rb-construction/gallery-3.avif",
    ],
    tags: ["Real Estate", "CMS"],
    link: "https://www.rb-construction75.rs/",
    category: "Real Estate",
    caseStudy: {
      challenge: "RB Construction needed a modern digital presence to showcase their residential building project, with clear apartment layouts, pricing tiers, and a streamlined inquiry system - all while maintaining a trustworthy, premium feel.",
      solution: "Built a custom Webflow CMS with dynamic apartment catalog, interactive floor plan viewer, and automated contact forms. Implemented fast-loading image grids and SEO-optimized content structure.",
      techStack: ["Webflow", "CMS", "JavaScript", "SEO"],
    },
  },
  {
    id: 4,
    title: "Tanja Lux Apartmani",
    description:
      "Digital presentation of a modern apartment complex in Niš, designed to highlight elegant interiors, convenient location, and high level of comfort. Through a carefully designed website, users can easily explore each apartment individually, review amenities, and directly contact the owner, achieving a complete and professional online presence.",
    image: "/projects/tanja-lux/main.jpg",
    galleryImages: [
      "/projects/tanja-lux/gallery-1.jpg",
      "/projects/tanja-lux/gallery-2.jpg",
      "/projects/tanja-lux/gallery-3.jpg",
    ],
    tags: ["Hospitality", "Booking"],
    link: "https://www.apartmani-tanja-lux.rs/",
    category: "Hospitality",
    caseStudy: {
      challenge: "A luxury apartment complex needed a website that conveyed elegance and comfort while making it easy for potential guests to browse units, check amenities, and book directly.",
      solution: "Designed a clean, image-forward interface with individual apartment pages, amenity highlights, location map integration, and a direct contact system. Prioritized mobile responsiveness and fast load times.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    },
  },
  {
    id: 15,
    title: "Lusso Restoran",
    description:
      "Digital presence for Lusso Restoran, an Italian-inspired restaurant offering a refined dining experience. The website presents their menu, ambiance, and reservation system with an elegant design that reflects the restaurant's premium positioning.",
    image: "/projects/lusso-restoran/main.avif",
    galleryImages: [
      "/projects/lusso-restoran/gallery-1.avif",
      "/projects/lusso-restoran/gallery-2.avif",
    ],
    tags: ["Restaurant", "Fine Dining"],
    link: "",
    category: "Restaurant",
    caseStudy: {
      challenge: "An Italian restaurant needed a website that matched the quality of their dining experience - showcasing their menu, atmosphere, and reservation process in an elegant, appetizing way.",
      solution: "Created a visual-first design with high-quality food photography, a categorized menu system, and seamless reservation flow. Used warm tones and typography to reflect the restaurant's brand identity.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
  },
  {
    id: 10,
    title: "Archist Studio",
    description:
      "Digital presentation for an architecture and design studio, showcasing a portfolio of residential and commercial projects. The website highlights the studio's design philosophy, completed works, and approach to creating functional and aesthetic spaces through clean visual storytelling.",
    image: "/projects/archist-studio/main.avif",
    galleryImages: [
      "/projects/archist-studio/gallery-1.avif",
      "/projects/archist-studio/gallery-2.avif",
      "/projects/archist-studio/gallery-3.avif",
    ],
    tags: ["Architecture", "Portfolio"],
    link: "",
    category: "Interior Design",
    caseStudy: {
      challenge: "An architecture studio required a portfolio website that could display large-format project images without sacrificing performance, while communicating their design philosophy and range of work.",
      solution: "Built a minimal, gallery-focused site with lazy-loaded high-res images, project filtering by type, and smooth page transitions. Used a neutral palette to let the work speak for itself.",
      techStack: ["React", "TypeScript", "CSS Grid", "Lazy Loading"],
    },
  },
  {
    id: 17,
    title: "Simple Redizajn",
    description:
      "Complete website redesign project for a restaurant brand, featuring a refreshed visual identity, improved user experience, and modernized digital presence. The redesign focuses on better menu presentation, streamlined navigation, and enhanced mobile experience.",
    image: "/projects/simple-redizajn/main.avif",
    galleryImages: [
      "/projects/simple-redizajn/gallery-1.avif",
      "/projects/simple-redizajn/gallery-2.avif",
      "/projects/simple-redizajn/gallery-3.avif",
    ],
    tags: ["Restaurant", "Redesign"],
    link: "",
    category: "Restaurant",
    caseStudy: {
      challenge: "An existing restaurant site needed a complete visual and structural overhaul - the old design felt dated, navigation was clunky, and mobile experience was poor.",
      solution: "Full redesign with modern typography, streamlined menu presentation, mobile-first layout, and improved call-to-action placement for reservations. Retained brand colors while refreshing everything else.",
      techStack: ["Next.js", "Tailwind CSS", "Mobile First", "UX Redesign"],
    },
  },
  {
    id: 3,
    title: "Megosped",
    description:
      "Digital presentation of transportation and logistics services, designed to provide clients with a clear, reliable, and professional online presence. The website enables potential customers to learn about transport services, explore fleet information and work processes, and quickly get in touch to organize transportation. Positioning Megosped as a modern and reliable partner in road transport.",
    image: "/projects/megosped/main.jpg",
    galleryImages: [
      "/projects/megosped/gallery-1.jpg",
      "/projects/megosped/gallery-2.jpg",
      "/projects/megosped/gallery-3.jpg",
    ],
    tags: ["Logistics", "Corporate"],
    link: "https://www.megosped.rs/",
    category: "Logistics",
    caseStudy: {
      challenge: "A transport and logistics company needed a professional website that communicated reliability and scale, with clear service categories and an easy way for clients to request quotes.",
      solution: "Developed a clean corporate layout with service breakdowns, fleet gallery, company timeline, and integrated contact/quote request forms. Focused on trust signals and clear navigation.",
      techStack: ["Webflow", "CMS", "Corporate Design"],
    },
  },
  {
    id: 5,
    title: "Restaurant Dimbeck",
    description:
      "Developed to unite exceptional gastronomy with elegant online presentation. Focus on authentic atmosphere, seasonal menu, and unique restaurant ambiance, presenting it as a destination for hedonists and fine dining lovers. Through a modern website, users can easily explore the menu, make reservations, and connect with the brand.",
    image: "/projects/dimbeck/main.jpg",
    galleryImages: [
      "/projects/dimbeck/gallery-1.jpg",
      "/projects/dimbeck/gallery-2.jpg",
      "/projects/dimbeck/gallery-3.jpg",
    ],
    tags: ["Restaurant", "Fine Dining"],
    link: "https://www.restaurantdimbeck.de/",
    category: "Restaurant",
    caseStudy: {
      challenge: "A fine dining restaurant in Germany needed an upscale digital presence that matched their Michelin-quality experience, with multi-language support and online reservation capability.",
      solution: "Built a bilingual site with atmospheric photography, seasonal menu display, wine list integration, and reservation system. Used elegant typography and a dark, sophisticated color scheme.",
      techStack: ["Next.js", "TypeScript", "i18n", "Tailwind CSS"],
    },
  },
  {
    id: 6,
    title: "Brena Decor",
    description:
      "Developed to combine sophisticated interior design with personalized space arrangement solutions. Focus on aesthetics, functionality, and high-quality materials, enabling clients to create an ambiance that reflects their style and needs. Showcasing interior design expertise through an elegant digital presence.",
    image: "/projects/brena-decor.jpg",
    tags: ["Interior Design", "Portfolio"],
    link: "https://www.enterijer-brena-decor.rs/",
    category: "Interior Design",
    caseStudy: {
      challenge: "An interior design studio required a portfolio site that could showcase before/after transformations and convey their design philosophy to potential clients browsing on any device.",
      solution: "Designed a gallery-focused site with project categories, before/after sliders, and service descriptions. Kept the interface minimal to keep focus on the visual work.",
      techStack: ["React", "CSS", "Responsive Design"],
    },
  },
  {
    id: 7,
    title: "Monto Bene Panel Construction",
    description:
      "Developed to offer innovative and efficient solutions in modular construction. Using modern sandwich panels and high-quality materials, enabling fast, reliable, and energy-efficient execution of construction projects. The approach combines modern technology, durability, and adaptable design, making it an ideal partner for residential, commercial, and industrial buildings.",
    image: "/projects/monto-bene/main.jpg",
    galleryImages: [
      "/projects/monto-bene/gallery-1.jpg",
      "/projects/monto-bene/gallery-2.jpg",
      "/projects/monto-bene/gallery-3.jpg",
    ],
    tags: ["Construction", "Corporate"],
    link: "https://www.montobenepanelconstruction.rs/",
    category: "Construction",
    caseStudy: {
      challenge: "A modular construction company needed to explain their innovative panel building technology to both residential and commercial clients, with project examples and technical specifications.",
      solution: "Created an informative site with technology explainers, project galleries, technical specs section, and a contact system for quotes. Used industrial-inspired design language.",
      techStack: ["Webflow", "CMS", "Custom Forms"],
    },
  },
  {
    id: 8,
    title: "Mitic Enterijer",
    description:
      "Created to offer premium design solutions for interiors, combining aesthetics, functionality, and quality craftsmanship. Focus on creating spaces that exude elegance, warmth, and practicality, whether for residential or commercial interiors. Each project is designed with attention to detail, using the highest quality materials and contemporary design principles.",
    image: "/projects/mitic-enterijer/main.jpg",
    galleryImages: [
      "/projects/mitic-enterijer/gallery-1.jpg",
      "/projects/mitic-enterijer/gallery-2.jpg",
      "/projects/mitic-enterijer/gallery-3.jpg",
    ],
    tags: ["Interior Design", "Premium"],
    link: "https://www.miticenterijer.rs/",
    category: "Interior Design",
    caseStudy: {
      challenge: "A premium interior design studio needed a sophisticated portfolio that conveyed their attention to detail and ability to handle both residential and commercial projects at the highest level.",
      solution: "Built an elegant, image-rich site with project filtering, detailed case studies for each project, and a seamless inquiry form. Used a refined typography system and generous whitespace.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
  },
  {
    id: 9,
    title: "North-South Transport",
    description:
      "Developed to connect the Balkans and Scandinavia with reliable and efficient transport solutions. Focus on speed, safety, and logistics process optimization, enabling clients to enjoy worry-free cargo delivery with a high level of professionalism and precision.",
    image: "/projects/ns-transport/main.jpg",
    galleryImages: [
      "/projects/ns-transport/gallery-1.jpg",
      "/projects/ns-transport/gallery-2.jpg",
      "/projects/ns-transport/gallery-3.jpg",
    ],
    tags: ["Logistics", "International"],
    link: "https://www.north-south-transport.com/",
    category: "Logistics",
    caseStudy: {
      challenge: "An international logistics company operating between the Balkans and Scandinavia needed a bilingual website that inspired trust and clearly explained their cross-border transport services.",
      solution: "Developed a professional multi-page site with service routes map, fleet showcase, customs documentation guides, and a quote calculator. Optimized for lead generation and mobile access on the road.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "i18n"],
    },
  },
  {
    id: 11,
    title: "Ausleader",
    description:
      "Professional website for Ausleader, a consulting and leadership development firm. The platform presents their services, training programs, and expertise in corporate leadership development with a clean and authoritative brand presence.",
    image: "/projects/ausleader/main.jpg",
    galleryImages: [
      "/projects/ausleader/gallery-1.jpg",
      "/projects/ausleader/gallery-2.jpg",
      "/projects/ausleader/gallery-3.jpg",
    ],
    tags: ["Corporate", "Consulting"],
    link: "",
    category: "Corporate",
    caseStudy: {
      challenge: "A leadership consulting firm needed an authoritative online presence that showcased their expertise, training programs, and client success stories while generating qualified leads.",
      solution: "Designed a professional corporate site with service pages, team profiles, case studies, and a blog for thought leadership content. Implemented clear conversion paths throughout.",
      techStack: ["Webflow", "CMS", "Blog", "Lead Generation"],
    },
  },
  {
    id: 12,
    title: "Dekoracije Res",
    description:
      "Showcase website for Dekoracije Res, an interior decoration service specializing in custom decorative solutions for residential and commercial spaces. The site presents their portfolio of design projects and decoration services with an elegant visual approach.",
    image: "/projects/dekoracije-res/main.avif",
    galleryImages: [
      "/projects/dekoracije-res/gallery-1.avif",
      "/projects/dekoracije-res/gallery-2.avif",
    ],
    tags: ["Interior Design", "Decoration"],
    link: "",
    category: "Interior Design",
    caseStudy: {
      challenge: "An interior decoration business needed a visual portfolio site to attract residential clients and showcase their range of decorative styles and services.",
      solution: "Built a gallery-driven site with style categories, service packages, and before/after transformations. Clean layout with emphasis on high-quality project photography.",
      techStack: ["React", "CSS Grid", "Responsive Design"],
    },
  },
  {
    id: 13,
    title: "Digital IT Solutions",
    description:
      "Educational platform for Digital IT Solutions, a college-level learning center offering specialized IT lessons across various classrooms. The website presents course catalogs, schedules, and classroom information for students pursuing technology education in programming, networking, and digital systems.",
    image: "/projects/digital-it/main.jpg",
    galleryImages: [
      "/projects/digital-it/gallery-1.jpg",
      "/projects/digital-it/gallery-2.jpg",
      "/projects/digital-it/gallery-3.jpg",
    ],
    tags: ["Education", "Technology"],
    link: "",
    category: "Corporate",
    caseStudy: {
      challenge: "An IT education center needed a website that clearly communicated their course offerings across multiple classrooms, with schedules, pricing, and easy enrollment for college students.",
      solution: "Created a structured educational platform with course catalog by subject, classroom schedules, instructor profiles, and an online enrollment system. Focused on clarity and easy navigation.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  },
  {
    id: 14,
    title: "DJ Sync",
    description:
      "Dynamic website for DJ Sync, a professional DJ and entertainment service. The site showcases their music portfolio, event bookings, and equipment setup, designed to attract clients for weddings, clubs, and corporate events.",
    image: "/projects/dj-sync/main.jpg",
    galleryImages: [
      "/projects/dj-sync/gallery-1.jpg",
      "/projects/dj-sync/gallery-2.jpg",
      "/projects/dj-sync/gallery-3.jpg",
    ],
    tags: ["Entertainment", "Events"],
    link: "",
    category: "Hospitality",
    caseStudy: {
      challenge: "A professional DJ needed a high-energy website that showcased their music portfolio, past event photos, and made it easy for clients to book them for weddings, clubs, and corporate events.",
      solution: "Built a dynamic, music-focused site with embedded audio samples, event gallery, booking calendar, and client testimonial section. Designed with a dark, energetic aesthetic matching the brand.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Audio Integration"],
    },
  },
  {
    id: 16,
    title: "Process In",
    description:
      "Digital presentation for Process In, a modern cafe in Niš offering a cozy atmosphere for work, meetings, and relaxation. The website showcases their menu, interior ambiance, location, and the unique concept of combining quality coffee with a productive workspace environment.",
    image: "/projects/process-in/main.avif",
    galleryImages: [
      "/projects/process-in/gallery-1.avif",
      "/projects/process-in/gallery-2.avif",
      "/projects/process-in/gallery-3.avif",
    ],
    tags: ["Cafe", "Hospitality"],
    link: "",
    category: "Hospitality",
    caseStudy: {
      challenge: "A unique cafe-workspace in Niš needed a website that communicated their dual identity as both a quality coffee spot and a productive workspace, with menu and events information.",
      solution: "Designed a warm, inviting site with menu display, workspace gallery, event calendar, and location info. Balanced the coffee shop feel with a clean, work-friendly aesthetic.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
    },
  },
  {
    id: 2,
    title: "Simple Caffe Restaurant",
    description:
      "Complete website redesign for Simple Caffe Restaurant, modernizing their online presence with a clear, organized, and branded presentation. The new design brings better structure, contemporary aesthetics, and improved user experience, with focus on quick access to menu, reservations, and contact information. Originally built 2 years ago, now fully redesigned.",
    image: "/projects/simple-restoran/main.jpg",
    galleryImages: [
      "/projects/simple-restoran/gallery-1.jpg",
      "/projects/simple-restoran/gallery-2.jpg",
      "/projects/simple-restoran/gallery-3.jpg",
    ],
    tags: ["Restaurant", "Redesign"],
    link: "https://www.simplecafferestaurant.rs/",
    category: "Restaurant",
    caseStudy: {
      challenge: "Simple Caffe Restaurant had an outdated site that no longer reflected their brand quality. Navigation was confusing, mobile experience was broken, and the menu was hard to read.",
      solution: "Complete redesign with modern UI patterns, mobile-first responsive layout, an interactive categorized menu, prominent reservation CTA, and improved contact information accessibility.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "UX Redesign"],
    },
  },
];

export const projects = PROJECTS;
