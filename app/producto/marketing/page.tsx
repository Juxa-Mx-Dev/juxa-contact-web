import { ProductPage } from "@/components/ProductPage";
export default function Page() {
  return (
    <ProductPage
      title="marketing"
      kicker="Línea de negocio"
      items={[
        { title: "Qué resuelve", text: "Detalle de la línea marketing de JUXA Contact: capacidad, conectores y flujo, con HITL y auditoría." },
        { title: "Cómo se conecta", text: "Cuenta BYO del cliente (Twilio, Meta, SES…), secreto por referencia y prueba de conexión en minutos." },
        { title: "Quién lo usa", text: "Equipos de soporte, cobranza, ventas y operaciones que quieren una sola bandeja." },
      ]}
    />
  );
}
