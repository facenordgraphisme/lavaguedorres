'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Anchor, Sun, Moon, Menu, X, ArrowRight, Waves } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import gsap from 'gsap';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile menu overlay
  useEffect(() => {
    if (mobileMenuOpen) {
      // Lock scrolling
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        clipPath: 'circle(150% at 90% 10%)',
        duration: 0.85,
        ease: 'power4.inOut',
      });
      tl.fromTo(
        '.mobile-nav-link',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      );
      tl.fromTo(
        '.mobile-nav-footer',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      );
    } else {
      // Unlock scrolling
      document.body.style.overflow = '';
      
      gsap.to(overlayRef.current, {
        clipPath: 'circle(0% at 90% 10%)',
        duration: 0.75,
        ease: 'power4.inOut',
      });
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 left-0 w-full z-50 px-4 md:px-8 flex justify-center pointer-events-none">
        <nav
          className={`w-full max-w-5xl rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between px-6 py-0 border shadow-lg ${
            scrolled
              ? 'bg-white/95 dark:bg-[#030a10]/90 border-slate-200/80 dark:border-white/10 backdrop-blur-md py-0.5'
              : 'bg-white/70 dark:bg-[#030a10]/55 border-slate-100/50 dark:border-white/5 backdrop-blur-sm'
          }`}
        >
          <a href="#" className="flex items-center group">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 -my-2 sm:-my-5 overflow-hidden transition-transform duration-500 group-hover:scale-105">
              {/* Light Theme Logo */}
              <Image
                src="/assets/logo def transp.png"
                alt="La Vague d'Orres Logo"
                fill
                className="object-contain dark:hidden"
                priority
              />
              {/* Dark Theme Logo (Clear/Bright colors) */}
              <Image
                src="/assets/logo-def-transp-light.png"
                alt="La Vague d'Orres Logo"
                fill
                className="object-contain hidden dark:block"
                priority
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-slate-700 dark:text-white/80">
            <a href="#presentation" className="hover:text-[#007799] dark:hover:text-[#00f0ff] transition-colors duration-200">
              L'Aventure
            </a>
            <a href="#prestations" className="hover:text-[#007799] dark:hover:text-[#00f0ff] transition-colors duration-200">
              Prestations
            </a>
            <a href="#gallery" className="hover:text-[#007799] dark:hover:text-[#00f0ff] transition-colors duration-200">
              Galerie
            </a>
            <a href="#contact" className="hover:text-[#007799] dark:hover:text-[#00f0ff] transition-colors duration-200">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-[#00f0ff] hover:scale-105 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Desktop Booking Link */}
            <a
              href="#contact"
              className="hidden sm:flex relative px-5 py-2 rounded-full overflow-hidden text-xs font-bold tracking-wider uppercase text-white bg-[#007799] hover:bg-[#005c77] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 items-center gap-2 group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              <Anchor className="w-3.5 h-3.5" />
              Réserver
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-white transition-all duration-200"
              aria-label="Open Menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        style={{ clipPath: 'circle(0% at 90% 10%)' }}
        className="fixed inset-0 z-[100] w-full h-dvh overflow-y-auto bg-[#030a10] text-white md:hidden"
      >
        <div className="min-h-full flex flex-col justify-start gap-8 p-6">
          {/* Header inside menu */}
          <div className="flex items-center justify-between w-full flex-shrink-0">
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-[#00f0ff] animate-pulse" />
              <span className="font-black tracking-widest text-sm text-[#00f0ff]">LA VAGUE D'ORRES</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links container */}
          <div ref={linksRef} className="flex flex-col gap-5 py-2 flex-shrink-0">
            {[
              { label: "L'Aventure Durance", href: '#presentation' },
              { label: 'Nos Prestations', href: '#prestations' },
              { label: 'Galerie Photos', href: '#gallery' },
              { label: 'Réservation & Contact', href: '#contact' },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={handleLinkClick}
                className="mobile-nav-link text-3xl font-black uppercase tracking-tight text-white/70 hover:text-[#00f0ff] transition-colors duration-300 flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-6 h-6 text-[#00f0ff] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Footer info inside menu */}
          <div className="mobile-nav-footer border-t border-white/10 pt-4 space-y-3 flex-shrink-0">
            <div className="text-xs text-white/50 space-y-1">
              <p className="font-bold text-[#00f0ff] uppercase tracking-wider">Accueil & Local</p>
              <p>ESI 1800, Les Oriannes des Sources</p>
              <p>05200 Les Orres</p>
            </div>
            
            <a
              href="tel:0673458434"
              className="w-full py-3.5 rounded-full bg-[#ff6b4a] text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Anchor className="w-4 h-4" />
              Appeler 06 73 45 84 34
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
