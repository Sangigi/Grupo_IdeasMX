import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-[family-name:var(--font-display)]">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Facturación</h2>
            <p className="mb-6">
              Para solicitar una factura sólo es necesario compartirnos tus datos fiscales y número de pedido al correo <a href="mailto:facturacion@grupoideasmx.com" className="text-primary hover:underline">facturacion@grupoideasmx.com</a>
            </p>
            <p className="mb-6">
              Los datos se deben de enviar en días hábiles dentro del mes en que realizaste tu compra.
            </p>
            <p className="mb-6">
              Se toma en cuenta que el cliente está al tanto del proceso de compra dónde eligió el plan, realizó su pago, rellenó un formulario dónde envió documentos, se resolvieron sus dudas acerca del proceso de diseño, creación de app o renta de equipos, se diseña la publicidad o se desarrolla la app en un periodo de hasta 4 semanas o se surten los equipos rentados en hasta 6 semanas.
            </p>
            <p className="mb-6 text-foreground font-medium">
              No se pueden solicitar facturas de compras de meses pasados.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Producto no disponible</h2>
            <p className="mb-6">
              Todos los pedidos están sujetos a disponibilidad. En caso de que un producto de tu compra no se encuentre disponible, estamos obligados a reembolsar el costo de los productos en monedero electrónico.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Políticas de envío</h2>
            <p className="mb-6">
              En Grupo Ideas nos comprometemos a enviar tu orden de 5 a 6 semanas en caso de renta de equipo o 3 a 4 semanas en caso de diseño de publicidad o desarrollo de apps después de aprobar tu pago, recibir documentos, resolver dudas y comenzar con el proyecto.
            </p>
            
            <p className="mb-4">Tu orden pasará por los siguientes estados antes de salir de nuestro almacén:</p>
            <ul className="list-disc pl-6 mb-6 space-y-4">
              <li>
                <strong className="text-foreground">Pago recibido:</strong> significa que ya recibimos tu pago, pero, hay que aprobarlo. Hay varios controles de seguridad que tenemos que seguir para liberar el orden, en esta parte del proceso recibirás el correo de confirmación.
                <br />
                Si tu forma de pago es Tarjeta de crédito, Débito, SPEI o PayPal, lo confirmamos en las siguientes 3 horas hábiles.
              </li>
              <li>
                <strong className="text-foreground">Pago aprobado:</strong> significa que ya confirmamos que todo está bien y que estamos listos para comenzar a trabajar en tus diseños, app o equipos.
              </li>
              <li>
                <strong className="text-foreground">Orden enviada:</strong> esto significa que tu orden está lista para ser enviada al domicilio que nos indicaste. ¿Para qué? para que estés tranquilo y puedas dar seguimiento a la entrega.
              </li>
            </ul>

            <p className="mb-4">
              De pronto pueden suceder situaciones que están fuera de nuestras manos, aun así estaremos más que felices de ayudar cuando:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>No puedes recibir tu paquete en el domicilio. El servicio de paquetería lo manda de regreso a nosotros después de cierto tiempo. Con gusto podemos hacer un nuevo envío.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Condiciones de envío:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>La garantía de entrega de 3 a 5 días hábiles dependerá de la cobertura del servicio de paquetería en tu localidad, tomando como día uno cuando el paquete es recogido por la paquetería.</li>
              <li>Si vives en una zona extendida, el pago de dicha extensión tendrás que realizarla. Te lo confirmaremos al momento de confirmar tu orden.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Tu opinión es muy importante para nosotros</h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-4">¿Cómo nos envían una queja o retroalimentación?</h3>
            <p className="mb-6">
              Sólo mándanos un correo a <a href="mailto:contacto@grupoideasmx.com" className="text-primary hover:underline">contacto@grupoideasmx.com</a> con comentario o situación, recibirás respuesta a la brevedad.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground italic">
                * Las políticas de servicio, preventa, cancelaciones y reembolsos son exclusivas de nuestra tienda en línea *
              </p>
              <p className="text-sm text-muted-foreground italic mt-2">
                * En caso de que el usuario no siga las políticas de servicio, términos y/o condiciones (publicadas en nuestra página web), el pedido se puede cancelar en cualquier momento *
              </p>
            </div>
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
