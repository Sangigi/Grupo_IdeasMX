"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Globe,
  Palette,
  TrendingUp,
  Smartphone,
  Monitor,
  Users,
  Calculator,
  Scale,
  ArrowRight,
  ChevronDown,
} from "lucide-react"

const services = [
  {
    id: 1,
    icon: Globe,
    title: "Paginas Web",
    description:
      "Tu web ademas de bonita; debe generar resultados. Disenos claros, faciles de usar y hechos para que tus clientes te encuentren, te entiendan y te elijan.",
    color: "#3B82F6",
    image: "/services/web.jpg",
  },
  {
    id: 2,
    icon: Palette,
    title: "Diseno Grafico",
    description:
      "Disenamos la imagen de tu marca para que comunique, conecte y que tus clientes la recuerden. Branding, logotipos, anuncios, lonas, volantes, tarjetas de presentacion...",
    color: "#EC4899",
    image: "/services/design.jpg",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Marketing Digital",
    description:
      "Creamos estrategias digitales que te ayudan a conseguir mas clientes y vender mas. Usamos redes sociales, publicidad y analisis de datos para que tomes decisiones con seguridad.",
    color: "#22C55E",
    image: "/services/marketing.jpg",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Desarrollo de Apps",
    description:
      "Creamos aplicaciones y sistemas que facilitan tu negocio, automatizan tareas y resuelven lo que necesitas. Tecnologia hecha a tu medida para que todo funcione mejor.",
    color: "#F59E0B",
    image: "/services/apps.jpg",
  },
  {
    id: 5,
    icon: Monitor,
    title: "Tecnologia y Equipos",
    description:
      "Proveemos equipos de computo de alto rendimiento y ofrecemos servicios de mantenimiento preventivo. Tu infraestructura tecnologica en las mejores manos.",
    color: "#EF4444",
    image: "/services/tech.jpg",
  },
  {
    id: 6,
    icon: Users,
    title: "Reclutamiento",
    description:
      "Encontramos al talento que tu empresa necesita. Conectamos habilidades con oportunidades para fortalecer tu equipo humano.",
    color: "#8B5CF6",
    image: "/services/recruitment.jpg",
  },
  {
    id: 7,
    icon: Calculator,
    title: "Contabilidad",
    description:
      "Combinamos experiencia tecnica con vision estrategica. Atendemos tanto tus desafios empresariales como tus asuntos personales, con el mismo compromiso y profesionalismo.",
    color: "#06B6D4",
    image: "/services/accounting.jpg",
  },
  {
    id: 8,
    icon: Scale,
    title: "Servicios Legales",
    description:
      "Combinamos experiencia tecnica con vision estrategica. Atendemos tanto tus desafios empresariales como tus asuntos personales. Entendemos que los retos legales no se limitan a la oficina.",
    color: "#14B8A6",
    image: "/services/legal.jpg",
  },
]

// Vivid flat colors for decoration nodes
const decorationColors = [
  "#3B82F6", // Blue
  "#22C55E", // Green  
  "#EC4899", // Pink
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Purple
  "#06B6D4", // Cyan
  "#14B8A6", // Teal
]

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  hasRing: boolean
  serviceId: number | null
  icon?: typeof Globe
}

interface Connection {
  from: number
  to: number
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Node[]>([])
  const connectionsRef = useRef<Connection[]>([])
  const animationRef = useRef<number>()
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 600 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)

  // Initialize nodes - minimalist approach
  const initializeNodes = useCallback(() => {
    const nodes: Node[] = []
    const connections: Connection[] = []
    const nodeCount = 50
    const { width, height } = canvasSize

    // Create service nodes (interactive, larger) - positioned in a flowing pattern
    services.forEach((service, i) => {
      const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2
      const radius = Math.min(width, height) * 0.3
      const offsetX = (Math.random() - 0.5) * 80
      const offsetY = (Math.random() - 0.5) * 80
      
      nodes.push({
        id: i,
        x: width / 2 + Math.cos(angle) * radius + offsetX,
        y: height / 2 + Math.sin(angle) * radius + offsetY,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 16,
        color: service.color,
        hasRing: true, // All service nodes have rings
        serviceId: i,
        icon: service.icon,
      })
    })

    // Create decoration nodes (smaller, no interaction)
    for (let i = services.length; i < nodeCount; i++) {
      nodes.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 3 + Math.random() * 6,
        color: decorationColors[Math.floor(Math.random() * decorationColors.length)],
        hasRing: Math.random() > 0.8,
        serviceId: null,
      })
    }

    // Create connections - more organic network
    nodes.forEach((node, i) => {
      const nearestNodes = nodes
        .map((n, j) => ({ index: j, distance: Math.hypot(n.x - node.x, n.y - node.y) }))
        .filter((n) => n.index !== i && n.distance < 150)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 4)

      nearestNodes.forEach((n) => {
        if (!connections.some((c) => (c.from === i && c.to === n.index) || (c.from === n.index && c.to === i))) {
          connections.push({ from: i, to: n.index })
        }
      })
    })

    nodesRef.current = nodes
    connectionsRef.current = connections
  }, [canvasSize])

  // Animation loop - minimalist drawing
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const { width, height } = canvasSize
    ctx.clearRect(0, 0, width, height)

    // Update node positions
    nodesRef.current.forEach((node) => {
      node.x += node.vx
      node.y += node.vy

      // Soft bounce
      if (node.x < node.radius || node.x > width - node.radius) node.vx *= -0.8
      if (node.y < node.radius || node.y > height - node.radius) node.vy *= -0.8

      node.x = Math.max(node.radius, Math.min(width - node.radius, node.x))
      node.y = Math.max(node.radius, Math.min(height - node.radius, node.y))
    })

    // Draw connections - thin gray lines
    ctx.strokeStyle = "rgba(160, 160, 160, 0.35)"
    ctx.lineWidth = 1
    connectionsRef.current.forEach((conn) => {
      const from = nodesRef.current[conn.from]
      const to = nodesRef.current[conn.to]
      ctx.beginPath()
      ctx.moveTo(from.x, from.y)
      ctx.lineTo(to.x, to.y)
      ctx.stroke()
    })

    // Draw decoration nodes first (behind)
    nodesRef.current.forEach((node) => {
      if (node.serviceId !== null) return // Skip service nodes

      // Outer ring for some nodes
      if (node.hasRing) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 1.6, 0, Math.PI * 2)
        ctx.strokeStyle = node.color
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // Main circle - flat, no gradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = node.color
      ctx.fill()
    })

    // Draw service nodes on top (with higher z-index effect)
    nodesRef.current.forEach((node) => {
      if (node.serviceId === null) return // Skip decoration nodes

      const isActive = node.serviceId === activeIndex
      const isHovered = node.serviceId === hoveredNode
      const scale = isActive ? 1.4 : isHovered ? 1.2 : 1

      // White background circle for contrast
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * scale + 4, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()

      // Outer ring - always visible for service nodes
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * scale * 1.5, 0, Math.PI * 2)
      ctx.strokeStyle = node.color
      ctx.lineWidth = 2
      ctx.stroke()

      // Main circle - flat color
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2)
      ctx.fillStyle = node.color
      ctx.fill()

      // Icon indicator (white center dot)
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * scale * 0.4, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()

      // Active indicator
      if (isActive) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * scale * 2, 0, Math.PI * 2)
        ctx.strokeStyle = node.color + "60"
        ctx.lineWidth = 3
        ctx.stroke()
      }
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [canvasSize, activeIndex, hoveredNode])

  // Handle canvas click and hover
  const handleCanvasInteraction = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>, isClick: boolean) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left) * (canvasSize.width / rect.width)
      const y = (e.clientY - rect.top) * (canvasSize.height / rect.height)

      let foundNode = false
      for (const node of nodesRef.current) {
        if (node.serviceId === null) continue
        const distance = Math.hypot(x - node.x, y - node.y)
        if (distance < node.radius * 2) {
          if (isClick) {
            setActiveIndex(node.serviceId)
          } else {
            setHoveredNode(node.serviceId)
          }
          foundNode = true
          break
        }
      }
      
      if (!foundNode && !isClick) {
        setHoveredNode(null)
      }
    },
    [canvasSize]
  )

  // Scroll animation
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

  // Resize handler
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = Math.min(containerRef.current.offsetWidth, 700)
        const height = Math.min(600, window.innerHeight * 0.7)
        setCanvasSize({ width, height })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Initialize and animate
  useEffect(() => {
    initializeNodes()
  }, [initializeNodes])

  useEffect(() => {
    if (isVisible) {
      animate()
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isVisible, animate])

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Icon = services[activeIndex].icon

  return (
    <section ref={sectionRef} id="servicios" className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            style={{
              transform: `translateY(${(1 - scrollProgress) * 30}px)`,
              opacity: Math.min(1, scrollProgress * 2),
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)] leading-tight italic">
              Todo lo que necesitas en un solo lugar para seguir creciendo
            </h2>
            <p className="text-muted-foreground text-lg mb-8">Un equipo experto que impulsa tu proyecto de inicio a fin.</p>

            {/* Active service details */}
            <div
              key={activeIndex}
              className="bg-card border border-border rounded-2xl overflow-hidden mb-6 animate-in fade-in slide-in-from-left-4 duration-300"
            >
              {/* Service Image */}
              <div className="relative h-48 w-full bg-muted">
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: services[activeIndex].color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{services[activeIndex].title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{services[activeIndex].description}</p>
                <Button
                  className="text-white group"
                  style={{ backgroundColor: services[activeIndex].color }}
                >
                  Saber mas
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span>Haz clic en un nodo con icono para explorar</span>
            </div>
          </div>

          {/* Right: Neural network canvas */}
          <div
            ref={containerRef}
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{
              transform: `translateY(${(1 - scrollProgress) * -20}px) scale(${0.9 + scrollProgress * 0.1})`,
            }}
          >
            <canvas
              ref={canvasRef}
              width={canvasSize.width}
              height={canvasSize.height}
              onClick={(e) => handleCanvasInteraction(e, true)}
              onMouseMove={(e) => handleCanvasInteraction(e, false)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer w-full h-auto"
              style={{ maxHeight: "600px" }}
              aria-label="Red neuronal interactiva de servicios"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
