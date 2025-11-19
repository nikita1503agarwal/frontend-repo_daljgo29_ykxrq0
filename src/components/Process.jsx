import { motion } from 'framer-motion'
import { Search, FileCheck2, Lifebuoy } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Analisi iniziale gratuita', desc: 'Capiremo bisogni, rischi e priorità senza impegno.' },
  { icon: FileCheck2, title: 'Proposta personalizzata', desc: 'Roadmap chiara, tempi definiti e costi trasparenti.' },
  { icon: Lifebuoy, title: 'Implementazione e supporto continuo', desc: 'Operativo con monitoraggio, formazione e assistenza.' },
]

export default function Process(){
  return (
    <section id="processo" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Come lavoriamo
        </motion.h2>
        <p className="mt-3 text-indigo-100/80 text-center max-w-2xl mx-auto">
          Un processo chiaro e affidabile in tre step.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white inline-flex">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-indigo-100/80 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
