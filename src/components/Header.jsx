import { Menu, ShieldCheck, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-indigo-500/20">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight tracking-tight">Intelligo Italy</p>
            <p className="text-xs text-indigo-200/80 -mt-0.5">Legal & Organizational Solutions</p>
          </div>
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-indigo-100/80">
          <a href="#servizi" className="hover:text-white transition">Servizi</a>
          <a href="#perche" className="hover:text-white transition">Perché noi</a>
          <a href="#processo" className="hover:text-white transition">Come lavoriamo</a>
          <a href="#team" className="hover:text-white transition">Chi siamo</a>
          <a href="#casi" className="hover:text-white transition">Casi di successo</a>
          <a href="#contatti" className="hover:text-white transition">Contatti</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+39000000000"
            className="hidden lg:inline-flex items-center gap-2 text-indigo-100/90 hover:text-white transition"
            aria-label="Telefono"
          >
            <Phone className="w-4 h-4" />
            <span>+39 000 000 000</span>
          </a>
          <a
            href="mailto:info@intelligo.it"
            className="hidden lg:inline-flex items-center gap-2 text-indigo-100/90 hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
            <span>info@intelligo.it</span>
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition"
          >
            Richiedi consulenza
          </a>
          <button className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
