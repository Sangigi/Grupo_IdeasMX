"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Sparkles, Users, Target, Heart } from "lucide-react"

const benefits = [
  {
    icon: Sparkles,
    title: "Un enfoque completo",
    description:
      "Manejamos toda tu presencia digital y tecnologica desde un solo lugar, asegurando que todo se vea y funcione en armonia.",
    color: "#3B82F6",
  },
  {
    icon: Users,
    title: "Un equipo de expertos",
    description:
      "Profesionales de distintas areas trabajando juntos para que tu proyecto avance.",
    color: "#22C55E",
  },
  {
    icon: Target,
    title: "Resultados que se ven",
    description:
      "Analizamos datos y optimizamos cada accion para que tu inversion rinda mas.",
    color: "#F59E0B",
  },
  {
    icon: Heart,
    title: "Vamos con todo",
    description:
      "Tu exito es el nuestro. Lo tomamos como propio y trabajamos con pasion para que salga adelante.",
    color: "#EC4899",
  },
]

export function Benefits() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Brutalist decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/20 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
          }}
        >
          {/* Brutalist badge */}
          <div className="inline-flex items-center gap-2 mb-6 border border-primary/40 px-3 py-1.5 bg-primary/5">
            <div className="w-1.5 h-1.5 bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.15em] text-primary font-mono">
              Por que elegirnos
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)] text-balance max-w-3xl mx-auto">
            Contigo, a tu ritmo. A tu lado, en cada paso.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nos comprometemos con tu exito como si fuera el nuestro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`group bg-card border border-border rounded-xl p-6 lg:p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isVisible ? `translateY(${(1 - scrollProgress) * (10 + index * 5)}px)` : "translateY(40px)",
                }}
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${benefit.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
                
                {/* Decorative corner */}
                <div 
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, ${benefit.color}10 50%)`,
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Stats row */}
        <div 
          className={`mt-16 pt-12 border-t border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-mono mb-2">100+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Proyectos Entregados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-mono mb-2">8</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Servicios Integrales</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-mono mb-2">5+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Anos de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary font-mono mb-2">98%</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
