import React from 'react';

export default function Footer({ onFilterChange }) {
  const categories = [
    { label: 'Sofas & Chairs', value: 'sofas' },
    { label: 'Dining', value: 'dining' },
    { label: 'Tables', value: 'tables' },
    { label: 'Storage', value: 'storage' },
    { label: 'Bedroom', value: 'bedroom' }
  ];

  const defaultMessage = encodeURIComponent("Hi Anya Furniture, I'd like to inquire about your furniture collections.");

  return (
    <footer className="bg-ink py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-line">
          <div>
            <a href="#top" aria-label="Anya Furniture — Home" style={{ display:'inline-block', marginBottom:18 }}>
              <img src="/img/logo-gold.png" alt="Anya Furniture" style={{ height:72, width:'auto' }} />
            </a>
            <p style={{ fontSize:'0.88rem', color:'#D9CCB8', lineHeight:1.8 }}>
              Imported luxury furniture from China and Turkey,<br />curated for homes in Addis Ababa.
            </p>
          </div>
          <div>
            <h4 className="text-goldLight uppercase text-sm mb-3">Explore</h4>
            <a href="#collections" className="block text-sand">Collections</a>
            <a href="#catalog" className="block text-sand">Catalog</a>
            <a href="#why" className="block text-sand">Why Anya</a>
          </div>
          <div>
            <h4 className="text-goldLight uppercase text-sm mb-3">Categories</h4>
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => {
                  onFilterChange(cat.value);
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-sand hover:text-goldLight transition text-left"
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div>
            <h4 className="text-goldLight uppercase text-sm mb-3">Visit</h4>
            <p className="text-sand">Bole Road, Addis Ababa<br/>Open daily, 9:00–19:00</p>
            <a href="tel:+251911000000" className="block mt-2 text-sand">+251 91 100 0000</a>
            <a href={`https://wa.me/251911000000?text=${defaultMessage}`} target="_blank" rel="noopener noreferrer" className="block text-sand hover:text-goldLight transition">WhatsApp Us</a>
          </div>
        </div>
        <div className="flex justify-between items-center pt-6 text-sm text-[rgba(217,204,184,0.55)]">
          <span>© 2026 Anya Furniture. All rights reserved.</span>
          <span>Designed for Anya Furniture, Addis Ababa</span>
        </div>
      </div>
    </footer>
  );
}
