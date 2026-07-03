import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/img/sofa-ivory-curved.jpg"
          alt="Ivory bouclé curved sofa with brass side tables"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[90vh] items-center">
        <div className="max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
          <span className="inline-flex rounded-full border border-goldLight/40 bg-ink/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-goldLight backdrop-blur-sm">
            Imported Luxury Furniture · Addis Ababa
          </span>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-cormorant font-light leading-tight text-ivory">
            Pieces with a <em className="italic text-goldLight">journey</em>, made for your home.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-ivory leading-relaxed">
            Anya Furniture sources hand-finished sofas, dining sets, and statement pieces directly from workshops in China and Turkey — curated for Ethiopian homes that don't compromise on craft.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#catalog" className="inline-flex w-full items-center justify-center rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-goldLight/95 sm:w-auto">
              Browse the Catalog
            </a>
            <a href="#contact" className="inline-flex w-full items-center justify-center rounded-full border border-sand/50 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-sand transition hover:border-goldLight hover:text-goldLight sm:w-auto">
              Visit Our Showroom
            </a>
          </div>

          <div className="mt-12 rounded-3xl border border-line/60 bg-ink/90 p-6 backdrop-blur-md text-ivory shadow-2xl shadow-ink/30 max-w-xl">
            <strong className="block text-lg font-cormorant text-gold">2 Continents, 1 Showroom</strong>
            <p className="mt-2 text-sm sm:text-base text-sand/90">
              Every piece hand-selected from trusted ateliers in China &amp; Turkey, finished for Ethiopian living rooms and dining spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
