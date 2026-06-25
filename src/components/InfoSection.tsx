'use client';

import { useEffect, useRef } from 'react';
import { Bus, MapPin, Compass, ShieldAlert, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InfoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveals
      gsap.fromTo(
        '.reveal-heading',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.reveal-heading',
            start: 'top 85%',
          },
        }
      );

      // Grid cards animate up
      gsap.fromTo(
        '.info-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.info-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="presentation"
      ref={sectionRef}
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] dark:from-[#030a10] dark:to-[#051421] transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#007799]/5 dark:bg-[#007799]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#007799] dark:text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full mb-4 inline-block">
            Présentation de nos activités
          </span>
          <h2 className="reveal-heading text-4xl md:text-6xl font-black uppercase tracking-tight text-[#0f172a] dark:text-white mt-2">
            Rafting & Randonnée Aquatique <br />
            <span className="text-gradient">Au Cœur des Hautes-Alpes</span>
          </h2>
        </div>

        <div className="info-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Descent details */}
          <div className="info-card p-8 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-[#007799]/30 dark:hover:border-[#00f0ff]/30 transition-all duration-300 group hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-[#007799]/10 dark:bg-[#00f0ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#007799]/20 dark:group-hover:bg-[#00f0ff]/20 transition-colors duration-300">
              <Compass className="w-6 h-6 text-[#007799] dark:text-[#00f0ff]" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide text-[#0f172a] dark:text-white mb-4">
              L'Aventure Ludique
            </h3>
            <p className="text-[#0f172a]/70 dark:text-white/70 leading-relaxed text-sm">
              Laissez-vous guider sur les rapides de la Durance. Un parcours exceptionnel de 11 km alliant sensations fortes, moments ludiques et paysages rafraîchissants pour tous les niveaux.
            </p>
          </div>

          {/* Card 2: Transport */}
          <div className="info-card p-8 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-[#007799]/30 dark:hover:border-[#00f0ff]/30 transition-all duration-300 group hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-[#ff6b4a]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff6b4a]/20 transition-colors duration-300">
              <Bus className="w-6 h-6 text-[#ff6b4a]" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide text-[#0f172a] dark:text-white mb-4">
              Transport Inclus
            </h3>
            <p className="text-[#0f172a]/70 dark:text-white/70 leading-relaxed text-sm">
              Navette aller-retour incluse au départ de la station des Orres 1800. Départs fixes à <strong>9h30</strong> et <strong>14h15</strong> selon les créneaux disponibles. Voyagez l'esprit tranquille.
            </p>
          </div>

          {/* Card 3: What to bring */}
          <div className="info-card p-8 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-[#007799]/30 dark:hover:border-[#00f0ff]/30 transition-all duration-300 group hover:scale-[1.02]">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
              <ShieldAlert className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wide text-[#0f172a] dark:text-white mb-4">
              À Prévoir
            </h3>
            <p className="text-[#0f172a]/70 dark:text-white/70 leading-relaxed text-sm">
              Prévoyez une paire de baskets ou de chaussures de sport pouvant aller dans l'eau ainsi qu'un maillot de bain pour mettre sous la combinaison néoprène. Nous fournissons tout le reste du matériel de sécurité.
            </p>
          </div>
        </div>

        {/* Callout box */}
        <div className="info-card mt-12 p-8 rounded-2xl bg-[#007799]/5 dark:bg-gradient-to-r dark:from-[#0a1b2c] dark:to-[#040e18] border border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#007799]/10 dark:bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0 animate-pulse">
              <Sparkles className="w-6 h-6 text-[#007799] dark:text-[#00f0ff]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#0f172a] dark:text-white uppercase tracking-wide">
                Réservation Fortement Conseillée
              </h4>
              <p className="text-[#0f172a]/60 dark:text-white/60 text-sm mt-1">
                Les places partent vite en saison d'été. Planifiez à l'avance votre descente !
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#007799] dark:bg-white text-white dark:text-black font-bold uppercase tracking-wide text-xs hover:bg-[#005c77] dark:hover:bg-[#00f0ff] dark:hover:text-black transition-colors duration-300 flex-shrink-0"
          >
            S'inscrire Maintenant
          </a>
        </div>
      </div>

    </section>
  );
}
