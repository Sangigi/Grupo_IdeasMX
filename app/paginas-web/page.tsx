import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { Globe, Smartphone, Zap, ShieldCheck, Search, Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Paginas Web | Grupo Ideas MX",
  description:
    "Diseno y desarrollo de paginas web profesionales, modernas y responsivas para tu negocio.",
};

const features = [
  {
    icon: Globe,
    title: "Sitios Web Profesionales",
    description: "Creamos sitios web que reflejan la identidad de tu marca y conectan con tu audiencia.",
  },
  {
    icon: Smartphone,
    title: "Diseno Responsivo",
    description: "Tu sitio se vera perfecto en cualquier dispositivo: computadoras, tablets y celulares.",
  },
  {
    icon: Zap,
    title: "Carga Rapida",
    description: "Optimizamos cada elemento para que tu sitio cargue en segundos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad SSL",
    description: "Certificados de seguridad incluidos para proteger a tus visitantes.",
  },
  {
    icon: Search,
    title: "SEO Optimizado",
    description: "Tu sitio estara preparado para posicionarse en Google desde el primer dia.",
  },
  {
    icon: Palette,
    title: "Diseno Personalizado",
    description: "Cada proyecto es unico, creado especialmente para tu negocio.",
  },
];

export default function PaginasWebPage() {
  return (
    <>
      <PageHero
        title="Paginas Web"
        description="Creamos sitios web que destacan, convierten y crecen contigo"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laptop-2838921-3zs52ieHDkIpHSfI7AGcarBFmgC1Xh.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tu Presencia Digital Profesional
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desarrollamos sitios web modernos, rapidos y optimizados para convertir
              visitantes en clientes. Desde landing pages hasta tiendas en linea,
              tenemos la solucion perfecta para tu negocio.
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
