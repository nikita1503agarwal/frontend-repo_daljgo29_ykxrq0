import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 w-full grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_8px_30px_rgba(99,102,241,0.35)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Proteggiamo la tua azienda con soluzioni legali e organizzative su misura.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-indigo-100/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Esperti in GDPR, contrattualistica e consulenza aziendale per PMI e professionisti.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#cta"
              className="px-6 py-3 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition"
            >
              Richiedi una consulenza gratuita
            </a>
            <a
              href="#servizi"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold backdrop-blur border border-white/10 transition"
            >
              Scopri i servizi
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          {/* empty column to let Spline shine and keep balance */}
        </div>
      </div>
    </section>
  );
}
