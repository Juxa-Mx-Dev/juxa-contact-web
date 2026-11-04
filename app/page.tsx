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
            <div className="mock">
              <div className="mock-panel">
                <div className="mock-bar"><span className="dot" /><span className="dot" /><span className="dot" />&nbsp; Bandeja · JUXA Contact</div>
                <div className="mock-body">
                  <div className="mock-list">
                    <div className="mock-item active"><strong>Ana · WhatsApp</strong><small>Quiero cambiar mi cita</small></div>
                    <div className="mock-item"><strong>Luis · Email</strong><small>Factura de octubre</small></div>
                    <div className="mock-item"><strong>Sofía · Webchat</strong><small>¿Tienen plan anual?</small></div>
                    <div className="mock-item"><strong>+52 55 · Llamada</strong><small>En espera · 00:42</small></div>
                  </div>
                  <div className="mock-chat">
                    <div className="msg">Hola, necesito mover mi cita del viernes.</div>
                    <div className="msg out">Claro, Ana. Tengo jueves 10:30 o lunes 9:00.</div>
                    <div className="msg">Jueves 10:30 me funciona.</div>
                    <div className="msg meta">IA · borrador revisado por Sara</div>
                    <div className="call-card">
                      <span className="pulse">◉</span>
                      <div><b>Llamada entrante · +52 55 1234</b><br /><small>Grabación con consentimiento · resumen al cerrar</small></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap statement">
          <div className="big">6</div>
          <p>formas de hablar con tu cliente.<br /><span>Un solo lugar para responder.</span></p>
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
            <div className="panel">
              <div className="mini-title"><b>Cola de atención</b><span>Hoy</span></div>
              <div className="kpi">
                <div><span>Abiertas</span><b>128</b></div>
                <div><span>En SLA</span><b>94%</b></div>
                <div><span>Bot resueltas</span><b>41%</b></div>
              </div>
              <div className="bars">
                {[38, 52, 44, 70, 62, 86, 58, 74, 90, 66, 48, 78].map((h, i) => <span className="bar" style={{ height: `${h}%` }} key={i} />)}
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
            <div className="panel dark">
              <div className="mini-title" style={{ color: "rgba(244,241,232,.6)" }}><b style={{ color: "var(--paper)" }}>Llamada en curso</b><span>00:42</span></div>
              <div className="call-card" style={{ background: "rgba(201,255,94,.1)", border: "1px solid rgba(201,255,94,.25)" }}>
                <span className="pulse">◉</span>
                <div><b>+52 55 1234 5678</b><br /><small>Entrante · cliente verificado · consentimiento grabado</small></div>
              </div>
              <div className="feature-list" style={{ marginTop: 18 }}>
                <div className="feature" style={{ color: "rgba(244,241,232,.7)" }}><span className="tick">✓</span><div><b style={{ color: "var(--paper)" }}>Transcripción en vivo</b>El agente ve lo que se dijo y puede corregir.</div></div>
                <div className="feature" style={{ color: "rgba(244,241,232,.7)" }}><span className="tick">✓</span><div><b style={{ color: "var(--paper)" }}>Ticket al cerrar</b>Se crea o actualiza en JUXA ONE con el resumen.</div></div>
              </div>
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
            <div className="panel">
              <div className="mini-title"><b>Campaña · Octubre</b><span>Aprobada</span></div>
              <div className="kpi">
                <div><span>Audiencia</span><b>2,480</b></div>
                <div><span>Entrega</span><b>98.9%</b></div>
                <div><span>Quejas</span><b>0.02%</b></div>
              </div>
              <div className="mini-title" style={{ marginTop: 18 }}><b>Preflight</b><span>4/4</span></div>
              <div className="feature-list" style={{ marginTop: 8 }}>
                <div className="feature"><span className="tick">✓</span><div>Consentimiento y supresión verificados</div></div>
                <div className="feature"><span className="tick">✓</span><div>Dominio y firma listos</div></div>
                <div className="feature"><span className="tick">✓</span><div>Aprobación humana registrada</div></div>
              </div>
            </div>
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
