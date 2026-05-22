/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  FileText,
  Clock,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { ContactInquiry } from '../types';

export default function ContactSection() {
  // Form elements state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Form submitting and validation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingSuccess, setSubmittingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Inquiry list
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);

  // Load historic inquiries from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem('lp_portfolio_inquiries');
    if (stored) {
      try {
        setInquiries(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse inquiries:', e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Field Validation
    if (!name.trim()) {
      setErrorMessage('Full Name is required');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('A valid Email address is required');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorMessage('Please write a message detailing your request (min. 10 chars)');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry: ContactInquiry = {
        name,
        email,
        projectType: 'Direct Inquiry',
        budget: 'TBD',
        message,
        createdAt: new Date().toISOString()
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem('lp_portfolio_inquiries', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmittingSuccess(true);
      setMessage('');
    }, 1200);
  };

  const resetSuccessState = () => {
    setSubmittingSuccess(false);
  };

  const briefItems = [
    {
      icon: FileText,
      label: 'Project Type',
      desc: 'Webflow site, Next.js app, redesign, or something custom - briefly describe what you need built.'
    },
    {
      icon: MessageSquare,
      label: 'Goals & Requirements',
      desc: 'Share your key goals, must-have features, design references, or any specific integrations needed.'
    },
    {
      icon: Clock,
      label: 'Timeline & Budget',
      desc: 'Let me know your preferred launch window and rough budget range so I can plan accordingly.'
    }
  ];

  return (
    <section id="contact-section" className="relative py-28 bg-[#0d0d0d] text-white overflow-hidden scroll-mt-24">
      
      {/* Background visual light leak */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-zinc-800/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* ================= LET'S CONNECT THERE GIANT HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-zinc-800 pb-16 mb-16">
          <div className="max-w-4xl">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
              // Collaboration
            </span>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl p-1 tracking-tighter text-white uppercase leading-[0.85] select-none">
              Let's Connect<br />There
            </h2>
          </div>

          {/* Hire Me Now floating action */}
          <div className="flex-shrink-0 self-start lg:self-center pr-4">
            <a
              href="mailto:lazarpetkovic.web@gmail.com"
              className="inline-flex items-center gap-2.5 bg-white text-zinc-950 font-sans text-xs font-black uppercase px-6 py-4 rounded-full shadow-lg hover:bg-zinc-100 transition-all duration-300 transform hover:scale-105"
            >
              Hire Me Now!
              <span className="w-5 h-5 rounded-full bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold">
                →
              </span>
            </a>
          </div>
        </div>

        {/* 2-Column form and info layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Project Brief info panel */}
          <div className="lg:col-span-5 flex flex-col gap-8 p-8 bg-zinc-950 rounded-3xl border border-zinc-800 h-full">

            {/* Top: Intro text */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                // How to reach out
              </span>
              <h3 className="font-display font-bold text-2xl text-white leading-tight">
                Send me your project brief
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                The best way to kick things off is a short, clear brief. You don't need a full specification - just give me enough context to understand your vision and I'll take it from there.
              </p>
            </div>

            {/* Brief checklist items */}
            <div className="flex flex-col gap-5">
              {briefItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-zinc-600 transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-white mb-1">{item.label}</p>
                    <p className="font-sans text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>



          </div>

          {/* Right: Message sending form elements */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 h-full flex flex-col justify-between transition-all duration-500 hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/20">
              
              <div className="flex flex-col gap-1 mb-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  // Get in touch
                </span>
                <h3 className="font-display font-bold text-2xl text-white leading-tight">
                  Contact Me
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">Available for new projects</span>
                </div>
                <span className="text-zinc-700 text-[10px] hidden sm:inline">|</span>
                <a href="mailto:lazarpetkovic.web@gmail.com" className="font-mono text-[11px] text-zinc-300 hover:text-white transition-colors underline underline-offset-2">
                  lazarpetkovic.web@gmail.com
                </a>
              </div>
              <p className="font-sans text-[11px] text-zinc-600 leading-relaxed mb-4">
                I typically respond within <span className="text-zinc-400 font-semibold">24 hours</span>. For urgent projects, reach out directly via email.
              </p>

              {!submittingSuccess ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6" id="inquiry-form">
                  {errorMessage && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2 text-xs text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group/field">
                      <label className="font-mono text-[9px] text-zinc-500 uppercase block mb-1.5 font-bold group-hover/field:text-zinc-300 transition-colors duration-300">YOUR FULL NAME</label>
                      <input
                        id="inquiry-name"
                        type="text"
                        placeholder="e.g. John D."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 font-mono text-xs text-white outline-none transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800/80 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400/30"
                      />
                    </div>
                    <div className="group/field">
                      <label className="font-mono text-[9px] text-zinc-500 uppercase block mb-1.5 font-bold group-hover/field:text-zinc-300 transition-colors duration-300">YOUR EMAIL ADDRESS</label>
                      <input
                        id="inquiry-email"
                        type="email"
                        placeholder="e.g. client@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 font-mono text-xs text-white outline-none transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800/80 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400/30"
                      />
                    </div>
                  </div>

                  <div className="group/field">
                    <label className="font-mono text-[9px] text-zinc-500 uppercase block mb-1.5 font-bold group-hover/field:text-zinc-300 transition-colors duration-300">PROJECT DESCRIPTION</label>
                    <textarea
                      id="inquiry-message"
                      rows={5}
                      placeholder="Detail your requirements, desired technology stack, preferred milestones, or reference projects..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 font-mono text-xs text-white outline-none transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800/80 focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-inquiry-btn"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-zinc-950 font-sans text-xs font-black uppercase tracking-wider hover:bg-zinc-100 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                        SENDING INQUIRY...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div id="enquiry-success-panel" className="flex flex-col items-center justify-center text-center py-6 animate-fadeIn flex-1">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Brief Submitted Successfully</h3>
                  <p className="text-xs text-zinc-400 font-sans max-w-sm mb-6 leading-relaxed">
                    Thank you! Lazar Petkovic has received your project brief and will get back to you within <span className="text-white font-semibold">24 hours</span>.
                  </p>
                  <button
                    type="button"
                    onClick={resetSuccessState}
                    className="px-5 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 font-mono text-xs uppercase hover:bg-zinc-800 hover:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* localStorage persistent records log */}
              {inquiries.length > 0 && (
                <div className="border-t border-zinc-800 pt-6 mt-8">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-3 font-semibold">
                    Submitted Logs (LocalStorage Cache)
                  </span>
                  <div className="flex flex-col gap-2 max-h-24 overflow-y-auto">
                    {inquiries.slice(0, 2).map((inq, index) => (
                      <div key={index} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 flex justify-between items-center text-[10px] font-mono">
                        <span className="text-white truncate max-w-[150px]">{inq.name}</span>
                        <span className="text-zinc-500 text-[9px]">{inq.projectType}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
