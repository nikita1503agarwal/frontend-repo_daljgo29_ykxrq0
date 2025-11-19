import { motion } from 'framer-motion'

const quotes = [
  {
    text: 'Con Intelligo abbiamo messo in sicurezza i processi GDPR in tempi rapidissimi. Team competente e disponibile.',
    author: 'Marta R., COO – TechSoft'
  },
  {
    text: 'Supporto concreto sulla contrattualistica. Hanno individuato subito le criticità e proposto soluzioni efficaci.',
    author: 'Luca P., Founder – RetailPro'
  },
  {
    text: 'Approccio pragmatico: poche parole, molti risultati. Consigliati per PMI in crescita.',
    author: 'Giulia V., CEO – Studio Associato'
  }
]

export default function Testimonials(){
  return (
    <section id="casi" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Casi di successo e testimonianze
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <p className="italic">“{q.text}”</p>
              <footer className="mt-4 text-sm text-indigo-300">{q.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
