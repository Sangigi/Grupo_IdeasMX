import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "Paginas Web", href: "/paginas-web" },
  { name: "Marketing Digital", href: "/marketing-digital" },
  { name: "Diseno Grafico", href: "/diseno-grafico" },
  { name: "Desarrollo de Apps", href: "/desarrollo-apps" },
  { name: "Reclutamiento", href: "/reclutamiento" },
  { name: "Contabilidad", href: "/contabilidad" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagotipo-3FqQQGfaFw3HKzbxzLjovBIHvsxcQT.png"
                alt="Grupo Ideas MX"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-semibold text-lg text-foreground">
                Grupo Ideas MX
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hacemos que la creatividad y la tecnologia trabajen para ti en el
              mundo digital.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-privacidad"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terminos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/devoluciones"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+525575086614"
                  className="hover:text-foreground transition-colors"
                >
                  55-7508-6614
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:contacto@grupoideasmx.com"
                  className="hover:text-foreground transition-colors"
                >
                  contacto@grupoideasmx.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Ciudad de Mexico, Mexico</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Grupo Ideas MX. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
