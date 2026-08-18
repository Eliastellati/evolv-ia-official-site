import { notFound } from "next/navigation";
import { CtaBlock, Hero, PageShell } from "../../components";
import { legalPages } from "../../site-data";

export function generateStaticParams() {
  return legalPages.map(([slug]) => ({ slug }));
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = legalPages.find(([item]) => item === slug);
  if (!page) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow="Legale"
        title={page[1]}
        text="Pagina placeholder da far revisionare da un professionista legale prima della pubblicazione reale."
        primary="Contatta Evolv.IA"
        secondary="Torna alla home"
        secondaryHref="/"
      />
      <section className="section article-body">
        <h2>Base documento</h2>
        <p>
          Questa sezione esiste per coprire la struttura del sito e mantenere
          ordinati privacy, cookie, termini, DPA, note legali, condizioni di
          vendita e rimborsi. Il testo finale deve essere preparato con dati
          societari reali.
        </p>
      </section>
      <CtaBlock title="Completa questa pagina con i dati societari definitivi." />
    </PageShell>
  );
}
