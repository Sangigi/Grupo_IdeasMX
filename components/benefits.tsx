"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Un enfoque completo",
    description:
      "Manejamos toda tu presencia digital y tecnologica desde un solo lugar, asegurando que todo se vea y funcione en armonia.",
  },
  {
    title: "Un equipo de expertos",
    description:
      "Profesionales de distintas areas trabajando juntos para que tu proyecto avance.",
  },
  {
    title: "Resultados que se ven",
    description:
      "Analizamos datos y optimizamos cada accion para que tu inversion rinda mas.",
  },
  {
    title: "Vamos con todo",
    description:
      "Tu exito es el nuestro. Lo tomamos como propio y trabajamos con pasion para que salga adelante.",
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            transform: `translateY(${(1 - scrollProgress) * 30}px)`,
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)] text-balance">
            Contigo, a tu ritmo. A tu lado, en cada paso.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-5 lg:p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? `translateY(${(1 - scrollProgress) * (10 + index * 5)}px)` : "translateY(40px)",
              }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
