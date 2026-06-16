'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, HelpCircle, Star, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const guides = [
  {
    name: 'Toni Mancini',
    role: 'Guide d’Eaux Vives & Fondateur',
    desc: 'Professionnel de la montagne et guide d’eau vive passionné aux Orres depuis 2001. Toni connaît les moindres vagues de la Durance sur le bout des doigts.',
    image: '/assets/121798_25_08_22.JPG',
  },
  {
    name: 'Alexandre',
    role: 'Moniteur Diplômé d’État',
    desc: 'Spécialiste de la descente sportive en rafting. Randonneur aguerri, il saura vous guider avec humour et rigueur sur les plus beaux rapides.',
    image: '/assets/121800_25_08_22.JPG',
  },
];

const faqs = [
  {
    q: 'Faut-il savoir nager pour faire du rafting ?',
    a: 'Oui, il est obligatoire de savoir nager au moins 25 mètres et de savoir s’immerger. Vous serez équipé d’un gilet de sauvetage haute flottabilité, mais la nage est indispensable pour votre sécurité.',
  },
  {
    q: 'À partir de quel âge peut-on participer ?',
    a: 'L’activité est accessible aux enfants à partir de 6 ans, accompagnés de leurs parents, sur nos parcours adaptés (Découverte).',
  },
  {
    q: 'Comment s’organise le transport depuis Les Orres ?',
    a: 'Le transport aller-retour est inclus dans le prix de l’activité. Nous nous retrouvons à notre local ESI des Orres 1800 pour un départ en navette à 9H30 ou 14H15.',
  },
  {
    q: 'Que devons-nous apporter ?',
    a: 'Prévoyez uniquement un maillot de bain et une paire de chaussures de sport (baskets) fermées pour aller dans l’eau. Les combinaisons néoprène, gilets et casques vous sont entièrement fournis.',
  },
];

export default function AboutAndFaq() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Guide cards entrance
      gsap.fromTo(
        '.guide-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.guides-container',
            start: 'top 80%',
          },
        }
      );

      // FAQ section entrance
      gsap.fromTo(
        '.faq-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-container',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] dark:from-[#030a10] dark:to-[#051421] transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* Guides Area */}
        <div className="guides-container">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007799] dark:text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              L'Équipe
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-800 dark:text-white tracking-tight">
              Vos Guides <span className="text-gradient">Eaux Vives</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60 text-sm mt-3 max-w-xl mx-auto">
              Diplômés d’État et passionnés, nos guides s’assurent de votre sécurité tout en vous garantissant des moments de pur plaisir et d’échange.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {guides.map((guide, idx) => (
              <div
                key={idx}
                className="guide-card p-6 rounded-3xl glass border border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center gap-6 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#007799]/30">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#ff6b4a] bg-[#ff6b4a]/10 px-2.5 py-1 rounded-md inline-block">
                    {guide.role}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">{guide.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Area */}
        <div className="faq-container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007799] dark:text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-800 dark:text-white tracking-tight">
              Questions <span className="text-gradient">Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="faq-item rounded-2xl glass border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-sm md:text-base text-slate-800 dark:text-white flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#007799] dark:text-[#00f0ff] flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#007799] dark:text-[#00f0ff]' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Smooth height transition for answer wrapper */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-48 border-t border-black/5 dark:border-white/5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="p-6 text-xs md:text-sm text-slate-600 dark:text-white/60 leading-relaxed bg-black/5 dark:bg-black/10">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
