import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Catalog from './components/Catalog';
import WhySection from './components/WhySection';
import ContactSection from './components/ContactSection';
import DetailModal from './components/DetailModal';
import Footer from './components/Footer';

export default function App() {
  const [detail, setDetail] = useState(null);
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <Header />
      <main id="top">
        <Hero />
        <Collections />
        <Catalog onOpenDetail={setDetail} filter={filter} setFilter={setFilter} />
        <WhySection />
        <ContactSection />
      </main>

      {detail && <DetailModal product={detail} onClose={() => setDetail(null)} />}

      <Footer onFilterChange={setFilter} />
    </div>
  );
}
