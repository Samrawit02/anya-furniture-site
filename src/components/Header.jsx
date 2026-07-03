import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const previousActiveRef = useRef(null);

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('keydown', onKey); };
  }, []);

  useEffect(() => {
    // body scroll lock
    document.body.style.overflow = open ? 'hidden' : '';

    if (open) {
      // save previously focused element
      previousActiveRef.current = document.activeElement;

      // focus first focusable element inside overlay
      const root = overlayRef.current;
      if (root) {
        const focusable = root.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        if (first && typeof first.focus === 'function') first.focus();
      }

      // trap Tab inside the overlay
      function handleTab(e) {
        if (e.key !== 'Tab') return;
        const rootEl = overlayRef.current;
        if (!rootEl) return;
        const focusables = Array.from(rootEl.querySelectorAll('a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'))
          .filter(el => !el.hasAttribute('disabled'));
        if (focusables.length === 0) {
          e.preventDefault();
          return;
        }
        const firstEl = focusables[0];
        const lastEl = focusables[focusables.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }

      document.addEventListener('keydown', handleTab);

      return () => {
        document.removeEventListener('keydown', handleTab);
      };
    } else {
      // restore focus to previously focused element
      try { previousActiveRef.current?.focus && previousActiveRef.current.focus(); } catch (e) {}
    }
  }, [open]);

  return (
    <header className="fixed w-full z-20 bg-gradient-to-b from-ink/95 to-transparent py-6 transition">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="text-2xl font-cormorant">Anya <span className="italic text-goldLight">Furniture</span></a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex gap-10 text-sm text-sand">
            <li><a href="#collections" className="transition hover:text-goldLight">Collections</a></li>
            <li><a href="#catalog" className="transition hover:text-goldLight">Catalog</a></li>
            <li><a href="#why" className="transition hover:text-goldLight">Why Anya</a></li>
            <li><a href="#contact" className="transition hover:text-goldLight">Visit Us</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-full border border-gold px-5 py-2 text-sm font-medium uppercase tracking-[0.12em] text-goldLight transition hover:bg-gold hover:text-ink">Order Now</a>

          <button
            type="button"
            className="md:hidden p-2 rounded focus-visible:outline-2 focus-visible:outline-goldLight"
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        id="mobile-nav"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`md:hidden fixed top-0 left-0 right-0 z-30 bg-ink/95 backdrop-blur py-10 transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full invisible'}`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <a href="#top" className="text-xl font-cormorant">Anya <span className="italic text-goldLight">Furniture</span></a>
            <button type="button" className="p-2 rounded focus-visible:outline-2 focus-visible:outline-goldLight" onClick={() => setOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-6 text-lg">
              <li><a href="#collections" onClick={() => setOpen(false)}>Collections</a></li>
              <li><a href="#catalog" onClick={() => setOpen(false)}>Catalog</a></li>
              <li><a href="#why" onClick={() => setOpen(false)}>Why Anya</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Visit Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
