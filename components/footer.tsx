"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Paginas Web", href: "/#servicios" },
    { label: "Diseno Grafico", href: "/#servicios" },
    { label: "Marketing Digital", href: "/#servicios" },
    { label: "Desarrollo de Apps", href: "/#servicios" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contabilidad", href: "/contabilidad" },
    { label: "Legal", href: "/legal" },
    { label: "Reclutamiento", href: "/reclutal" },
  ],
  legal: [
    { label: "Aviso de Privacidad", href: "/aviso-privacidad" },
    { label: "Terminos y Condiciones", href: "/terminos" },
    { label: "Devoluciones", href: "/devoluciones" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.jpg"
                alt="Grupo Ideas MX"
                width={160}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 max-w-sm mb-6 leading-relaxed">
              Hacemos que la creatividad y la tecnologia trabajen para ti en el mundo digital.
            </p>
            
            {/* Brutalist badge */}
            <div className="inline-flex items-center gap-2 border border-primary/40 px-3 py-1.5 bg-primary/5">
              <div className="w-1.5 h-1.5 bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-mono">
                Mexico 2024
              </span>
            </div>
          </div>

          {/* Servicios column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5 font-mono">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5 font-mono">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-5 font-mono">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm flex items-center group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              Creado con pasion por Grupo Ideas MX
            </p>
            
            <div className="flex items-center gap-4 md:gap-6 flex-wrap">
              <a
                href="tel:+525575086614"
                className="text-sm text-white/40 hover:text-primary transition-colors"
              >
                55-7508-6614
              </a>
              <span className="text-white/20 hidden md:inline">|</span>
              <a
                href="mailto:contacto@grupoideasmx.com"
                className="text-sm text-white/40 hover:text-primary transition-colors break-all md:break-normal"
              >
                contacto@grupoideasmx.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-white/10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-white/10 pointer-events-none hidden md:block" />
    </footer>
  )
}
