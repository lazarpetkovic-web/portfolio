import { useNavigate, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer id="main-footer" className="relative z-10 bg-[#0d0d0d] text-zinc-400 border-t border-zinc-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-zinc-800 pb-12 mb-8">

        {/* Brand Col */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <button onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer text-left">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="font-display font-black text-[13px] tracking-[-0.05em] text-zinc-950 leading-none">LP</span>
            </div>
            <span className="font-display font-extrabold text-[15px] tracking-tight text-white">
              Lazar<span className="text-zinc-500 font-light"> Petkovic</span>
            </span>
          </button>
          <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-xs">
            Systematic Next.js Developer and Frontend Engineer crafting high-fidelity digital platforms, scalable CMS layouts, and fast interactive codebases in Europe.
          </p>
        </div>

        {/* Address */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-sans text-[10px] font-black uppercase tracking-widest text-zinc-500">Address</h4>
          <p className="font-sans text-xs text-zinc-300 leading-relaxed">
            Niš, Serbia
          </p>
        </div>

        {/* Email */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-sans text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</h4>
          <a href="mailto:lazarpetkovic.web@gmail.com" className="font-sans text-xs text-zinc-300 hover:text-white transition-colors">
            lazarpetkovic.web@gmail.com
          </a>
        </div>

        {/* Social */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h4 className="font-sans text-[10px] font-black uppercase tracking-widest text-zinc-500">Social Connect</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/lazar7cf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/lazarpetkovic99/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:lazarpetkovic.web@gmail.com"
              className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-650">
        <span>
          &copy; {new Date().getFullYear()} LAZAR PETKOVIC. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
