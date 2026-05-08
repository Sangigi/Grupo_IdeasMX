import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminos y Condiciones | Grupo Ideas MX",
  description: "Terminos y condiciones de uso de Grupo Ideas MX.",
};

export default function TerminosPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Terminos y Condiciones
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Al utilizar los servicios de Grupo Ideas MX, aceptas los
              siguientes terminos y condiciones.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Servicios
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Grupo Ideas MX ofrece servicios de desarrollo web, marketing
              digital, diseno grafico, desarrollo de aplicaciones, reclutamiento
              y contabilidad. Los detalles especificos de cada proyecto se
              acordaran por escrito antes de iniciar.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Pagos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Los pagos se realizaran segun los terminos acordados en cada
              cotizacion. Los precios no incluyen IVA a menos que se indique
              lo contrario.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Propiedad Intelectual
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Una vez realizado el pago completo, los derechos de propiedad
              intelectual del trabajo entregado seran transferidos al cliente,
              excepto cuando se acuerde lo contrario.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para cualquier consulta sobre estos terminos, contactanos en:
              contacto@grupoideasmx.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
