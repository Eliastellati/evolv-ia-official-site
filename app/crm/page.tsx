import { CtaBlock, FaqBlock, Hero, PageShell, SectionIntro } from "../components";

const crmItems = [
  ["Gestionale su misura", "Stati, documenti, automazioni e dashboard modellati sul flusso reale dell'azienda."],
  ["Prodotto verticale", "Una versione pronta per una nicchia specifica, da vendere e attivare più velocemente."],
  ["Automazioni", "Email, WhatsApp, promemoria e passaggi di stato senza rincorrere manualmente ogni contatto."],
  ["Integrazioni", "Webhook e collegamenti con strumenti già presenti, così i dati non vengono reinseriti due volte."],
];

export default function CrmPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="CRM e gestionali"
        title="Un gestionale che segue il lavoro, non il contrario."
        text="Pagina pronta per vendere CRM su misura, prodotti verticali e automazioni: dal lead alla consegna, tutto in pipeline."
        secondary="Gestionale di settore"
        secondaryHref="/gestionale-settore"
      />
      <section className="section cards-section">
        <SectionIntro eyebrow="Cosa include" title="Dal lead alla consegna, un posto solo.">
          La base copre il doppio posizionamento: progetto custom per una singola
          azienda o prodotto verticale per una nicchia.
        </SectionIntro>
        <div className="card-grid">
          {crmItems.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section review-section">
        <div className="review-mark" aria-hidden="true">V</div>
        <div>
          <p className="eyebrow">Prodotto verticale</p>
          <h2>Una pagina demo per il gestionale della prima nicchia.</h2>
          <p>Serve a mostrare che l&apos;azienda può trasformare un servizio in prodotto ripetibile.</p>
          <a className="button secondary" href="/gestionale-settore">Apri la base verticale</a>
        </div>
      </section>
      <FaqBlock items={[["Costruite custom o prodotti pronti?", "La base prevede entrambe le strade: gestionale su misura o prodotto verticale per una nicchia."], ["Si integra con strumenti esistenti?", "Sì, il copy e la struttura prevedono webhook, import dati e collegamenti con software già usati."]]} />
      <CtaBlock title="Vuoi progettare il CRM del tuo settore?" />
    </PageShell>
  );
}
