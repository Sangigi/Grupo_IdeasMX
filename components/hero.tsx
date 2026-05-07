"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const words = ["CRECER", "INNOVAR", "DESTACAR", "TRIUNFAR"]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle grid pattern - CSS only */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated border lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 pointer-events-none" />

      {/* Lightweight animated background - CSS only */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated gradient orbs using CSS */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-500/3 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        
        {/* Decorative circles */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-green-500" />
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
        </svg>

        {/* Static neural nodes pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const radius = 150 + (i % 3) * 40
            const x = 250 + Math.cos(angle) * radius
            const y = 250 + Math.sin(angle) * radius
            return (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-primary/30"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 border border-primary/40 px-4 py-2 bg-primary/5 rounded-md">
              <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-mono">
                Creatividad + Tecnologia
              </span>
            </div>

            <p className="text-muted-foreground text-lg md:text-xl mb-4 font-light tracking-wide">
              Te ayudamos a
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-display)]">
              <span
                className={`inline-block text-primary transition-all duration-400 ${
                  isAnimating ? "opacity-0 translate-y-4 blur-sm" : "opacity-100 translate-y-0 blur-0"
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-8">
              tu negocio.
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              En Grupo Ideas hacemos que la creatividad y la tecnologia trabajen para ti en el mundo digital.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group relative overflow-hidden"
              >
                <Link href="#contacto">
                  <span className="relative z-10 flex items-center">
                    Habla con un asesor
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-border hover:bg-muted hover:border-primary/40 text-foreground"
              >
                <Link href="#servicios">Ver servicios</Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary font-mono">100+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-mono">8+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Servicios</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-mono">5+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Anos</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual element with orbital animation */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Central icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              
              {/* Outer orbit with rotating dot */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>
              
              {/* Middle orbit with rotating dot - reverse direction */}
              <div className="absolute inset-8 rounded-full border border-green-500/20 animate-[spin_12s_linear_infinite_reverse]">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
              </div>
              
              {/* Inner orbit with rotating dot */}
              <div className="absolute inset-16 rounded-full border border-violet-500/20 animate-[spin_8s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
              </div>
              
              {/* Extra outer orbit - slower */}
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-[spin_30s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-green-500/40" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Floating labels */}
      <div className="absolute top-1/4 right-10 hidden xl:block">
        <div className="text-xs font-mono text-muted-foreground/50 rotate-90 origin-left">
          GRUPO IDEAS MX // 2024
        </div>
      </div>
    </section>
  )
}
