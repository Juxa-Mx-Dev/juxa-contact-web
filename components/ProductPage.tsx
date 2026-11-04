import { Shell } from "@/components/Shell";

export function ProductPage({ title, kicker, items }: { title: string; kicker: string; items: { title: string; text: string }[] }) {
  return (
    <Shell>
      <section className="hero">
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>JUXA Contact — bandeja omnicanal, voz y marketing con IA, consentimiento y auditoría.</p>
        <a className="cta" href="mailto:contacto@juxa.io">Habla con nosotros</a>
      </section>
      <section className="section">
        <div className="grid">
          {items.map((it) => (
            <div className="card" key={it.title}><h3>{it.title}</h3><p>{it.text}</p></div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
