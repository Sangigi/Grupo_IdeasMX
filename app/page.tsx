import { Hero } from "@/components/hero";
import { ServicesCarousel } from "@/components/services-carousel";
import { Benefits } from "@/components/benefits";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="servicios">
        <ServicesCarousel />
      </section>
      <Benefits />
      <ContactSection />
    </>
  );
}
