"use client";

import { projects } from "./data/projects";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cursor Follower */}
      <div
        className="fixed w-6 h-6 border-2 border-white/30 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform"
          >
            LP<span className="text-purple-500">.</span>
          </a>
          <div className="flex gap-4 md:gap-8 items-center text-sm md:text-base">
            <a
              href="#work"
              className="hover:text-purple-400 transition-colors relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="px-4 md:px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:scale-105 transition-transform"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center relative overflow-hidden" style={{ height: '85vh' }}>
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-[128px] animate-pulse delay-1000" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm backdrop-blur-sm">
              ✨ Available for Freelance
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter">
            <span className="inline-block hover:scale-110 transition-transform cursor-default">
              Lazar
            </span>{" "}
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Petkovic
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Webflow Developer crafting pixel-perfect digital experiences that
            convert
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#work"
              className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-all flex items-center gap-2"
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-white/10 bg-white/5 py-6 overflow-hidden relative">
        <div className="flex gap-8 animate-marquee">
          <div className="flex items-center gap-8 flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold">WEBFLOW DEVELOPER</span>
            <span className="text-purple-500">★</span>
            <span className="text-xl md:text-2xl font-bold">CREATIVE DEVELOPER</span>
            <span className="text-purple-500">★</span>
            <span className="text-xl md:text-2xl font-bold">UI/UX DESIGNER</span>
            <span className="text-purple-500">★</span>
          </div>
          <div className="flex items-center gap-8 flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold">WEBFLOW DEVELOPER</span>
            <span className="text-purple-500">★</span>
            <span className="text-xl md:text-2xl font-bold">CREATIVE DEVELOPER</span>
            <span className="text-purple-500">★</span>
            <span className="text-xl md:text-2xl font-bold">UI/UX DESIGNER</span>
            <span className="text-purple-500">★</span>
          </div>
          <div className="flex items-center gap-8 flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold">WEBFLOW DEVELOPER</span>
            <span className="text-purple-500">★</span>
            <span className="text-xl md:text-2xl font-bold">CREATIVE DEVELOPER</span>
            <span className="text-purple-500">★</span>
            <span className="text-xl md:text-2xl font-bold">UI/UX DESIGNER</span>
            <span className="text-purple-500">★</span>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
              Selected Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              {projects.length} projects that pushed boundaries and delivered
              results
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-105"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-10">🌐</div>
                    </div>
                    {/* Actual Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Project
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-2xl group-hover:rotate-45 transition-transform">
                        ↗
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                About Me
              </h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                I'm a Webflow specialist who believes great design should be
                both beautiful and functional. With 3+ years of experience, I've
                helped businesses transform their digital presence.
              </p>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Previously at Design Studio Sync, now working independently to
                deliver personalized, high-quality solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:scale-105 transition-transform"
                >
                  Work With Me
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects", value: "20+" },
                { label: "Happy Clients", value: "20+" },
                { label: "Years Exp.", value: "2+" },
                { label: "Success Rate", value: "100%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-2xl hover:scale-105 transition-transform"
                >
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold mb-8">Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Webflow Development",
                "Responsive Design",
                "Custom Animations",
                "CMS Integration",
                "SEO Optimization",
                "E-commerce",
                "UI/UX Design",
                "Performance",
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all text-center font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Let's discuss your project
            and bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:lazarpetkovic.web@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:scale-105 transition-transform text-lg"
            >
              lazarpetkovic.web@gmail.com
            </a>
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
