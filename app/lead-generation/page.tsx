import { CtaBlock, FaqBlock, Hero, PageShell, ProcessBlock, SectionIntro } from "../components";

const strategies = [
  ["Acquisizione multicanale", "Fonti organiche, outbound, paid e database pubblici trattati come canali da misurare, non come liste da spremere."],
  ["Qualifica con AI", "Scoring per intento, settore, urgenza e aderenza all'offerta prima che il lead arrivi al commerciale."],
  ["CRM e follow-up", "Ogni contatto entra in pipeline con priorità, note, automazioni e prossima azione chiara."],
  ["Contenuti e pagine dedicate", "Landing e risorse costruite per rispondere a obiezioni specifiche, non per fare volume generico."],
];

const leadFaq = [
  ["Che differenza c'è tra contatto e lead qualificato?", "Un contatto lascia un dato. Un lead qualificato mostra segnali concreti: bisogno, budget, tempistiche o fit con l'offerta."],
  ["Quali canali può usare la base?", "La struttura supporta outbound, Google, Meta, contenuti SEO, referral e campagne verticali."],
  ["Serve già un CRM?", "No. La base include una pagina CRM e può presentare un gestionale proprietario o integrarsi con strumenti esistenti."],
];

export default function LeadGenerationPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Lead Generation"
        title="Clienti potenziali, non contatti a caso."
        text="Una pagina servizio completa per spiegare acquisizione, qualifica AI, CRM e ottimizzazione senza copiare il linguaggio del benchmark."
        secondary="Vedi CRM"
        secondaryHref="/crm"
      />
      <section className="section cards-section">
        <SectionIntro eyebrow="Strategie" title="Un sistema, non una tattica isolata.">
          La pagina copre canali, qualifica, follow-up e misurazione: tutto ciò
          che serve per vendere il servizio a un nuovo mercato.
        </SectionIntro>
        <div className="card-grid">
          {strategies.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <ProcessBlock />
      <section className="section proof-section">
        <p className="eyebrow">Baseline commerciale</p>
        <h2>Prima si misura il flusso. Poi si promettono i numeri.</h2>
        <p>
          La pagina è pronta per ospitare casi reali appena disponibili. Nel
          frattempo mostra le tre metriche che contano davvero in acquisizione:
          volume, qualità e ritorno tracciabile.
        </p>
        <div className="proof-grid">
          <strong>Lead qualificati</strong>
          <strong>Clienti attivati</strong>
          <strong>ROI tracciato</strong>
        </div>
      </section>
      <FaqBlock items={leadFaq} />
      <CtaBlock title="Pronto a costruire una pagina lead generation credibile?" />
    </PageShell>
  );
}
