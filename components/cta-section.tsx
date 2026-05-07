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

  // Animation sequence - runs only once
  useEffect(() => {
    if (!isVisible) return

    const timers = [
      setTimeout(() => setAnimationPhase(1), 200),
      setTimeout(() => setAnimationPhase(2), 600),
      setTimeout(() => setAnimationPhase(3), 1000),
      setTimeout(() => setAnimationPhase(4), 1400),
    ]

    return () => timers.forEach(clearTimeout)
  }, [isVisible])

  return (
    <section ref={sectionRef} id="contacto" className="py-28 md:py-36 relative overflow-hidden bg-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
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

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20 pointer-events-none hidden md:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div
          className={`mb-10 transition-all duration-700 ${
            animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/logo.jpg"
            alt="Grupo Ideas MX"
            width={240}
            height={96}
            className="h-20 md:h-24 w-auto mx-auto"
          />
        </div>

        {/* Main heading */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground font-[family-name:var(--font-display)] mb-6 transition-all duration-700 ${
            animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Haz realidad tu idea
        </h2>

        {/* Subtext */}
        <div className="space-y-4 mb-12">
          <p
            className={`text-xl md:text-2xl text-muted-foreground transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Listo para llevar tu empresa al mundo digital?
          </p>

          <p
            className={`text-lg text-muted-foreground/70 transition-all duration-700 delay-100 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Platicanos tu proyecto y te diremos como hacerlo realidad.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`mb-12 transition-all duration-700 ${
            animationPhase >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl font-semibold group"
          >
            <Link href="mailto:contacto@grupoideasmx.com">
              <span className="flex items-center">
                Cotiza ya!
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </span>
            </Link>
          </Button>
        </div>

        {/* Contact info cards */}
        <div
          className={`grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            animationPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="tel:+525575086614"
            className="group flex items-center gap-3 p-4 bg-muted/50 border border-border rounded-lg hover:bg-muted hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Telefono</div>
              <div className="text-foreground font-medium">55-7508-6614</div>
            </div>
          </a>
          
          <a
            href="mailto:contacto@grupoideasmx.com"
            className="group flex items-center gap-3 p-4 bg-muted/50 border border-border rounded-lg hover:bg-muted hover:border-primary/30 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left min-w-0 overflow-hidden">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
              <div className="text-foreground font-medium text-xs sm:text-sm truncate">contacto@grupoideasmx.com</div>
            </div>
          </a>
          
          <div className="flex items-center gap-3 p-4 bg-muted/50 border border-border rounded-lg">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Ubicacion</div>
              <div className="text-foreground font-medium">Mexico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
