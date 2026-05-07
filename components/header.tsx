"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { 
    label: "Servicios", 
    href: "#servicios",
    children: [
      { label: "Paginas Web", href: "/#servicios" },
      { label: "Diseno Grafico", href: "/#servicios" },
      { label: "Marketing Digital", href: "/#servicios" },
      { label: "Desarrollo de Apps", href: "/#servicios" },
      { label: "Contabilidad", href: "/contabilidad" },
      { label: "Legal", href: "/legal" },
      { label: "Reclutamiento", href: "/reclutal" },
    ]
  },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isInHero, setIsInHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
      // Check if we're still in the hero section (dark background)
      setIsInHero(scrollY < window.innerHeight * 0.8)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine text colors based on scroll position
  const textColor = isInHero && !isScrolled ? "text-white/80" : "text-foreground/70"
  const textHoverColor = "hover:text-primary"
  const logoFilter = isInHero && !isScrolled ? "brightness-0 invert" : ""

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Grupo Ideas MX"
              width={140}
              height={50}
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${logoFilter}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Navegacion principal">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium ${textColor} ${textHoverColor} transition-colors py-2`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium ${textColor} ${textHoverColor} transition-colors`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contacto">Cotiza ya!</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${isInHero && !isScrolled ? "text-white" : "text-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
          }`}
          aria-label="Navegacion movil"
        >
          <div className="flex flex-col gap-2 bg-card rounded-lg p-4 border border-border">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-sm font-medium text-foreground/70 py-2"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contacto">Cotiza ya!</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
