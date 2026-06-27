/**
 * Endpoint de capture d'inscriptions à la newsletter.
 *
 * Valide l'email côté serveur puis transmet le lead à un ESP/CRM si la variable
 * d'environnement ESP_WEBHOOK_URL est configurée (Brevo, Mailchimp, HubSpot,
 * Zapier, n8n…). Sans configuration, le lead est tracé dans les logs de la
 * fonction pour ne jamais être perdu silencieusement.
 *
 * Variables d'environnement (optionnelles) :
 *   ESP_WEBHOOK_URL    URL du webhook ESP/CRM recevant { email, source }
 *   ESP_WEBHOOK_TOKEN  jeton Bearer ajouté à l'en-tête Authorization (si requis)
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const email = typeof body === "object" && body !== null ? (body as { email?: unknown }).email : undefined;
  const source =
    typeof body === "object" && body !== null ? (body as { source?: unknown }).source : undefined;

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return Response.json({ ok: false, error: "Adresse e-mail invalide." }, { status: 422 });
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanSource = typeof source === "string" ? source : "inconnu";

  const webhook = process.env.ESP_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.ESP_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.ESP_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify({ email: cleanEmail, source: cleanSource }),
      });
      if (!res.ok) {
        console.error(`[lead] échec ESP (${res.status}) pour ${cleanEmail}`);
        return Response.json(
          { ok: false, error: "Inscription temporairement indisponible." },
          { status: 502 },
        );
      }
    } catch (err) {
      console.error(`[lead] erreur réseau ESP pour ${cleanEmail}`, err);
      return Response.json(
        { ok: false, error: "Inscription temporairement indisponible." },
        { status: 502 },
      );
    }
  } else {
    // Aucun ESP configuré : trace serveur (visible dans les logs de la fonction).
    console.info(`[lead] ${cleanEmail} — source: ${cleanSource}`);
  }

  return Response.json({ ok: true });
}
