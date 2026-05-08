import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { Calculator, FileText, Building2, Users, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contabilidad Estrategica | Grupo Ideas MX",
  description:
    "Servicios contables para personas fisicas y morales. Contabilidad, tramites SAT, nominas y mas.",
};

const serviciosGenerales = [
  "Constancias fiscales",
  "Opinion de cumplimiento",
  "Cambio regimental fiscal",
  "Citas para Tramites SAT",
];

const personasFisicas = [
  { plan: "RESICO", description: "Regimen Simplificado de Confianza" },
  { plan: "Plataformas Tecnologicas", description: "Para quienes trabajan con apps y plataformas digitales" },
  { plan: "Actividad Empresarial y Profesional", description: "Para profesionistas y empresarios" },
  { plan: "Actividad Empresarial con Tramites", description: "Incluye tramites adicionales ante el SAT" },
];

const personasMorales = [
  { plan: "RESICO", description: "Regimen Simplificado de Confianza para empresas" },
  { plan: "Ley General", description: "Contabilidad completa bajo el regimen general" },
  { plan: "Nominas", description: "Gestion completa de nominas y prestaciones" },
  { plan: "Calculo del IMSS", description: "Determinacion y pago de cuotas IMSS" },
];

const features = [
  {
    icon: Calculator,
    title: "Contabilidad Integral",
    description: "Registros contables precisos y reportes financieros claros para tu negocio.",
  },
  {
    icon: FileText,
    title: "Tramites Fiscales",
    description: "Gestionamos todos tus tramites ante el SAT de manera eficiente.",
  },
  {
    icon: Building2,
    title: "Personas Morales",
    description: "Contabilidad especializada para empresas de cualquier tamano.",
  },
  {
    icon: Users,
    title: "Personas Fisicas",
    description: "Declaraciones y cumplimiento fiscal para profesionistas y emprendedores.",
  },
  {
    icon: TrendingUp,
    title: "Asesoria Estrategica",
    description: "Te ayudamos a tomar mejores decisiones financieras para tu negocio.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento Garantizado",
    description: "Evita multas y sanciones con nuestro servicio de cumplimiento fiscal.",
  },
];

export default function ContabilidadPage() {
  return (
    <>
      <PageHero
        title="Contabilidad Estrategica"
        description="Tu contabilidad en sintonia con tu negocio"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-7304257-mu2T8NZVNCAT7Toyh9niWMG9JKVsiJ.jpg"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mas que Contadores, Arquitectos Financieros
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contabilidad Estrategica nace dentro de Grupo Ideas para ser el soporte
              financiero inteligente que los proyectos innovadores necesitan. Integramos
              la tecnica contable impecable con una mentalidad analitica y proactiva.
              No nos limitamos a registrar el pasado; te ayudamos a disenar el futuro
              de tus finanzas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Servicios Disenados para Negocios que Innovan
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Servicios Generales */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 pb-4 border-b border-border">
                Servicios Contables Generales
              </h3>
              <ul className="space-y-3">
                {serviciosGenerales.map((servicio) => (
                  <li key={servicio} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {servicio}
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="mt-6 block w-full px-4 py-2 text-center bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Solicitar
              </Link>
            </div>

            {/* Personas Fisicas */}
            <div className="bg-background rounded-xl p-6 border border-primary/50 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4 pb-4 border-b border-border">
                Contabilidad Personas Fisicas
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Mensual</p>
              <ul className="space-y-3">
                {personasFisicas.map((item) => (
                  <li key={item.plan} className="text-muted-foreground">
                    <span className="font-medium text-foreground">{item.plan}</span>
                    <p className="text-sm mt-1">{item.description}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="mt-6 block w-full px-4 py-2 text-center bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Solicitar
              </Link>
            </div>

            {/* Personas Morales */}
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 pb-4 border-b border-border">
                Contabilidad Personas Morales
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Mensual</p>
              <ul className="space-y-3">
                {personasMorales.map((item) => (
                  <li key={item.plan} className="text-muted-foreground">
                    <span className="font-medium text-foreground">{item.plan}</span>
                    <p className="text-sm mt-1">{item.description}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="#contacto"
                className="mt-6 block w-full px-4 py-2 text-center bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Solicitar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Construye sobre Bases Financieras Solidas
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Tu creatividad, nuestro rigor. Tu vision, nuestra estrategia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Cotiza Ya
            </Link>
            <a
              href="tel:+525575086614"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-colors"
            >
              55-7508-6614
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
