import Link from "next/link";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="nav">
        <div className="nav-in">
          <Link href="/" className="brand" aria-label="JUXA Contact">
            <span className="brand-mark">JX</span>
            <span className="brand-name">JUXA <span>Contact</span></span>
          </Link>
          <div className="nav-links">
            <Link href="/#lineas">Productos</Link>
            <Link href="/producto/voz">Voz</Link>
            <Link href="/api">API/MCP</Link>
            <Link href="/confianza">Confianza</Link>
            <Link href="/#faq">Preguntas</Link>
          </div>
          <div className="nav-cta">
            <a className="btn btn-ghost" href="mailto:contacto@juxa.io">Habla con nosotros</a>
          </div>
        </div>
      </nav>
      {children}
      <div className="wrap">
        <footer className="footer">
          <div>© 2026 JX Labs, S.A. de C.V. — JUXA Contact</div>
          <div className="cols">
            <Link href="/producto/inbox">Inbox</Link>
            <Link href="/producto/voz">Voz</Link>
            <Link href="/producto/marketing">Marketing</Link>
            <Link href="/api">API/MCP</Link>
            <Link href="/confianza">Confianza</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
