import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 text-indigo-100/80">
        <div>
          <h4 className="text-white font-semibold">Intelligo Italy</h4>
          <p className="mt-2 text-sm">Soluzioni legali e organizzative per PMI e professionisti.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Termini</a></li>
          </ul>
          <ul className="space-y-2">
            <li><a href="#servizi" className="hover:text-white transition">Servizi</a></li>
            <li><a href="#casi" className="hover:text-white transition">Casi di successo</a></li>
            <li><a href="#contatti" className="hover:text-white transition">Contatti</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Intelligo Italy • P.IVA 00000000000</p>
          <div className="mt-3 flex gap-3">
            {['LinkedIn','Twitter','Instagram'].map((s) => (
              <motion.a key={s} href="#" className="px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10 transition"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                {s}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
