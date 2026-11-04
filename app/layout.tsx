import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JUXA Contact — La bandeja y la voz de tu negocio",
  description:
    "WhatsApp, email, webchat y voz en una sola bandeja, con IA, consentimiento y auditoría. API y MCP para tus agentes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Manrope:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
