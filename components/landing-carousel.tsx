"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface LandingItem {
  id: number
  title: string
  category: string
  gradient: string
}

const landingItems: LandingItem[] = [
  { id: 1, title: "E-commerce Pro", category: "Tienda Online", gradient: "from-cyan-500/20 to-teal-500/20" },
  { id: 2, title: "Restaurant App", category: "Gastronomia", gradient: "from-amber-500/20 to-orange-500/20" },
  { id: 3, title: "Real Estate", category: "Inmobiliaria", gradient: "from-blue-500/20 to-indigo-500/20" },
  { id: 4, title: "Medical Center", category: "Salud", gradient: "from-emerald-500/20 to-green-500/20" },
  { id: 5, title: "Law Firm", category: "Legal", gradient: "from-slate-500/20 to-gray-500/20" },
  { id: 6, title: "Fitness Studio", category: "Deportes", gradient: "from-rose-500/20 to-pink-500/20" },
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
    const itemWidth = 320 + 32 // card width + gap
    const totalWidth = itemWidth * landingItems.length

    const animate = () => {
      positionRef.current += 0.6
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
    <section ref={containerRef} className="relative py-16 md:py-24 overflow-hidden bg-background" id="proyectos">
      {/* Section header */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center"
        style={{
          transform: `translateY(${(1 - scrollProgress) * 40}px)`,
          opacity: Math.min(1, scrollProgress * 2),
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
          Nuestros Proyectos
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Disenos que generan resultados para nuestros clientes.
        </p>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden px-4">
          <div ref={scrollRef} className="flex gap-8" style={{ willChange: "transform" }}>
            {duplicatedItems.map((item, index) => (
              <CarouselCard key={`${item.id}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CarouselCard({ item, index }: { item: LandingItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isInCenter, setIsInCenter] = useState(false)
  const [revealProgress, setRevealProgress] = useState(0)
  const animationRef = useRef<number>()

  // Check if card is in center of viewport
  useEffect(() => {
    const checkPosition = () => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const cardCenterX = rect.left + rect.width / 2
      const distance = Math.abs(centerX - cardCenterX)
      const threshold = rect.width * 0.8

      const wasInCenter = isInCenter
      const nowInCenter = distance < threshold

      if (nowInCenter && !wasInCenter) {
        setIsInCenter(true)
        setRevealProgress(0)
      } else if (!nowInCenter && wasInCenter) {
        setIsInCenter(false)
      }
    }

    const interval = setInterval(checkPosition, 50)
    return () => clearInterval(interval)
  }, [isInCenter])

  // Animate reveal when in center
  useEffect(() => {
    if (!isInCenter) {
      setRevealProgress(0)
      return
    }

    const startTime = Date.now()
    const duration = 1500

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(1, elapsed / duration)
      // Easing function for smooth transition
      const eased = 1 - Math.pow(1 - progress, 3)
      setRevealProgress(eased)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isInCenter])

  return (
    <div
      ref={cardRef}
      className="relative w-80 h-96 rounded-xl overflow-hidden flex-shrink-0 border border-border bg-card shadow-sm transition-transform duration-300 hover:scale-[1.02]"
    >
      {/* Code view (visible when not revealed) */}
      <div
        className="absolute inset-0 bg-[#1e1e2e] p-4 font-mono text-xs overflow-hidden transition-opacity duration-500"
        style={{ opacity: 1 - revealProgress }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-gray-500 text-[10px]">{item.title.toLowerCase().replace(' ', '-')}.tsx</span>
        </div>
        <div className="space-y-1">
          {codeLines.map((line, i) => (
            <CodeLine key={i} line={line} lineNumber={i + 1} isInCenter={isInCenter} delay={i * 80} />
          ))}
        </div>
        {/* Typing cursor */}
        <span 
          className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse"
          style={{ opacity: isInCenter && revealProgress < 0.5 ? 1 : 0 }}
        />
      </div>

      {/* Landing preview (revealed) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-all duration-500`}
        style={{
          clipPath: `inset(0 ${100 - revealProgress * 100}% 0 0)`,
        }}
      >
        {/* Mock landing page structure */}
        <div className="p-4 h-full flex flex-col">
          {/* Mock header */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-16 h-3 bg-foreground/20 rounded" />
            <div className="flex gap-2">
              <div className="w-8 h-2 bg-foreground/10 rounded" />
              <div className="w-8 h-2 bg-foreground/10 rounded" />
              <div className="w-8 h-2 bg-foreground/10 rounded" />
            </div>
          </div>

          {/* Mock hero section */}
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="w-32 h-4 bg-foreground/30 rounded mb-3" />
            <div className="w-48 h-3 bg-foreground/20 rounded mb-2" />
            <div className="w-40 h-3 bg-foreground/20 rounded mb-6" />
            <div className="w-20 h-8 bg-primary/60 rounded" />
          </div>

          {/* Mock content blocks */}
          <div className="grid grid-cols-3 gap-2 mt-auto">
            <div className="h-16 bg-foreground/10 rounded" />
            <div className="h-16 bg-foreground/10 rounded" />
            <div className="h-16 bg-foreground/10 rounded" />
          </div>
        </div>

        {/* Overlay with info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent p-4">
          <span className="text-xs uppercase tracking-wider text-white/80">{item.category}</span>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        </div>
      </div>
    </div>
  )
}

function CodeLine({ line, lineNumber, isInCenter, delay }: { line: string; lineNumber: number; isInCenter: boolean; delay: number }) {
  const [displayedChars, setDisplayedChars] = useState(0)

  useEffect(() => {
    if (!isInCenter) {
      setDisplayedChars(0)
      return
    }

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedChars((prev) => {
          if (prev >= line.length) {
            clearInterval(interval)
            return prev
          }
          return prev + 1
        })
      }, 20)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isInCenter, line.length, delay])

  // Syntax highlighting
  const highlightCode = (text: string) => {
    return text
      .replace(/(import|from|export|default|function|return|const)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
      .replace(/(\{|\}|\(|\)|<|>|\/)/g, '<span class="text-cyan-400">$1</span>')
      .replace(/(className|title|items|button)/g, '<span class="text-yellow-400">$1</span>')
  }

  const displayedText = line.slice(0, displayedChars)

  return (
    <div className="flex">
      <span className="w-6 text-gray-600 select-none">{lineNumber}</span>
      <span
        className="text-gray-300"
        dangerouslySetInnerHTML={{ __html: highlightCode(displayedText) }}
      />
    </div>
  )
}
