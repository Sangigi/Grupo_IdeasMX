import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DevolucionesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-[family-name:var(--font-display)]">
            Términos de Devoluciones y Reembolsos
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              En Grupo Ideas, nos esforzamos por ofrecerte servicios de la más alta calidad. Sin embargo, en caso de que necesites realizar un reembolso, te pedimos tener en cuenta lo siguiente:
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Planes de Suscripción:</h2>
            <p className="mb-6">
              No se permite la devolución ni el reembolso de pagos realizados por planes de suscripción. Esto incluye suscripciones activas o canceladas, independientemente de si los servicios fueron utilizados parcial o totalmente durante el periodo contratado.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Derecho de Cancelación para Otros Servicios o Productos:</h2>
            <p className="mb-6">
              Tiene derecho a cancelar su pedido dentro de los 30 días únicamente si los trabajos no se han iniciado.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Reembolso por Cancelación:</h2>
            <p className="mb-4">
              En caso de cancelación aceptada (y que cumpla con las condiciones anteriores), realizaremos el reembolso dentro de un plazo de 30 días a partir de la confirmación de su solicitud.
            </p>
            <p className="mb-6">
              Los reembolsos estarán sujetos a la deducción de comisiones y cargos generados por procesadoras o intermediarios de pago.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Productos Digitales y Servicios Personalizados:</h2>
            <p className="mb-4">No se permiten devoluciones ni reembolsos para:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Productos digitales descargados.</li>
              <li>Servicios cuyo desarrollo haya comenzado (por ejemplo desarrollos de apps, diseños gráficos, videos, desarrollos web, textos digitales, diagramaciones u otros).</li>
              <li>Bienes o servicios personalizados según las especificaciones del cliente.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Productos Físicos y Requisitos para Devoluciones:</h2>
            <p className="mb-4">Para bienes físicos, asegúrese de que cumplan las siguientes condiciones:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Fueron comprados en los últimos 30 días.</li>
              <li>Están en su embalaje original y sin uso.</li>
              <li>No están personalizados o alterados según las especificaciones del cliente.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Bienes Excluidos de Devolución:</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>El suministro de bienes confeccionados según especificaciones personalizadas o claramente adaptados al cliente.</li>
              <li>Bienes que, por su naturaleza, no puedan ser devueltos (como aquellos que se mezclen inseparablemente con otros).</li>
              <li>Bienes digitales descargados o utilizados después de la entrega.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Responsabilidad del Cliente:</h2>
            <p className="mb-4">
              El cliente es responsable del costo y el riesgo asociados con el envío de cualquier devolución.
            </p>
            <p className="mb-6">
              Se recomienda utilizar un servicio de envío rastreable y asegurado, ya que no podemos hacernos responsables de bienes dañados o perdidos durante el transporte de devolución.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
              <a href="tel:+525575086614" className="hover:text-primary transition-colors">
                55-7508-6614
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:contacto@grupoideasmx.com" className="hover:text-primary transition-colors">
                contacto@grupoideasmx.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
