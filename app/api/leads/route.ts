/**
 * Endpoint de capture de leads (newsletter + téléchargement de modèle).
 *
 * V2 : valide l'email côté serveur et renvoie un statut. La persistance réelle
 * (ESP/CRM type Brevo, Mailchimp, HubSpot) se branche ici via une variable
 * d'environnement — laissée en TODO pour rester sans dépendance.
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

  // TODO V2.1 : envoyer vers l'ESP/CRM.
  // await fetch(process.env.ESP_WEBHOOK_URL!, { method: "POST", body: JSON.stringify({ email, source }) });
  if (typeof source === "string") {
    // Trace minimale côté serveur (visible dans les logs de la fonction).
    console.info(`[lead] ${email.trim()} — source: ${source}`);
  }

  return Response.json({ ok: true });
}
