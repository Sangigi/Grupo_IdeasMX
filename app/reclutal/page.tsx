"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Users, Search, UserCheck, ClipboardList, FileText, Upload, CheckCircle } from "lucide-react"

const servicios = [
  { icon: Search, title: "Reclutamiento y Seleccion de Personal", color: "#3B82F6" },
  { icon: UserCheck, title: "Headhunting (Busqueda de Alto Nivel)", color: "#22C55E" },
  { icon: ClipboardList, title: "Evaluacion por Competencias", color: "#EC4899" },
  { icon: Users, title: "Entrevistas y Filtro de Candidatos", color: "#F59E0B" },
  { icon: FileText, title: "Asesoria en Descripciones de Puesto", color: "#8B5CF6" },
]

export default function ReclutalPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    puesto: "",
    experiencia: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(1, window.scrollY / 500)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Reclutal
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Conectamos talento con{" "}
            <span className="text-primary">oportunidades</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            En Reclutal sabemos que el activo mas importante de una empresa es su gente. Nos 
            especializamos en encontrar y evaluar al profesional que no solo tiene las habilidades, 
            sino tambien la actitud para encajar en la cultura de tu organizacion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link href="#servicios">
                Descubre Nuestras Soluciones
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#cv">
                <Upload className="mr-2 h-5 w-5" />
                Sube tu CV
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Lo que hacemos
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Servicios integrales de reclutamiento para encontrar el talento ideal.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((servicio) => {
              const Icon = servicio.icon
              return (
                <div
                  key={servicio.title}
                  className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: servicio.color + "15" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: servicio.color }} />
                  </div>
                  <h3 className="font-semibold text-foreground">{servicio.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CV Upload Form */}
      <section id="cv" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Tu proximo empleo espera
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Completa el formulario y sube tu CV para conectar con las mejores oportunidades.
          </p>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                Nombre completo *
              </label>
              <Input
                id="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Correo electronico
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                Numero telefonico *
              </label>
              <Input
                id="telefono"
                type="tel"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="55 1234 5678"
              />
            </div>

            <div>
              <label htmlFor="puesto" className="block text-sm font-medium text-foreground mb-2">
                Puesto Solicitado *
              </label>
              <Input
                id="puesto"
                type="text"
                required
                value={formData.puesto}
                onChange={(e) => setFormData({ ...formData, puesto: e.target.value })}
                placeholder="Ej: Desarrollador Frontend"
              />
            </div>

            <div>
              <label htmlFor="experiencia" className="block text-sm font-medium text-foreground mb-2">
                Anos de experiencia
              </label>
              <Input
                id="experiencia"
                type="text"
                value={formData.experiencia}
                onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                placeholder="Ej: 3 anos"
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-foreground mb-2">
                Sube tu CV *
              </label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground mb-1">
                  Arrastra tu archivo aqui o haz clic para seleccionar
                </p>
                <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max. 5MB)</p>
                <input
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
              Enviar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* CTA for Companies */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UserCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Encuentra a tu Proximo Talento
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cuentanos sobre tu proyecto y te propondremos la solucion perfecta.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <Link href="/#contacto">
              Cotiza ya!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+525575086614" className="hover:text-primary transition-colors">
              55-7508-6614
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-primary transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
