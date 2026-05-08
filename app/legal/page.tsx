"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scale, Gavel, Home, Users, FileText, CheckCircle } from "lucide-react"

const servicios = [
  {
    icon: FileText,
    title: "Juicios Mercantiles",
    description: "Recuperación de pago por títulos de crédito (pagarés, cheque, letras de cambio)",
    items: ["Asesorías"],
    color: "#3B82F6",
  },
  {
    icon: Home,
    title: "Juicios Civiles",
    description: "Lanzamientos, recuperación de inmuebles, juicios hipotecarios, arrendamiento y demás",
    items: [
      "Juicio de arrendamiento",
      "Contrato de arrendamiento",
      "Desalojo",
      "Búsqueda de expedientes y devolverlos al juzgado",
    ],
    color: "#22C55E",
  },
  {
    icon: Users,
    title: "Juicios del Orden Familiar",
    description: "Atendemos todos los asuntos relacionados con el derecho familiar",
    items: [
      "Divorcio Voluntario, Express, Notarial y Contencioso",
      "Concubinato: Constancia, Juicios Sencillos y Complejos",
      "Juicios Sucesorios: Intestamentario y Testamentario",
    ],
    color: "#EC4899",
  },
]

export default function LegalPage() {
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
    const message = encodeURIComponent("Hola, me gustaría solicitar información sobre sus servicios legales.")
    window.open(`https://wa.me/5215630962995?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGOS_check-03-aBeb74A0C6SFgXmz0GKvgkTq7MJ02R.png"
              alt="CHECK Servicios Legales"
              width={280}
              height={120}
              className="mx-auto h-24 md:h-32 w-auto"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            CHECK - División Legal
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Soluciones Legales{" "}
            <span className="text-emerald-600">Personales y Empresariales</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            Como división legal de Grupo Ideas, combinamos experiencia técnica con visión estratégica. 
            Atendemos tanto tus desafíos empresariales como tus asuntos personales, con el mismo 
            compromiso y profesionalismo.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Descubre Nuestras Soluciones
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entendemos que los retos legales no se limitan a la oficina. Por eso ofrecemos un 
            servicio completo que cubre tanto el ámbito mercantil como el personal, siempre 
            hablando claro y estando contigo en cada paso.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Soluciones legales integrales para cada situación.
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
                  <h3 className="text-xl font-bold text-foreground mb-3">{servicio.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{servicio.description}</p>
                  <ul className="space-y-2 mb-6">
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
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gavel className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Sin importar la naturaleza de tu reto legal, tenemos la solución
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ya sea que necesites proteger tu negocio, resolver un asunto familiar o defender tus 
            derechos civiles, en CHECK encontrarás el expertise especializado y el compromiso 
            humano que tu situación requiere.
          </p>
          <Button onClick={handleWhatsAppClick} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Cotizar por WhatsApp
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+5215630962995" className="hover:text-emerald-600 transition-colors">
              56-3096-2995
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-emerald-600 transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
