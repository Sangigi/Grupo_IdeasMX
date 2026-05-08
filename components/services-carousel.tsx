"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Paginas Web",
    description: "Sitios web modernos y responsivos",
    href: "/paginas-web",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/laptop-2838921-3zs52ieHDkIpHSfI7AGcarBFmgC1Xh.jpg",
  },
  {
    title: "Marketing Digital",
    description: "Estrategias que impulsan tu negocio",
    href: "/marketing-digital",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/digital-marketing-1725340-uzT04YIAnUo2YGs8meOHXWnMKzuU6d.jpg",
  },
  {
    title: "Diseno Grafico",
    description: "Identidad visual que destaca",
    href: "/diseno-grafico",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-shkrabaanthony-4348401-lAQ5KmPCrt6ZDPWYNvCDsqwPWjCiI5.jpg",
  },
  {
    title: "Desarrollo de Apps",
    description: "Aplicaciones moviles y web",
    href: "/desarrollo-apps",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo-programacion-0JRSvSN0RzYKWvkDoB5OooNbDEvncK.jpg",
  },
  {
    title: "Reclutamiento",
    description: "Talento para tu empresa",
    href: "/reclutamiento",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01-GDSl5P3dueKo2ysFJGKBe3zGVtvAeT.jpg",
  },
  {
    title: "Contabilidad",
    description: "Tu contabilidad en sintonia con tu negocio",
    href: "/contabilidad",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-7304257-mu2T8NZVNCAT7Toyh9niWMG9JKVsiJ.jpg",
  },
];

export function ServicesCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Duplicate services for infinite scroll effect
  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Soluciones integrales para impulsar tu negocio en el mundo digital
        </p>
      </div>

      <div 
        className="carousel-container relative"
        style={{ 
          ["--scroll-duration" as string]: isMobile ? "20s" : "40s" 
        }}
      >
        <div className={`flex gap-6 ${isMobile ? "animate-scroll-left-fast" : "animate-scroll-left"}`}>
          {duplicatedServices.map((service, index) => (
            <Link
              key={`${service.href}-${index}`}
              href={service.href}
              className="group shrink-0 w-[280px] md:w-[320px]"
            >
              <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 280px, 320px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
