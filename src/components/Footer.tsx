'use client';

import { Phone, MapPin, Calendar, Anchor } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full py-20 px-6 md:px-12 bg-slate-50 dark:bg-black text-[#0f172a] dark:text-white border-t border-black/5 dark:border-white/5 transition-colors duration-300 overflow-hidden"
    >
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#007799]/5 dark:bg-[#007799]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6b4a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          
          {/* Booking & Info */}
          <div className="space-y-8">
            <div>
              <span className="badge-premium border-[#ff6b4a]/35 dark:border-[#ff6b4a]/50 text-[#ff6b4a] dark:text-[#ff8c70] mb-3">
                Réservation & Contact
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0f172a] dark:text-white">
                Prêt à vous jeter <br />
                <span className="text-gradient-accent">À l'Eau ?</span>
              </h2>
              <p className="text-[#0f172a]/60 dark:text-white/60 text-sm mt-4 leading-relaxed max-w-md">
                Contactez-nous directement par téléphone, visitez notre local à la station des Orres 1800, ou passez par notre page Facebook pour bloquer vos créneaux.
              </p>
            </div>
 
            <div className="space-y-4">
              <a
                href="tel:0673458434"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 hover:bg-[#007799]/5 dark:hover:bg-white/10 card-premium border border-black/5 dark:border-white/5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#007799]/10 dark:bg-[#00f0ff]/10 flex items-center justify-center text-[#007799] dark:text-[#00f0ff] group-hover:scale-110 icon-glow-primary transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#0f172a]/40 dark:text-white/40 uppercase tracking-widest block font-medium">Téléphone</span>
                  <span className="text-[#0f172a] dark:text-white font-bold group-hover:text-[#007799] dark:group-hover:text-[#00f0ff] transition-colors duration-300">06 73 45 84 34</span>
                </div>
              </a>
 
              <a
                href="https://www.facebook.com/lavaguedorres/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 hover:bg-[#007799]/5 dark:hover:bg-white/10 card-premium border border-black/5 dark:border-white/5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#3b5998]/20 flex items-center justify-center text-[#3b5998] group-hover:scale-110 shadow-[0_0_15px_rgba(59,89,152,0.2)] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4 4 0 0 0-4 4v2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-[#0f172a]/40 dark:text-white/40 uppercase tracking-widest block font-medium">Page Facebook</span>
                  <span className="text-[#0f172a] dark:text-white font-bold group-hover:text-[#007799] dark:group-hover:text-[#00f0ff] transition-colors duration-300">La Vague d'Orres</span>
                </div>
              </a>
 
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/40 dark:bg-white/5 border border-black/5 dark:border-white/5 card-premium">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b4a]/10 flex items-center justify-center text-[#ff6b4a] icon-glow-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#0f172a]/40 dark:text-white/40 uppercase tracking-widest block font-medium">Adresse & Local</span>
                  <span className="text-[#0f172a] dark:text-white font-bold block">Local ESI, bâtiment d'accueil de Bois Méan</span>
                  <span className="text-xs text-[#0f172a]/60 dark:text-white/60">Les Orres 1800 (à côté du Point Info)</span>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form / Quick details */}
          <div className="p-8 rounded-3xl glass border border-black/5 dark:border-white/5 card-premium relative overflow-hidden">
            <h3 className="text-xl font-bold uppercase text-[#0f172a] dark:text-white mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#007799] dark:text-[#00f0ff]" />
              Formulaire de Contact
            </h3>
            
            <form onSubmit={(e) => { e.preventDefault(); alert("Demande envoyée !"); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]/70 dark:text-white/70 mb-1">Nom complet</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Jean Dupont"
                  className="w-full px-4 py-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 text-[#0f172a] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#007799] dark:focus:border-[#00f0ff] text-sm transition-colors"
                />
              </div>
 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]/70 dark:text-white/70 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jean@gmail.com"
                    className="w-full px-4 py-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 text-[#0f172a] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#007799] dark:focus:border-[#00f0ff] text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]/70 dark:text-white/70 mb-1">Téléphone</label>
                  <input
                    type="tel"
                    required
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 text-[#0f172a] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#007799] dark:focus:border-[#00f0ff] text-sm transition-colors"
                  />
                </div>
              </div>
 
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]/70 dark:text-white/70 mb-1">Formule souhaitée</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 text-[#0f172a] dark:text-white focus:outline-none focus:border-[#007799] dark:focus:border-[#00f0ff] text-sm transition-colors"
                >
                  <option value="decouverte">Rafting Découverte (Familles)</option>
                  <option value="sensation">Rafting Sensation (Sportifs)</option>
                </select>
              </div>
 
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0f172a]/70 dark:text-white/70 mb-1">Message ou Précisions</label>
                <textarea
                  rows={3}
                  placeholder="Date souhaitée, nombre de personnes, questions..."
                  className="w-full px-4 py-2 rounded-xl bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 text-[#0f172a] dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#007799] dark:focus:border-[#00f0ff] text-sm transition-colors resize-none"
                />
              </div>
 
              <button
                type="submit"
                className="w-full py-3.5 btn-premium-primary text-xs"
              >
                Envoyer ma Demande
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom details */}
        <div className="border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#0f172a]/40 dark:text-white/40">
          <p>© {new Date().getFullYear()} La Vague d'Orres. Tous droits réservés.</p>
          <p>
            Réalisé pour la présentation de l'activité Rafting à la station des Orres.
          </p>
        </div>
      </div>
    </footer>

  );
}
