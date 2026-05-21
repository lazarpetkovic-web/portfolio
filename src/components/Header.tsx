/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, MessageSquare } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-50/90 backdrop-blur-md py-4 border-b border-zinc-200/60 shadow-xs' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2"
          >
            {/* LP monogram logo */}
            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
              <span className="font-display font-black text-[13px] tracking-[-0.05em] text-white leading-none">LP</span>
            </div>
            <span className="font-display font-extrabold text-[15px] tracking-tight text-zinc-900">
              Lazar<span className="text-zinc-500 font-light"> Petkovic</span>
            </span>
          </a>
        </div>

        {/* Center Navigation Links - Reference: "Personal", "Business", "Partner", "About Us" */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-10">
          <button
            id="nav-link-work"
            onClick={() => scrollToSection('work-section')}
            className="font-sans text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Projects
          </button>
          <button
            id="nav-link-expertise"
            onClick={() => scrollToSection('expertise-section')}
            className="font-sans text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Expertise
          </button>
          <button
            id="nav-link-bio"
            onClick={() => scrollToSection('bio-section')}
            className="font-sans text-[13px] font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            About Me
          </button>
        </nav>

        {/* Right Action Button - Reference: "Sign In" outlined pill button */}
        <div className="hidden md:block">
          <button
            id="header-cta-btn"
            onClick={() => scrollToSection('contact-section')}
            className="group relative inline-flex items-center justify-center px-5 py-2 font-sans text-xs font-semibold text-zinc-900 tracking-tight bg-transparent border border-zinc-900 rounded-full overflow-hidden transition-all duration-300 hover:bg-zinc-900 hover:text-white"
          >
            Contact me
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-700 hover:text-zinc-900 border border-zinc-200 rounded-lg focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col justify-center px-8 transition-transform duration-550 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full border border-zinc-200 text-zinc-500"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col gap-8">
          <button
            id="mobile-nav-link-work"
            onClick={() => scrollToSection('work-section')}
            className="font-display font-bold text-3xl text-left text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Projects
          </button>
          <button
            id="mobile-nav-link-expertise"
            onClick={() => scrollToSection('expertise-section')}
            className="font-display font-bold text-3xl text-left text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Expertise
          </button>
          <button
            id="mobile-nav-link-bio"
            onClick={() => scrollToSection('bio-section')}
            className="font-display font-bold text-3xl text-left text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            About Me
          </button>
          <button
            id="mobile-nav-link-contact"
            onClick={() => scrollToSection('contact-section')}
            className="font-display font-bold text-3xl text-left text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="absolute bottom-12 left-8 right-8 flex flex-col gap-4 border-t border-zinc-150 pt-8 font-sans text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-zinc-400" />
            <span>Niš, Serbia (CET)</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-zinc-400" />
            <span>lazarpetkovic.web@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}
