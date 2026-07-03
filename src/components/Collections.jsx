import React from 'react';

export default function Collections() {
  return (
    <section id="collections" className="bg-ink py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.35em] text-goldLight">Featured collections</span>
          <h2 className="mt-4 text-4xl font-cormorant text-ivory">Curated pieces for every room.</h2>
          <p className="mt-4 text-sand max-w-2xl leading-relaxed">Explore our handpicked collections designed to bring luxury, comfort, and refined character to living rooms, dining spaces, and bedrooms across Addis Ababa.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl border border-line bg-[rgba(255,255,255,0.04)]">
            <img src="/img/sofa-ivory-curved.jpg" alt="Living room collection" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.35em] text-goldLight">Living Room</span>
              <h3 className="mt-3 text-2xl font-cormorant text-ivory">Sofas & Lounge Chairs</h3>
              <p className="mt-2 text-sm text-sand/90">Modern sofa silhouettes and tactile lounge pieces for elegant living spaces.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-line bg-[rgba(255,255,255,0.04)]">
            <img src="/img/dining-table-black-oak.jpg" alt="Dining collection" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.35em] text-goldLight">Dining</span>
              <h3 className="mt-3 text-2xl font-cormorant text-ivory">Tables & Seating</h3>
              <p className="mt-2 text-sm text-sand/90">Statement dining sets designed for intimate meals and refined entertaining.</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-line bg-[rgba(255,255,255,0.04)]">
            <img src="/img/wingback-cream-walnut.jpg" alt="Bedroom collection" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-[0.35em] text-goldLight">Bedroom</span>
              <h3 className="mt-3 text-2xl font-cormorant text-ivory">Beds & Seating</h3>
              <p className="mt-2 text-sm text-sand/90">Soft, sculptural bedroom pieces that feel luxurious and comfortable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
