import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="team" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            Chi siamo
          </motion.h2>
          <p className="mt-4 text-indigo-100/85 leading-relaxed">
            Siamo consulenti che credono nella trasparenza e nella protezione delle imprese. Uniamo competenze legali, privacy e management per supportare PMI e professionisti con soluzioni concrete e misurabili.
          </p>
          <a href="#" className="inline-block mt-6 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10 transition">
            Scopri di più su di noi
          </a>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
            {/* Placeholder team collage */}
            <div className="grid grid-cols-3 gap-1 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="bg-slate-700/40" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
