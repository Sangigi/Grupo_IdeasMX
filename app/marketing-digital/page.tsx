"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, CheckCircle, BarChart3, Video, Camera, Target } from "lucide-react"

const paquetes = [
  {
    nombre: "Paquete Mensual 1",
    tipo: "PYME",
    color: "#3B82F6",
    caracteristicas: [
      "RRSS 2 Redes",
      "Responding",
      "Diseño de 10 a 15 posts e historias",
      "Estrategia",
      "Análisis de KPIs",
    ],
  },
  {
    nombre: "Paquete Mensual 2",
    tipo: "B2C",
    color: "#22C55E",
    destacado: true,
    caracteristicas: [
      "RRSS 3 Redes",
      "Responding",
      "Diseño de 10 a 15 posts e historias",
      "Estrategia de Facebook Ads",
      "Análisis de KPIs",
      "2 Reels",
    ],
  },
  {
    nombre: "Paquete Mensual 3",
    tipo: "B2C",
    color: "#8B5CF6",
    caracteristicas: [
      "RRSS 4 Redes",
      "Responding",
      "Diseño de 10 a 15 posts e historias",
      "Estrategia de Facebook Ads",
      "Análisis de KPIs",
      "4 Reels",
      "Estrategia Google Ads",
      "Foto de Producto",
    ],
  },
  {
    nombre: "Paquete Mensual",
    tipo: "Producción Audiovisual",
    color: "#F59E0B",
    caracteristicas: [
      "2 Videos de Producto",
      "4 Ediciones de Reels",
      "Fotografías de Producto",
      "Estrategia",
      "Pregunta por el paquete completo",
    ],
  },
]

export default function MarketingDigitalPage() {
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
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Marketing Digital
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Conectamos tu marca con{" "}
            <span className="text-green-500">personas reales</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            No se trata solo de estar en internet, sino de generar conversaciones y conversiones. Diseñamos e implementamos estrategias digitales basadas en datos para aumentar tu visibilidad, atraer clientes potenciales y fidelizar a tu audiencia.
          </p>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="#paquetes">
              Descubre Nuestras Soluciones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Packages */}
      <section id="paquetes" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Escoge el paquete que más te acomode
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Planes de marketing digital adaptados a las necesidades de tu negocio.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paquetes.map((paquete) => (
              <div
                key={paquete.nombre}
                className={`bg-card border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  paquete.destacado ? "border-green-500 shadow-md" : "border-border"
                }`}
              >
                {paquete.destacado && (
                  <div className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-foreground mb-2">{paquete.nombre}</h3>
                <p 
                  className="text-sm font-medium mb-4"
                  style={{ color: paquete.color }}
                >
                  {paquete.tipo}
                </p>
                <ul className="space-y-3 mb-6">
                  {paquete.caracteristicas.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: paquete.color }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={paquete.destacado ? "default" : "outline"}
                  className={`w-full group ${paquete.destacado ? "bg-green-500 hover:bg-green-600" : ""}`}
                >
                  <a href="https://wa.me/5575086614?text=Hola, me interesa el paquete de marketing digital." target="_blank" rel="noopener noreferrer">
                    Solicitar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            ))}
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
      <section className="py-20 bg-green-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BarChart3 className="w-12 h-12 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Obtén una Propuesta de Marketing
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cuéntanos sobre tu proyecto y te propondremos la solución perfecta.
          </p>
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
            <a href="https://wa.me/5575086614?text=Hola, me interesa cotizar servicios de marketing digital." target="_blank" rel="noopener noreferrer">
              ¡Cotiza ya!
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+525575086614" className="hover:text-green-500 transition-colors">
              55-7508-6614
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-green-500 transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
