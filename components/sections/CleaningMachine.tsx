/**
 * Visuel hero : autolaveuse autoportée professionnelle (photo produit réelle, détourée).
 * Asset : /public/autolaveuse.webp (fond supprimé, watermark retiré).
 * Présentation « packshot Apple » : glow bleu radial, ombre douce qui respire,
 * léger flottement, light sweep subtil. Aucun effet cartoon.
 */
export function CleaningMachine() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[760px]">
      {/* Glow bleu radial derrière la machine */}
      <div
        className="pointer-events-none absolute inset-[6%_0_0_0] z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(49,154,255,0.18) 0%, rgba(96,177,255,0.10) 36%, rgba(255,255,255,0) 72%)",
          filter: "blur(45px)",
        }}
      />

      {/* Ombre portée au sol (respire) */}
      <div
        className="animate-shadow-breathe pointer-events-none absolute bottom-[8%] left-[16%] right-[8%] z-[1] h-[70px]"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, rgba(15,23,42,0.18), rgba(255,255,255,0) 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* Reflet de sol très subtil (image miroir atténuée) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/autolaveuse.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 w-full -scale-y-100 object-contain object-top opacity-10"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 55%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 55%)",
        }}
      />

      {/* Machine (flottement cinématique) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/autolaveuse.webp"
        alt="Autolaveuse autoportée professionnelle pour le nettoyage de sols industriels"
        width={1500}
        height={1205}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="(max-width: 1024px) 90vw, 720px"
        className="animate-industrial-float relative z-[2] h-full w-full object-contain"
        style={{
          filter:
            "drop-shadow(0px 42px 80px rgba(15,23,42,0.18)) drop-shadow(0px 16px 32px rgba(0,90,180,0.12))",
        }}
      />

      {/* Light sweep très subtil */}
      <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden="true">
        <div
          className="animate-light-sweep absolute -inset-y-4 -left-1/4 w-1/3 opacity-40"
          style={{
            background: "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.55) 48%, transparent 62%)",
            mixBlendMode: "soft-light",
          }}
        />
      </div>
    </div>
  );
}
