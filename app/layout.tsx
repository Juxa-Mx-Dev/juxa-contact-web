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
      <body>{children}</body>
    </html>
  );
}
