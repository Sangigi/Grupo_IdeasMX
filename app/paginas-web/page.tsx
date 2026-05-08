"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Search, Smartphone, Zap, Shield, Palette, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description: "Creamos diseños únicos que reflejan la identidad de tu marca y conectan con tu audiencia.",
    color: "#EC4899",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Tu sitio se verá perfecto en cualquier dispositivo: computadora, tablet o celular.",
    color: "#3B82F6",
  },
  {
    icon: Search,
    title: "SEO Optimizado",
    description: "Implementamos las mejores prácticas de SEO para que tus clientes te encuentren fácilmente.",
    color: "#22C55E",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Sitios rápidos y optimizados que ofrecen la mejor experiencia de usuario.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Certificados SSL y las mejores prácticas de seguridad para proteger tu sitio y usuarios.",
    color: "#8B5CF6",
  },
  {
    icon: Globe,
    title: "Hosting Incluido",
    description: "Te ayudamos con el hosting y dominio para que tu sitio esté siempre en línea.",
    color: "#06B6D4",
  },
]

const incluidos = [
  "Diseño web profesional y personalizado",
  "Optimización para móviles (responsive)",
  "Optimización SEO básica",
  "Formulario de contacto",
  "Integración con redes sociales",
  "Certificado SSL (https)",
  "Capacitación para administrar tu sitio",
  "Soporte técnico post-lanzamiento",
]

export default function PaginasWebPage() {
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
    const message = encodeURIComponent("Hola, me gustaría solicitar información sobre el desarrollo de páginas web.")
    window.open(`https://wa.me/5215575086614?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Desarrollo Web
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Páginas Web que{" "}
            <span className="text-primary">generan resultados</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            Tu web además de bonita; debe generar resultados. Diseños claros, fáciles de usar 
            y hechos para que tus clientes te encuentren, te entiendan y te elijan.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary text-primary-foreground">
            Cotizar mi Página Web
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            ¿Qué incluye nuestro servicio?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Desarrollamos sitios web completos con todo lo que necesitas para tener presencia digital profesional.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: feature.color + "15" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center font-[family-name:var(--font-display)]">
            Todo lo que incluimos
          </h2>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {incluidos.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            ¿Listo para tener tu página web profesional?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Platícanos tu proyecto y te daremos una cotización personalizada sin compromiso.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-primary text-primary-foreground">
            Solicitar Cotización
            <ArrowRight className="ml-2 h-5 w-5" />
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
