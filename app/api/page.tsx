import { Shell } from "@/components/Shell";
export default function Page() {
  return (
    <Shell>
      <section className="hero">
        <span className="kicker">Para sistemas de IA y terceros</span>
        <h1>API y MCP con scopes</h1>
        <p>Un solo contrato para bandeja, voz, marketing y automatizaciones. Secretos por referencia, rate limit y enmascarado de modelo.</p>
      </section>
      <section className="section">
        <pre>{`POST /api/v1/connect            # conector BYO
GET  /api/v1/connect/:id/health  # estado honesto
POST /api/v1/connect/:id/test    # valida credenciales, no envía
GET  /api/v1/inbox/conversations
POST /api/v1/inbox/conversations/:id/messages
POST /api/v1/marketing/campaigns # HITL
POST /api/v1/voice/calls         # HITL`}</pre>
      </section>
    </Shell>
  );
}
