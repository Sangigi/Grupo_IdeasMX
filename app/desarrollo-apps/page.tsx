"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Globe, Server, ShoppingCart, Cog, Headphones, CheckCircle, Code } from "lucide-react"

const servicios = [
  { icon: Globe, title: "Desarrollo de Aplicaciones Web", color: "#3B82F6" },
  { icon: Smartphone, title: "Desarrollo de Aplicaciones Móviles (iOS & Android)", color: "#22C55E" },
  { icon: Server, title: "Software de Gestión Empresarial (ERP, CRM a medida)", color: "#8B5CF6" },
  { icon: ShoppingCart, title: "Sistemas de E-commerce", color: "#F59E0B" },
  { icon: Cog, title: "Integración de APIs", color: "#EC4899" },
  { icon: Headphones, title: "Mantenimiento y Soporte Técnico Continuo", color: "#06B6D4" },
]

export default function DesarrolloAppsPage() {
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
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            Desarrollo de Apps
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Tecnología que{" "}
            <span className="text-amber-500">simplifica y potencia</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            ¿Tienes un proceso complejo que consume tiempo? Creamos soluciones de software a la medida de tus necesidades, desde aplicaciones web hasta apps móviles, diseñadas para hacer tu operación más eficiente y competitiva.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
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
            Soluciones tecnológicas personalizadas para tu negocio.
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

      {/* Portfolio CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Ve nuestro trabajo
          </h2>
          <p className="text-muted-foreground mb-8">
            Revisa nuestro portafolio, convéncete de nuestra calidad.
          </p>
          <Button asChild variant="outline" className="group">
            <Link href="/#proyectos">
              Haz clic aquí
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Code className="w-12 h-12 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Cuéntanos tu Idea de Desarrollo
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cuéntanos sobre tu proyecto y te propondremos la solución perfecta.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
            <a href="https://wa.me/5575086614?text=Hola, me interesa cotizar desarrollo de aplicaciones." target="_blank" rel="noopener noreferrer">
              ¡Cotiza ya!
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+525575086614" className="hover:text-amber-500 transition-colors">
              55-7508-6614
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-amber-500 transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
