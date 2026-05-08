"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Monitor, Laptop, HardDrive, Wrench, Wifi, Users, CheckCircle, Settings } from "lucide-react"

const servicios = [
  { icon: Laptop, title: "Venta de Equipos de Cómputo (Laptops, Desktops)", color: "#EF4444" },
  { icon: HardDrive, title: "Venta de Periféricos y Componentes", color: "#3B82F6" },
  { icon: Wrench, title: "Mantenimiento Preventivo y Correctivo", color: "#22C55E" },
  { icon: Monitor, title: "Soporte Técnico Remoto y Presencial", color: "#8B5CF6" },
  { icon: Wifi, title: "Instalación de Redes y Cámaras de Seguridad", color: "#F59E0B" },
  { icon: Users, title: "Consultoría en Infraestructura Tecnológica", color: "#06B6D4" },
]

export default function TecnologiaPage() {
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
          <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Monitor className="w-4 h-4" />
            Tecnología y Equipos
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Tu ventaja tecnológica,{" "}
            <span className="text-red-500">nuestra prioridad</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            La productividad de tu equipo depende de la confiabilidad de su tecnología. Te proveemos los mejores equipos del mercado y un servicio de mantenimiento integral para que te enfoques en lo importante: hacer crecer tu negocio.
          </p>
          <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            <Link href="#servicios">
              Descubre Nuestras Soluciones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Lo que hacemos
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para tu empresa.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((servicio) => {
              const Icon = servicio.icon
              return (
                <div
                  key={servicio.title}
                  className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: servicio.color + "15" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: servicio.color }} />
                  </div>
                  <h3 className="font-semibold text-foreground">{servicio.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Settings className="w-12 h-12 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Cotiza tu Equipo o Soporte
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cuéntanos sobre tu proyecto y te propondremos la solución perfecta.
          </p>
          <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            <a href="https://wa.me/5575086614?text=Hola, me interesa cotizar equipos o soporte técnico." target="_blank" rel="noopener noreferrer">
              ¡Cotiza ya!
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+525575086614" className="hover:text-red-500 transition-colors">
              55-7508-6614
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-red-500 transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
