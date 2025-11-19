import { Shield, FileText, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Shield,
    title: 'Adeguamento GDPR',
    desc: 'Ti aiutiamo ad adeguare la tua azienda alla normativa privacy in modo rapido e completo.',
    href: '#gdpr'
  },
  {
    icon: FileText,
    title: 'Contrattualistica aziendale',
    desc: 'Redigiamo, analizziamo e ottimizziamo contratti commerciali, societari e di lavoro.',
    href: '#contratti'
  },
  {
    icon: Briefcase,
    title: 'Consulenza aziendale',
    desc: 'Supportiamo la tua crescita con analisi organizzativa e strategie su misura.',
    href: '#consulenza'
  }
]

export default function Pillars(){
  return (
    <section id="servizi" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          I nostri 3 pilastri
        </motion.h2>
        <p className="mt-3 text-indigo-100/80 text-center max-w-2xl mx-auto">
          Presentiamo i tre macro-servizi principali in modo chiaro e visivo.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur p-6 overflow-hidden transition shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-md">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-indigo-100/80 text-sm">{item.desc}</p>
                  <span className="inline-block mt-4 text-indigo-300 group-hover:text-white transition font-medium">
                    Scopri di più →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
