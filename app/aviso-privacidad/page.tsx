import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AvisoPrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-[family-name:var(--font-display)]">
            Aviso de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg mb-6">
              Este aviso forma parte del uso de este sitio web www.grupoideasmx.com
            </p>

            <p className="mb-6">
              Todos los datos son recabados por Grupo Ideas. El responsable de la protección de los datos, es el Departamento de Servicio a Clientes, ubicado en el mismo domicilio y que puedes contactar en el email <a href="mailto:contacto@grupoideasmx.com" className="text-primary hover:underline">contacto@grupoideasmx.com</a>
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Los datos que recolectamos</h2>
            <p className="mb-6">
              Datos personales incluyen nombre y apellidos, número telefónico, dirección de correo electrónico y ciudad. Esta información es recolectada y guardada cuando eliges llenar el formulario de la página.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Información no personal</h2>
            <p className="mb-6">
              Recolectamos y guardamos información no personal de forma automática cada vez que entras a Grupo Ideas; por ejemplo el destino que seleccionas o la forma en que usas el sitio. Esta información se recolecta a través de cookies y nos permite hacer mejoras constantes. Las cookies son archivos de texto que guarda tu navegador en el disco duro de tu computadora. Cuando entras a Grupo Ideas, es posible que guardemos información sobre tu sesión y te asignemos una o varias cookies. Las cookies sirven por ejemplo para saber si es la primera vez que nos visitas. Nuestras cookies no recolectan ni guardan información personal.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">¿Cómo puedo modificar la manera en que mi navegador maneja las cookies?</h3>
            <p className="mb-4">Hay 2 acciones básicas sobre el manejo de cookies:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Puedes cambiar los permisos de tu navegador para aceptar o bloquear cookies. El proceso puede variar un poco dependiendo el navegador. Si te interesa esta opción, puedes hacer una búsqueda en Google (o el buscador de tu preferencia) con la frase &quot;Cómo administrar las cookies en (nombre de tu navegador)&quot;. Por ejemplo: Cómo administrar las cookies en Internet Explorer.</li>
              <li>Puedes borrar todas las cookies que ya existen en tu computadora.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Cómo se utilizan tus datos</h2>
            <p className="mb-4">Los datos que proporcionas podrán tener uno o más de los siguientes tratamientos:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Llamadas telefónicas para responder a tus dudas sobre nuestros paquetes de viaje.</li>
              <li>Llamadas telefónicas para promocionar nuestros productos.</li>
              <li>Para recibir ofertas de viaje por correo electrónico.</li>
              <li>Para mantener y actualizar constantemente bases de datos que generan estadísticas que permiten mejorar los servicios que reciben nuestros clientes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Límite de uso y divulgación de la información</h2>
            <p className="mb-6">
              Sólo Grupo Ideas tiene acceso a la información recabada (tu e-mail) cuando llenas nuestro formulario, ofertas o servicios a través de correo electrónico. Los mensajes o avisos promocionales se envían únicamente a quien ha llenado nuestro formulario y puedes dar de baja tu correo electrónico en cualquier momento mandando la solicitud a <a href="mailto:contacto@grupoideasmx.com" className="text-primary hover:underline">contacto@grupoideasmx.com</a>
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Cómo protegemos tus datos personales</h2>
            <p className="mb-6">
              Grupo Ideas ha implementado un sistema de seguridad sofisticado para proteger la información de nuestros clientes de accesos no autorizados. Nuestros sistemas están configurados con encriptación de datos y tecnologías de codificación construidas con los mejores estándares de la industria. Toda transmisión de datos de los sitios de Grupo Ideas, se codifica antes de enviarse usando tecnología SSL-3.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Cómo puedes tener acceso a tus datos personales</h2>
            <p className="mb-4">
              La Ley Federal de Protección de Datos Personales en Posesión de los Particulares establece 4 acciones que tienes derecho a ejercer sobre los datos personales que proporcionas: acceso a tus datos personales para conocer los detalles de tratamiento de los mismos, así como a rectificarlos en caso de ser inexactos, incorrectos o estén desactualizados; cancelación cuando considere que no se requieren para alguna de las finalidades señaladas en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o haya finalizado la relación contractual o de servicio, o bien, oposición al tratamiento de los mismos para fines específicos (conocidos como derechos ARCO).
            </p>
            <p className="mb-6">
              Si necesitas acceso a los datos personales que proporcionaste, envía a <a href="mailto:contacto@grupoideasmx.com" className="text-primary hover:underline">contacto@grupoideasmx.com</a> una solicitud con lo siguiente:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Nombre completo y teléfono o domicilio.</li>
              <li>Copia de una identificación oficial con foto o que te acredite como titular de los datos que deseas accesar o como representante legal del titular.</li>
              <li>Especificar qué deseas que se haga con tus datos personales.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Transferencias de datos</h2>
            <p className="mb-6">
              Nunca transferimos datos personales llenados en la página de Grupo Ideas a personas o empresas ajenas a Grupo Ideas.
            </p>

            <p className="mb-6">
              Al aceptar los términos y condiciones, el cliente autoriza el uso de la tecnología y seguridad proporcionada por Openpay para realizar sus transacciones en línea, garantizando que sus datos y pagos estarán protegidos mediante estándares de seguridad avanzados y cumpliendo con las normativas aplicables en comercio electrónico.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Cambios a este Aviso de Privacidad</h2>
            <p className="mb-6">
              Grupo Ideas se reserva el derecho de modificar o cambiar este Aviso de Privacidad si es necesario. Los cambios entran en vigor en el momento que son publicados en cualquiera de sus sitios de internet. Los cambios son publicados en la dirección web: <a href="https://www.grupoideasmx.com/aviso-privacidad" className="text-primary hover:underline">https://www.grupoideasmx.com/aviso-privacidad</a>
            </p>

            <p className="mb-6">
              Al llenar un formulario con Grupo Ideas, sus representantes o afiliados (por cualquier medio) aceptas este Aviso de Privacidad. Si el usuario utiliza los servicios de www.grupoideasmx.com, significa que ha leído, entendió y acordado los términos antes expuestos.
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
