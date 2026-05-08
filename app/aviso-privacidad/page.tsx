import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Grupo Ideas MX",
  description: "Aviso de privacidad de Grupo Ideas MX.",
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Aviso de Privacidad
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              En Grupo Ideas MX, nos comprometemos a proteger tu privacidad y
              datos personales. Este aviso de privacidad describe como
              recopilamos, usamos y protegemos tu informacion.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Responsable del Tratamiento de Datos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Grupo Ideas MX, con domicilio en Ciudad de Mexico, Mexico, es
              responsable del tratamiento de tus datos personales.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Datos que Recopilamos
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              <li>Nombre completo</li>
              <li>Correo electronico</li>
              <li>Numero telefonico</li>
              <li>Informacion de tu empresa o proyecto</li>
              <li>Curriculum vitae (en caso de reclutamiento)</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Finalidad del Tratamiento
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tus datos seran utilizados para contactarte, proporcionarte
              informacion sobre nuestros servicios, enviar cotizaciones y
              gestionar la relacion comercial.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
              Contacto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para ejercer tus derechos ARCO o cualquier consulta relacionada
              con tus datos personales, contactanos en:
              contacto@grupoideasmx.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
