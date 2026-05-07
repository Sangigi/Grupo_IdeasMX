"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
      { threshold: 0.4 }
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
      setTimeout(() => setAnimationPhase(2), 1000),
      setTimeout(() => setAnimationPhase(3), 1800),
      setTimeout(() => setAnimationPhase(4), 2500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [isVisible])

  const mainText = "Haz realidad tu idea"

  return (
    <section ref={sectionRef} id="contacto" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 50}px)`,
          opacity: Math.min(1, scrollProgress * 1.5),
        }}
      >
        {/* Animated Logo - liquid morphing effect */}
        <div
          className={`mb-8 transition-all duration-700 ${animationPhase >= 1 ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative inline-block">
            <Image
              src="/logo.jpg"
              alt="Grupo Ideas MX"
              width={200}
              height={80}
              className="h-16 md:h-20 w-auto mx-auto transition-all duration-1000"
              style={{
                filter: animationPhase >= 1 ? "blur(0px)" : "blur(20px)",
                transform: animationPhase >= 1 
                  ? "scale(1) translateY(0)" 
                  : "scale(0.5) translateY(30px)",
                opacity: animationPhase >= 1 ? 1 : 0,
              }}
            />
          </div>
        </div>

        {/* "Haz realidad tu idea" with liquid/morphing animation */}
        <div
          className={`mb-4 overflow-hidden transition-all duration-700 ${
            animationPhase >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-[family-name:var(--font-display)]">
            {mainText.split("").map((letter, i) => {
              const isSpace = letter === " "
              const delay = i * 50

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

        {/* Subtext with wave effect */}
        <div className="space-y-3 mb-10">
          <p
            className={`text-xl md:text-2xl text-muted-foreground transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: "100ms",
            }}
          >
            {"¿Listo para llevar tu empresa al mundo digital?".split("").map((char, i) => (
              <span
                key={i}
                className="inline-block transition-all"
                style={{
                  transform: animationPhase >= 3 ? "translateY(0)" : `translateY(${Math.sin(i * 0.5) * 20}px)`,
                  opacity: animationPhase >= 3 ? 1 : 0,
                  transitionDelay: `${100 + i * 15}ms`,
                  transitionDuration: "400ms",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>

          <p
            className={`text-lg text-muted-foreground transition-all duration-700 ${
              animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: "400ms",
            }}
          >
            Platicanos tu proyecto y te diremos como hacerlo realidad.
          </p>
        </div>

        {/* CTA Button with elastic effect */}
        <div
          className={`transition-all duration-700 ${
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
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-xl font-semibold group"
          >
            <Link href="mailto:contacto@grupoideasmx.com">
              Cotiza ya!
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>

        {/* Contact info with stagger */}
        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            animationPhase >= 4 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "200ms",
          }}
        >
          <a
            href="tel:+525575086614"
            className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            55-7508-6614
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a
            href="mailto:contacto@grupoideasmx.com"
            className="text-lg text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            contacto@grupoideasmx.com
          </a>
        </div>
      </div>
    </section>
  )
}
