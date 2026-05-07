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
  const [scrollProgress, setScrollProgress] = useState(0)

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Soft glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
          transform: `translate(-50%, -50%) scale(${1 + scrollProgress * 0.3})`,
          opacity: 1 - scrollProgress * 0.5,
        }}
      />

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          transform: `translateY(${scrollProgress * 100}px)`,
          opacity: 1 - scrollProgress * 1.5,
        }}
      >
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground text-lg md:text-xl mb-4">Te ayudamos a</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-[family-name:var(--font-display)]">
            <span
              className={`inline-block text-primary transition-all duration-400 ${
                isAnimating ? "opacity-0 translate-y-4 blur-sm" : "opacity-100 translate-y-0 blur-0"
              }`}
            >
              {words[currentWordIndex]}
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-8">tu negocio.</h2>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            En Grupo Ideas hacemos que la creatividad y la tecnologia trabajen para ti en el mundo digital!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
            >
              <Link href="#contacto">
                Habla con un asesor!
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-border hover:bg-secondary text-foreground"
            >
              <Link href="#servicios">Ver servicios</Link>
            </Button>
          </div>
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
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
