"use client";

import { useState, useRef } from "react";
import { Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "525575086614";
    let message = `Hola, me gustaria obtener informacion:\n\n`;
    message += `*Nombre:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*Telefono:* ${formData.phone}\n`;
    message += `*Servicio:* ${formData.service}\n`;
    message += `*Mensaje:* ${formData.message}`;

    // If there's a CV file, add instructions
    if (cvFile) {
      message += `\n\n_Nota: Adjunto mi CV "${cvFile.name}" en este chat._`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, "_blank");

    // If there's a CV, show instructions for mobile sharing
    if (cvFile) {
      setTimeout(() => {
        alert(
          "Para enviar tu CV:\n\n" +
          "1. Se abrira WhatsApp con tu mensaje\n" +
          "2. Envia el mensaje de texto primero\n" +
          "3. Luego usa el icono de 'adjuntar' (clip) para enviar tu CV\n\n" +
          "O envia tu CV directamente a: contacto@grupoideasmx.com"
        );
      }, 1000);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        alert("Por favor selecciona un archivo PDF o Word (.doc, .docx)");
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("El archivo debe ser menor a 5MB");
        return;
      }
      setCvFile(file);
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contactanos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte a impulsar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Informacion de Contacto
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+525575086614"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>55-7508-6614</span>
                </a>
                <a
                  href="mailto:contacto@grupoideasmx.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>contacto@grupoideasmx.com</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">
                Envio de CV por WhatsApp
              </h4>
              <p className="text-sm text-muted-foreground">
                Al enviar el formulario con tu CV, se abrira WhatsApp. Despues
                de enviar el mensaje de texto, usa el icono de adjuntar (clip)
                para enviar tu archivo de CV. Tambien puedes enviarlo
                directamente a nuestro correo electronico.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Telefono
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="55-1234-5678"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Servicio de interes
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Paginas Web">Paginas Web</option>
                  <option value="Marketing Digital">Marketing Digital</option>
                  <option value="Diseno Grafico">Diseno Grafico</option>
                  <option value="Desarrollo de Apps">Desarrollo de Apps</option>
                  <option value="Reclutamiento">Reclutamiento</option>
                  <option value="Contabilidad">Contabilidad</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="cv"
                className="block text-sm font-medium text-foreground mb-1"
              >
                CV (para reclutamiento - PDF o Word, max 5MB)
              </label>
              <input
                type="file"
                id="cv"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 cursor-pointer"
              />
              {cvFile && (
                <p className="mt-1 text-sm text-accent">
                  Archivo seleccionado: {cvFile.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Mensaje *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Cuentanos sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
