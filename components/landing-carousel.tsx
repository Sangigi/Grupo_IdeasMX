"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LandingItem {
  id: number
  title: string
  category: string
  color: string
  href: string
}

const landingItems: LandingItem[] = [
  { id: 1, title: "E-commerce Pro", category: "Tienda Online", color: "#06b6d4", href: "/#servicios" },
  { id: 2, title: "Restaurant App", category: "Gastronomia", color: "#f59e0b", href: "/#servicios" },
  { id: 3, title: "Real Estate", category: "Inmobiliaria", color: "#3b82f6", href: "/#servicios" },
  { id: 4, title: "Medical Center", category: "Salud", color: "#22c55e", href: "/#servicios" },
  { id: 5, title: "Law Firm", category: "Legal", color: "#64748b", href: "/legal" },
  { id: 6, title: "Fitness Studio", category: "Deportes", color: "#f43f5e", href: "/#servicios" },
]

export function LandingCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons()
      return () => scrollElement.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 overflow-hidden bg-background" id="proyectos">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Section header */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 border border-primary/40 px-3 py-1.5 bg-primary/5">
              <div className="w-1.5 h-1.5 bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.15em] text-primary font-mono">
                Portfolio
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-display)] text-balance">
              Nuestros Proyectos
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl">
              Disenos que generan resultados para nuestros clientes.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors"
              aria-label="Ver proyectos anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:bg-muted transition-colors"
              aria-label="Ver mas proyectos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {landingItems.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* View all button */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 transition-all duration-700 delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <Button asChild variant="outline" className="group">
          <Link href="#servicios">
            Ver todos los servicios
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

function ProjectCard({ 
  item, 
  index, 
  isVisible 
}: { 
  item: LandingItem
  index: number
  isVisible: boolean 
}) {
  return (
    <Link
      href={item.href}
      className={`relative w-[320px] h-[400px] rounded-xl overflow-hidden flex-shrink-0 snap-start border border-border bg-card shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ background: `linear-gradient(135deg, ${item.color}40, transparent)` }}
      />

      {/* Mock landing page preview */}
      <div className="p-5 h-full flex flex-col">
        {/* Mock header */}
        <div className="flex items-center justify-between mb-6">
          <div 
            className="w-16 h-2.5 rounded"
            style={{ backgroundColor: `${item.color}40` }}
          />
          <div className="flex gap-2">
            <div className="w-8 h-1.5 bg-foreground/10 rounded" />
            <div className="w-8 h-1.5 bg-foreground/10 rounded" />
            <div className="w-8 h-1.5 bg-foreground/10 rounded" />
          </div>
        </div>

        {/* Mock hero section */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <div className="w-32 h-4 bg-foreground/20 rounded mb-3" />
          <div className="w-44 h-2.5 bg-foreground/10 rounded mb-2" />
          <div className="w-36 h-2.5 bg-foreground/10 rounded mb-6" />
          <div 
            className="w-20 h-8 rounded-lg"
            style={{ backgroundColor: item.color }}
          />
        </div>

        {/* Mock content blocks */}
        <div className="grid grid-cols-3 gap-2 mt-auto">
          <div className="h-16 bg-foreground/5 rounded-lg" />
          <div className="h-16 bg-foreground/5 rounded-lg" />
          <div className="h-16 bg-foreground/5 rounded-lg" />
        </div>
      </div>

      {/* Overlay with info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-transparent p-5 pt-16">
        <div className="flex items-end justify-between">
          <div>
            <span 
              className="text-xs uppercase tracking-wider font-mono"
              style={{ color: item.color }}
            >
              {item.category}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ backgroundColor: item.color }}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </Link>
  )
}
