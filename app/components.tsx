import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiFacebook, SiInstagram, SiTelegram, SiWhatsapp, SiYoutube } from "react-icons/si";

import { brand, internalLinks, legalPages, llmFaqs, nav, partnerSignals, process, socialLinks, testimonials } from "./site-data";
import { HeroHills } from "./hero-hills";
import { HeroReveal, HeroRevealItem } from "./hero-motion";
import { HeaderChrome, Parallax, ScrollProgressBar } from "./immersive";
import { MobileMenu, MobileTabBar } from "./mobile-navigation";
import { RevealObserver } from "./reveal";

const socialIcons = {
  facebook: SiFacebook,
  instagram: SiInstagram,
  linkedin: FaLinkedinIn,
  telegram: SiTelegram,
  whatsapp: SiWhatsapp,
  youtube: SiYoutube,
};

export function ArrowIcon() {
  return (
    <span aria-hidden="true" className="arrow-icon">
      <span />
    </span>
  );
}

export function SiteHeader() {
  return (
    <HeaderChrome>
      {/* Icon + wordmark lockup. aria-label keeps the destination announced
          for screen readers; the image itself stays aria-hidden. */}
      <a className="brand-mark" href="/" aria-label={`${brand.name} home`}>
        <Image className="brand-logo" src="/evolvia-logo-text.png" width={174} height={44} alt="" aria-hidden="true" priority unoptimized />
      </a>
      <nav>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <MobileMenu />
      <a className="header-cta" href={`mailto:${brand.email}`}>
        Prenota una call
      </a>
    </HeaderChrome>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{brand.name}</strong>
        <p>{brand.tagline}</p>
        <p className="vat-line">{brand.vat}</p>
      </div>
      <div>
        <p className="footer-heading">Contatti</p>
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
      </div>
      <div>
        <p className="footer-heading">Risorse</p>
        <a href="/blog">Blog</a>
        <a href="/shop">Catalogo</a>
      </div>
      <div>
        <p className="footer-heading">Legale</p>
        {legalPages.slice(0, 4).map(([slug, title]) => (
          <a key={slug} href={`/legale/${slug}`}>
            {title}
          </a>
        ))}
      </div>
      <div>
        <p className="footer-heading">Social</p>
        <div className="social-links" aria-label="Collegamenti social">
          {socialLinks.map(([label, href, icon]) => {
            const Icon = socialIcons[icon as keyof typeof socialIcons];
            return (
            <a key={label} className={`social-${icon}`} href={href} aria-label={label}>
              <Icon aria-hidden="true" />
            </a>
            );
          })}
        </div>
      </div>
      <p className="copyright">{brand.legal}</p>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgressBar />
      <RevealObserver />
      <SiteHeader />
      <main>
        {children}
        <SiteWideLinks />
        <LLMFaqBlock />
      </main>
      <MobileTabBar />
      <SiteFooter />
    </>
  );
}

export function SiteWideLinks() {
  return (
    <section className="section internal-links-section" aria-label="Percorsi collegati" data-reveal="section">
      <SectionIntro eyebrow="Percorsi collegati" title="Muoviti dentro il sistema Evolv.IA.">
        Ogni pagina rimanda alle aree vicine: software, lead generation, CRM ed ecosistema restano collegati come un&apos;unica architettura.
      </SectionIntro>
      <div className="internal-link-grid">
        {internalLinks.map(([title, href, text]) => (
          <a href={href} key={href}>
            <span>{title}</span>
            <p>{text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export function LLMFaqBlock() {
  return (
    <section className="section llm-faq-section" aria-label="FAQ per AI e motori di risposta">
      <SectionIntro eyebrow="FAQ AI-ready" title="Risposte dirette alle domande che i clienti fanno all'AI.">
        Domande formulate in modo naturale, con risposte chiare e contestuali: utili per persone, motori di ricerca e assistenti AI.
      </SectionIntro>
      <div className="faq-list compact-faq">
        {llmFaqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function PartnerProofBlock() {
  return (
    <section className="section partner-proof-section" data-reveal="section">
      <SectionIntro eyebrow="Partner e fiducia" title="Integrazioni credibili, risultati leggibili.">
        Evolv.IA lavora su strumenti che un&apos;azienda riconosce già, collegandoli in un sistema più ordinato.
      </SectionIntro>
      <div className="partner-grid" aria-label="Partner e integrazioni operative">
        {partnerSignals.map(([label, text]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{text}</strong>
          </article>
        ))}
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <figure key={item.name}>
            <blockquote>{item.quote}</blockquote>
            <figcaption>{item.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Hero({
  eyebrow,
  title,
  titleLines,
  text,
  flowSteps,
  primary = "Prenota una call",
  secondary,
  secondaryHref = "/ecosistema",
  centered = false,
  badges,
}: {
  eyebrow: string;
  title: string;
  titleLines?: string[];
  text: string;
  flowSteps?: string[][];
  primary?: string;
  secondary?: string;
  secondaryHref?: string;
  centered?: boolean;
  badges?: string[];
}) {
  const content = (
    <HeroReveal className="hero-content">
      <HeroRevealItem>
        <p className="eyebrow">{eyebrow}</p>
      </HeroRevealItem>
      <HeroRevealItem>
        <h1 className={titleLines ? "hero-title-lines" : undefined}>
          {titleLines
            ? titleLines.map((line) => <span key={line}>{line}</span>)
            : title}
        </h1>
      </HeroRevealItem>
      <HeroRevealItem>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${brand.email}`}>
            {primary} <ArrowIcon />
          </a>
          {secondary ? (
            <a className="button secondary" href={secondaryHref}>
              {secondary}
            </a>
          ) : null}
        </div>
      </HeroRevealItem>
      <HeroRevealItem>
        <p className="hero-copy">{text}</p>
      </HeroRevealItem>
      {badges && badges.length > 0 ? (
        <HeroRevealItem>
          <div className="hero-badges" aria-label="Punti essenziali Evolv.IA">
            {badges.map((badge) => (
              <span className="hero-badge" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </HeroRevealItem>
      ) : null}
      {centered ? (
        <HeroRevealItem>
          <div className="mobile-essentials" aria-label="Punti essenziali Evolv.IA">
            <span>Sistema AI + CRM</span>
            <span>Lead più chiari</span>
            <span>Follow-up ordinati</span>
          </div>
        </HeroRevealItem>
      ) : null}
      {flowSteps ? (
        <HeroRevealItem>
          <div className="hero-flow" aria-label="Sistema commerciale Evolv.IA">
            <div className="hero-flow-line" aria-hidden="true" />
            {flowSteps.map(([label, value]) => (
              <div className="hero-flow-step" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </HeroRevealItem>
      ) : null}
      {centered ? (
        <HeroRevealItem>
          <span className="scroll-cue" aria-hidden="true">
            <span />
            scorri
          </span>
        </HeroRevealItem>
      ) : null}
    </HeroReveal>
  );

  return (
    <section className={`hero compact-hero${centered ? " hero-centered" : ""}`}>
      {centered ? (
        <div className="hero-media" aria-hidden="true">
          <HeroHills />
          <div className="hero-media-scrim" />
        </div>
      ) : null}
      {!centered ? (
        <div className="hero-grid" aria-hidden="true">
          <span className="axis axis-one" />
          <span className="node node-a" />
          <span className="growth-curve curve-a" />
        </div>
      ) : null}
      {centered ? <Parallax className="hero-parallax">{content}</Parallax> : content}
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

// One generated dither-art image per flow step (Higgsfield, z_image model):
// ordered-dithering / halftone-grain illustrations, all sharing the same
// near-black + aqua two-tone palette and technical/abstract language, each
// depicting that step's own idea (signal acquisition, an AI node network,
// a circuit-board pipeline, a repeating follow-up loop) so the four read as
// one coherent set rather than a generic stock-photo grid.
const FLOW_ART = [
  { src: "/flow-acquisizione.webp", alt: "Linee di segnale che convergono verso un punto: acquisizione di lead da più canali." },
  { src: "/flow-qualifica.webp", alt: "Rete di nodi collegati che converge al centro: qualifica dei contatti guidata dall'AI." },
  { src: "/flow-crm.webp", alt: "Circuito ordinato di percorsi e nodi collegati: pipeline CRM unica." },
  { src: "/flow-followup.webp", alt: "Freccia che descrive un anello continuo: follow-up automatico e ricorrente." },
];

export function FlowCards({ steps }: { steps: [string, string][] }) {
  return (
    <div className="flow-card-grid">
      {steps.map(([label, value], index) => {
        const art = FLOW_ART[index % FLOW_ART.length];
        return (
          <article className="flow-card" key={label} data-reveal="item">
            <div className="flow-card-art">
              <Image src={art.src} alt={art.alt} fill sizes="(max-width: 900px) 50vw, 25vw" unoptimized />
              <span className="flow-card-caption">{label}</span>
            </div>
            <div className="flow-card-panel">
              <span className="flow-card-num">{String(index + 1).padStart(2, "0")}</span>
              <p>{value}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ProcessBlock() {
  return (
    <section className="section process-section">
      <SectionIntro eyebrow="Metodo" title="Dal caos commerciale a un sistema misurabile.">
        Il percorso deve essere semplice da comprare e serio da eseguire:
        diagnosi, priorità, costruzione e ottimizzazione sui dati reali.
      </SectionIntro>
      <div className="process-track">
        {process.map(([num, title, text]) => (
          <article className="process-step" key={num} data-reveal="item">
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqBlock({ items }: { items: string[][] }) {
  return (
    <section className="section" data-reveal="section">
      <SectionIntro eyebrow="FAQ" title="Domande che un cliente si fa davvero.">
        Risposte asciutte, orientate alla fiducia, pensate per chiarire cosa fa
        Evolv.IA e quando ha senso iniziare.
      </SectionIntro>
      <div className="faq-list">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBlock({
  eyebrow = "Il prossimo passo",
  title = "Costruiamo una base commerciale credibile.",
  text = "Una call, zero impegno. Capiremo quali pagine tenere, quali prodotti mostrare e quali verticali rendere prioritari.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <div className="gradient-shell" data-reveal="section">
      <section className="contact-section">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <a className="button primary large" href={`mailto:${brand.email}`}>
          Scrivi a {brand.name} <ArrowIcon />
        </a>
      </section>
    </div>
  );
}
