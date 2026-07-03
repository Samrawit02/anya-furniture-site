import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

export default function Catalog({ onOpenDetail, filter, setFilter }) {
  const [search, setSearch] = useState('');
  const filters = ['all', 'sofas', 'dining', 'tables', 'storage', 'bedroom'];
  const searchLower = search.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesSearch = searchLower === '' ||
      p.name.toLowerCase().includes(searchLower) ||
      p.desc.toLowerCase().includes(searchLower) ||
      p.category.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-walnut py-28" id="catalog">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-cormorant text-ivory">Browse the catalog</h2>
              <p className="text-sand max-w-md mt-2">A selection of current pieces in showroom. Prices are guide prices in ETB — contact us to confirm stock and final pricing.</p>
            </div>
            <label className="w-full md:w-80">
              <span className="sr-only">Search products</span>
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search furniture, materials, or categories"
                className="w-full rounded-full border border-line bg-ink/80 px-4 py-3 text-sm text-ivory placeholder:text-sand focus:outline-none focus:ring-2 focus:ring-goldLight"
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            {filters.map(f => (
              <button
                key={f}
                className={`${filter === f ? 'bg-gold text-ink' : 'border border-line text-sand'} px-4 py-2 rounded-full text-sm`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All Pieces' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-3xl border border-line bg-[rgba(255,255,255,0.03)] p-10 text-center text-sand">No pieces match your search. Try another term or category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="prodGrid">
            {filteredProducts.map((p, i) => (
              <ProductCard key={i} p={p} onOpen={onOpenDetail} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
