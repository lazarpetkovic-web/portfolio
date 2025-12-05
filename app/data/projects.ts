export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RB Construction",
    description:
      "Digital presentation of a residential building and apartment offerings, designed to provide potential buyers with clear insights into construction quality, location, and apartment layouts. The website presents all information about the building, available units, and the purchasing process in a modern and transparent way.",
    image: "/projects/rb-construction.jpg",
    tags: ["Webflow", "Real Estate", "CMS"],
    link: "https://www.rb-construction75.rs/",
    category: "Real Estate",
  },
  {
    id: 2,
    title: "Simple Caffe Restaurant",
    description:
      "Complete website redesign for Simple Caffe Restaurant, modernizing their online presence with a clear, organized, and branded presentation. The new design brings better structure, contemporary aesthetics, and improved user experience, with focus on quick access to menu, reservations, and contact information. Originally built 2 years ago, now fully redesigned.",
    image: "/projects/simple-restoran.png",
    tags: ["Webflow", "Restaurant", "Redesign"],
    link: "https://www.simplecafferestaurant.rs/",
    category: "Restaurant",
  },
  {
    id: 3,
    title: "Megosped",
    description:
      "Digital presentation of transportation and logistics services, designed to provide clients with a clear, reliable, and professional online presence. The website enables potential customers to learn about transport services, explore fleet information and work processes, and quickly get in touch to organize transportation. Positioning Megosped as a modern and reliable partner in road transport.",
    image: "/projects/megosped.png",
    tags: ["Webflow", "Logistics", "Corporate"],
    link: "https://www.megosped.rs/",
    category: "Logistics",
  },
  {
    id: 4,
    title: "Tanja Lux Apartmani",
    description:
      "Digital presentation of a modern apartment complex in Niš, designed to highlight elegant interiors, convenient location, and high level of comfort. Through a carefully designed website, users can easily explore each apartment individually, review amenities, and directly contact the owner, achieving a complete and professional online presence.",
    image: "/projects/tanja-lux.jpg",
    tags: ["Webflow", "Hospitality", "Booking"],
    link: "https://www.apartmani-tanja-lux.rs/",
    category: "Hospitality",
  },
  {
    id: 5,
    title: "Restaurant Dimbeck",
    description:
      "Developed to unite exceptional gastronomy with elegant online presentation. Focus on authentic atmosphere, seasonal menu, and unique restaurant ambiance, presenting it as a destination for hedonists and fine dining lovers. Through a modern website, users can easily explore the menu, make reservations, and connect with the brand.",
    image: "/projects/dimbeck.jpg",
    tags: ["Webflow", "Restaurant", "Fine Dining"],
    link: "https://www.restaurantdimbeck.de/",
    category: "Restaurant",
  },
  {
    id: 6,
    title: "Brena Decor",
    description:
      "Developed to combine sophisticated interior design with personalized space arrangement solutions. Focus on aesthetics, functionality, and high-quality materials, enabling clients to create an ambiance that reflects their style and needs. Showcasing interior design expertise through an elegant digital presence.",
    image: "/projects/brena-decor.jpg",
    tags: ["Webflow", "Interior Design", "Portfolio"],
    link: "https://www.enterijer-brena-decor.rs/",
    category: "Interior Design",
  },
  {
    id: 7,
    title: "Monto Bene Panel Construction",
    description:
      "Developed to offer innovative and efficient solutions in modular construction. Using modern sandwich panels and high-quality materials, enabling fast, reliable, and energy-efficient execution of construction projects. The approach combines modern technology, durability, and adaptable design, making it an ideal partner for residential, commercial, and industrial buildings.",
    image: "/projects/montobene.jpg",
    tags: ["Webflow", "Construction", "Corporate"],
    link: "https://www.montobenepanelconstruction.rs/",
    category: "Construction",
  },
  {
    id: 8,
    title: "Mitic Enterijer",
    description:
      "Created to offer premium design solutions for interiors, combining aesthetics, functionality, and quality craftsmanship. Focus on creating spaces that exude elegance, warmth, and practicality, whether for residential or commercial interiors. Each project is designed with attention to detail, using the highest quality materials and contemporary design principles.",
    image: "/projects/mitic.jpg",
    tags: ["Webflow", "Interior Design", "Premium"],
    link: "https://www.miticenterijer.rs/",
    category: "Interior Design",
  },
  {
    id: 9,
    title: "North-South Transport",
    description:
      "Developed to connect the Balkans and Scandinavia with reliable and efficient transport solutions. Focus on speed, safety, and logistics process optimization, enabling clients to enjoy worry-free cargo delivery with a high level of professionalism and precision.",
    image: "/projects/north-south.jpg",
    tags: ["Webflow", "Logistics", "International"],
    link: "https://www.north-south-transport.com/",
    category: "Logistics",
  },
];
