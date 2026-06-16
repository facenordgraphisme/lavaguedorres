'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/assets/121783_25_08_22.JPG',
  '/assets/121784_25_08_22.JPG',
  '/assets/121785_25_08_22.JPG',
  '/assets/121786_25_08_22.JPG',
  '/assets/121787_25_08_22.JPG',
  '/assets/121788_25_08_22.JPG',
  '/assets/121789_25_08_22.JPG',
  '/assets/121790_25_08_22.JPG',
];

export default function PhotoGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollEl = scrollRef.current;
      if (!scrollEl) return;

      const totalWidth = scrollEl.scrollWidth;
      const windowWidth = window.innerWidth;
      const scrollVal = totalWidth - windowWidth + 64; // add padding offset

      gsap.to(scrollEl, {
        x: -scrollVal,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollVal}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-slate-100 dark:bg-[#051421] transition-colors duration-300 overflow-hidden flex flex-col justify-center">
      <div className="absolute top-12 left-12 z-20">
        <span className="text-xs font-bold uppercase tracking-widest text-[#007799] dark:text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
          Galerie Action
        </span>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-800 dark:text-white tracking-tight">
          L'Aventure <span className="text-gradient">En Images</span>
        </h2>
      </div>

      {/* Horizontal scrolling strip */}
      <div id="gallery" className="w-full flex items-center overflow-x-hidden">
        <div
          ref={scrollRef}
          className="flex gap-8 px-12 md:px-24 py-12 flex-nowrap"
        >
          {images.map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative w-[80vw] sm:w-[45vw] md:w-[35vw] h-[55vh] rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 group border border-white/5"
            >
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-10" />

              <Image
                src={imgSrc}
                alt={`Rafting Durance Action ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 80vw, 35vw"
              />

              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-xs uppercase tracking-widest text-[#00f0ff] font-extrabold bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                  Durance / Les Orres
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
