import Link from "next/link";
import { Shell } from "@/components/Shell";

const lines = [
  { href: "/producto/inbox", tag: "1 · Inbox", title: "Una conversación, todos los canales", text: "Bandeja unificada con asignación, notas y SLA. El bot atiende y entrega a un humano con contexto." },
  { href: "/producto/voz", tag: "2 · Voz", title: "La llamada entra a la misma bandeja", text: "Troncales Twilio por cliente, IVR, grabación con consentimiento y resúmenes de IA." },
  { href: "/producto/marketing", tag: "3 · Marketing", title: "Campañas con consentimiento y HITL", text: "Email transaccional y marketing con supresión automática, auditoría y preflight." },
  { href: "/producto/automations", tag: "4 · Automatizaciones", title: "Flujos que cierran tickets", text: "Disparadores multicanal, handoff, recordatorios y reportes. Nada se ejecuta sin aprobación cuando aplica." },
  { href: "/api", tag: "5 · API/MCP", title: "Tu agente de IA también atiende", text: "El mismo contrato para terceros y sistemas de IA: scopes, rate limit y enmascarado de modelo." },
  { href: "/#empresas", tag: "6 · Empresas/OS", title: "Conectado con JUXA ONE", text: "Tickets y seguimiento en el OS, identidad Juxa-login y facturación compartida." },
];

export default function Home() {
  return (
    <Shell>
      <section className="hero">
        <span className="kicker">Bandeja · Voz · Marketing · Automatizaciones</span>
        <h1>Todas tus conversaciones, una sola bandeja.</h1>
        <p>WhatsApp, email, webchat y voz — con IA que responde y traspasa a tu equipo cuando importa. Consentimiento, grabación y aprobación auditables.</p>
        <a className="cta" href="mailto:contacto@juxa.io">Agendar una demo</a>
      </section>

      <section id="lineas" className="section">
        <h2>Seis líneas de negocio, un solo producto</h2>
        <div className="grid">
          {lines.map((l) => (
            <Link key={l.tag} href={l.href} className="card">
              <span className="tag">{l.tag}</span>
              <h3>{l.title}</h3>
              <p>{l.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="dif" className="section">
        <h2>Por qué JUXA Contact</h2>
        <div className="diff"><div><b>Compliance demostrable.</b> Consentimiento, supresión y grabación con evidencia; sin promesas de inbox que no podamos medir.</div></div>
        <div className="diff"><div><b>HITL real.</b> Envíos, llamadas y cambios sensibles exigen confirmación y auditoría; aprobaciones de dos personas.</div></div>
        <div className="diff"><div><b>Multi-tenant.</b> Un conector por cliente (BYO): Twilio, Meta, SES… tu cuenta, tus datos, portabilidad total.</div></div>
        <div className="diff"><div><b>API y MCP con scopes.</b> Cualquier sistema de IA consume la bandeja y la voz sin perder los controles.</div></div>
      </section>

      <section id="api" className="section">
        <h2>API y MCP, sin fricción</h2>
        <pre>{`POST /api/v1/connect          # conector BYO (Twilio/Meta/SES…)
GET  /api/v1/connect/:id/health
POST /api/v1/connect/:id/test   # valida credenciales, no envía
POST /webhooks/twilio/:trunkId  # firma por cuenta, fail-closed`}</pre>
      </section>

      <section id="empresas" className="section">
        <h2>Para empresas y para el OS</h2>
        <p>JUXA Contact se ancla a JUXA OS: tickets y seguimiento en JUXA ONE, identidad Juxa-login y facturación compartida. También se vende como superficie independiente, por API y por MCP.</p>
      </section>
    </Shell>
  );
}
