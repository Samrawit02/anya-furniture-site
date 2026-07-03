import React from 'react';

export default function ProductCard({ p, onOpen }) {
  const src = p.images?.[0] || 'placeholder.jpg';
  const filename = src.split('/').pop() || 'placeholder.jpg';
  const basename = filename.replace(/\.(jpe?g|png)$/i, '');
  const genPath = `/img/generated/${basename}`;
  const widths = [320, 640, 1024, 1600];

  const makeSrcSet = (ext) => widths.map(w => `${genPath}-${w}.${ext} ${w}w`).join(', ');

  return (
    <div className="bg-[rgba(247,242,234,0.03)] border border-line overflow-hidden transition hover:translate-y-[-4px]">
      <div className="aspect-square overflow-hidden cursor-pointer" onClick={() => onOpen && onOpen(p)}>
        <picture>
          <source type="image/avif" srcSet={makeSrcSet('avif')} />
          <source type="image/webp" srcSet={makeSrcSet('webp')} />
          <img
            src={`/img/${filename}`}
            srcSet={makeSrcSet('jpeg')}
            alt={p.name.replace(/&amp;/g, '&')}
            className="w-full h-full object-cover transition hover:scale-105"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </picture>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-ivory">{p.name}</h3>
        <div className="flex justify-between items-center mt-3">
          <span className="font-cormorant text-sand">ETB {p.price}</span>
          <button className="text-goldLight hover:text-gold transition" onClick={() => onOpen && onOpen(p)}>Inquire →</button>
        </div>
      </div>
    </div>
  );
}
