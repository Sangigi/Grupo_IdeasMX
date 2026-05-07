"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface LandingItem {
  id: number
  title: string
  category: string
  color: string
  href: string
  image?: string
  code: string[]
}

const landingItems: LandingItem[] = [
  { 
    id: 1, 
    title: "E-commerce Pro", 
    category: "Tienda Online", 
    color: "#06b6d4", 
    href: "/#servicios",
    code: [
      "import { Shop } from '@/store'",
      "",
      "export function Tienda() {",
      "  const productos = useProductos()",
      "  const carrito = useCarrito()",
      "",
      "  return (",
      "    <Shop.Layout>",
      "      <Productos items={productos} />",
      "      <Carrito total={carrito.total} />",
      "    </Shop.Layout>",
      "  )",
      "}",
    ]
  },
  { 
    id: 2, 
    title: "Restaurant App", 
    category: "Gastronomia", 
    color: "#f59e0b", 
    href: "/#servicios",
    code: [
      "import { Menu } from '@/restaurant'",
      "",
      "export function Restaurante() {",
      "  const menu = useMenu()",
      "  const reservas = useReservas()",
      "",
      "  return (",
      "    <Menu.Container>",
      "      <Platillos items={menu} />",
      "      <Reservar onSubmit={reservas.crear} />",
      "    </Menu.Container>",
      "  )",
      "}",
    ]
  },
  { 
    id: 3, 
    title: "Real Estate", 
    category: "Inmobiliaria", 
    color: "#3b82f6", 
    href: "/#servicios",
    code: [
      "import { Properties } from '@/realestate'",
      "",
      "export function Inmobiliaria() {",
      "  const propiedades = usePropiedades()",
      "  const filtros = useFiltros()",
      "",
      "  return (",
      "    <Properties.Grid>",
      "      <Buscador filtros={filtros} />",
      "      <Listado items={propiedades} />",
      "    </Properties.Grid>",
      "  )",
      "}",
    ]
  },
  { 
    id: 4, 
    title: "Medical Center", 
    category: "Salud", 
    color: "#22c55e", 
    href: "/#servicios",
    code: [
      "import { Health } from '@/medical'",
      "",
      "export function Clinica() {",
      "  const doctores = useDoctores()",
      "  const citas = useCitas()",
      "",
      "  return (",
      "    <Health.Portal>",
      "      <Especialistas list={doctores} />",
      "      <AgendarCita onBook={citas.crear} />",
      "    </Health.Portal>",
      "  )",
      "}",
    ]
  },
  { 
    id: 5, 
    title: "Law Firm", 
    category: "Legal", 
    color: "#64748b", 
    href: "/legal",
    code: [
      "import { Legal } from '@/lawfirm'",
      "",
      "export function Despacho() {",
      "  const abogados = useAbogados()",
      "  const casos = useCasos()",
      "",
      "  return (",
      "    <Legal.Office>",
      "      <Equipo members={abogados} />",
      "      <Consulta onSubmit={casos.nueva} />",
      "    </Legal.Office>",
      "  )",
      "}",
    ]
  },
  { 
    id: 6, 
    title: "Fitness Studio", 
    category: "Deportes", 
    color: "#f43f5e", 
    href: "/#servicios",
    code: [
      "import { Fitness } from '@/gym'",
      "",
      "export function Gimnasio() {",
      "  const clases = useClases()",
      "  const membresias = useMembresias()",
      "",
      "  return (",
      "    <Fitness.App>",
      "      <Horarios clases={clases} />",
      "      <Inscribirse plans={membresias} />",
      "    </Fitness.App>",
      "  )",
      "}",
    ]
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
              Disenos que generan resultados para nuestros clientes.
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
  const [showCode, setShowCode] = useState(true)
  const [typedLines, setTypedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)

  // Typing effect
  useEffect(() => {
    if (!isVisible || !showCode) return

    const typeInterval = setInterval(() => {
      if (currentLine < item.code.length) {
        const line = item.code[currentLine]
        if (currentChar < line.length) {
          setTypedLines(prev => {
            const newLines = [...prev]
            newLines[currentLine] = line.slice(0, currentChar + 1)
            return newLines
          })
          setCurrentChar(prev => prev + 1)
        } else {
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
          setTypedLines(prev => [...prev, ""])
        }
      } else {
        // Finished typing, switch to preview after delay
        clearInterval(typeInterval)
        setTimeout(() => {
          setShowCode(false)
        }, 1000)
      }
    }, 30)

    return () => clearInterval(typeInterval)
  }, [isVisible, showCode, currentLine, currentChar, item.code])

  // Switch back to code after showing preview
  useEffect(() => {
    if (!showCode) {
      const timer = setTimeout(() => {
        setShowCode(true)
        setTypedLines([])
        setCurrentLine(0)
        setCurrentChar(0)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [showCode])

  return (
    <div
      className="relative w-[340px] h-[420px] rounded-xl overflow-hidden flex-shrink-0 mx-3 border border-border bg-card shadow-sm transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 group"
    >
      {/* Card content with slide effect */}
      <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${showCode ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Code editor view */}
        <div className="h-full flex flex-col bg-[#1e1e1e] text-white">
          {/* Editor header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#252526] border-b border-[#3c3c3c]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            </div>
            <span className="text-xs text-gray-400 ml-2 font-mono">{item.title.toLowerCase().replace(" ", "-")}.tsx</span>
          </div>

          {/* Code content */}
          <div className="flex-1 p-4 font-mono text-xs leading-relaxed overflow-hidden">
            {typedLines.map((line, idx) => (
              <div key={idx} className="flex">
                <span className="w-6 text-gray-500 select-none">{idx + 1}</span>
                <span className="ml-2">
                  <CodeLine line={line} color={item.color} />
                </span>
              </div>
            ))}
            {/* Cursor */}
            {showCode && currentLine < item.code.length && (
              <span className="inline-block w-2 h-4 bg-white/80 animate-pulse ml-8" />
            )}
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
      </div>

      {/* Website preview view - slides in from right */}
      <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${showCode ? "translate-x-full" : "translate-x-0"}`}>
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
              https://{item.title.toLowerCase().replace(" ", "")}.com
            </div>
          </div>

          {/* Website content */}
          <div className="flex-1 bg-white overflow-hidden relative">
            {item.image ? (
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover object-top"
              />
            ) : (
              // Generic website preview
              <div className="p-4 h-full flex flex-col">
                {/* Mock header */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-20 h-3 rounded"
                    style={{ backgroundColor: `${item.color}60` }}
                  />
                  <div className="flex gap-3">
                    <div className="w-10 h-2 bg-gray-200 rounded" />
                    <div className="w-10 h-2 bg-gray-200 rounded" />
                    <div className="w-10 h-2 bg-gray-200 rounded" />
                  </div>
                </div>

                {/* Mock hero */}
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="w-40 h-5 bg-gray-300 rounded mb-3" />
                  <div className="w-52 h-3 bg-gray-200 rounded mb-2" />
                  <div className="w-44 h-3 bg-gray-200 rounded mb-6" />
                  <div 
                    className="w-24 h-9 rounded-lg"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                {/* Mock features */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: `${item.color}30` }} />
                  </div>
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: `${item.color}30` }} />
                  </div>
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full" style={{ backgroundColor: `${item.color}30` }} />
                  </div>
                </div>
              </div>
            )}
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
          <Link
            href={item.href}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ backgroundColor: item.color }}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Syntax highlighting component
function CodeLine({ line, color }: { line: string; color: string }) {
  // Simple syntax highlighting
  const highlighted = line
    .replace(/(import|export|function|const|return|from)/g, '<span class="text-purple-400">$1</span>')
    .replace(/(['"].*?['"])/g, '<span class="text-green-400">$1</span>')
    .replace(/(\{|\}|\(|\)|<|>|\/)/g, `<span class="text-gray-500">$1</span>`)
    .replace(/(use\w+)/g, `<span style="color: ${color}">$1</span>`)

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />
}
