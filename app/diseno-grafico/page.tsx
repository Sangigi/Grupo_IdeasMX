import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { Palette, Image, FileText, Layers, PenTool, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Diseno Grafico | Grupo Ideas MX",
  description:
    "Servicios de diseno grafico profesional. Logos, identidad corporativa, material publicitario y mas.",
};

const features = [
  {
    icon: Palette,
    title: "Identidad Corporativa",
    description: "Creamos la imagen de tu marca desde cero: logo, colores y tipografia.",
  },
  {
    icon: Image,
    title: "Material Publicitario",
    description: "Flyers, posters, banners y todo lo que necesitas para promocionarte.",
  },
  {
    icon: FileText,
    title: "Papeleria Empresarial",
    description: "Tarjetas de presentacion, hojas membretadas y sobres corporativos.",
  },
  {
    icon: Layers,
    title: "Diseno para Redes",
    description: "Contenido visual atractivo para todas tus plataformas sociales.",
  },
  {
    icon: PenTool,
    title: "Ilustraciones",
    description: "Ilustraciones personalizadas que cuentan la historia de tu marca.",
  },
  {
    icon: Sparkles,
    title: "Branding Completo",
    description: "Desarrollamos tu marca de manera integral y coherente.",
  },
];

export default function DisenoGraficoPage() {
  return (
    <>
      <PageHero
        title="Diseno Grafico"
        description="Creatividad que da vida a tu marca y conecta con tu audiencia"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-shkrabaanthony-4348401-lAQ5KmPCrt6ZDPWYNvCDsqwPWjCiI5.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Diseno que Comunica y Conecta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transformamos ideas en disenos visuales impactantes que reflejan
              la esencia de tu marca y conectan emocionalmente con tu audiencia.
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
