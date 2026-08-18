import { notFound } from "next/navigation";
import { CtaBlock, Hero, PageShell, ProcessBlock, SectionIntro } from "../../components";
import { verticals } from "../../site-data";

export function generateStaticParams() {
  return verticals.map((vertical) => ({ slug: vertical.slug }));
}

export default async function VerticalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vertical = verticals.find((item) => item.slug === slug);
  if (!vertical) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow={`Verticale · ${vertical.title}`}
        title={vertical.headline}
        text={vertical.text}
        secondary="Tutti i servizi"
        secondaryHref="/ecosistema"
      />
      <section className="strategy-band">
        {vertical.stats.map((stat) => (
          <div key={stat}>
            <p className="mini-label">Segnale</p>
            <strong>{stat}</strong>
          </div>
        ))}
      </section>
      <section className="section">
        <SectionIntro eyebrow="Operatività" title="Una pagina verticale deve provare competenza.">
          Qui andranno numeri, casi, screenshot, ruoli e processi reali della
          nuova azienda. Per ora la struttura è pronta a riceverli.
        </SectionIntro>
      </section>
      <ProcessBlock />
      <CtaBlock title={`Vuoi costruire il verticale ${vertical.title}?`} />
    </PageShell>
  );
}
