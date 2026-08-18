import { CtaBlock, Hero, PageShell, SectionIntro } from "../../components";
import { products } from "../../site-data";

const readable = (slug: string) => slug.replaceAll("-", " ");

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const label = readable(slug);
  const filtered = products.filter((product) => product.category.toLowerCase().replaceAll(" ", "-") === slug);

  return (
    <PageShell>
      <Hero
        eyebrow="Categoria"
        title={label}
        text="Pagina categoria pronta per ordinare prodotti, servizi e asset digitali della nuova azienda."
        secondary="Tutto il catalogo"
        secondaryHref="/shop"
      />
      <section className="section cards-section">
        <SectionIntro eyebrow="Prodotti" title="Offerte collegate alla categoria.">
          Se la categoria è nuova o vuota, può diventare una landing commerciale
          dedicata prima ancora di avere prodotti attivi.
        </SectionIntro>
        <div className="product-grid">
          {(filtered.length ? filtered : products.slice(0, 3)).map((product) => (
            <article className="product-card" key={product.slug}>
              <p className="mini-label">{product.status}</p>
              <h3>{product.name}</h3>
              <p>{product.text}</p>
              {product.href ? (
                <a className="button secondary" href={product.href} target="_blank" rel="noopener noreferrer">
                  Scopri ↗
                </a>
              ) : (
                <a className="button secondary" href={`/prodotto/${product.slug}`}>
                  Scopri
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <CtaBlock title="Vuoi definire le categorie commerciali definitive?" />
    </PageShell>
  );
}
