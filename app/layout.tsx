import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Grupo Ideas MX | Creatividad y Tecnologia Digital",
  description:
    "Hacemos que la creatividad y la tecnologia trabajen para ti en el mundo digital. Paginas web, marketing digital, diseno grafico, desarrollo de apps, reclutamiento y contabilidad.",
  keywords:
    "paginas web, marketing digital, diseno grafico, desarrollo de apps, reclutamiento, contabilidad, Mexico",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagotipo-3FqQQGfaFw3HKzbxzLjovBIHvsxcQT.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagotipo-3FqQQGfaFw3HKzbxzLjovBIHvsxcQT.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
