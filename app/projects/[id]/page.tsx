import { projects } from "../../data/projects";
import { projectDetails } from "../../data/projectDetails";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageLightbox from "./ImageLightbox";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Lazar Petkovic Portfolio`,
    description: project.description,
    keywords: [
      ...project.tags,
      "Webflow",
      "Web Development",
      "Lazar Petkovic",
      project.category,
    ],
    openGraph: {
      title: `${project.title} - Lazar Petkovic`,
      description: project.description,
      type: "website",
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  const details = projectDetails[project.id] || {
    overview:
      "This project showcases modern web design principles combined with functional excellence. Built with Webflow, it demonstrates the power of no-code development paired with design expertise.",
    challenge:
      "Creating a website that stands out while maintaining excellent performance and user experience across all devices.",
    solution:
      "Leveraging Webflow's capabilities to create a custom design system that's both visually impressive and easy to manage.",
    features: [
      {
        title: "Responsive Design",
        desc: "Pixel-perfect across all devices",
      },
      {
        title: "Custom Animations",
        desc: "Smooth, engaging interactions",
      },
      {
        title: "CMS Integration",
        desc: "Easy content management",
      },
      {
        title: "SEO Optimized",
        desc: "Built for search visibility",
      },
      {
        title: "Fast Loading",
        desc: "Optimized performance",
      },
      {
        title: "Accessibility",
        desc: "WCAG compliant design",
      },
    ],
    results: [
      { value: "150%", label: "Traffic Increase" },
      { value: "45%", label: "Conversion Rate" },
      { value: "98", label: "Performance Score" },
      { value: "100%", label: "Client Satisfaction" },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform"
          >
            LP<span className="text-purple-500">.</span>
          </Link>
          <Link
            href="/#work"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
          >
            <span>←</span> Back to Work
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
            >
              <span>←</span> All Projects
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Visit Live Site
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <ImageLightbox src={project.image} alt={project.title} />
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                Category
              </h3>
              <p className="text-xl">{project.category}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                Year
              </h3>
              <p className="text-xl">2024</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                Platform
              </h3>
              <p className="text-xl">Webflow</p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-400 leading-relaxed">{details.overview}</p>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-400 leading-relaxed">
                {details.challenge}
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <p className="text-gray-400 leading-relaxed">
                {details.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {details.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                >
                  <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="p-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl mb-20">
            <h2 className="text-4xl font-bold mb-8">Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {details.results.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {details.testimonial && (
            <div className="p-12 bg-white/5 border border-white/10 rounded-2xl mb-20">
              <div className="text-6xl mb-6 opacity-20">"</div>
              <p className="text-2xl mb-8 leading-relaxed">
                {details.testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full" />
                <div>
                  <div className="font-bold">{details.testimonial.author}</div>
                  <div className="text-gray-400 text-sm">
                    {details.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's create something amazing together
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group block"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-white/10 mb-4 relative overflow-hidden group-hover:scale-105 transition-transform">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl opacity-10">🌐</div>
                    </div>
                    {/* Project Image */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-contain p-2"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{p.category}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2024 Lazar Petkovic. Crafted with passion.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:lazarpetkovic.web@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
