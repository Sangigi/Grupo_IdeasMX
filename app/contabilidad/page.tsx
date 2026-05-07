"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
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
      "Opinion cumplimiento",
      "Cambio regimental fiscal",
      "Citas para Tramites SAT",
    ],
    color: "#3B82F6",
  },
  {
    icon: User,
    title: "Contabilidad Personas Fisicas Mensual",
    items: [
      "Resico",
      "Plataformas tecnologicas",
      "Actividad Empresarial y Profesional",
      "Actividad Empresarial y Profesional con Tramites",
    ],
    color: "#22C55E",
  },
  {
    icon: Building2,
    title: "Contabilidad Personas Morales Mensual",
    items: [
      "Resico",
      "Ley General",
      "Nominas",
      "Calculo del IMSS",
    ],
    color: "#8B5CF6",
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

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Contabilidad Estrategica
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Tu contabilidad en{" "}
            <span className="text-primary">sintonia con tu negocio</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            Mas que contadores, somos arquitectos financieros. Contabilidad Estrategica nace dentro 
            de Grupo Ideas para ser el soporte financiero inteligente que los proyectos innovadores necesitan.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <Link href="#servicios">
              Descubre Nuestras Soluciones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Integramos la tecnica contable impecable con una mentalidad analitica y proactiva. 
            No nos limitamos a registrar el pasado; te ayudamos a disenar el futuro de tus finanzas.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Servicios disenados para negocios que innovan
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
                    asChild
                    variant="outline"
                    className="w-full group"
                  >
                    <Link href="/#contacto">
                      Solicitar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BarChart3 className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Construye sobre bases financieras solidas
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Tu creatividad, nuestro rigor. Tu vision, nuestra estrategia.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <Link href="/#contacto">
              Cotiza ya!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+525575086614" className="hover:text-primary transition-colors">
              55-7508-6614
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-primary transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
