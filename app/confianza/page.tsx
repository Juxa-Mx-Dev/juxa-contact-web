import { Shell } from "@/components/Shell";
export default function Page() {
  return (
    <Shell>
      <section className="hero">
        <span className="kicker">Confianza por diseño</span>
        <h1>HITL, auditoría y compliance</h1>
        <p>Nada se envía ni se llama sin consentimiento y aprobación cuando aplica. Todo queda auditado.</p>
      </section>
      <section className="section">
        <div className="grid">
          <div className="card"><h3>Secretos por referencia</h3><p>Los tokens viven en Secret Manager; la base solo guarda la referencia.</p></div>
          <div className="card"><h3>Firma por cuenta</h3><p>Webhooks validados con el secreto de la cuenta del cliente (Twilio, Meta).</p></div>
          <div className="card"><h3>Aprobaciones de dos personas</h3><p>Cambios de plan y acciones sensibles con actor firmado y auditoría.</p></div>
          <div className="card"><h3>Anti-plagio y clean room</h3><p>Todo el desarrollo sigue el estándar de clean room y denylist de JX Labs.</p></div>
        </div>
      </section>
    </Shell>
  );
}
