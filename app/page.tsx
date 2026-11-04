import Link from "next/link";
import { Shell } from "@/components/Shell";

const lines = [
  { num: "01", href: "/producto/inbox", title: "Inbox omnicanal", text: "WhatsApp, email, webchat y redes en una sola conversación, con asignación, notas y SLA.", go: "Ver Inbox" },
  { num: "02", href: "/producto/voz", title: "Voz y contact center", text: "Llamadas entrantes y salientes en la misma bandeja. Twilio por cliente, grabación con consentimiento y resumen con IA.", go: "Ver Voz" },
  { num: "03", href: "/producto/marketing", title: "Marketing con compliance", text: "Email transaccional y campañas con consentimiento, supresión automática, preflight y auditoría.", go: "Ver Marketing" },
  { num: "04", href: "/producto/automations", title: "Automatizaciones", text: "Disparadores multicanal, handoff bot→humano, recordatorios y reportes. HITL cuando importa.", go: "Ver Automatizaciones" },
  { num: "05", href: "/api", title: "API y MCP", text: "El mismo contrato para tus sistemas y agentes de IA: scopes, rate limit y modelo enmascarado.", go: "Ver API" },
  { num: "06", href: "/confianza", title: "Empresas y JUXA ONE", text: "Tickets, seguimiento, identidad Juxa-login y facturación compartida con el OS.", go: "Ver integración" },
];

const faq = [
  { q: "¿JUXA Contact reemplaza a mi proveedor de email o telefonía?", a: "No. JUXA Contact es la capa de bandeja, automatización y compliance. Tú conectas tu propia cuenta de Twilio, Meta o SES (BYO); tus datos y tu facturación siguen siendo tuyos." },
  { q: "¿La IA envía mensajes o hace llamadas sola?", a: "No por defecto. Genera borradores, resúmenes y sugerencias; el envío o la llamada requiere aprobación humana (HITL) y queda auditada." },
  { q: "¿Cómo se conecta una cuenta?", a: "Con el hub de conexión: eliges proveedor, pegas el SID/ID público, el token va directo a Secret Manager y ejecutamos una prueba de credenciales read-only. Sin guardar secretos en la base." },
  { q: "¿Puedo usarlo solo por API o MCP?", a: "Sí. Está diseñado para venderse como API y MCP para sistemas de IA y terceros, con scopes y cuotas. La UI es opcional." },
  { q: "¿Dónde vive la información?", a: "En el tenant del cliente, con aislamiento por team. Las grabaciones y conversaciones siguen la política de retención que definas." },
];

export default function Home() {
  return (
    <Shell>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <p className="eyebrow" style={{ color: "var(--lime)" }}>Bandeja · Voz · Marketing · Automatizaciones</p>
            <h1>Todas tus conversaciones.<br /><em>Una sola bandeja.</em></h1>
            <p className="lead">WhatsApp, email, webchat y voz — con IA que responde y traspasa a tu equipo cuando importa. Consentimiento, grabación y aprobación auditables.</p>
            <div className="hero-actions">
              <a className="btn btn-lime" href="mailto:contacto@juxa.io">Agendar una demo</a>
              <a className="btn btn-ghost" href="#lineas">Ver productos</a>
            </div>
            <div className="proof">
              <span className="chip">Conecta tu cuenta Twilio o Meta</span>
              <span className="chip">API + MCP</span>
              <span className="chip">HITL y auditoría</span>
            </div>
          </div>
          <div className="visual">
            <div className="art-frame hero-art">
              <img src="/visuals/hero.svg" alt="" width={1200} height={900} />
              <div className="art-caption"><span>Bandeja omnicanal</span><span>IA con handoff</span><span>Voz incluida</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap statement">
          <div className="big">1</div>
          <p>bandeja para seis formas de hablar.<br /><span>Un solo lugar para responder.</span></p>
        </div>
      </section>

      <section id="lineas" className="section">
        <div className="wrap">
          <p className="kicker">Líneas de negocio</p>
          <h2 className="h2">Cada superficie se vende sola. Juntas, son tu centro de contacto.</h2>
          <p className="sub">Elige el módulo que necesitas hoy; activa los demás sin migrar de plataforma. Todo comparte contacto, consentimiento y auditoría.</p>
          <div className="lines" style={{ marginTop: 44 }}>
            {lines.map((l) => (
              <Link className="line-row" href={l.href} key={l.num}>
                <span className="line-num">{l.num}</span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
                <span className="go">{l.go} ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap split">
          <div className="copy">
            <p className="kicker">01 · Inbox</p>
            <h2 className="h2">Una conversación, no cinco pestañas.</h2>
            <p className="sub">El mismo hilo para WhatsApp, email, webchat y voz. El bot atiende lo repetitivo y entrega al humano con todo el contexto.</p>
            <div className="feature-list">
              <div className="feature"><span className="tick">✓</span><div><b>Handoff con contexto</b>Resumen, historial y consentimiento viajan con la conversación.</div></div>
              <div className="feature"><span className="tick">✓</span><div><b>Asignación y SLA</b>Colas por equipo, prioridad y tiempo de respuesta visible.</div></div>
              <div className="feature"><span className="tick">✓</span><div><b>Notas y etiquetas</b>Colaboración interna sin mezclar la conversación del cliente.</div></div>
            </div>
          </div>
          <div className="visual">
            <div className="flow-board">
              <div className="flow-col">
                <span className="flow-label">Canales</span>
                {["WhatsApp", "Email", "Webchat", "Voz"].map((x) => <span className="flow-node" key={x}>{x}</span>)}
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-core">
                <span className="flow-label">JUXA Contact</span>
                <b>Una conversación</b>
                <small>Asignación · SLA · consentimiento</small>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-col">
                <span className="flow-label">Equipo</span>
                <span className="flow-node">Agente</span>
                <span className="flow-node">Supervisor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split rev">
          <div className="copy">
            <p className="kicker">02 · Voz</p>
            <h2 className="h2">La llamada entra a la misma bandeja.</h2>
            <p className="sub">Troncales Twilio por cliente (BYO), DIDs, IVR y voz IA. La grabación y el consentimiento quedan en la conversación, no en un sistema aparte.</p>
            <div className="feature-list">
              <div className="feature"><span className="tick">✓</span><div><b>Sin segundo escritorio</b>El agente contesta desde el navegador, dentro del hilo.</div></div>
              <div className="feature"><span className="tick">✓</span><div><b>Consentimiento de grabación</b>Antes de grabar; si falta, la llamada sigue sin grabación.</div></div>
              <div className="feature"><span className="tick">✓</span><div><b>Resumen y próxima acción</b>La IA resume la llamada y propone el siguiente paso, con revisión humana.</div></div>
            </div>
          </div>
          <div className="visual">
            <div className="art-frame">
              <img src="/visuals/voice.svg" alt="" width={1000} height={700} />
              <div className="art-caption"><span>Llamada entrante</span><span>Grabación con consentimiento</span><span>Resumen IA</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap split">
          <div className="copy">
            <p className="kicker">03 · Marketing</p>
            <h2 className="h2">Campañas con consentimiento, no con listas compradas.</h2>
            <p className="sub">Email transaccional y marketing con supresión automática, segmentos y preflight. Cada envío deja evidencia y se detiene si falta consentimiento.</p>
            <div className="feature-list">
              <div className="feature"><span className="tick">✓</span><div><b>Supresión antes que alcance</b>Rebotes, quejas y bajas se excluyen en el envío.</div></div>
              <div className="feature"><span className="tick">✓</span><div><b>Audiencia congelada</b>Revisas exactamente a quién se enviará antes de aprobar.</div></div>
              <div className="feature"><span className="tick">✓</span><div><b>HITL en campañas</b>Borrador, revisión, aprobación y preflight; nada sale solo.</div></div>
            </div>
          </div>
          <div className="visual">
            <div className="art-frame">
              <img src="/visuals/marketing.svg" alt="" width={1000} height={700} />
              <div className="art-caption"><span>Audiencia</span><span>Consentimiento</span><span>Preflight</span><span>Aprobación</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="kicker">Ecosistema</p>
          <h2 className="h2" style={{ margin: "0 auto" }}>Construido sobre JUXA OS, vendible por separado.</h2>
          <p className="sub" style={{ margin: "18px auto 0" }}>La bandeja, la voz y el marketing comparten identidad, tickets y facturación con el OS. Si mañana quieres usarlo solo por API/MCP, también funciona.</p>
          <div className="eco-strip">
            {["JUXA ONE", "JUXA Login", "JUXA Docs", "JX-1 IA", "JUXA Billing"].map((x) => <span key={x}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap code-grid">
          <div>
            <p className="kicker" style={{ color: "var(--lime)" }}>04 · API y MCP</p>
            <h2 className="h2" style={{ color: "var(--paper)" }}>Tu agente de IA también atiende.</h2>
            <p className="sub">Un contrato para bandeja, voz y marketing. Scopes por herramienta, rate limit y modelo enmascarado. Conecta cuentas del cliente sin guardar secretos.</p>
            <div className="badges">
              <span className="badge">contact_setup_assistant</span>
              <span className="badge">inbox.reply</span>
              <span className="badge">voice.call</span>
              <span className="badge">mail.campaign</span>
              <span className="badge">one.ticket</span>
            </div>
          </div>
          <pre className="code">{`POST /api/v1/connect          # conector BYO (Twilio/Meta/SES)
GET  /api/v1/connect/:id/health
POST /api/v1/connect/:id/test   # valida, no envía
POST /webhooks/twilio/:trunkId  # firma por cuenta

"scopes": ["inbox:write", "voice:read"],
"hitl": true,
"model": "JX-1"`}</pre>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">05 · Confianza</p>
          <h2 className="h2">Nada se envía ni se llama sin dejar rastro.</h2>
          <div className="steps">
            <div className="step"><div className="n">01</div><h3>Consentimiento primero</h3><p>Marketing, grabación y contacto respetan la base de consentimiento y supresión del tenant.</p></div>
            <div className="step"><div className="n">02</div><h3>Aprobación humana</h3><p>Acciones sensibles exigen confirmación; las de dos personas usan actor firmado.</p></div>
            <div className="step"><div className="n">03</div><h3>Evidencia auditable</h3><p>Cada envío, llamada y cambio queda en el ledger con su resultado, sin promesas inventadas.</p></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section cream">
        <div className="wrap">
          <p className="kicker">Preguntas</p>
          <h2 className="h2">Lo que suelen preguntar antes de conectar su cuenta.</h2>
          <div className="faq">
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}<span>+</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="final">
          <div>
            <h2>Conecta tu cuenta. Prueba una conversación real.</h2>
            <p>Te acompañamos en la conexión de Twilio o Meta, la prueba de credenciales y el primer flujo con HITL.</p>
          </div>
          <a className="btn btn-lime" href="mailto:contacto@juxa.io">Hablar con el equipo</a>
        </section>
      </div>
    </Shell>
  );
}
