"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LandingItem {
  id: number
  title: string
  category: string
  gradient: string
  color: string
  href: string
}

const landingItems: LandingItem[] = [
  { id: 1, title: "E-commerce Pro", category: "Tienda Online", gradient: "from-cyan-500/20 to-teal-500/20", color: "#06b6d4", href: "/#servicios" },
  { id: 2, title: "Restaurant App", category: "Gastronomia", gradient: "from-amber-500/20 to-orange-500/20", color: "#f59e0b", href: "/#servicios" },
  { id: 3, title: "Real Estate", category: "Inmobiliaria", gradient: "from-blue-500/20 to-indigo-500/20", color: "#3b82f6", href: "/#servicios" },
  { id: 4, title: "Medical Center", category: "Salud", gradient: "from-emerald-500/20 to-green-500/20", color: "#22c55e", href: "/#servicios" },
  { id: 5, title: "Law Firm", category: "Legal", gradient: "from-slate-500/20 to-gray-500/20", color: "#64748b", href: "/legal" },
  { id: 6, title: "Fitness Studio", category: "Deportes", gradient: "from-rose-500/20 to-pink-500/20", color: "#f43f5e", href: "/#servicios" },
]

// Code lines for the "typing" effect
const codeLines = [
  'import { createApp } from "next"',
  '',
  'export default function Landing() {',
  '  return (',
  '    <main className="min-h-screen">',
  '      <Hero title="Welcome" />',
  '      <Features items={[...]} />',
  '      <CTA button="Get Started" />',
  '    </main>',
  '  )',
  '}',
]

export function LandingCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const positionRef = useRef(0)
  const animationRef = useRef<number>()

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

  // Scroll-based progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth infinite scroll animation
  useEffect(() => {
    if (!isVisible || !scrollRef.current) return

    const scroll = scrollRef.current
    const itemWidth = 340 + 24 // card width + gap
    const totalWidth = itemWidth * landingItems.length

    const animate = () => {
      positionRef.current += 0.5
      if (positionRef.current >= totalWidth) {
        positionRef.current = 0
      }
      scroll.style.transform = `translateX(-${positionRef.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible])

  // Duplicate items for seamless loop
  const duplicatedItems = [...landingItems, ...landingItems, ...landingItems]

  return (
    <section ref={containerRef} className="relative py-20 md:py-28 overflow-hidden bg-background" id="proyectos">
      {/* Brutalist decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Section header */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 40}px)`,
          opacity: Math.min(1, scrollProgress * 2),
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            {/* Brutalist badge */}
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
          
          <Button asChild variant="outline" className="self-start md:self-auto group">
            <Link href="#servicios">
              Ver todos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden px-4">
          <div ref={scrollRef} className="flex gap-6" style={{ willChange: "transform" }}>
            {duplicatedItems.map((item, index) => (
              <CarouselCard key={`${item.id}-${index}`} item={item} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CarouselCard({ item, index, isVisible: parentVisible }: { item: LandingItem; index: number; isVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isInCenter, setIsInCenter] = useState(false)
  const [wasInCenter, setWasInCenter] = useState(false)
  const [revealProgress, setRevealProgress] = useState(0)
  const [isCardVisible, setIsCardVisible] = useState(false)
  const animationRef = useRef<number>()
  const revealStartTimeRef = useRef<number | null>(null)

  // Track if card is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardVisible(entry.isIntersecting)
        // Reset when card leaves viewport completely
        if (!entry.isIntersecting) {
          setWasInCenter(false)
          setRevealProgress(0)
          revealStartTimeRef.current = null
        }
      },
      { threshold: 0 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Check if card is in center of viewport
  useEffect(() => {
    if (!isCardVisible) return

    const checkPosition = () => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const cardCenterX = rect.left + rect.width / 2
      const distance = Math.abs(centerX - cardCenterX)
      const threshold = rect.width * 0.6

      const nowInCenter = distance < threshold

      if (nowInCenter && !isInCenter) {
        setIsInCenter(true)
        if (!wasInCenter) {
          setWasInCenter(true)
          revealStartTimeRef.current = Date.now()
        }
      } else if (!nowInCenter && isInCenter) {
        setIsInCenter(false)
      }
    }

    const interval = setInterval(checkPosition, 50)
    return () => clearInterval(interval)
  }, [isInCenter, wasInCenter, isCardVisible])

  // Animate reveal - persists once triggered until out of view
  useEffect(() => {
    if (!wasInCenter || !isCardVisible) return

    const animate = () => {
      if (!revealStartTimeRef.current) {
        revealStartTimeRef.current = Date.now()
      }
      
      const elapsed = Date.now() - revealStartTimeRef.current
      const duration = 2000
      const progress = Math.min(1, elapsed / duration)
      // Smooth easing
      const eased = 1 - Math.pow(1 - progress, 4)
      setRevealProgress(eased)

      if (progress < 1 && isCardVisible) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [wasInCenter, isCardVisible])

  return (
    <div
      ref={cardRef}
      className="relative w-[340px] h-[420px] rounded-xl overflow-hidden flex-shrink-0 border border-border bg-card shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-lg group"
    >
      {/* Code view (visible when not revealed) */}
      <div
        className="absolute inset-0 bg-[#0d0d0d] p-5 font-mono text-xs overflow-hidden transition-opacity duration-700"
        style={{ opacity: 1 - revealProgress }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-white/40 text-[10px] font-mono">{item.title.toLowerCase().replace(' ', '-')}.tsx</span>
        </div>
        
        {/* Code lines */}
        <div className="space-y-1.5">
          {codeLines.map((line, i) => (
            <CodeLine 
              key={i} 
              line={line} 
              lineNumber={i + 1} 
              isAnimating={wasInCenter && isCardVisible && revealProgress < 0.8} 
              delay={i * 100} 
            />
          ))}
        </div>
        
        {/* Typing cursor */}
        <span 
          className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse mt-2"
          style={{ opacity: wasInCenter && revealProgress < 0.5 ? 1 : 0 }}
        />
        
        {/* Decorative corner */}
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/20" />
      </div>

      {/* Landing preview (revealed) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-all duration-700`}
        style={{
          clipPath: `inset(0 ${100 - revealProgress * 100}% 0 0)`,
        }}
      >
        {/* Mock landing page structure */}
        <div className="p-5 h-full flex flex-col">
          {/* Mock header */}
          <div className="flex items-center justify-between mb-8">
            <div className="w-20 h-3 rounded" style={{ backgroundColor: `${item.color}40` }} />
            <div className="flex gap-3">
              <div className="w-10 h-2 bg-foreground/10 rounded" />
              <div className="w-10 h-2 bg-foreground/10 rounded" />
              <div className="w-10 h-2 bg-foreground/10 rounded" />
            </div>
          </div>

          {/* Mock hero section */}
          <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
            <div className="w-40 h-5 bg-foreground/30 rounded mb-4" />
            <div className="w-56 h-3 bg-foreground/20 rounded mb-2" />
            <div className="w-48 h-3 bg-foreground/20 rounded mb-8" />
            <div 
              className="w-24 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: item.color }}
            >
              <div className="w-12 h-2 bg-white/80 rounded" />
            </div>
          </div>

          {/* Mock content blocks */}
          <div className="grid grid-cols-3 gap-3 mt-auto">
            <div className="h-20 bg-foreground/10 rounded-lg" />
            <div className="h-20 bg-foreground/10 rounded-lg" />
            <div className="h-20 bg-foreground/10 rounded-lg" />
          </div>
        </div>

        {/* Overlay with info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent p-5">
          <div className="flex items-end justify-between">
            <div>
              <span 
                className="text-xs uppercase tracking-wider font-mono"
                style={{ color: item.color }}
              >
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
            </div>
            <Link
              href={item.href}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: item.color }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div 
        className="absolute bottom-0 left-0 h-1 transition-all duration-300"
        style={{ 
          width: `${revealProgress * 100}%`,
          backgroundColor: item.color,
          opacity: revealProgress < 1 ? 1 : 0
        }}
      />
    </div>
  )
}

function CodeLine({ line, lineNumber, isAnimating, delay }: { line: string; lineNumber: number; isAnimating: boolean; delay: number }) {
  const [displayedChars, setDisplayedChars] = useState(0)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (!isAnimating) {
      if (!hasStartedRef.current) {
        setDisplayedChars(0)
      }
      return
    }

    hasStartedRef.current = true

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedChars((prev) => {
          if (prev >= line.length) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 25)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isAnimating, line.length, delay])

  // Syntax highlighting
  const highlightCode = (text: string) => {
    return text
      .replace(/(import|from|export|default|function|return|const)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(".*?")/g, '<span class="text-emerald-400">$1</span>')
      .replace(/(\{|\}|\(|\)|<|>|\/)/g, '<span class="text-cyan-400">$1</span>')
      .replace(/(className|title|items|button)/g, '<span class="text-amber-400">$1</span>')
      .replace(/(Landing|Hero|Features|CTA)/g, '<span class="text-blue-400">$1</span>')
  }

  const displayedText = line.slice(0, displayedChars)

  return (
    <div className="flex items-start">
      <span className="w-6 text-white/30 select-none text-right mr-3">{lineNumber}</span>
      <span
        className="text-white/70"
        dangerouslySetInnerHTML={{ __html: highlightCode(displayedText) }}
      />
    </div>
  )
}
