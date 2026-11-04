import { Shell } from "@/components/Shell";
export default function Page() {
  return (
    <Shell>
      <section className="section cream">
        <div className="wrap">
          <p className="kicker">Confianza por diseño</p>
          <h2 className="h2">Compliance que se puede mostrar, no solo prometer.</h2>
          <p className="sub">JUXA Contact está construido para equipos que deben demostrar consentimiento, aprobación y trazabilidad ante su cliente o su regulador.</p>
          <div className="steps">
            <div className="step"><div className="n">01</div><h3>Consentimiento y supresión</h3><p>La base de contacto decide si se puede enviar; la supresión gana siempre.</p></div>
            <div className="step"><div className="n">02</div><h3>HITL y actor firmado</h3><p>Las acciones sensibles exigen confirmación; las aprobaciones de dos personas usan identidad firmada server-side.</p></div>
            <div className="step"><div className="n">03</div><h3>Secretos y firmas</h3><p>Tokens en Secret Manager, webhooks firmados por cuenta y comparación en tiempo constante.</p></div>
            <div className="step"><div className="n">04</div><h3>Clean room</h3><p>Todo el desarrollo sigue el estándar de clean room y denylist de JX Labs.</p></div>
            <div className="step"><div className="n">05</div><h3>Sin promesas vacías</h3><p>No garantizamos inbox placement ni quitas; medimos y mostramos lo que el ledger permite demostrar.</p></div>
            <div className="step"><div className="n">06</div><h3>Retención definida</h3><p>Conversaciones, grabaciones y eventos siguen la política del tenant, no un default oculto.</p></div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
