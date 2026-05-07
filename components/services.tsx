"use client"

import { useEffect, useRef, useState, useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
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
  Sparkles,
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
    href: "/#servicios",
  },
  {
    id: 2,
    icon: Palette,
    title: "Diseno Grafico",
    description:
      "Disenamos la imagen de tu marca para que comunique, conecte y que tus clientes la recuerden. Branding, logotipos, anuncios, lonas, volantes, tarjetas de presentacion...",
    color: "#EC4899",
    image: "/services/design.jpg",
    href: "/#servicios",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Marketing Digital",
    description:
      "Creamos estrategias digitales que te ayudan a conseguir mas clientes y vender mas. Usamos redes sociales, publicidad y analisis de datos para que tomes decisiones con seguridad.",
    color: "#22C55E",
    image: "/services/marketing.jpg",
    href: "/#servicios",
  },
  {
    id: 4,
    icon: Smartphone,
    title: "Desarrollo de Apps",
    description:
      "Creamos aplicaciones y sistemas que facilitan tu negocio, automatizan tareas y resuelven lo que necesitas. Tecnologia hecha a tu medida para que todo funcione mejor.",
    color: "#F59E0B",
    image: "/services/apps.jpg",
    href: "/#servicios",
  },
  {
    id: 5,
    icon: Monitor,
    title: "Tecnologia y Equipos",
    description:
      "Proveemos equipos de computo de alto rendimiento y ofrecemos servicios de mantenimiento preventivo. Tu infraestructura tecnologica en las mejores manos.",
    color: "#EF4444",
    image: "/services/tech.jpg",
    href: "/#servicios",
  },
  {
    id: 6,
    icon: Users,
    title: "Reclutamiento",
    description:
      "Encontramos al talento que tu empresa necesita. Conectamos habilidades con oportunidades para fortalecer tu equipo humano.",
    color: "#8B5CF6",
    image: "/services/recruitment.jpg",
    href: "/reclutal",
  },
  {
    id: 7,
    icon: Calculator,
    title: "Contabilidad",
    description:
      "Combinamos experiencia tecnica con vision estrategica. Atendemos tanto tus desafios empresariales como tus asuntos personales, con el mismo compromiso y profesionalismo.",
    color: "#06B6D4",
    image: "/services/accounting.jpg",
    href: "/contabilidad",
  },
  {
    id: 8,
    icon: Scale,
    title: "Servicios Legales",
    description:
      "Combinamos experiencia tecnica con vision estrategica. Atendemos tanto tus desafios empresariales como tus asuntos personales. Entendemos que los retos legales no se limitan a la oficina.",
    color: "#14B8A6",
    image: "/services/legal.jpg",
    href: "/legal",
  },
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  pulse: number
  pulseSpeed: number
  serviceId: number | null
  baseRadius: number
  connections: number[]
}

interface Pulse {
  fromNode: number
  toNode: number
  progress: number
  color: string
}

// Optimized Neural Network Canvas Component
const NeuralNetworkCanvas = memo(function NeuralNetworkCanvas({
  activeIndex,
  onNodeClick,
  onNodeHover,
  hoveredNode,
}: {
  activeIndex: number
  onNodeClick: (index: number) => void
  onNodeHover: (index: number | null) => void
  hoveredNode: number | null
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const pulsesRef = useRef<Pulse[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 })
  const lastFrameTime = useRef(0)
  const FPS = 60
  const frameInterval = 1000 / FPS

  // Initialize particles with optimized distribution
  const initParticles = useCallback(() => {
    const particles: Particle[] = []
    const { width, height } = dimensions
    const centerX = width / 2
    const centerY = height / 2

    // Service nodes in a beautiful spiral/orbital pattern
    services.forEach((service, i) => {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5))
      const angle = i * goldenAngle
      const radius = 80 + i * 28
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      particles.push({
        x,
        y,
        vx: 0,
        vy: 0,
        radius: 22,
        baseRadius: 22,
        color: service.color,
        alpha: 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.01,
        serviceId: i,
        connections: [],
      })
    })

    // Background neural particles - 3 layers for depth
    const layers = [
      { count: 25, radiusRange: [2, 4], alphaRange: [0.2, 0.4], speedRange: [0.15, 0.3] },
      { count: 35, radiusRange: [3, 6], alphaRange: [0.4, 0.6], speedRange: [0.2, 0.4] },
      { count: 20, radiusRange: [4, 8], alphaRange: [0.6, 0.8], speedRange: [0.1, 0.25] },
    ]

    const colors = ["#3B82F6", "#22C55E", "#EC4899", "#F59E0B", "#8B5CF6", "#06B6D4", "#EF4444", "#14B8A6"]

    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const radius = layer.radiusRange[0] + Math.random() * (layer.radiusRange[1] - layer.radiusRange[0])
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * layer.speedRange[1],
          vy: (Math.random() - 0.5) * layer.speedRange[1],
          radius,
          baseRadius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: layer.alphaRange[0] + Math.random() * (layer.alphaRange[1] - layer.alphaRange[0]),
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          serviceId: null,
          connections: [],
        })
      }
    })

    // Calculate connections for each particle
    particles.forEach((p, i) => {
      const nearNodes = particles
        .map((other, j) => ({
          index: j,
          dist: Math.hypot(other.x - p.x, other.y - p.y),
        }))
        .filter((n) => n.index !== i && n.dist < 180)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, p.serviceId !== null ? 5 : 3)
        .map((n) => n.index)

      p.connections = nearNodes
    })

    particlesRef.current = particles
  }, [dimensions])

  // Animate with performance optimization
  const animate = useCallback(
    (currentTime: number) => {
      if (currentTime - lastFrameTime.current < frameInterval) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }
      lastFrameTime.current = currentTime

      const canvas = canvasRef.current
      const ctx = canvas?.getContext("2d", { alpha: true })
      if (!canvas || !ctx) return

      const { width, height } = dimensions
      const particles = particlesRef.current
      const pulses = pulsesRef.current
      const mouse = mouseRef.current

      // Clear with white background (no trail effect for cleaner look)
      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, width, height)

      // Update particle positions
      particles.forEach((p, i) => {
        if (p.serviceId !== null) {
          // Service nodes have subtle floating motion
          p.pulse += p.pulseSpeed
          const floatX = Math.sin(p.pulse) * 3
          const floatY = Math.cos(p.pulse * 0.7) * 3
          
          // Mouse attraction for service nodes
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < 200 && dist > 0) {
            const force = (200 - dist) / 200 * 0.5
            p.x += (dx / dist) * force + floatX * 0.1
            p.y += (dy / dist) * force + floatY * 0.1
          } else {
            p.x += floatX * 0.1
            p.y += floatY * 0.1
          }
        } else {
          // Background particles move freely
          p.pulse += p.pulseSpeed
          p.x += p.vx
          p.y += p.vy

          // Mouse repulsion for background particles
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100 * 0.8
            p.vx -= (dx / dist) * force * 0.1
            p.vy -= (dy / dist) * force * 0.1
          }

          // Boundary bounce
          if (p.x < p.radius || p.x > width - p.radius) {
            p.vx *= -0.8
            p.x = Math.max(p.radius, Math.min(width - p.radius, p.x))
          }
          if (p.y < p.radius || p.y > height - p.radius) {
            p.vy *= -0.8
            p.y = Math.max(p.radius, Math.min(height - p.radius, p.y))
          }

          // Velocity damping
          p.vx *= 0.99
          p.vy *= 0.99
        }
      })

      // Draw connections (background particles first)
      particles.forEach((p, i) => {
        if (p.serviceId !== null) return
        
        p.connections.forEach((j) => {
          const other = particles[j]
          const dist = Math.hypot(other.x - p.x, other.y - p.y)
          if (dist > 180) return

          const alpha = (1 - dist / 180) * 0.15 * p.alpha
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(other.x, other.y)
          ctx.strokeStyle = `rgba(150, 150, 150, ${alpha})`
          ctx.lineWidth = 1
          ctx.stroke()
        })
      })

      // Draw service node connections (more prominent)
      particles.forEach((p) => {
        if (p.serviceId === null) return
        
        const isActive = p.serviceId === activeIndex
        const isHovered = p.serviceId === hoveredNode

        p.connections.forEach((j) => {
          const other = particles[j]
          const dist = Math.hypot(other.x - p.x, other.y - p.y)
          if (dist > 200) return

          const baseAlpha = isActive ? 0.6 : isHovered ? 0.4 : 0.2
          const alpha = (1 - dist / 200) * baseAlpha

          // Gradient connection for active node
          if (isActive || isHovered) {
            const gradient = ctx.createLinearGradient(p.x, p.y, other.x, other.y)
            gradient.addColorStop(0, p.color + Math.round(alpha * 255).toString(16).padStart(2, "0"))
            gradient.addColorStop(1, (other.serviceId !== null ? other.color : p.color) + "20")
            ctx.strokeStyle = gradient
            ctx.lineWidth = isActive ? 2 : 1.5
          } else {
            ctx.strokeStyle = `${p.color}${Math.round(alpha * 255).toString(16).padStart(2, "0")}`
            ctx.lineWidth = 1
          }

          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(other.x, other.y)
          ctx.stroke()
        })
      })

      // Draw energy pulses along connections
      if (Math.random() < 0.05) {
        const serviceNodes = particles.filter((p) => p.serviceId !== null)
        if (serviceNodes.length > 1) {
          const from = serviceNodes[Math.floor(Math.random() * serviceNodes.length)]
          const toIndex = from.connections[Math.floor(Math.random() * from.connections.length)]
          if (toIndex !== undefined) {
            pulses.push({
              fromNode: particles.indexOf(from),
              toNode: toIndex,
              progress: 0,
              color: from.color,
            })
          }
        }
      }

      // Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i]
        pulse.progress += 0.03

        if (pulse.progress >= 1) {
          pulses.splice(i, 1)
          continue
        }

        const from = particles[pulse.fromNode]
        const to = particles[pulse.toNode]
        if (!from || !to) continue

        const x = from.x + (to.x - from.x) * pulse.progress
        const y = from.y + (to.y - from.y) * pulse.progress
        const size = 4 * (1 - Math.abs(pulse.progress - 0.5) * 2)

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = pulse.color
        ctx.fill()

        // Glow effect
        ctx.beginPath()
        ctx.arc(x, y, size * 2, 0, Math.PI * 2)
        ctx.fillStyle = pulse.color + "40"
        ctx.fill()
      }

      // Draw background particles
      particles.forEach((p) => {
        if (p.serviceId !== null) return

        const pulseScale = 1 + Math.sin(p.pulse) * 0.2
        const radius = p.baseRadius * pulseScale

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 3)
        gradient.addColorStop(0, p.color + Math.round(p.alpha * 80).toString(16).padStart(2, "0"))
        gradient.addColorStop(1, p.color + "00")
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0")
        ctx.fill()
      })

      // Draw service nodes (on top)
      particles.forEach((p) => {
        if (p.serviceId === null) return

        const isActive = p.serviceId === activeIndex
        const isHovered = p.serviceId === hoveredNode
        const pulseScale = 1 + Math.sin(p.pulse * 2) * 0.1
        const scale = isActive ? 1.3 : isHovered ? 1.15 : 1
        const radius = p.baseRadius * scale * pulseScale

        // Outer glow rings
        if (isActive) {
          for (let ring = 3; ring >= 1; ring--) {
            ctx.beginPath()
            ctx.arc(p.x, p.y, radius + ring * 12, 0, Math.PI * 2)
            ctx.strokeStyle = p.color + Math.round((0.3 - ring * 0.08) * 255).toString(16).padStart(2, "0")
            ctx.lineWidth = 2
            ctx.stroke()
          }
        }

        // Outer glow
        const glowGradient = ctx.createRadialGradient(p.x, p.y, radius * 0.5, p.x, p.y, radius * 2.5)
        glowGradient.addColorStop(0, p.color + (isActive ? "60" : "30"))
        glowGradient.addColorStop(1, p.color + "00")
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // White background circle
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius + 4, 0, Math.PI * 2)
        ctx.fillStyle = "#ffffff"
        ctx.shadowColor = p.color
        ctx.shadowBlur = isActive ? 20 : isHovered ? 15 : 10
        ctx.fill()
        ctx.shadowBlur = 0

        // Main colored circle
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Inner highlight
        const innerGradient = ctx.createRadialGradient(
          p.x - radius * 0.3,
          p.y - radius * 0.3,
          0,
          p.x,
          p.y,
          radius
        )
        innerGradient.addColorStop(0, "rgba(255, 255, 255, 0.4)")
        innerGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.1)")
        innerGradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = innerGradient
        ctx.fill()

        // Center icon dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, radius * 0.35, 0, Math.PI * 2)
        ctx.fillStyle = "#ffffff"
        ctx.fill()

        // Service number
        ctx.font = `bold ${Math.round(radius * 0.5)}px system-ui`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = p.color
        ctx.fillText(String(p.serviceId + 1), p.x, p.y + 1)
      })

      animationRef.current = requestAnimationFrame(animate)
    },
    [dimensions, activeIndex, hoveredNode, frameInterval]
  )

  // Handle mouse interaction
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const scaleX = dimensions.width / rect.width
      const scaleY = dimensions.height / rect.height
      const x = (e.clientX - rect.left) * scaleX
      const y = (e.clientY - rect.top) * scaleY

      mouseRef.current = { x, y }

      // Check for service node hover
      let found = false
      for (const p of particlesRef.current) {
        if (p.serviceId === null) continue
        const dist = Math.hypot(x - p.x, y - p.y)
        if (dist < p.baseRadius * 1.5) {
          onNodeHover(p.serviceId)
          found = true
          break
        }
      }
      if (!found) onNodeHover(null)
    },
    [dimensions, onNodeHover]
  )

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const scaleX = dimensions.width / rect.width
      const scaleY = dimensions.height / rect.height
      const x = (e.clientX - rect.left) * scaleX
      const y = (e.clientY - rect.top) * scaleY

      for (const p of particlesRef.current) {
        if (p.serviceId === null) continue
        const dist = Math.hypot(x - p.x, y - p.y)
        if (dist < p.baseRadius * 1.5) {
          onNodeClick(p.serviceId)
          break
        }
      }
    },
    [dimensions, onNodeClick]
  )

  // Resize handler
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const size = Math.min(rect.width, 650)
        setDimensions({ width: size, height: size })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Initialize particles when dimensions change
  useEffect(() => {
    initParticles()
  }, [initParticles])

  // Start animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [animate])

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[650px] mx-auto">
      {/* Decorative frame */}
      <div className="absolute -inset-3 border border-primary/10 rounded-2xl" />
      <div className="absolute -inset-6 border border-primary/5 rounded-3xl" />
      
      {/* Corner accents */}
      <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-primary/30" />

      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => onNodeHover(null)}
        onClick={handleClick}
        className="w-full h-full cursor-pointer rounded-xl bg-white"
        style={{ touchAction: "none" }}
        aria-label="Red neuronal interactiva - haz clic en los nodos para explorar servicios"
      />

      {/* Center label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </div>
  )
})

// Service Card Component
const ServiceCard = memo(function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon

  return (
    <div className="group h-full flex flex-col bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      {/* Service Image */}
      <div className="relative h-48 w-full bg-muted overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

        {/* Service number badge */}
        <div
          className="absolute top-3 right-3 w-10 h-10 rounded-lg flex items-center justify-center font-mono text-white font-bold text-sm shadow-lg"
          style={{ backgroundColor: service.color }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon floating */}
        <div
          className="absolute bottom-3 left-3 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: service.color }}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{service.description}</p>
        <Button
          asChild
          variant="outline"
          className="w-full group/btn hover:text-white transition-colors mt-4"
          style={
            {
              "--hover-bg": service.color,
            } as React.CSSProperties
          }
        >
          <Link
            href={service.href}
            className="hover:bg-[var(--hover-bg)] hover:border-[var(--hover-bg)]"
          >
            Conocer mas
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
})

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)

  const handleNodeClick = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const handleNodeHover = useCallback((index: number | null) => {
    setHoveredNode(index)
  }, [])

  // Intersection observer for visibility
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

  const ActiveIcon = services[activeIndex].icon

  return (
    <section ref={sectionRef} id="servicios" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 mb-6 border border-primary/40 px-4 py-2 bg-primary/5 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-mono font-medium">
              Nuestros Servicios
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)] leading-tight text-balance max-w-4xl mx-auto">
            Todo lo que necesitas en un solo lugar para{" "}
            <span className="text-primary">seguir creciendo</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Un equipo experto que impulsa tu proyecto de inicio a fin
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Neural Network */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <NeuralNetworkCanvas
              activeIndex={activeIndex}
              onNodeClick={handleNodeClick}
              onNodeHover={handleNodeHover}
              hoveredNode={hoveredNode}
            />

            {/* Instructions */}
            <p className="text-center text-muted-foreground text-sm mt-6 font-mono">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Interactua con la red neuronal para explorar servicios
              </span>
            </p>
          </div>

          {/* Right: Active service detail */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div
              key={activeIndex}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-right-4 duration-500"
            >
              {/* Service Image */}
              <div className="relative h-64 w-full bg-muted overflow-hidden">
                <Image
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                {/* Floating badge */}
                <div
                  className="absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center font-mono text-white font-bold text-xl shadow-xl"
                  style={{ backgroundColor: services[activeIndex].color }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: services[activeIndex].color }}
                  >
                    <ActiveIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">
                      Servicio {activeIndex + 1} de {services.length}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {services[activeIndex].title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {services[activeIndex].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="text-white flex-1"
                    style={{ backgroundColor: services[activeIndex].color }}
                  >
                    <Link href={services[activeIndex].href}>
                      Conocer mas
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="flex-1">
                    <Link href="/#contacto">Contactar</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service navigation dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {services.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "scale-125" : "opacity-40 hover:opacity-70"
                  }`}
                  style={{ backgroundColor: service.color }}
                  aria-label={`Ver ${service.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All services grid */}
        <div
          className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">Todos nuestros servicios</h3>
            <p className="text-muted-foreground">Explora cada uno de nuestros 8 servicios especializados</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
