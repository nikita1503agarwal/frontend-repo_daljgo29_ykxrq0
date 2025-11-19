import { motion } from 'framer-motion'

export default function WhyUs(){
  const points = [
    'Approccio multidisciplinare',
    'Risposte rapide e concrete',
    'Team legale e manageriale integrato'
  ]

  return (
    <section id="perche" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          Perché scegliere Intelligo
        </motion.h2>
        <p className="mt-3 text-indigo-100/80 text-center max-w-3xl mx-auto">
          Comunichiamo il valore distintivo con numeri chiave e risultati reali.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.ul
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {points.map((p) => (
              <motion.li
                key={p}
                className="flex items-center gap-3 text-indigo-100"
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
                {p}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              ['+1000', 'aziende assistite'],
              ['+10', 'anni di esperienza'],
              ['ISO 9001', 'certificazione']
            ].map(([n, l]) => (
              <div key={n} className="p-4">
                <div className="text-3xl font-extrabold text-white tracking-tight">{n}</div>
                <div className="text-indigo-200/80 text-sm">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-80">
          {['Azienda A','Brand B','Partner C','Client D','Group E'].map((logo) => (
            <motion.div
              key={logo}
              className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-indigo-100 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
