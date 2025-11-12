import { useState, useEffect } from "react";

export default function KendallvilleMainStreet() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];
    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
      }
    };
    links.forEach(a => a.addEventListener('click', onClick));
    return () => links.forEach(a => a.removeEventListener('click', onClick));
  }, []);

  const events = [
    { date: 'Dec 7', title: 'Holiday Window Walk', meta: 'Downtown • 6–9 PM' },
    { date: 'Jan 18', title: 'Coffee & Commerce – Live', meta: '234 Main • 8 AM' },
    { date: 'Feb 14', title: 'Candlelight on Main', meta: 'Main Street • 7 PM' },
  ];

  return (
    <div className="site">
      {/* HERE IS THE FIX:
        Use `dangerouslySetInnerHTML` to make React render the CSS string.
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root { color-scheme: light; }
        * { box-sizing: border-box; }
        body, html, #root { height: 100%; }
        .site { min-height: 100vh; background:#f6f4ef; color:#0f1e2e; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
        .serif { font-family: "Playfair Display", Georgia, serif; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 16px; }
        .header { position: fixed; inset: 0 0 auto 0; height: 56px; backdrop-filter: blur(6px); background: rgba(255,255,255,.9); border-bottom: 1px solid #e6e0d6; z-index: 50; }
        .navRow { height: 56px; display:flex; align-items:center; justify-content:space-between; }
        .brand { display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit; }
        .monogram { width:32px; height:32px; display:grid; place-items:center; border-radius:999px; border:1px solid #B48A2C; color:#B48A2C; font-weight:600; }
        .brandTitle { line-height:1; }
        .brandMain { font-size:18px; letter-spacing:.02em; }
        .brandSub { font-size:10px; text-transform:uppercase; letter-spacing:.2em; color:#5f6b76; }
        .nav { display:none; gap:24px; align-items:center; }
        .nav a { font-size:12px; text-transform:uppercase; letter-spacing:.2em; color:#0f1e2e; text-decoration:none; opacity:.9; }
        .cta { border:1px solid #B48A2C; border-radius:999px; padding:8px 16px; }
        .menuBtn { border:0; background:transparent; font-size:14px; }
        .mobile { display:none; border-top:1px solid #e6e0d6; background:#fff; }
        .mobile a { display:block; padding:10px 16px; font-size:14px; text-decoration:none; color:#0f1e2e; }
        @media (min-width: 768px) { .nav { display:flex; } .menuBtn { display:none; } }
        .hero { position:relative; height:70vh; overflow:hidden; }
        .hero img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .hero .veil { position:absolute; inset:0; background:linear-gradient(to top, rgba(10,15,20,.65), rgba(10,15,20,.35), transparent); }
        .hero .inner { position:relative; height:100%; display:flex; align-items:flex-end; }
        .tag { font-size:12px; text-transform:uppercase; letter-spacing:.25em; color:#ead7a0; }
        .h1 { margin:.25rem 0 0; font-size:38px; color:#fff; }
        @media (min-width:640px){ .h1 { font-size:48px; } }
        .heroSub { margin-top:.75rem; color:rgba(255,255,255,.9); max-width:640px; }
        .btnRow { margin-top:1rem; display:flex; gap:10px; flex-wrap:wrap; }
        .btn { border-radius:999px; padding:10px 18px; font-size:12px; text-transform:uppercase; letter-spacing:.2em; text-decoration:none; display:inline-block; }
        .btnOutline { border:1px solid #d8b45a; color:#fff; }
        .btnSolid { background:#fff; color:#0f1e2e; }
        .section { padding:56px 0; }
        .center { text-align:center; max-width:720px; margin:0 auto; }
        .eyebrow { font-size:12px; text-transform:uppercase; letter-spacing:.25em; color:#5f6b76; }
        .h2 { margin-top:.5rem; font-size:30px; }
        .lead { margin-top:.75rem; color:#2f3a46; }
        .grid { display:grid; gap:16px; }
        @media (min-width:768px){ .grid.cols3 { grid-template-columns: repeat(3, 1fr); } }
        .card { display:flex; align-items:center; justify-content:space-between; padding:20px; border:1px solid #e6e0d6; background:#fff; border-radius:14px; box-shadow:0 8px 24px rgba(15,30,46,.06); }
        .cardTitle { font-size:18px; }
        .cardMeta { font-size:14px; color:#5f6b76; }
        .label { font-size:10px; text-transform:uppercase; letter-spacing:.2em; color:#5f6b76; }
        .snapshot { display:grid; gap:20px; }
        @media (min-width:768px){ .snapshot { grid-template-columns: repeat(3, 1fr); } }
        .kpi { border:1px solid #e6e0d6; background:#fff; border-radius:14px; padding:24px; box-shadow:0 8px 24px rgba(15,30,46,.06); }
        .kpiValue { margin-top:4px; font-size:30px; }
        .bar { height:64px; background:linear-gradient(90deg,#f0dba8,#d7b25b); margin-top:12px; }
        .dots { display:grid; grid-template-columns: repeat(6, 1fr); gap:4px; margin-top:12px; }
        .dot { height:12px; background:#e6e0d6; }
        .dot.active { background:#0f1e2e; }
        .bars { display:flex; align-items:flex-end; gap:6px; margin-top:12px; }
        .barCol { width:22px; background:#B48A2C; }
        .visit { border-top:1px solid #e6e0d6; background:rgba(255,255,255,.75); padding:40px 0; text-align:center; }
        .footer { border-top:1px solid #e6e0d6; padding:20px 0; }
      `}} />

      <header className="header">
        <div className="container navRow">
          <a href="#" className="brand" aria-label="Home">
            <span className="monogram serif">K</span>
            <span className="brandTitle">
              <span className="brandMain serif">Kendallville</span>
              <span className="brandSub">Main Street</span>
            </span>
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#events">Events</a>
            <a href="#host">Host</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#visit" className="cta">Visit</a>
          </nav>
          <button className="menuBtn" onClick={() => setMenuOpen(v => !v)}>Menu</button>
        </div>
        <div className="mobile" style={{ display: menuOpen ? 'block' : 'none' }}>
          <div className="container" style={{ padding: '8px 16px' }}>
            <a href="#events">Events</a>
            <a href="#host">Host</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#visit">Visit</a>
          </div>
        </div>
      </header>

      <main style={{ paddingTop: 56 }}>
        <section className="hero">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop" alt="Historic main street" />
          <div className="veil" />
          <div className="container inner" style={{ paddingBottom: 64 }}>
            <div style={{ maxWidth: 680 }}>
              <p className="tag">Est. 1880s</p>
              <h1 className="h1 serif">Kendallville Main Street</h1>
              <p className="heroSub">Boutique-community experiences in a walkable historic district. Markets, workspace, and culture that feel handcrafted.</p>
              <div className="btnRow">
                <a href="#events" className="btn btnOutline">See Events</a>
                <a href="#host" className="btn btnSolid">Host an Event</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container center">
            <p className="eyebrow">Our Promise</p>
            <h2 className="h2 serif">Stewardship of place — investment in people</h2>
            <p className="lead">We preserve the character of Main Street while building modern experiences: seasonal markets, creative workspace, and cultural programming.</p>
          </div>
        </section>

        <section id="events" className="section">
          <div className="container" style={{ marginBottom: 20, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h3 className="serif" style={{ fontSize: 24 }}>Upcoming Events</h3>
            <a href="#" style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '.2em', textDecoration: 'underline', textUnderlineOffset: 8 }}>Full Calendar</a>
          </div>
          <div className="container grid cols3">
            {events.map(e => (
              <div key={e.title} className="card">
                <div>
                  <div className="cardTitle serif">{e.title}</div>
                  <div className="cardMeta">{e.meta}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="label">Date</div>
                  <div className="serif" style={{ fontSize: 18 }}>{e.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="host" className="section" style={{ borderTop: '1px solid #e6e0d6', borderBottom: '1px solid #e6e0d6', background: 'rgba(255,255,255,.75)' }}>
          <div className="container" style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">234 Main</p>
              <h3 className="serif" style={{ fontSize: 24 }}>Host an Event</h3>
              <p className="lead">Markets, performances, civic roundtables. Tell us your concept and preferred dates; we’ll follow up with next steps.</p>
              <a href="#" className="btn btnSolid" style={{ marginTop: 12, display: 'inline-block' }}>Open Form</a>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, border: '1px solid #e6e0d6' }}>
              <img src="https://images.unsplash.com/photo-1518593922543-8b1ef1142e5e?q=80&w=1400&auto=format&fit=crop" alt="Workspace and studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section id="dashboard" className="section">
          <div className="container" style={{ marginBottom: 20, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h3 className="serif" style={{ fontSize: 24 }}>Downtown Snapshot</h3>
            <span className="label">Boards & Directors</span>
          </div>
          <div className="container snapshot">
            <div className="kpi">
              <div className="label">Monthly Foot Traffic</div>
              <div className="kpiValue serif">12,480</div>
              <div className="bar" />
            </div>
            <div className="kpi">
              <div className="label">Volunteer Hours</div>
              <div className="kpiValue serif">642</div>
              <div className="dots">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className={i < 18 ? 'dot active' : 'dot'} />
                ))}
              </div>
            </div>
            <div className="kpi">
              <div className="label">Events YTD</div>
              <div className="kpiValue serif">27</div>
              <div className="bars">
                {[8, 5, 6, 7, 10, 12].map((v, i) => (
                  <div key={i} className="barCol" style={{ height: v * 6 }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="visit">
          <div className="container">
            <p className="eyebrow">Visit</p>
            <h3 className="serif" style={{ fontSize: 24, marginTop: 4 }}>200 S Main St, Kendallville, IN 46755</h3>
            <p className="lead" style={{ marginTop: 8 }}>Free street parking. 30 minutes from Fort Wayne via I‑69.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="monogram serif">K</span>
            <span className="serif">Kendallville Main Street</span>
          </div>
          <div className="label">© {new Date().getFullYear()} Kendallville Main Street</div>
        </div>
      </footer>
    </div>
  );
}
