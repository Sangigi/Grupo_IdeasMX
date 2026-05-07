"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, Lightbulb, Users, Zap, Shield, Heart, Layers } from "lucide-react"

const valores = [
  { icon: Layers, title: "Sinergia", color: "#3B82F6" },
  { icon: Lightbulb, title: "Innovacion", color: "#F59E0B" },
  { icon: Heart, title: "Servicio", color: "#EC4899" },
  { icon: Shield, title: "Compromiso", color: "#22C55E" },
  { icon: Zap, title: "Versatilidad", color: "#8B5CF6" },
  { icon: Users, title: "Adaptabilidad", color: "#06B6D4" },
  { icon: Target, title: "Integridad", color: "#EF4444" },
]

export default function NosotrosPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

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
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            El poder de las{" "}
            <span className="text-primary">ideas transformadoras</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            En Grupo Ideas, creemos en el poder de las ideas transformadoras. Nacimos con la mision 
            de ser un partner estrategico para las empresas, uniendo diversas disciplinas bajo un 
            mismo techo para ofrecer soluciones coherentes, eficientes y de alto impacto.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <Link href="#soluciones">
              Descubre Nuestras Soluciones
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="soluciones" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center font-[family-name:var(--font-display)]">
            Lo que queremos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Mision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Brindar soluciones tecnologicas, creativas y estrategicas integrales que impulsen 
                la transformacion y el crecimiento sostenible de nuestros clientes. Integramos 
                diseno, tecnologia, marketing y talento humano para construir un ecosistema de 
                servicios que simplifica, innova y potencia cualquier negocio.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aspiramos a ser reconocidos como el partner de innovacion mas confiable a nivel 
                nacional, donde la convergencia de nuestras disciplinas define el nuevo estandar 
                para el desarrollo empresarial. Visualizamos un futuro donde cada empresa que 
                colabore con nosotros alcance su maximo potencial operativo, digital y humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Valores
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Los principios que guian cada decision y proyecto que emprendemos.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {valores.map((valor, i) => {
              const Icon = valor.icon
              return (
                <div
                  key={valor.title}
                  className="bg-card border border-border rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: valor.color + "15" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: valor.color }} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{valor.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Inicia la transformacion
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cuentanos sobre tu proyecto y te propondremos la solucion perfecta.
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
