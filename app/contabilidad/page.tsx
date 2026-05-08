"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, FileSpreadsheet, Building2, User, CheckCircle, BarChart3 } from "lucide-react"

const servicios = [
  {
    icon: FileSpreadsheet,
    title: "Servicios Contables Generales",
    items: [
      "Constancias fiscales",
      "Opinión de cumplimiento",
      "Cambio regimental fiscal",
      "Citas para trámites SAT",
    ],
    color: "#3B82F6",
  },
  {
    icon: User,
    title: "Contabilidad Personas Físicas Mensual",
    items: [
      "RESICO",
      "Plataformas tecnológicas",
      "Actividad Empresarial y Profesional",
      "Actividad Empresarial y Profesional con Trámites",
    ],
    color: "#22C55E",
  },
  {
    icon: Building2,
    title: "Contabilidad Personas Morales Mensual",
    items: [
      "RESICO",
      "Ley General",
      "Nóminas",
      "Cálculo del IMSS",
    ],
    color: "#0891B2",
  },
]

export default function ContabilidadPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(1, window.scrollY / 500)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios de contabilidad.")
    window.open(`https://wa.me/5215515238739?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Contabilidad-Estrategica-Logo-PBykLtYcFo3FQd5ha4kpDCXDS5PhEP.png"
              alt="Contabilidad Estratégica"
              width={280}
              height={120}
              className="mx-auto h-24 md:h-32 w-auto"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Contabilidad Estratégica
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Tu contabilidad en{" "}
            <span className="text-cyan-600">sintonía con tu negocio</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            Más que contadores, somos arquitectos financieros. Contabilidad Estratégica nace dentro 
            de Grupo Ideas para ser el soporte financiero inteligente que los proyectos innovadores necesitan.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
            Descubre Nuestras Soluciones
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Integramos la técnica contable impecable con una mentalidad analítica y proactiva. 
            No nos limitamos a registrar el pasado; te ayudamos a diseñar el futuro de tus finanzas.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Servicios diseñados para negocios que innovan
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Soluciones contables adaptadas a tu tipo de negocio.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {servicios.map((servicio) => {
              const Icon = servicio.icon
              return (
                <div
                  key={servicio.title}
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: servicio.color + "15" }}
                  >
                    <Icon className="w-7 h-7" style={{ color: servicio.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{servicio.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {servicio.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: servicio.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    className="w-full group"
                  >
                    Solicitar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BarChart3 className="w-12 h-12 text-cyan-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Construye sobre bases financieras sólidas
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tu creatividad, nuestro rigor. Tu visión, nuestra estrategia.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
            Cotizar por WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+525515238739" className="hover:text-cyan-600 transition-colors">
              55-1523-8739
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-cyan-600 transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
