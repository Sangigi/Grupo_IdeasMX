import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Target, Eye, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Grupo Ideas MX",
  description:
    "Conoce al equipo de Grupo Ideas MX. Somos expertos en soluciones digitales para tu negocio.",
};

const values = [
  {
    icon: Target,
    title: "Mision",
    description:
      "Proporcionar soluciones digitales innovadoras que impulsen el crecimiento de nuestros clientes, combinando creatividad, tecnologia y estrategia.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Ser la agencia digital lider en Mexico, reconocida por nuestra excelencia, innovacion y compromiso con el exito de cada proyecto.",
  },
  {
    icon: Lightbulb,
    title: "Innovacion",
    description:
      "Buscamos constantemente nuevas formas de resolver problemas y crear soluciones que marquen la diferencia en el mercado.",
  },
  {
    icon: Users,
    title: "Colaboracion",
    description:
      "Trabajamos de la mano con nuestros clientes, entendiendo sus necesidades y convirtiendolas en resultados tangibles.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Nosotros"
        description="Conoce al equipo que hace posible tu exito digital"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nosotros-seccion-fondo-kLTR7sK2TKop3MSDQCwYFLVX9H5EWf.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quienes Somos
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos un equipo multidisciplinario de profesionales apasionados
              por la tecnologia y la creatividad. Desde paginas web hasta
              estrategias de marketing digital, diseno grafico, desarrollo de
              aplicaciones, reclutamiento y contabilidad, ofrecemos soluciones
              integrales para que tu negocio alcance su maximo potencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-8 rounded-xl bg-muted border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
