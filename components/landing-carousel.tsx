"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ExternalLink, Palette, Move } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface LandingItem {
  id: number
  title: string
  category: string
  color: string
  href: string
  image: string
  type: "website" | "branding"
  externalLink?: string
}

const landingItems: LandingItem[] = [
  { 
    id: 1, 
    title: "The Noise Production", 
    category: "Sitio Web", 
    color: "#1e3a5f", 
    href: "/#servicios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The_Noise_Lab-u2RhSZdD1oVLa3FG8qYMvV9fY90eNe.png",
    type: "website",
    externalLink: "https://www.thenoiseproduction.com/",
  },
  { 
    id: 2, 
    title: "PW Realtors", 
    category: "Sitio Web", 
    color: "#c9a962", 
    href: "/#servicios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PWREALTORS-aBkQAoR2McZxHrb1H3R2ooH3d2BK0t.png",
    type: "website",
    externalLink: "https://pwrealtors.com/text/",
  },
  { 
    id: 3, 
    title: "Libertyfin", 
    category: "Sitio Web", 
    color: "#22c55e", 
    href: "/#servicios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Libertyfin-DPEos5zuuyik2nFIId1TG0p6D7s73V.png",
    type: "website",
    externalLink: "https://libertyfin.com.mx/",
  },
  { 
    id: 4, 
    title: "Seguros Lux", 
    category: "Sitio Web", 
    color: "#1e3a5f", 
    href: "/#servicios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seguros_Lux-mUwCXdRrZnV7kOtU3QipunnQcsLZRL.png",
    type: "website",
    externalLink: "https://seguroslux.mx/",
  },
  { 
    id: 5, 
    title: "Kopa Colectors 3D", 
    category: "Branding / Logotipo", 
    color: "#e11d48", 
    href: "/#servicios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img%20Kopa-seYQ7mvakdkiiEBUGpvu8zFF2tIMQk.webp",
    type: "branding",
  },
  { 
    id: 6, 
    title: "Muebles Lozano Outlet", 
    category: "Branding / Logotipo", 
    color: "#ef4444", 
    href: "/#servicios",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20lozona-CMXeRYWpdAQTCgaqOJwqRMmZ0h1MxO.webp",
    type: "branding",
  },
]

export function LandingCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
              Diseños que generan resultados para nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel with infinite scroll */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Animated scroll container */}
        <div className="flex animate-scroll hover:[animation-play-state:paused]">
          {/* Duplicate items for seamless loop */}
          {[...landingItems, ...landingItems].map((item, index) => (
            <ProjectCard
              key={`${item.id}-${index}`}
              item={item}
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

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ 
  item, 
  isVisible 
}: { 
  item: LandingItem
  isVisible: boolean 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [showDesignMode, setShowDesignMode] = useState(true)
  const [hasPassedLine, setHasPassedLine] = useState(false)

  // Transformation line at 70% of screen width
  const TRANSFORM_LINE = 0.70

  // Detect position for animation
  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const checkPosition = () => {
      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const screenWidth = window.innerWidth
      const transformPoint = screenWidth * TRANSFORM_LINE
      
      // When card passes the transform line (70% of screen)
      if (cardCenter < transformPoint && !hasPassedLine) {
        setHasPassedLine(true)
        setShowDesignMode(false)
      }
      
      // Reset when card goes back to the right side (for loop)
      if (cardCenter > screenWidth * 0.85 && hasPassedLine) {
        setHasPassedLine(false)
        setShowDesignMode(true)
      }
    }

    let animationId: number
    const animate = () => {
      checkPosition()
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [hasPassedLine])

  const handleCardClick = () => {
    if (item.externalLink) {
      window.open(item.externalLink, '_blank')
    }
  }

  return (
    <div
      ref={cardRef}
      className="relative w-[340px] h-[420px] rounded-xl overflow-hidden flex-shrink-0 mx-3 border border-border bg-card shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Card content with slide effect */}
      <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${showDesignMode ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Design software view for branding, Code editor for websites */}
        {item.type === "branding" ? (
          // Adobe/Canva style design editor
          <div className="h-full flex flex-col bg-[#2d2d2d] text-white">
            {/* Editor header */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#3d3d3d] border-b border-[#4d4d4d]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Palette className="w-4 h-4 text-pink-400" />
                <span className="text-xs text-gray-300">Adobe Illustrator</span>
              </div>
            </div>

            {/* Design canvas */}
            <div className="flex-1 flex">
              {/* Toolbar */}
              <div className="w-10 bg-[#3d3d3d] flex flex-col items-center py-2 gap-2">
                <div className="w-6 h-6 rounded bg-[#4d4d4d] flex items-center justify-center">
                  <Move className="w-3 h-3 text-gray-400" />
                </div>
                <div className="w-6 h-6 rounded bg-[#4d4d4d]" />
                <div className="w-6 h-6 rounded bg-[#4d4d4d]" />
                <div className="w-6 h-6 rounded bg-[#4d4d4d]" />
              </div>

              {/* Canvas area */}
              <div className="flex-1 bg-[#1a1a1a] p-4 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  {/* Preview image */}
                  <div className="absolute inset-4 rounded overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Selection handles */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-2 border-blue-500 bg-white" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-2 border-blue-500 bg-white" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-2 border-blue-500 bg-white" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-2 border-blue-500 bg-white" />
                </div>
              </div>

              {/* Properties panel */}
              <div className="w-16 bg-[#3d3d3d] p-2">
                <div className="text-[8px] text-gray-400 mb-2">Capas</div>
                <div className="space-y-1">
                  <div className="h-3 bg-[#4d4d4d] rounded" />
                  <div className="h-3 bg-[#4d4d4d] rounded" />
                  <div className="h-3 bg-blue-500/50 rounded" />
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="px-3 py-1.5 bg-[#3d3d3d] text-[10px] text-gray-400 flex items-center justify-between">
              <span>100%</span>
              <span>RGB/8</span>
            </div>
          </div>
        ) : (
          // Code editor view for websites
          <div className="h-full flex flex-col bg-[#1e1e1e] text-white">
            {/* Editor header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#3c3c3c]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
              </div>
              <span className="text-xs text-gray-400 ml-2 font-mono">{item.title.toLowerCase().replace(/ /g, "-")}.tsx</span>
            </div>

            {/* Code content */}
            <div className="flex-1 p-4 font-mono text-xs leading-relaxed overflow-hidden">
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">1</span>
                <span className="ml-2">
                  <span className="text-purple-400">import</span> {"{"} <span style={{ color: item.color }}>Site</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">&apos;@/components&apos;</span>
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">2</span>
                <span className="ml-2"></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">3</span>
                <span className="ml-2">
                  <span className="text-purple-400">export function</span> <span style={{ color: item.color }}>Landing</span><span className="text-gray-500">()</span> {"{"}
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">4</span>
                <span className="ml-2">  <span className="text-purple-400">const</span> data = <span style={{ color: item.color }}>useData</span>()</span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">5</span>
                <span className="ml-2"></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">6</span>
                <span className="ml-2">  <span className="text-purple-400">return</span> <span className="text-gray-500">(</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">7</span>
                <span className="ml-2">    <span className="text-gray-500">{"<"}</span><span style={{ color: item.color }}>Site.Layout</span><span className="text-gray-500">{">"}</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">8</span>
                <span className="ml-2">      <span className="text-gray-500">{"<"}</span>Hero <span className="text-gray-500">/{">"}</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">9</span>
                <span className="ml-2">      <span className="text-gray-500">{"<"}</span>Features <span className="text-gray-500">/{">"}</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">10</span>
                <span className="ml-2">    <span className="text-gray-500">{"</"}</span><span style={{ color: item.color }}>Site.Layout</span><span className="text-gray-500">{">"}</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">11</span>
                <span className="ml-2">  <span className="text-gray-500">)</span></span>
              </div>
              <div className="flex">
                <span className="w-6 text-gray-500 select-none">12</span>
                <span className="ml-2">{"}"}</span>
              </div>
            </div>

            {/* Status bar */}
            <div className="px-4 py-2 bg-[#007acc] text-xs text-white/90 flex items-center justify-between">
              <span>TypeScript React</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Ready
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Website preview view - slides in from right */}
      <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${showDesignMode ? "translate-x-full" : "translate-x-0"}`}>
        {/* Mock website preview */}
        <div className="h-full flex flex-col">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-2 px-3 py-1 bg-white rounded text-xs text-gray-500 font-mono truncate">
              {item.externalLink ? item.externalLink.replace('https://', '').replace('http://', '').split('/')[0] : `${item.title.toLowerCase().replace(/ /g, "")}.com`}
            </div>
          </div>

          {/* Website content */}
          <div className="flex-1 bg-white overflow-hidden relative">
            <Image 
              src={item.image} 
              alt={item.title}
              fill
              className={item.type === "branding" ? "object-contain p-4" : "object-cover object-top"}
            />
          </div>
        </div>
      </div>

      {/* Overlay with info - always visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 pt-16 z-20">
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
          {item.externalLink ? (
            <a
              href={item.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: item.color }}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          ) : (
            <Link
              href={item.href}
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: item.color }}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
