import React from 'react';

export default function WhySection() {
  const cards = [
    {
      num: '01',
      title: 'Hand-selected',
      desc: 'Quality pieces hand-picked from China and Turkey, chosen for durability, premium materials, and master craftsmanship.'
    },
    {
      num: '02',
      title: 'Local fit',
      desc: 'Proportions and layouts curated specifically to fit elegant Ethiopian living rooms and dining spaces seamlessly.'
    },
    {
      num: '03',
      title: 'Personal care',
      desc: 'White-glove delivery, assembly support, and custom requests handled directly from our showroom to your door.'
    }
  ];

  return (
    <section id="why" className="bg-ink py-28 relative overflow-hidden border-t border-line/30">
      {/* Decorative gradient overlay behind section */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          
          {/* Left Column: Heading and Craft Image */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-goldLight font-medium">Why Anya</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-cormorant font-light text-ivory leading-[1.15]">
                Curated for <br />
                <em className="italic text-goldLight">Ethiopian</em> homes.
              </h2>
              <p className="mt-6 text-sand leading-relaxed text-sm sm:text-base">
                We source hand-picked furniture directly from trusted ateliers across two continents, bringing them to Addis Ababa with custom styling guidance and dedicated care.
              </p>
            </div>
            
            {/* Image frame */}
            <div className="relative group overflow-hidden rounded-3xl border border-line bg-walnut/20 p-2 shadow-soft">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src="/img/marble-table-detail.jpg" 
                  alt="Detail of Calacatta marble craftsmanship" 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/30 transition-opacity group-hover:opacity-0" />
              </div>
              
              {/* Gold light reflection accent */}
              <div className="absolute -inset-px rounded-3xl border border-gold/0 group-hover:border-gold/30 transition duration-500 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Premium Value Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl border border-line bg-walnut/10 hover:bg-walnut/20 p-8 backdrop-blur-md transition-all duration-500 hover:translate-x-2 shadow-lg hover:shadow-gold/5"
              >
                <div className="flex gap-6 items-start">
                  {/* Gold Gradient Number */}
                  <span className="text-4xl sm:text-5xl font-cormorant italic font-light text-goldLight select-none">
                    {card.num}
                  </span>
                  
                  {/* Card Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-ivory tracking-wide transition-colors group-hover:text-goldLight">
                      {card.title}
                    </h3>
                    <p className="text-sand/80 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle border shine effect */}
                <div className="absolute -inset-px rounded-2xl border border-goldLight/0 group-hover:border-goldLight/20 transition duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
