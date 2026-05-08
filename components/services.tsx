"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Globe,
  Palette,
  TrendingUp,
  Smartphone,
  Monitor,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { ReclutalIcon, ContabilidadIcon, LegalIcon } from "@/components/service-icons"

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Páginas Web",
    description:
      "Tu web además de bonita; debe generar resultados. Diseños claros, fáciles de usar y hechos para que tus clientes te encuentren, te entiendan y te elijan.",
    color: "#3B82F6",
    href: "/#servicios",
  },
  {
    id: 2,
    icon: Palette,
    title: "Diseño Gráfico",
    description:
      "Diseñamos la imagen de tu marca para que comunique, conecte y que tus clientes la recuerden. Branding, logotipos, anuncios, lonas, volantes, tarjetas de presentación...",
    color: "#EC4899",
    href: "/#servicios",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Marketing Digital",
    description:
      "Creamos estrategias digitales que te ayudan a conseguir más clientes y vender más. Usamos redes sociales, publicidad y análisis de datos para que tomes decisiones con seguridad.",
    color: "#22C55E",
    href: "/#servicios",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Desarrollo de Apps",
    description:
      "Creamos aplicaciones y sistemas que facilitan tu negocio, automatizan tareas y resuelven lo que necesitas. Tecnología hecha a tu medida para que todo funcione mejor.",
    color: "#F59E0B",
    href: "/#servicios",
  },
  {
    id: 5,
    icon: Monitor,
    title: "Tecnología y Equipos",
    description:
      "Proveemos equipos de cómputo de alto rendimiento y ofrecemos servicios de mantenimiento preventivo. Tu infraestructura tecnológica en las mejores manos.",
    color: "#EF4444",
    href: "/#servicios",
  },
  {
    id: 6,
    icon: ReclutalIcon,
    title: "Reclutamiento",
    description:
      "Encontramos al talento que tu empresa necesita. Conectamos habilidades con oportunidades para fortalecer tu equipo humano.",
    color: "#FACC15",
    href: "/reclutal",
    isCustomIcon: true,
  },
  {
    id: 7,
    icon: ContabilidadIcon,
    title: "Contabilidad",
    description:
      "Combinamos experiencia técnica con visión estratégica. Atendemos tanto tus desafíos empresariales como tus asuntos personales, con el mismo compromiso y profesionalismo.",
    color: "#0891B2",
    href: "/contabilidad",
    isCustomIcon: true,
  },
  {
    id: 8,
    icon: LegalIcon,
    title: "Servicios Legales",
    description:
      "Combinamos experiencia técnica con visión estratégica. Atendemos tanto tus desafíos empresariales como tus asuntos personales. Entendemos que los retos legales no se limitan a la oficina.",
    color: "#22C55E",
    href: "/legal",
    isCustomIcon: true,
  },
]

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const ActiveIcon = services[activeService].icon

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6 border border-primary/40 px-3 py-1.5 bg-primary/5">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.15em] text-primary font-mono">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)] text-balance max-w-3xl mx-auto">
            Soluciones integrales para tu negocio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos un ecosistema completo de servicios para impulsar tu empresa al siguiente nivel.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Service selector */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Interactive visual */}
            <div className="relative mb-8 hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent" />
                
                {/* Central display */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div 
                    className="w-32 h-32 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white shadow-lg"
                    style={{ backgroundColor: `${services[activeService].color}15` }}
                  >
                    <ActiveIcon 
                      className="w-16 h-16 transition-all duration-500" 
                      style={{ color: services[activeService].color }}
                    />
                  </div>
                </div>

                {/* Orbital service indicators */}
                <div className="absolute inset-0">
                  {services.map((service, index) => {
                    const angle = (index / services.length) * Math.PI * 2 - Math.PI / 2
                    const radius = 45
                    const x = 50 + Math.cos(angle) * radius
                    const y = 50 + Math.sin(angle) * radius
                    const Icon = service.icon
                    const isActive = index === activeService

                    return (
                      <button
                        key={service.id}
                        className={`absolute w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? "scale-110 shadow-lg" 
                            : "hover:scale-105 opacity-60 hover:opacity-100"
                        }`}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          backgroundColor: isActive ? service.color : `${service.color}20`,
                        }}
                        onClick={() => setActiveService(index)}
                        aria-label={`Ver servicio: ${service.title}`}
                      >
                        <Icon 
                          className="w-6 h-6 transition-colors" 
                          style={{ color: isActive ? "white" : service.color }}
                        />
                      </button>
                    )
                  })}
                </div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {services.map((_, index) => {
                    const angle = (index / services.length) * Math.PI * 2 - Math.PI / 2
                    const radius = 45
                    const x = 50 + Math.cos(angle) * radius
                    const y = 50 + Math.sin(angle) * radius
                    const isActive = index === activeService

                    return (
                      <line
                        key={index}
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke={isActive ? services[index].color : "#e5e7eb"}
                        strokeWidth={isActive ? 2 : 1}
                        strokeDasharray={isActive ? "none" : "4 4"}
                        className="transition-all duration-300"
                      />
                    )
                  })}
                </svg>
              </div>
            </div>

            {/* Active service details */}
            <div 
              className="p-6 rounded-2xl border border-border bg-card transition-all duration-500"
              style={{ borderColor: `${services[activeService].color}30` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${services[activeService].color}15` }}
                >
                  <ActiveIcon 
                    className="w-7 h-7" 
                    style={{ color: services[activeService].color }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {services[activeService].title}
                  </h3>
                  <span 
                    className="text-xs uppercase tracking-wider font-mono"
                    style={{ color: services[activeService].color }}
                  >
                    Servicio {activeService + 1} de {services.length}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {services[activeService].description}
              </p>
              <Button 
                asChild 
                className="group"
                style={{ 
                  backgroundColor: services[activeService].color,
                }}
              >
                <Link href={services[activeService].href}>
                  Saber mas
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Service grid */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon
                const isActive = index === activeService

                return (
                  <button
                    key={service.id}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                      isActive
                        ? "border-transparent shadow-lg scale-[1.02]"
                        : "border-border hover:border-primary/20 hover:shadow-md"
                    }`}
                    style={{
                      backgroundColor: isActive ? `${service.color}10` : "white",
                      borderColor: isActive ? service.color : undefined,
                    }}
                    onClick={() => setActiveService(index)}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: service.color }}
                      />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {service.description.slice(0, 60)}...
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Quick contact CTA */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                No sabes cual servicio necesitas?
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Contactanos y te ayudamos a encontrar la solucion perfecta para tu negocio.
              </p>
              <Button asChild variant="outline" className="w-full group">
                <Link href="#contacto">
                  Hablar con un asesor
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
