import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Grupo Ideas MX"
              width={120}
              height={45}
              className="h-10 w-auto"
            />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/aviso-privacidad" className="hover:text-primary transition-colors">
              Aviso de Privacidad
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/terminos" className="hover:text-primary transition-colors">
              Terminos y Condiciones
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="/devoluciones" className="hover:text-primary transition-colors">
              Terminos de Devoluciones
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Creado por Grupo Ideas
          </p>
        </div>
      </div>
    </footer>
  )
}
