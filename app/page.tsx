import { siteContent } from './content';

type Service = { name: string; price: string; description: string; features: readonly string[] };
type Founder = { name: string; role: string; bio: string };
type Testimonial = { quote: string; name: string; role: string };
type FaqItem = { q: string; a: string };

export default function HomePage() {
  const { agency, hero, services, about, testimonials, faq, contact, founders } = siteContent;
  return (
    <main>
      <a href="#content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand">
            <span className="brand-mark">N</span>
            <span className="brand-text">{agency.name}</span>
          </a>
          <nav>
            <ul className="nav-list">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact" className="btn btn-primary nav-cta">Get in touch</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div id="content">
        <section id="top" className="section hero">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{hero.eyebrow}</p>
              <h1>{hero.headline}</h1>
              <p className="hero-text">{hero.subcopy}</p>
              <div className="hero-actions">
                <a href={hero.primaryCta.href} className="btn btn-primary">{hero.primaryCta.label}</a>
                <a href={hero.secondaryCta.href} className="btn btn-secondary">{hero.secondaryCta.label}</a>
              </div>
            </div>
            <aside className="hero-panel">
              <h2>{agency.name}</h2>
              <p className="muted">{agency.tagline}</p>
              <ul className="hero-list">
                <li><strong>Location:</strong> {agency.location}</li>
                <li><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
              </ul>
            </aside>
          </div>
        </section>
        <section id="services" className="section">
          <div className="container">
            <p className="eyebrow">What we offer</p>
            <h2 className="section-title">Services</h2>
            <div className="card-grid">
              {(services as readonly Service[]).map((s: Service) => (
                <article className="card" key={s.name}>
                  <h3>{s.name}</h3>
                  <p className="price">{s.price}</p>
                  <p className="muted">{s.description}</p>
                  <ul className="feature-list">
                    {s.features.map((f: string) => <li key={f}>{f}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="section section-alt">
          <div className="container two-col">
            <div>
              <p className="eyebrow">About us</p>
              <h2 className="section-title">{about.title}</h2>
              {(about.body as readonly string[]).map((p: string) => <p className="muted" key={p}>{p}</p>)}
            </div>
            <aside className="info-panel">
              <h3>Working hours</h3>
              <ul>{(contact.hours as readonly string[]).map((h: string) => <li key={h}>{h}</li>)}</ul>
              <h3>Office</h3>
              <p className="muted">{contact.address}</p>
            </aside>
          </div>
        </section>
        <section id="testimonials" className="section">
          <div className="container">
            <p className="eyebrow">Social proof</p>
            <h2 className="section-title">What clients say</h2>
            <div className="card-grid">
              {(testimonials as readonly Testimonial[]).map((t: Testimonial) => (
                <article className="card quote-card" key={t.name}>
                  <p className="quote">{t.quote}</p>
                  <p className="quote-meta">{t.name} - {t.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="section section-alt">
          <div className="container">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Frequently asked questions</h2>
            <div className="faq-list">
              {(faq as readonly FaqItem[]).map((item: FaqItem) => (
                <details className="faq-item" key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title">Talk to us</h2>
              <ul className="contact-list">
                <li><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
                <li><strong>Address:</strong> {contact.address}</li>
              </ul>
            </div>
            <form className="contact-form" action={contact.formspreeEndpoint} method="POST">
              <label>Name<input type="text" name="name" required placeholder="Your name" /></label>
              <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
              <label>Business<input type="text" name="business" placeholder="Your business" /></label>
              <label>Message<textarea name="message" rows={5} required placeholder="Tell us about your project" /></label>
              <button type="submit" className="btn btn-primary">Send message</button>
            </form>
          </div>
        </section>
        <section id="founders" className="section section-alt">
          <div className="container">
            <p className="eyebrow">The team</p>
            <h2 className="section-title">Founders</h2>
            <div className="card-grid">
              {(founders as readonly Founder[]).map((f: Founder) => (
                <article className="card founder-card" key={f.name}>
                  <h3>{f.name}</h3>
                  <p className="muted">{f.role}</p>
                  <p>{f.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">{agency.name}</p>
            <p className="muted">{agency.description}</p>
          </div>
          <div>
            <p>{contact.address}</p>
            <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
