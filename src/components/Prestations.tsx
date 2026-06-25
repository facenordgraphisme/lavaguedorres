'use client';

import { useEffect, useRef } from 'react';
import { Shield, Sparkles, Award, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prestations = [
  {
    title: 'Rafting sur la Durance',
    desc: 'Le rafting est une activité nautique de pleine nature qui consiste à descendre une rivière à bord d’un bateau pneumatique. Entre passages calmes et rapides plus sportifs, cette aventure conviviale et ludique met l’accent sur la découverte de la nature, le dépassement de soi et l’esprit d’équipe. Descente de 11 km de Châteauroux-les-Alpes à Embrun (environ 1h30 de navigation).',
    price: '38€',
    age: 'À partir de 6 ans (accompagné)',
    gear: 'Prévoir un maillot de bain ainsi qu’une paire de chaussures fermées avec talons et orteils couverts.',
    dep: 'Deux départs par jour : 9h30 & 14h15',
    icon: Star,
  },
  {
    title: 'Randonnée Aquatique (Canyon d’initiation)',
    desc: 'Activité de pleine nature qui consiste à évoluer dans le lit d’un torrent encaissé, en alternant marche et nage. Franchissez des obstacles divers en glissant sur de véritables toboggans naturels sculptés par la rivière et en réalisant des sauts dans des vasques. Sans rappel ni manipulation de cordes, cette formule permet de découvrir le canyoning de manière ludique, progressive et accessible. Environ 2 km de montée et descente au ravin du Couleau pour 110m de dénivelé.',
    price: '45€',
    age: 'À partir de 6 ans (accompagné)',
    gear: 'Prévoir un maillot de bain et une paire de chaussures avec une bonne semelle.',
    dep: 'Départs uniquement l’après-midi',
    icon: Sparkles,
  },
];

const equipments = [
  'Combinaison néoprène isotherme intégrale',
  'Gilet de flottabilité haute visibilité aux normes CE',
  'Casque de protection eau vive robuste',
  'Pagaie adaptée à l’activité',
];

export default function Prestations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.prest-col',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="prestations"
      ref={containerRef}
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#e2e8f0] to-[#f8fafc] dark:from-[#051421] dark:to-[#030a10] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Prestations */}
          <div className="prest-col space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#007799] dark:text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
                Formules & Services
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0f172a] dark:text-white">
                Nos Prestations <br />
                <span className="text-gradient">Eaux Vives</span>
              </h2>
            </div>

            <div className="space-y-6">
              {prestations.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl glass border border-black/5 dark:border-white/5 hover:border-[#007799]/20 dark:hover:border-[#00f0ff]/20 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#007799]/10 dark:bg-[#00f0ff]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#007799]/20 dark:group-hover:bg-[#00f0ff]/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#007799] dark:text-[#00f0ff]" />
                    </div>
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <h3 className="text-lg font-bold text-[#0f172a] dark:text-white uppercase tracking-wide">
                          {item.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-[#ff6b4a]/10 text-[#ff6b4a] text-sm font-black tracking-wider border border-[#ff6b4a]/20">
                          À partir de {item.price} / pers.
                        </span>
                      </div>
                      <p className="text-[#0f172a]/70 dark:text-white/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 border-t border-black/5 dark:border-white/5 text-xs">
                        <div>
                          <strong className="text-[#007799] dark:text-[#00f0ff]">Âge :</strong> {item.age}
                        </div>
                        <div>
                          <strong className="text-[#007799] dark:text-[#00f0ff]">Départs :</strong> {item.dep}
                        </div>
                        <div className="col-span-1 md:col-span-2">
                          <strong className="text-[#ff6b4a]">Tenue :</strong> {item.gear}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Equipements & Distinctions */}
          <div className="prest-col space-y-12 lg:pl-6">
            {/* Equipements */}
            <div className="p-8 rounded-3xl glass border border-black/5 dark:border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold uppercase tracking-wide text-[#0f172a] dark:text-white">
                  Équipements Fournis
                </h3>
              </div>
              <ul className="space-y-4">
                {equipments.map((eq, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-[#0f172a]/70 dark:text-white/70">
                    <span className="w-2 h-2 rounded-full bg-[#007799] dark:bg-[#00f0ff] flex-shrink-0" />
                    {eq}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#0f172a]/40 dark:text-white/40 mt-6 italic">
                * Tout notre matériel est désinfecté et contrôlé rigoureusement après chaque descente.
              </p>
            </div>

            {/* Distinctions */}
            <div className="p-8 rounded-3xl glass border border-black/5 dark:border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b4a]/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#ff6b4a]" />
                <h3 className="text-xl font-bold uppercase tracking-wide text-[#0f172a] dark:text-white">
                  Labels & Distinctions
                </h3>
              </div>
              <p className="text-[#0f172a]/70 dark:text-white/70 text-sm leading-relaxed mb-4">
                La Vague d’Orres est fière de proposer des prestations encadrées par des guides diplômés d’État d'eaux vives, garantissant le plus haut niveau de sécurité, de professionnalisme et de respect de l'environnement.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0f172a] dark:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-2 rounded-lg">
                  Moniteurs Diplômés d'État
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0f172a] dark:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-2 rounded-lg">
                  ESI Partenaire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
