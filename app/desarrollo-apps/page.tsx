import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { Smartphone, Code, Database, Cloud, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Desarrollo de Apps | Grupo Ideas MX",
  description:
    "Desarrollo de aplicaciones moviles y web personalizadas para iOS, Android y multiplataforma.",
};

const features = [
  {
    icon: Smartphone,
    title: "Apps Moviles",
    description: "Aplicaciones nativas para iOS y Android con la mejor experiencia de usuario.",
  },
  {
    icon: Code,
    title: "Apps Web Progresivas",
    description: "PWAs que funcionan como apps nativas desde cualquier navegador.",
  },
  {
    icon: Database,
    title: "Backend Robusto",
    description: "Infraestructura escalable para soportar el crecimiento de tu app.",
  },
  {
    icon: Cloud,
    title: "Integraciones API",
    description: "Conectamos tu app con servicios externos y sistemas existentes.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Proteccion de datos y autenticacion segura para tus usuarios.",
  },
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Apps rapidas y eficientes que ofrecen la mejor experiencia.",
  },
];

export default function DesarrolloAppsPage() {
  return (
    <>
      <PageHero
        title="Desarrollo de Apps"
        description="Transformamos tus ideas en aplicaciones que impactan"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo-programacion-0JRSvSN0RzYKWvkDoB5OooNbDEvncK.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Aplicaciones que Solucionan Problemas
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollamos aplicaciones moviles y web que no solo se ven increibles,
              sino que resuelven problemas reales de tu negocio y tus usuarios.
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

      <ContactSection />
    </>
  );
}
