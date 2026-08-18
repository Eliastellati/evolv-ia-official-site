import { FiCompass, FiCpu, FiDatabase, FiTrendingUp } from "react-icons/fi";

import { CtaBlock, FaqBlock, FlowCards, Hero, PageShell, SectionIntro } from "./components";
import {
  Counter,
  MagicCard,
  Marquee,
  ScrollTextReveal,
  StickyProcess,
} from "./immersive";
import { METHOD_ASCII } from "./method-ascii";
import {
  faqs,
  process,
  products,
  services,
  testimonials,
  verticals,
} from "./site-data";

const bentoCards = [
  ["Sito + funnel", "Pagine pensate per generare conversazioni reali, collegate al CRM dal primo giorno."],
  ["Dashboard", "Priorità, lead e follow-up sempre visibili in un'unica regia."],
];

const marqueeItems = [
  "HubSpot",
  "Pipedrive",
  "Make",
  "Zapier",
  "Google Ads",
  "Meta Ads",
  "LinkedIn",
  "WhatsApp",
  "Webhook",
  "Dashboard operative",
  "CRM verticali",
];

const flowSteps: [string, string][] = [
  ["Acquisizione", "Lead da canali chiari"],
  ["Qualifica AI", "Priorità prima della call"],
  ["CRM", "Pipeline unica"],
  ["Follow-up", "Azioni automatiche"],
];

const team = [
  ["Founder", "Strategia e acquisizione", FiCompass],
  ["Product lead", "Software e automazioni", FiCpu],
  ["Growth lead", "Campagne, contenuti e conversione", FiTrendingUp],
  ["Ops lead", "CRM, dati e processi", FiDatabase],
] as const;

export default function Home() {
  return (
    <PageShell>
      <Hero
        eyebrow="AI · Growth · CRM operativo"
        title="Non insegui i lead. Li governi."
        titleLines={["Non insegui i lead.", "Li governi."]}
        text="Evolv.IA progetta sistemi commerciali dove sito, campagne, AI e CRM lavorano come un'unica macchina: acquisizione, qualifica, follow-up e decisioni diventano leggibili."
        badges={["Sistema AI + CRM", "Lead più chiari", "Follow-up ordinati"]}
        secondary="Esplora il sistema"
        secondaryHref="/ecosistema"
        centered
      />

      <Marquee items={marqueeItems} />

      {/* SISTEMA — bento grid with spotlight cards */}
      <section className="section" aria-label="Il sistema Evolv.IA">
        <SectionIntro eyebrow="Architettura" title="Una sola macchina commerciale.">
          Lead generation, landing, CRM verticali e automazioni non sono moduli
          casuali: diventano componenti di un sistema che una nuova azienda può
          vendere, scalare e spiegare.
        </SectionIntro>
        <div className="bento">
          <MagicCard className="bento-wide" glow="blue">
            <span className="bento-eyebrow">Un solo flusso</span>
            <p className="bento-big">dal primo contatto alla chiusura.</p>
            <div className="bento-flow">
              <i>Acquisizione</i>
              <em>→</em>
              <i>Qualifica AI</i>
              <em>→</em>
              <i>CRM</i>
              <em>→</em>
              <i>Follow-up</i>
            </div>
          </MagicCard>

          <MagicCard className="bento-tall" glow="mineral">
            <span className="bento-eyebrow">AI + CRM</span>
            <h3>Intelligenza che diventa azione.</h3>
            <p>
              L&apos;AI non scrive soltanto: qualifica i contatti, assegna
              priorità e attiva follow-up misurabili. Ogni segnale trova il suo
              posto nella pipeline.
            </p>
          </MagicCard>

          {bentoCards.map(([title, text], i) => (
            <MagicCard className="bento-third" glow={i === 0 ? "violet" : "blue"} key={title}>
              <span className="bento-eyebrow">{title}</span>
              <p>{text}</p>
            </MagicCard>
          ))}

          <MagicCard className="bento-half" glow="mineral">
            <span className="bento-eyebrow">Automazioni</span>
            <h3>Meno lavoro ripetitivo, più controllo.</h3>
            <p>Regole chiare che riducono ritardi e dimenticanze nel commerciale.</p>
          </MagicCard>

          <MagicCard className="bento-half" glow="blue" href="/software">
            <span className="bento-eyebrow">Catalogo</span>
            <h3>Esplora i software proprietari ↗</h3>
            <p>Lead Engine, Social Pulse, Vertical CRM, Voice Agent e altri moduli pronti da presentare.</p>
          </MagicCard>
        </div>
      </section>

      {/* STATEMENT — scroll text reveal */}
      <div className="scroll-reveal-wrap">
        <ScrollTextReveal text="ogni segnale diventa priorità. ogni priorità diventa azione." />
      </div>

      {/* FLOW — scroll-scrubbed node sequence */}
      <section className="section" aria-label="Flusso del sistema commerciale">
        <SectionIntro eyebrow="Il flusso" title="Dal caos commerciale a un sistema misurabile.">
          Quattro momenti collegati: ogni contatto entra da un canale chiaro,
          viene qualificato, gestito nel CRM e riportato al momento giusto.
        </SectionIntro>
        <FlowCards steps={flowSteps} />
      </section>

      {/* DIREZIONE — principles */}
      <section className="section split soft-section">
        <SectionIntro eyebrow="Direzione" title="Non una vetrina. Una centrale di crescita.">
          Evolv.IA nasce per aziende che vogliono smettere di perdere contatti
          tra form, messaggi e fogli sparsi. Ogni pagina deve portare verso un
          sistema misurabile: lead qualificati, pipeline ordinata, azioni chiare.
        </SectionIntro>
        <div className="principles">
          {services.map((service, index) => (
            <article className="principle" key={service.title} data-reveal="item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SOFTWARE — spotlight product grid */}
      <section className="section cards-section airy-section" aria-label="Software Evolv.IA">
        <SectionIntro eyebrow="Software" title="Prodotti dentro una regia unica.">
          Software proprietari, CRM verticali e prodotti digitali: componenti di
          una stessa architettura, non strumenti scollegati.
        </SectionIntro>
        <div className="product-grid">
          {products.slice(0, 6).map((product) => (
            <MagicCard
              key={product.slug}
              glow="blue"
              href={product.href ?? `/prodotto/${product.slug}`}
              target={product.href ? "_blank" : undefined}
              rel={product.href ? "noopener noreferrer" : undefined}
            >
              <span className="bento-eyebrow">{product.category}</span>
              <h3>
                {product.name}
                {product.href ? " ↗" : ""}
              </h3>
              <p>{product.label}</p>
            </MagicCard>
          ))}
        </div>
      </section>

      {/* METODO — sticky-scroll narrative, the Creation of Adam (hands
          detail) as real ASCII-art behind the section instead of a framed
          image */}
      <section className="section process-section" aria-label="Metodo Evolv.IA">
        <pre className="method-ascii" aria-hidden="true">
          {METHOD_ASCII}
        </pre>
        <SectionIntro eyebrow="Metodo" title="Semplice da comprare, serio da eseguire.">
          Diagnosi, priorità, costruzione e ottimizzazione sui dati reali:
          quattro fasi che rendono credibile la promessa.
        </SectionIntro>
        <StickyProcess steps={process as [string, string, string][]} />
      </section>

      {/* PROVA — count-up metrics + testimonials */}
      <section className="section partner-proof-section" aria-label="Prova e fiducia" data-reveal="section">
        <SectionIntro eyebrow="Il sistema a colpo d'occhio" title="Numeri che raccontano un'architettura, non promesse.">
          Un sistema componibile e leggibile: pochi pezzi, responsabilità forti,
          risultati osservabili nel CRM.
        </SectionIntro>
        <div className="metric-grid">
          <div className="metric-card">
            <div className="metric-value">
              <Counter to={6} />
            </div>
            <p className="metric-label">software proprietari pronti da presentare</p>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              <Counter to={4} />
            </div>
            <p className="metric-label">fasi di metodo, dalla discovery al go-live</p>
          </div>
          <div className="metric-card">
            <div className="metric-value">
              <Counter to={3} />
            </div>
            <p className="metric-label">pilastri collegati: sito · lead · CRM</p>
          </div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <MagicCard key={item.name} glow="violet">
              <blockquote>{item.quote}</blockquote>
              <p className="testimonial-name">{item.name}</p>
            </MagicCard>
          ))}
        </div>
      </section>

      {/* VERTICALI — spotlight cards */}
      <section className="section cards-section soft-section" aria-label="Verticali Evolv.IA">
        <SectionIntro eyebrow="Verticali" title="Esperienza concreta, non AI generica.">
          Problemi riconoscibili, flussi commerciali reali, dati da osservare e
          output che un cliente capisce senza traduzione.
        </SectionIntro>
        <div className="card-grid">
          {verticals.map((vertical) => (
            <MagicCard key={vertical.slug} glow="mineral" href={`/verticali/${vertical.slug}`}>
              <span className="bento-eyebrow">{vertical.title}</span>
              <h3>{vertical.headline}</h3>
              <p>{vertical.text}</p>
            </MagicCard>
          ))}
        </div>
      </section>

      {/* METODO INTERNO — team */}
      <section className="section cards-section airy-section" aria-label="Team Evolv.IA">
        <SectionIntro eyebrow="Metodo interno" title="Pochi ruoli, responsabilità forti.">
          Una nuova azienda non deve sembrare grande per finta. Deve sembrare
          lucida: strategia, prodotto, growth e operations sono i quattro assi
          che rendono credibile la promessa.
        </SectionIntro>
        <div className="team-grid">
          {team.map(([role, focus, Icon]) => (
            <article className="team-card" key={role} data-reveal="item">
              <div aria-hidden="true">
                <Icon size={19} />
              </div>
              <h3>{role}</h3>
              <p>{focus}</p>
            </article>
          ))}
        </div>
      </section>

      <FaqBlock items={faqs} />
      <CtaBlock title="Pronto a far evolvere acquisizione, CRM e automazioni?" />
    </PageShell>
  );
}
