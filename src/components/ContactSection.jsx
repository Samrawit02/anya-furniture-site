import React from 'react';

export default function ContactSection() {
  const defaultMessage = encodeURIComponent("Hi Anya Furniture, I'd like to inquire about your furniture collections.");
  
  return (
    <section id="contact" className="bg-ink py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-line bg-[rgba(255,255,255,0.03)] p-10 text-sand">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-goldLight">Visit us</span>
              <h2 className="mt-4 text-4xl font-cormorant text-ivory">Ready to bring a collection home?</h2>
              <p className="mt-4 text-sand/90 leading-relaxed">Visit our showroom in Addis Ababa or message us directly to reserve a piece, check availability, or request a consultation.</p>
            </div>
            <div className="space-y-4 text-sand/90">
              <p><strong className="text-sand">Address</strong><br/>Bole Road, Addis Ababa</p>
              <p><strong className="text-sand">Phone</strong><br/><a href="tel:+251911000000" className="text-goldLight">+251 91 100 0000</a></p>
              <p><strong className="text-sand">WhatsApp</strong><br/><a href={`https://wa.me/251911000000?text=${defaultMessage}`} target="_blank" rel="noopener noreferrer" className="text-goldLight">Chat on WhatsApp</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
