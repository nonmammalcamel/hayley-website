/* eslint-disable react/no-danger */
"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const lines = document.querySelectorAll('.sp-line') as NodeListOf<HTMLElement>;
    let lineIndex = 0;
    let charIndex = 0;
    const originalTexts: string[] = [];

    lines.forEach((line) => {
      originalTexts.push(line.textContent || '');
      line.textContent = '';
      line.style.opacity = '1';
    });

    function typeNext() {
      if (lineIndex >= lines.length) return;
      const currentLine = lines[lineIndex];
      const fullText = originalTexts[lineIndex];

      if (charIndex < fullText.length) {
        currentLine.textContent = fullText.substring(0, charIndex + 1);
        charIndex++;
        let delay = 17 + Math.random() * 23;
        if (fullText[charIndex - 1] === '.' || fullText[charIndex - 1] === '—') delay += 55;
        setTimeout(typeNext, delay);
      } else {
        lineIndex++;
        charIndex = 0;
        const pauseDelay = 100 + Math.random() * 135;
        setTimeout(typeNext, pauseDelay);
      }
    }

    setTimeout(typeNext, 800);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0a0a12;--bg2:#12121e;--bg-light:#f0eef5;--ink:#f0eef5;--ink-dark:#1a1a2e;
  --muted:#9a95b0;--border:#2a2640;--accent:#9b6dff;--accent2:#c77dff;
  --accent-glow:rgba(155,109,255,0.15);--violet:#7b2ff7;--rose:#e040a0;
  --sans:'Inter',sans-serif;--display:'Oswald',sans-serif;
}
html{scroll-behavior:smooth}
body{background:var(--bg)!important;color:var(--ink);font-family:var(--sans);font-size:1rem;line-height:1.7;overflow-x:hidden}

/* NAV */
nav{position:fixed;top:0;left:0;right:0;z-index:1000;padding:1.25rem 3rem;display:flex;align-items:center;justify-content:space-between;background:rgba(10,10,18,.85);backdrop-filter:blur(12px);border-bottom:1px solid rgba(42,38,64,.4)}
.nav-name{font-family:var(--display);font-size:1.1rem;font-weight:700;color:var(--ink);text-decoration:none;letter-spacing:.02em}
.nav-links{display:flex;gap:2.5rem}
.nav-links a{font-family:var(--sans);font-size:.88rem;font-weight:500;color:var(--muted);text-decoration:none;letter-spacing:.04em;transition:color .25s}
.nav-links a:hover,.nav-links a.active{color:var(--ink)}

/* HERO */
/* SCREENPLAY BG */
.screenplay-bg{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;opacity:.07;font-family:'Courier New',monospace;font-size:1.4rem;line-height:2.2;color:var(--ink);padding:8rem 6rem 3rem;white-space:pre-wrap}
.screenplay-bg .scene{text-transform:uppercase;font-weight:700;text-align:left;margin-bottom:0}
.screenplay-bg .action{text-align:left;max-width:100%;margin-bottom:0}
.screenplay-bg .character{text-transform:uppercase;text-align:left;margin-left:38%;font-weight:700;margin-bottom:0}
.screenplay-bg .dialogue{text-align:left;margin-left:22%;max-width:55%;margin-bottom:0}
.screenplay-bg .paren{text-align:left;margin-left:30%;font-style:italic;margin-bottom:0}
.screenplay-bg .sp-line{opacity:0}

.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;padding:2rem}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(123,47,247,.15) 0%,rgba(155,109,255,.05) 40%,transparent 70%);pointer-events:none}
.hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:200px;background:linear-gradient(transparent,var(--bg));pointer-events:none}
.hero-name{font-family:var(--display);font-size:clamp(3.5rem,10vw,8rem);font-weight:800;line-height:.9;letter-spacing:-.03em;color:var(--ink);position:relative;z-index:1}
.hero-name span{display:block}
.hero-name .last{background:linear-gradient(135deg,var(--accent),var(--accent2),var(--rose));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-role{font-family:var(--sans);font-size:1.15rem;font-weight:400;letter-spacing:.35em;text-transform:uppercase;color:var(--muted);margin-top:2rem;position:relative;z-index:1}
.hero-scroll{position:absolute;bottom:3rem;z-index:1;font-family:var(--sans);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--muted);display:flex;flex-direction:column;align-items:center;gap:.75rem}
.hero-scroll::after{content:'';width:1px;height:40px;background:linear-gradient(var(--muted),transparent)}

/* SECTIONS */
.section{padding:8rem 3rem}
.section-dark{background:var(--bg)}
.section-light{background:var(--bg2);color:var(--ink)}
.section-accent{background:var(--bg2)}
.section-header{margin-bottom:4rem}
.section-label{font-family:var(--sans);font-size:.82rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;color:var(--accent);margin-bottom:.75rem}
.section-title{font-family:var(--display);font-size:clamp(2.2rem,5vw,3.5rem);font-weight:700;line-height:1.1;letter-spacing:-.02em}
.section-light .section-title{color:var(--ink)}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:4rem;align-items:start}
.about-photo{aspect-ratio:3/4;background:var(--bg2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--sans);font-size:.85rem;color:var(--muted)}
.section-light .about-photo{background:var(--bg);border-color:var(--border);color:var(--muted)}
.about-text{font-size:1.05rem;line-height:1.9;color:var(--muted)}
.section-light .about-text{color:var(--muted)}
.about-text p+p{margin-top:1.25rem}

/* CREDITS */
.credits-table{width:100%;border-collapse:collapse}
.credits-table th{font-family:var(--sans);font-size:.78rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);text-align:left;padding:1rem 1.5rem;border-bottom:1px solid var(--border)}
.credits-table td{font-family:var(--sans);font-size:1rem;padding:1.1rem 1.5rem;border-bottom:1px solid rgba(42,38,64,.3);color:var(--ink);transition:background .2s}
.credits-table tr:hover td{background:rgba(155,109,255,.04)}
.credits-table .role-col{color:var(--muted);font-size:.92rem}
.credits-table .year-col{color:var(--muted);font-size:.9rem;width:80px}

/* REEL */
.reel-grid{display:grid;grid-template-columns:1fr 1fr;gap:2.5rem}
.reel-item{position:relative}
.reel-embed{aspect-ratio:16/9;background:var(--bg2);border:1px solid var(--border);overflow:hidden}
.reel-embed iframe{width:100%;height:100%;border:none}
.reel-info{margin-top:1rem}
.reel-title{font-family:var(--display);font-size:1.2rem;font-weight:700;color:var(--ink);margin-bottom:.25rem}
.reel-meta{font-family:var(--sans);font-size:.88rem;color:var(--muted)}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
.contact-info h3{font-family:var(--display);font-size:1.6rem;font-weight:700;margin-bottom:1.5rem;color:var(--ink)}
.contact-info p{font-size:1.05rem;color:var(--muted);line-height:1.9;margin-bottom:2rem}
.contact-links{display:flex;flex-direction:column;gap:.75rem}
.contact-links a{font-family:var(--sans);font-size:1rem;color:var(--accent);text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:.5rem}
.contact-links a:hover{color:var(--accent2)}
.contact-links a span{font-size:.85rem;color:var(--muted)}

.contact-form{display:flex;flex-direction:column;gap:1.25rem}
.form-field{display:flex;flex-direction:column;gap:.4rem}
.form-field label{font-family:var(--sans);font-size:.82rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
.form-field input,.form-field textarea{background:var(--bg2);border:1px solid var(--border);padding:1rem;font-family:var(--sans);font-size:1rem;color:var(--ink);outline:none;transition:border-color .25s}
.form-field input:focus,.form-field textarea:focus{border-color:var(--accent)}
.form-field textarea{min-height:150px;resize:vertical}
.form-submit{font-family:var(--sans);font-size:.9rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;padding:1rem 2.5rem;background:linear-gradient(135deg,var(--violet),var(--accent));color:white;border:none;cursor:pointer;transition:opacity .25s;align-self:flex-start}
.form-submit:hover{opacity:.85}

/* FOOTER */
footer{padding:3rem;text-align:center;border-top:1px solid var(--border)}
footer p{font-family:var(--sans);font-size:.82rem;color:var(--muted)}
footer span{color:var(--accent)}

/* RESPONSIVE */
@media(max-width:768px){
  nav{padding:1rem 1.5rem}
  .nav-links{gap:1.5rem}
  .section{padding:5rem 1.5rem}
  .about-grid,.contact-grid{grid-template-columns:1fr}
  .reel-grid{grid-template-columns:1fr}
  .about-photo{max-height:400px}
}
      `}} />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"/>

      {/* NAV */}
      <nav>
        <a href="#" className="nav-name">HAYLEY TRAFZER</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#reel">Reel</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="screenplay-bg" id="screenplay">
          <p className="scene sp-line">INT. EDITING SUITE — NIGHT</p>
          <p className="action sp-line">The room glows blue from a single monitor. BANKS sits hunched forward, headphones on, scrubbing through footage frame by frame.</p>
          <p className="character sp-line">BANKS</p>
          <p className="paren sp-line">(under her breath)</p>
          <p className="dialogue sp-line">There. Right there. That&apos;s the one.</p>
          <p className="action sp-line">She marks the frame. Leans back. The chair creaks in the silence. On screen, a woman turns toward camera — the beginning of a smile that never quite arrives.</p>
          <p className="scene sp-line">EXT. ROOFTOP — CONTINUOUS</p>
          <p className="action sp-line">City lights stretch to the horizon. REISS stands at the railing, wind pulling at her jacket.</p>
          <p className="character sp-line">REISS</p>
          <p className="dialogue sp-line">I keep thinking if I stand here long enough, the answer just... arrives.</p>
          <p className="character sp-line">LILITH (O.S.)</p>
          <p className="dialogue sp-line">And does it?</p>
          <p className="action sp-line">Reiss turns. Lilith stands in the doorway, silhouetted by the stairwell light. Neither moves.</p>
          <p className="character sp-line">REISS</p>
          <p className="dialogue sp-line">Not yet.</p>
          <p className="scene sp-line">INT. PROJECTION ROOM — LATER</p>
          <p className="action sp-line">A beam of light cuts through dust. The projector hums. On the wall, shadows become faces, become stories.</p>
          <p className="character sp-line">BANKS (V.O.)</p>
          <p className="dialogue sp-line">Every cut is a decision about what matters. What stays. What disappears.</p>
        </div>
        <h1 className="hero-name">
          <span>HAYLEY</span>
          <span className="last">TRAFZER</span>
        </h1>
        <p className="hero-role">Writer · Director · Filmmaker</p>
        <div className="hero-scroll">Scroll</div>
      </div>

      {/* ABOUT */}
      <div className="section section-light" id="about">
        <div className="section-header">
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </div>
        <div className="about-grid">
          <div className="about-photo">[ headshot ]</div>
          <div className="about-text">
            <p>Veridium cantare solum, per astra naviget lumenis. Hayley Trafzer est narratrix visionem — fabulas humanas in cinemato transformare, cum oculis apertis et corde vulnerabili. Ex urbe angelorum oriunda, inter lucem et umbram laborat.</p>
            <p>Praxis ejus combinat verismum emotionalem cum aesthetica audaci. Creditum opus includit narrativas brevis formae, musicalis visualia, et projecta documentaria quae explorant identitatum, connexionem, et momenta quieta inter chaos magnificum vitae quotidianae.</p>
            <p>Cum fundamento in scriptis et directione, approximatio ejus centrat collaborationem intimam, performantias crudas, et cinematographiam quae respirat. Quaerit historias quae sentiunt necessarias — tales quae remanent post creditus finalem.</p>
          </div>
        </div>
      </div>

      {/* CREDITS */}
      <div className="section section-dark" id="work">
        <div className="section-header">
          <p className="section-label">Filmography</p>
          <h2 className="section-title">Selected Credits</h2>
        </div>
        <table className="credits-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Role</th>
              <th>Type</th>
              <th className="year-col">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Lucem Aeterna</td><td className="role-col">Writer / Director</td><td className="role-col">Short Film</td><td className="year-col">2025</td></tr>
            <tr><td>Vibrantium Nocturne</td><td className="role-col">Director</td><td className="role-col">Music Video</td><td className="year-col">2024</td></tr>
            <tr><td>Tessera Mundi</td><td className="role-col">Writer / Director</td><td className="role-col">Short Film</td><td className="year-col">2024</td></tr>
            <tr><td>Cantus Silentii</td><td className="role-col">Writer</td><td className="role-col">Feature (Development)</td><td className="year-col">2024</td></tr>
            <tr><td>Fragmenta Vitalis</td><td className="role-col">Director</td><td className="role-col">Documentary Short</td><td className="year-col">2023</td></tr>
            <tr><td>Orbis Internus</td><td className="role-col">Writer / Director</td><td className="role-col">Short Film</td><td className="year-col">2023</td></tr>
            <tr><td>Speculum Animae</td><td className="role-col">Director</td><td className="role-col">Music Video</td><td className="year-col">2022</td></tr>
          </tbody>
        </table>
      </div>

      {/* REEL */}
      <div className="section section-accent" id="reel">
        <div className="section-header">
          <p className="section-label">Reel</p>
          <h2 className="section-title">Selected Work</h2>
        </div>
        <div className="reel-grid">
          <div className="reel-item">
            <div className="reel-embed">
              <iframe src="https://player.vimeo.com/video/0" title="Film 1" allow="autoplay; fullscreen" allowFullScreen />
            </div>
            <div className="reel-info">
              <div className="reel-title">Lucem Aeterna</div>
              <div className="reel-meta">Short Film · 2025 · 12 min</div>
            </div>
          </div>
          <div className="reel-item">
            <div className="reel-embed">
              <iframe src="https://player.vimeo.com/video/0" title="Film 2" allow="autoplay; fullscreen" allowFullScreen />
            </div>
            <div className="reel-info">
              <div className="reel-title">Vibrantium Nocturne</div>
              <div className="reel-meta">Music Video · 2024 · 4 min</div>
            </div>
          </div>
          <div className="reel-item">
            <div className="reel-embed">
              <iframe src="https://player.vimeo.com/video/0" title="Film 3" allow="autoplay; fullscreen" allowFullScreen />
            </div>
            <div className="reel-info">
              <div className="reel-title">Tessera Mundi</div>
              <div className="reel-meta">Short Film · 2024 · 18 min</div>
            </div>
          </div>
          <div className="reel-item">
            <div className="reel-embed">
              <iframe src="https://player.vimeo.com/video/0" title="Film 4" allow="autoplay; fullscreen" allowFullScreen />
            </div>
            <div className="reel-info">
              <div className="reel-title">Fragmenta Vitalis</div>
              <div className="reel-meta">Documentary Short · 2023 · 9 min</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="section section-light" id="contact">
        <div className="section-header">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let&apos;s Make Something</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Praesentia et collaboratio</h3>
            <p>Disponibilis pro projectis narrativis, musicalis visualibus, et collaborationibus creativis. Invitamus conversationem de proxima historia vestra.</p>
            <div className="contact-links">
              <a href="mailto:placeholder@email.com">placeholder@email.com</a>
              <a href="https://vimeo.com/placeholder" target="_blank" rel="noopener noreferrer">Vimeo <span>↗</span></a>
              <a href="https://instagram.com/placeholder" target="_blank" rel="noopener noreferrer">Instagram <span>↗</span></a>
              <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-field">
              <label>Name</label>
              <input type="text" placeholder="Nomen vestrum" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="Inscriptio electronica" />
            </div>
            <div className="form-field">
              <label>Message</label>
              <textarea placeholder="Narratio vestra hic incipiat..." />
            </div>
            <button className="form-submit" type="button">Mitte Nuntium</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 <span>Hayley Trafzer</span>. Omnia jura reservata.</p>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: `
        // Screenplay typing animation
        var lines = document.querySelectorAll('.sp-line');
        var lineIndex = 0;
        var charIndex = 0;
        var currentLine = null;
        var originalTexts = [];

        // Store original text and clear all lines
        lines.forEach(function(line) {
          originalTexts.push(line.textContent);
          line.textContent = '';
          line.style.opacity = '1';
        });

        function typeNext() {
          if (lineIndex >= lines.length) return;

          currentLine = lines[lineIndex];
          var fullText = originalTexts[lineIndex];

          if (charIndex < fullText.length) {
            currentLine.textContent = fullText.substring(0, charIndex + 1);
            charIndex++;
            var delay = 25 + Math.random() * 35;
            // Pause slightly longer after periods and line breaks
            if (fullText[charIndex - 1] === '.' || fullText[charIndex - 1] === '—') delay += 80;
            setTimeout(typeNext, delay);
          } else {
            // Line complete, move to next
            lineIndex++;
            charIndex = 0;
            var pauseDelay = 150 + Math.random() * 200;
            setTimeout(typeNext, pauseDelay);
          }
        }

        // Start after a short delay
        setTimeout(typeNext, 800);
      `}} />
    </>
  );
}