import { notFound } from "next/navigation";
import { CtaBlock, Hero, PageShell, SectionIntro } from "../../components";
import { products } from "../../site-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow={product.category}
        title={product.name}
        text={product.text}
        primary="Richiedi demo"
        secondary="Torna allo shop"
        secondaryHref="/shop"
      />
      <section className="section split">
        <SectionIntro eyebrow="Scheda prodotto" title={product.label}>
          Questa pagina è una base prodotto completa: descrizione, benefici,
          stato commerciale, FAQ e CTA possono essere sostituiti con dati reali.
        </SectionIntro>
        <div className="principles">
          {product.bullets.map((bullet, index) => (
            <article className="principle" key={bullet}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{bullet}</h3>
              <p>Sezione pronta per spiegare funzione, output e vantaggio operativo.</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBlock title={`Vuoi attivare ${product.name}?`} />
    </PageShell>
  );
}
