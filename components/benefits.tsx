import { Zap, Shield, Users, TrendingUp, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Rapido y Eficiente",
    description: "Entregamos proyectos de alta calidad en tiempos record.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Protegemos tu informacion con los mas altos estandares.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales especializados en cada area de servicio.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Medibles",
    description: "Estrategias basadas en datos y metricas claras.",
  },
  {
    icon: Clock,
    title: "Soporte 24/7",
    description: "Siempre disponibles para resolver tus dudas.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Comprometidos con la excelencia en cada proyecto.",
  },
];

export function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Por que Elegirnos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Somos tu socio estrategico para el exito digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
