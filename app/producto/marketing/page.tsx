import { ProductPage } from "@/components/ProductPage";

export default function Page() {
  return (
    <ProductPage
      title="Marketing con compliance"
      kicker="JUXA Contact · Línea de negocio"
      intro="Email transaccional y campañas con consentimiento, supresión automática, audiencia congelada y preflight antes de aprobar."
      items={[
        { title: "Qué resuelve", text: "Una capacidad concreta de JUXA Contact, vendible por separado y conectada al mismo contacto y consentimiento." },
        { title: "Cómo se conecta", text: "Cuenta BYO del cliente (Twilio, Meta, SES…), secreto por referencia en Secret Manager y prueba de credenciales read-only." },
        { title: "Cómo se controla", text: "HITL, auditoría y supresión en el punto de acción. Nada se envía ni se llama sin aprobación cuando aplica." },
      ]}
    />
  );
}
