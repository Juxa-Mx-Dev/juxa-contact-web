import { Shell } from "@/components/Shell";
export default function Page() {
  return (
    <Shell>
      <section className="section dark" style={{ borderRadius: 0 }}>
        <div className="wrap code-grid">
          <div>
            <p className="kicker" style={{ color: "var(--lime)" }}>API · MCP</p>
            <h2 className="h2" style={{ color: "var(--paper)" }}>Un contrato para agentes, bandeja y voz.</h2>
            <p className="sub">Tus sistemas de IA pueden atender conversaciones, crear tickets y disparar flujos con scopes, cuotas y HITL. La UI es opcional.</p>
            <div className="hero-actions"><a className="btn btn-lime" href="mailto:contacto@juxa.io">Solicitar acceso API</a></div>
          </div>
          <pre className="code">{`# conectar una cuenta del cliente
POST /api/v1/connect
GET  /api/v1/connect/:id/health
POST /api/v1/connect/:id/test

# bandeja
GET  /api/v1/inbox/conversations
POST /api/v1/inbox/conversations/:id/messages

# voz y marketing (HITL)
POST /api/v1/voice/calls
POST /api/v1/marketing/campaigns

# JUXA ONE
POST /api/v1/one/tickets`}</pre>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="steps">
            <div className="step"><div className="n">01</div><h3>Scopes por herramienta</h3><p>Lectura y escritura separadas; sin scope no hay llamada.</p></div>
            <div className="step"><div className="n">02</div><h3>Secretos por referencia</h3><p>La API nunca recibe ni devuelve el token del proveedor.</p></div>
            <div className="step"><div className="n">03</div><h3>HITL configurable</h3><p>Envío, llamada y campaña requieren aprobación humana cuando el flujo lo exige.</p></div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
