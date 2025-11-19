import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function FinalCTA(){
  return (
    <section id="cta" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            Pronto a mettere in sicurezza la tua azienda?
          </motion.h2>
          <p className="mt-3 text-indigo-100/85">Richiedi una consulenza gratuita: ti rispondiamo in 24 ore.</p>

          <div className="mt-8 space-y-3 text-indigo-100/90">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +39 000 000 000</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@intelligo.it</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Via Roma 1, Milano</p>
            <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lun–Ven 9:00–18:00</p>
          </div>

          <div className="mt-8 h-56 w-full rounded-xl overflow-hidden border border-white/10 bg-white/5 grid place-items-center text-indigo-200">
            Mappa interattiva
          </div>
        </div>

        <motion.form
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); alert('Grazie! Ti contatteremo a breve.'); }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-indigo-200">Nome</label>
              <input className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Mario" />
            </div>
            <div>
              <label className="text-sm text-indigo-200">Cognome</label>
              <input className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Rossi" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-indigo-200">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="mario.rossi@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-indigo-200">Messaggio</label>
              <textarea rows="4" className="mt-1 w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white placeholder-indigo-200/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Raccontaci di cosa hai bisogno..." />
            </div>
          </div>
          <button className="mt-5 w-full px-6 py-3 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition">
            Richiedi una consulenza gratuita
          </button>
        </motion.form>
      </div>
    </section>
  )
}
