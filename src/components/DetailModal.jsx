import React, { useState, useEffect } from 'react';

export default function DetailModal({ product, onClose }) {
  const [imageIdx, setImageIdx] = useState(0);
  const images = product.images || [];
  const currentImg = images[imageIdx] || 'placeholder.jpg';
  const imgUrl = currentImg.startsWith('/') ? currentImg : `/${currentImg}`;

  const nextImg = () => setImageIdx(i => (i + 1) % images.length);
  const prevImg = () => setImageIdx(i => i === 0 ? images.length - 1 : i - 1);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'ArrowLeft') prevImg();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, images.length]);

  const handleInquire = () => {
    const text = encodeURIComponent(`Hi Anya Furniture, I am interested in inquiring about the "${product.name}" (Price: ETB ${product.price}, Dimensions: ${product.dims}).`);
    window.open(`https://wa.me/251911000000?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div className="max-w-5xl w-full bg-walnut rounded-2xl overflow-hidden shadow-2xl my-8" onClick={e => e.stopPropagation()}>
        {/* Gallery */}
        <div className="relative bg-ink/60">
          <img src={imgUrl} alt={product.name} className="w-full h-[50vh] object-cover" />

          {/* Prev/Next buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ink/80 text-sand hover:bg-gold hover:text-ink transition z-20"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                onClick={nextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ink/80 text-sand hover:bg-gold hover:text-ink transition z-20"
                aria-label="Next image"
              >
                →
              </button>
            </>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 bg-ink/80 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-sand z-20">
              {imageIdx + 1} / {images.length}
            </div>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 max-w-[90%] overflow-x-auto p-1.5 bg-ink/85 rounded-xl border border-line/10 shadow-soft backdrop-blur-sm z-20"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {images.map((img, idx) => {
                const thumbUrl = img.startsWith('/') ? img : `/${img}`;
                return (
                  <button
                    key={idx}
                    onClick={() => setImageIdx(idx)}
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 cursor-pointer ${
                      idx === imageIdx ? 'border-gold scale-105 opacity-100' : 'border-transparent opacity-50 hover:opacity-90'
                    }`}
                  >
                    <img src={thumbUrl} alt="" className="w-full h-full object-cover" />
                  </button>
                );
              })}
            </div>
          )}

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-3 rounded-full bg-ink/80 text-sand hover:bg-gold hover:text-ink transition z-20"
            aria-label="Close detail"
          >
            ✕
          </button>
        </div>

        {/* Information */}
        <div className="p-6 bg-ink max-h-[40vh] overflow-y-auto">
          <h2 className="text-2xl font-cormorant text-ivory">{product.name}</h2>
          <p className="mt-3 text-sand/90 leading-relaxed text-sm">{product.desc}</p>

          <div className="mt-4 grid gap-2 text-xs text-sand/90">
            <div><strong className="text-sand">Dimensions:</strong> {product.dims}</div>
            <div><strong className="text-sand">Material:</strong> {product.material}</div>
            <div><strong className="text-sand">Price:</strong> <span className="text-base font-cormorant text-goldLight">ETB {product.price}</span></div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleInquire}
              className="flex-1 rounded-full bg-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition hover:bg-goldLight"
            >
              Inquire Now
            </button>
            <button
              onClick={onClose}
              className="flex-1 rounded-full border border-sand/50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-sand transition hover:border-goldLight hover:text-goldLight"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
