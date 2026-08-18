import { CtaBlock, Hero, PageShell, ProcessBlock, SectionIntro } from "../components";
import { services } from "../site-data";

export default function EcosistemaPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Ecosistema"
        title="Sito, lead generation e CRM come un solo sistema."
        text="La base racconta un'infrastruttura commerciale integrata: intercetta il lead, lo qualifica, lo organizza e lo porta al team nel momento giusto."
        secondary="Vedi lead generation"
        secondaryHref="/lead-generation"
      />
      <section className="section split">
        <SectionIntro eyebrow="Come funziona" title="Tre componenti, un database narrativo.">
          Il visitatore deve capire che non sta comprando pezzi scollegati, ma
          una macchina commerciale governabile.
        </SectionIntro>
        <div className="principles">
          {services.map((service, index) => (
            <article className="principle" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ProcessBlock />
      <CtaBlock title="Vuoi vedere l'ecosistema adattato al tuo settore?" />
    </PageShell>
  );
}
