"use client";

import NavClient from "./components/NavClient";
import HeroClient from "./components/HeroClient";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-ink">
      <NavClient />

      {/* New section order: Hero -> Menu Teaser -> Chef Story -> Gallery -> Reservations -> Contact */}
      <HeroClient />

      <section id="menu" className="py-16">
        <div className="section-container">
          <p className="section-subtitle">Seasonal Plates</p>
          <h2 className="section-title">A concise menu to discover</h2>

          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
            <article className="rounded-md bg-brand-surface/30 p-6">
              <h3 className="font-semibold">Small Plates</h3>
              <p className="mt-3 text-sm text-brand-muted">
                Curated bites designed for sharing.
              </p>
            </article>
            <article className="rounded-md bg-brand-surface/30 p-6">
              <h3 className="font-semibold">Chef's Mains</h3>
              <p className="mt-3 text-sm text-brand-muted">
                Bold flavors, seasonal sourcing.
              </p>
            </article>
            <article className="rounded-md bg-brand-surface/30 p-6">
              <h3 className="font-semibold">Desserts</h3>
              <p className="mt-3 text-sm text-brand-muted">
                A refined finish to your meal.
              </p>
            </article>
          </div>

          <div className="mt-8">
            <a href="#reservations" className="btn-primary">
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">From Harbor to Oak</h2>
            <p className="mt-4 text-brand-muted">
              An invitation to evening rituals — slow courses, attentive
              service, and an intentional atmosphere. This template focuses on
              cinematic storytelling: wide shots, negative space, and considered
              typography.
            </p>
            <p className="mt-4 text-brand-muted">
              Replace this text with brand copy. Avoid using original template
              imagery; prefer wide ambience or editorial environment
              photography.
            </p>
            <div className="mt-6">
              <a href="#contact" className="btn-ghost">
                Contact
              </a>
            </div>
          </div>

          <div className="rounded-md overflow-hidden bg-gradient-to-tr from-brand-surface/60 to-brand-surface/40 h-64 flex items-center justify-center">
            {/* Restaurant ambience hero image from Unsplash */}
            <img
              src="https://images.unsplash.com/photo-1723612442877-7036e153e12b?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Restaurant ambience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16">
        <div className="section-container">
          <p className="section-subtitle">Gallery</p>
          <h2 className="section-title">Atmospheres & Moments</h2>
          <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-4">
            {/* Unsplash gallery images — replace with client assets as needed */}
            <div className="h-36 bg-gradient-to-tr from-brand-surface to-brand-warm rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Elegant restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-gradient-to-tr from-brand-surface to-brand-warm rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1763867641064-ede1720da844?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Plated fine dining dish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-gradient-to-tr from-brand-surface to-brand-warm rounded-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional chef in kitchen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-36 bg-gradient-to-tr from-brand-surface to-brand-warm rounded-md overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1767883340125-faa5b9f8b5c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Restaurant dining ambience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reservations" className="py-16">
        <div className="section-container">
          <p className="section-subtitle">Reservations</p>
          <h2 className="section-title">Book your evening</h2>
          <p className="mt-4 text-brand-muted">
            Make a reservation using your existing booking service or link to a
            phone/email CTA.
          </p>
          <div className="mt-6">
            <a className="btn-primary" href="tel:+123456789">
              Call to Reserve
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12">
        <div className="section-container text-center text-sm text-brand-muted">
          <p>© {new Date().getFullYear()} Harbor & Oak — Template</p>
          <p className="mt-2">
            Replace gallery and hero images with original assets (wide ambience,
            editorial photography).
          </p>
        </div>
      </footer>
    </main>
  );
}
