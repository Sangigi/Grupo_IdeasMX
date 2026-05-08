import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { Users, Search, FileCheck, Briefcase, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Reclutamiento | Grupo Ideas MX",
  description:
    "Servicios de reclutamiento y seleccion de personal. Encontramos el talento ideal para tu empresa.",
};

const features = [
  {
    icon: Search,
    title: "Busqueda de Talento",
    description: "Identificamos candidatos calificados que se alinean con tu cultura empresarial.",
  },
  {
    icon: FileCheck,
    title: "Evaluacion Integral",
    description: "Evaluamos habilidades tecnicas, competencias y fit cultural.",
  },
  {
    icon: Briefcase,
    title: "Headhunting",
    description: "Busqueda especializada de ejecutivos y perfiles de alto nivel.",
  },
  {
    icon: Users,
    title: "Reclutamiento Masivo",
    description: "Procesos eficientes para cubrir multiples posiciones rapidamente.",
  },
  {
    icon: Award,
    title: "Garantia de Contratacion",
    description: "Respaldamos nuestras contrataciones con garantia de reemplazo.",
  },
  {
    icon: Clock,
    title: "Proceso Agil",
    description: "Tiempos de respuesta rapidos sin sacrificar la calidad.",
  },
];

export default function ReclutamientoPage() {
  return (
    <>
      <PageHero
        title="Reclutamiento"
        description="Conectamos empresas con el talento que necesitan para crecer"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-GDSl5P3dueKo2ysFJGKBe3zGVtvAeT.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              El Talento Correcto para tu Empresa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro proceso de reclutamiento esta disenado para encontrar
              candidatos que no solo cumplan con los requisitos tecnicos,
              sino que tambien encajen perfectamente con la cultura de tu empresa.
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

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Envia tu CV
            </h3>
            <p className="text-muted-foreground mb-6">
              Si estas buscando nuevas oportunidades laborales, envianos tu CV
              a traves de nuestro formulario de contacto. Te contactaremos
              cuando tengamos una vacante que coincida con tu perfil.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
