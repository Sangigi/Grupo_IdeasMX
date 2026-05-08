import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Devoluciones | Grupo Ideas MX",
  description: "Politica de devoluciones y reembolsos de Grupo Ideas MX.",
};

export default function DevolucionesPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Politica de Devoluciones
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              En Grupo Ideas MX nos comprometemos con la satisfaccion de
              nuestros clientes. A continuacion, describimos nuestra politica
              de devoluciones y reembolsos.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Servicios Digitales
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Debido a la naturaleza de los servicios digitales, no ofrecemos
              reembolsos una vez que el trabajo ha comenzado. Sin embargo,
              trabajaremos contigo para asegurar que el resultado final cumpla
              con tus expectativas.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Revisiones y Ajustes
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada proyecto incluye un numero determinado de revisiones segun
              lo acordado en la cotizacion. Ajustes adicionales pueden tener
              un costo extra.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Cancelaciones
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Si deseas cancelar un proyecto antes de que comience, se
              reembolsara el 100% del anticipo. Una vez iniciado el trabajo,
              el reembolso dependera del avance del proyecto.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para solicitar una devolucion o resolver cualquier duda,
              contactanos en: contacto@grupoideasmx.com o al telefono
              55-7508-6614.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
