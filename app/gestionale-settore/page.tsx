import { CtaBlock, Hero, PageShell, SectionIntro } from "../components";

const modules = [
  ["Lead", "Raccolta e qualifica del contatto in ingresso."],
  ["Preventivi", "Stati, documenti e passaggi approvativi."],
  ["Lavorazioni", "Attività operative, responsabilità e scadenze."],
  ["Follow-up", "Promemoria, email, WhatsApp e riattivazioni."],
];

export default function VerticalCrmPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Gestionale verticale"
        title="Il primo prodotto di settore, pronto da personalizzare."
        text="Questa pagina replica la funzione della demo verticale: mostrare un CRM per una nicchia, con moduli chiari e attivazione commerciale."
        secondary="Torna al CRM"
        secondaryHref="/crm"
      />
      <section className="section cards-section">
        <SectionIntro eyebrow="Moduli" title="Dal lead alla consegna, senza fogli sparsi.">
          La nicchia è intenzionalmente neutra: carrozzerie, studi, imprese
          edili, cliniche o consulenze possono usare la stessa ossatura.
        </SectionIntro>
        <div className="card-grid">
          {modules.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBlock title="Vuoi scegliere la prima nicchia da trasformare in prodotto?" />
    </PageShell>
  );
}
