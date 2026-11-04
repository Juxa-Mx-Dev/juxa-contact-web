# juxa-contact-web

Landing de marketing de **JUXA Contact** — bandeja omnicanal + voz + marketing + automatizaciones (marca JUXA).

- Stack: Next.js 15 · React 19 · CSS propio (sin dependencias de UI de terceros).
- Sin página de precios por decisión: CTA "Habla con nosotros".
- Mock y plan: Documentación 2.0 `01-productos/juxa-contact/SITIO-WEB-2026-11-04.md`.
- Dominio: staging `contact.staging.juxa.io`; producción futura `contact.juxa.io`.

## Entornos

| Rama | Entorno | URL |
|---|---|---|
| `main` | producción (pendiente) | `contact.juxa.io` |
| `develop`/feature | staging | Cloud Run `juxa-contact-web-staging` + `contact.staging.juxa.io` |

## Local

```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

## Deploy

```bash
gcloud builds submit . --project=crmjuxa --region=us-central1 \
  --tag us-central1-docker.pkg.dev/crmjuxa/juxa-crm/juxa-contact-web:staging
gcloud run deploy juxa-contact-web-staging --project=crmjuxa --region=us-central1 \
  --image us-central1-docker.pkg.dev/crmjuxa/juxa-crm/juxa-contact-web:staging \
  --allow-unauthenticated --cpu=1 --memory=512Mi --min-instances=0 --max-instances=2
```
