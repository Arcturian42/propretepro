/**
 * Injecte une ou plusieurs données structurées Schema.org en JSON-LD.
 * Utilisé sur chaque page stratégique pour le SEO et l'optimisation GEO/AEO.
 */
export function SchemaMarkup({ schema }: { schema: object | object[] }) {
  const payload = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
