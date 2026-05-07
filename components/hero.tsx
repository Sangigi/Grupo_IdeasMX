"use client"

import { useEffect, useRef, useState, Suspense } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointer2 } from "lucide-react"

// Dynamically import the 3D scene to avoid SSR issues
const BrainScene = dynamic(() => import("./brain-scene").then((mod) => mod.BrainScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse" />
    </div>
  ),
})

const words = ["CRECER", "INNOVAR", "DESTACAR", "TRIUNFAR"]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position for 3D interaction
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.5)))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Brutalist grid pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated border lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/40 pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/40 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/40 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/40 pointer-events-none" />

      {/* 3D Brain Scene */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 1 - scrollProgress * 1.5,
          transform: `scale(${1 + scrollProgress * 0.2})`,
        }}
      >
        <Suspense fallback={null}>
          <BrainScene mousePosition={mousePosition} />
        </Suspense>
      </div>

      {/* Main content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        style={{
          transform: `translateY(${scrollProgress * 100}px)`,
          opacity: 1 - scrollProgress * 1.5,
        }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Brutalist badge */}
            <div className="inline-flex items-center gap-2 mb-6 border border-primary/40 px-4 py-2 bg-primary/5">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-mono">
                Creatividad + Tecnologia
              </span>
            </div>

            <p className="text-white/60 text-lg md:text-xl mb-4 font-light tracking-wide">
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

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8">
              tu negocio.
            </h2>

            <p className="text-white/50 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              En Grupo Ideas hacemos que la creatividad y la tecnologia trabajen para ti en el mundo digital.
            </p>

            {/* Brutalist CTA buttons */}
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
                className="px-8 py-6 text-lg border-white/20 hover:bg-white/5 hover:border-white/40 text-white bg-transparent"
              >
                <Link href="#servicios">Ver servicios</Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-primary font-mono">100+</div>
                <div className="text-xs uppercase tracking-wider text-white/40">Proyectos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-mono">8+</div>
                <div className="text-xs uppercase tracking-wider text-white/40">Servicios</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-mono">5+</div>
                <div className="text-xs uppercase tracking-wider text-white/40">Anos</div>
              </div>
            </div>
          </div>

          {/* Right side - Reserved for 3D brain (behind content) */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Mouse interaction hint */}
      <div
        className={`absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 transition-all duration-1000 ${
          isVisible ? "opacity-60" : "opacity-0"
        }`}
        style={{
          opacity: isVisible ? 0.6 - scrollProgress * 2 : 0,
        }}
      >
        <MousePointer2 className="w-4 h-4 text-white/60 animate-pulse" />
        <span className="text-xs text-white/40 uppercase tracking-wider font-mono">
          Interactua con el cerebro
        </span>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          opacity: isVisible ? 1 - scrollProgress * 3 : 0,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Floating labels */}
      <div className="absolute top-1/4 right-10 hidden xl:block">
        <div className="text-xs font-mono text-white/30 rotate-90 origin-left">
          GRUPO IDEAS MX // 2024
        </div>
      </div>
    </section>
  )
}
