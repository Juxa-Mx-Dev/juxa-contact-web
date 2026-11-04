import Link from "next/link";
import { Shell } from "@/components/Shell";

export function ProductPage({ title, kicker, intro, items }: { title: string; kicker: string; intro: string; items: { title: string; text: string }[] }) {
  return (
    <Shell>
      <section className="hero" style={{ borderBottomLeftRadius: 28 }}>
        <div className="wrap" style={{ padding: "72px 24px 78px" }}>
          <p className="eyebrow" style={{ color: "var(--lime)" }}>{kicker}</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px,5vw,68px)", lineHeight: .98, letterSpacing: "-.04em", fontWeight: 600 }}>{title}</h1>
          <p className="lead" style={{ marginTop: 22, maxWidth: 560, color: "rgba(244,241,232,.78)", fontSize: 17, lineHeight: 1.65 }}>{intro}</p>
          <div className="hero-actions">
            <a className="btn btn-lime" href="mailto:contacto@juxa.io">Agendar una demo</a>
            <Link className="btn btn-ghost" href="/">Volver al producto</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="steps">
            {items.map((it, i) => (
              <div className="step" key={it.title}>
                <div className="n">0{i + 1}</div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="wrap">
        <section className="final">
          <div><h2>¿Lo vemos con tu caso?</h2><p>Una demo de 20 minutos con tu canal y tu flujo, sin compromiso.</p></div>
          <a className="btn btn-lime" href="mailto:contacto@juxa.io">Hablar con el equipo</a>
        </section>
      </div>
    </Shell>
  );
}
