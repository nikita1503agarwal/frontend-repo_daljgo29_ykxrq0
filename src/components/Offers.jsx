import { motion } from 'framer-motion'
import { ShieldCheck, UserCheck2, FileSearch, Activity } from 'lucide-react'

const offers = [
  { icon: ShieldCheck, title: 'Pacchetto GDPR 48h', desc: 'Setup essenziale, documentazione e formazione base in tempi record.' },
  { icon: UserCheck2, title: 'Nomina DPO esterno', desc: 'Copertura professionale con responsabilità e monitoraggio continuo.' },
  { icon: FileSearch, title: 'Verifica contratti aziendali', desc: 'Analisi rapida per ridurre rischi e ottimizzare clausole chiave.' },
  { icon: Activity, title: 'Audit organizzativo', desc: 'Mappatura processi, ruoli e rischi con piano di miglioramento.' },
]

export default function Offers(){
  return (
    <section className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Servizi correlati
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white inline-flex">
                <o.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{o.title}</h3>
              <p className="mt-2 text-indigo-100/80 text-sm">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
