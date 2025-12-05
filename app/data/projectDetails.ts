export interface ProjectDetails {
  overview: string;
  challenge: string;
  solution: string;
  features: Array<{ title: string; desc: string }>;
  results: Array<{ value: string; label: string }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projectDetails: Record<number, ProjectDetails> = {
  1: {
    // RB Construction
    overview:
      "RB Construction 75 required a sophisticated digital platform to showcase their residential development project. The goal was to create a transparent, informative website that would instill confidence in potential buyers while presenting the property's unique value proposition. The site needed to handle complex property information, floor plans, and availability status in real-time.",
    challenge:
      "Creating a real estate website that balances aesthetic appeal with functional property browsing. The client needed an easy way to update apartment availability, pricing, and specifications without technical knowledge, while maintaining a premium brand image.",
    solution:
      "Developed a custom Webflow CMS solution with dynamic property listings, interactive floor plans, and an intuitive admin panel. Implemented advanced filtering, virtual tour integration, and a streamlined inquiry system that connects directly with the sales team.",
    features: [
      {
        title: "Dynamic Property Listings",
        desc: "Real-time apartment availability with detailed specifications",
      },
      {
        title: "Interactive Floor Plans",
        desc: "Visual property exploration with clickable unit selection",
      },
      {
        title: "CMS Integration",
        desc: "Easy content management for property updates and pricing",
      },
      {
        title: "Lead Generation Forms",
        desc: "Optimized inquiry forms with automated email notifications",
      },
      {
        title: "Location Showcase",
        desc: "Interactive maps and neighborhood information",
      },
      {
        title: "Mobile Optimized",
        desc: "Seamless experience across all devices and screen sizes",
      },
    ],
    results: [
      { value: "180%", label: "Increase in Inquiries" },
      { value: "65%", label: "Mobile Traffic" },
      { value: "4.2min", label: "Avg. Session Time" },
      { value: "92%", label: "Client Satisfaction" },
    ],
    testimonial: {
      quote:
        "The website exceeded our expectations. We've seen a significant increase in qualified leads, and clients consistently compliment the professional presentation of our project.",
      author: "RB Construction Team",
      role: "Project Manager",
    },
  },
  2: {
    // Simple Caffe Restaurant
    overview:
      "Simple Caffe Restaurant needed a complete digital transformation to match their refined dining experience. The redesign focused on creating an elegant, user-friendly platform that showcases their culinary offerings while making reservations effortless. This was a full redesign of the original website built 2 years prior, bringing modern design trends and improved functionality.",
    challenge:
      "The original website lacked visual appeal and made it difficult for customers to access key information like menus and reservation options. The restaurant needed a fresh, contemporary design that would attract new customers while maintaining their established brand identity.",
    solution:
      "Created a stunning visual redesign with emphasis on food photography, intuitive navigation, and seamless reservation integration. Implemented a dynamic menu system that allows easy updates for seasonal offerings, and optimized the entire experience for mobile users who make up the majority of restaurant website visitors.",
    features: [
      {
        title: "Digital Menu System",
        desc: "Beautiful, easy-to-update menu with categories and pricing",
      },
      {
        title: "Online Reservations",
        desc: "Integrated booking system with real-time availability",
      },
      {
        title: "Gallery Showcase",
        desc: "High-quality imagery highlighting ambiance and dishes",
      },
      {
        title: "Event Calendar",
        desc: "Promote special events and seasonal offerings",
      },
      {
        title: "Mobile-First Design",
        desc: "Optimized for on-the-go diners searching for restaurants",
      },
      {
        title: "Social Integration",
        desc: "Connected Instagram feed and social media links",
      },
    ],
    results: [
      { value: "220%", label: "Online Reservations" },
      { value: "78%", label: "Mobile Users" },
      { value: "3.8min", label: "Avg. Visit Duration" },
      { value: "95%", label: "Positive Feedback" },
    ],
    testimonial: {
      quote:
        "The redesign completely transformed our online presence. We're getting more reservations than ever, and customers love how easy it is to browse our menu and book a table.",
      author: "Simple Caffe Restaurant",
      role: "Owner",
    },
  },
};
