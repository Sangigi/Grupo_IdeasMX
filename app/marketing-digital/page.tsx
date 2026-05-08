import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { TrendingUp, Target, Users, BarChart3, Megaphone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Digital | Grupo Ideas MX",
  description:
    "Estrategias de marketing digital que impulsan tu negocio. SEO, redes sociales, publicidad digital y mas.",
};

const features = [
  {
    icon: TrendingUp,
    title: "SEO y Posicionamiento",
    description: "Mejora tu visibilidad en Google y atrae trafico organico de calidad.",
  },
  {
    icon: Target,
    title: "Publicidad Digital",
    description: "Campanas en Google Ads, Facebook Ads e Instagram para maximizar tu ROI.",
  },
  {
    icon: Users,
    title: "Redes Sociales",
    description: "Gestion profesional de tus redes para conectar con tu audiencia.",
  },
  {
    icon: BarChart3,
    title: "Analitica y Reportes",
    description: "Medimos cada accion para optimizar tus resultados continuamente.",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    description: "Contenido estrategico que educa, entretiene y convierte.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Campanas de email que nutren leads y fidelizan clientes.",
  },
];

export default function MarketingDigitalPage() {
  return (
    <>
      <PageHero
        title="Marketing Digital"
        description="Estrategias que conectan tu marca con las personas correctas"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marketing-digital-fondo-qynmNpxcNE2FKtckb6krqKyKrZDDlA.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Impulsa tu Negocio en el Mundo Digital
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creamos estrategias de marketing digital personalizadas que generan
              resultados medibles. Desde SEO hasta publicidad pagada, cubrimos
              todos los canales para hacer crecer tu negocio.
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
