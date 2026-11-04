import Link from "next/link";

export function Shell({ children, active }: { children: React.ReactNode; active?: string }) {
  return (
    <div className="wrap">
      <header>
        <Link href="/" className="brand"><span className="dot" />JUXA&nbsp;Contact</Link>
        <nav>
          <Link href="/#lineas">Productos</Link>
          <Link href="/api">API/MCP</Link>
          <Link href="/confianza">Confianza</Link>
        </nav>
        <a className="cta" href="mailto:contacto@juxa.io">Habla con nosotros</a>
      </header>
      {children}
      <footer>
        <div>© 2026 JX Labs, S.A. de C.V. — JUXA Contact</div>
        <div><Link href="/#lineas">Productos</Link> · <Link href="/api">API/MCP</Link> · <Link href="/confianza">Confianza</Link></div>
      </footer>
    </div>
  );
}
