import { ProductPage } from "@/components/ProductPage";

export default function Page() {
  return (
    <ProductPage
      title="Automatizaciones"
      kicker="JUXA Contact · Línea de negocio"
      intro="Disparadores multicanal, handoff, recordatorios y reportes. Las acciones sensibles pasan por HITL y quedan auditadas."
      items={[
        { title: "Qué resuelve", text: "Una capacidad concreta de JUXA Contact, vendible por separado y conectada al mismo contacto y consentimiento." },
        { title: "Cómo se conecta", text: "Cuenta BYO del cliente (Twilio, Meta, SES…), secreto por referencia en Secret Manager y prueba de credenciales read-only." },
        { title: "Cómo se controla", text: "HITL, auditoría y supresión en el punto de acción. Nada se envía ni se llama sin aprobación cuando aplica." },
      ]}
    />
  );
}
