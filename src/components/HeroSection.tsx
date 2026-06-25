'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, Flame, Waves } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Set video start time to 5 seconds
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
      // Backup loop checking to restart at 5s when it ends
      const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.currentTime >= videoRef.current.duration - 0.2) {
          videoRef.current.currentTime = 5;
        }
      };
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, []);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-title-reveal',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );
      
      gsap.fromTo(
        '.hero-sub-reveal',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo(
        '.hero-cta-reveal',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.75)', delay: 1.1 }
      );
      
      // Video parallax effect
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[120%] object-cover opacity-60 pointer-events-none"
      >
        <source src="/assets/Rafting sur la Durance avec La Vague  d Orres.mp4" type="video/mp4" />
      </video>

      {/* Dark/Light overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-black/35 transition-colors duration-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md mb-6 hero-sub-reveal">
          <Waves className="w-4 h-4 text-[#00f0ff] animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-white font-bold">
            Une aventure inoubliable sur la Durance
          </span>
        </div>

        {/* Logo Def Display */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto mb-4 sm:mb-6 hero-title-reveal drop-shadow-2xl">
          <Image
            src="/assets/logo-def-transp-light.png"
            alt="La Vague d'Orres"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="text-sm sm:text-lg md:text-2xl text-white/95 max-w-2xl font-semibold tracking-wide mb-8 sm:mb-10 leading-relaxed hero-sub-reveal drop-shadow-md">
          Laissez-vous guider sur les rapides de la Durance (11km), une aventure ludique, sportive et rafraîchissante.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 hero-cta-reveal">
          <a
            href="#presentation"
            className="px-8 py-4 btn-premium-secondary text-sm font-bold tracking-wider uppercase flex items-center justify-center"
          >
            Découvrir l'activité
          </a>
          <a
            href="#contact"
            className="px-8 py-4 btn-premium-primary text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2"
          >
            <Flame className="w-5 h-5 text-white animate-pulse" />
            Réserver Maintenant
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#presentation"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer drop-shadow-sm"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Faites défiler</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#00f0ff]" />
      </a>
    </section>
  );
}
