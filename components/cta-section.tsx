"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll progress
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Animation sequence - runs only once
  useEffect(() => {
    if (!isVisible) return

    const timers = [
      setTimeout(() => setAnimationPhase(1), 200),
      setTimeout(() => setAnimationPhase(2), 800),
      setTimeout(() => setAnimationPhase(3), 1400),
      setTimeout(() => setAnimationPhase(4), 2000),
    ]

    return () => timers.forEach(clearTimeout)
  }, [isVisible])

  const mainText = "Haz realidad tu idea"

  return (
    <section ref={sectionRef} id="contacto" className="py-28 md:py-36 relative overflow-hidden bg-[#030303]">
      {/* Brutalist grid pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
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

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 pointer-events-none hidden md:block" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-50 hidden lg:block" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary/40 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: "1s" }} />

      <div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          opacity: Math.min(1, scrollProgress * 1.5),
        }}
      >
        {/* Animated Logo */}
        <div
          className={`mb-10 transition-all duration-700 ${animationPhase >= 1 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative inline-block">
            <Image
              src="/logo.jpg"
              alt="Grupo Ideas MX"
              width={240}
              height={96}
              className="h-20 md:h-24 w-auto mx-auto transition-all duration-1000 brightness-0 invert"
              style={{
                filter: animationPhase >= 1 ? "blur(0px) brightness(0) invert(1)" : "blur(20px) brightness(0) invert(1)",
                transform: animationPhase >= 1 
                  ? "scale(1) translateY(0)" 
                  : "scale(0.5) translateY(30px)",
                opacity: animationPhase >= 1 ? 1 : 0,
              }}
            />
          </div>
        </div>

        {/* Main heading with character animation */}
        <div
          className={`mb-6 overflow-hidden transition-all duration-700 ${
            animationPhase >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-display)]">
            {mainText.split("").map((letter, i) => {
              const isSpace = letter === " "
              const delay = i * 40

              return (
                <span
                  key={i}
                  className="inline-block transition-all"
                  style={{
                    transform: animationPhase >= 2 
                      ? "translateY(0) scaleY(1) skewX(0deg)" 
                      : "translateY(50px) scaleY(2) skewX(-20deg)",
                    opacity: animationPhase >= 2 ? 1 : 0,
                    filter: animationPhase >= 2 ? "blur(0px)" : "blur(8px)",
                    transitionDelay: `${delay}ms`,
                    transitionDuration: "600ms",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    width: isSpace ? "0.25em" : "auto",
                  }}
                >
                  {letter}
                </span>
              )
            })}
          </h2>
        </div>

        {/* Subtext */}
        <div className="space-y-4 mb-12">
          <p
            className={`text-xl md:text-2xl text-white/60 transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Listo para llevar tu empresa al mundo digital?
          </p>

          <p
            className={`text-lg text-white/40 transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Platicanos tu proyecto y te diremos como hacerlo realidad.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 mb-12 ${
            animationPhase >= 4 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: animationPhase >= 4 
              ? "scale(1) translateY(0)" 
              : "scale(0.8) translateY(20px)",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-semibold group relative overflow-hidden"
          >
            <Link href="mailto:contacto@grupoideasmx.com">
              <span className="relative z-10 flex items-center">
                Cotiza ya!
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Contact info cards */}
        <div
          className={`grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto transition-all duration-700 ${
            animationPhase >= 4 ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <a
            href="tel:+525575086614"
            className="group flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/40 uppercase tracking-wider">Telefono</div>
              <div className="text-white font-medium">55-7508-6614</div>
            </div>
          </a>
          
          <a
            href="mailto:contacto@grupoideasmx.com"
            className="group flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/40 uppercase tracking-wider">Email</div>
              <div className="text-white font-medium text-sm">contacto@grupoideasmx.com</div>
            </div>
          </a>
          
          <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-xs text-white/40 uppercase tracking-wider">Ubicacion</div>
              <div className="text-white font-medium">Mexico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
