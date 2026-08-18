import { CtaBlock, Hero, PageShell, SectionIntro } from "../components";
import { categories, products } from "../site-data";

export default function ShopPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Catalogo"
        title="Tutti gli strumenti della nuova azienda, in un solo posto."
        text="Una base shop senza checkout interno: categorie, prodotti, stato commerciale, acquisto o richiesta demo."
        secondary="Vedi software"
        secondaryHref="/software"
      />
      <section className="section cards-section">
        <SectionIntro eyebrow="Categorie" title="Il catalogo è già ordinato per linee di offerta.">
          Puoi usare questa struttura per software, CRM verticali, landing page,
          prodotti digitali e consulenze.
        </SectionIntro>
        <div className="category-row">
          {categories.map((category) => (
            <a key={category} className="category-pill" href={`/categoria/${category.toLowerCase().replaceAll(" ", "-")}`}>
              {category}
            </a>
          ))}
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.slug}>
              <p className="mini-label">{product.category}</p>
              <h3>{product.name}</h3>
              <strong>{product.status}</strong>
              <p>{product.text}</p>
              {product.href ? (
                <a className="button secondary" href={product.href} target="_blank" rel="noopener noreferrer">
                  Scopri ↗
                </a>
              ) : (
                <a className="button secondary" href={`/prodotto/${product.slug}`}>
                  Scopri →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <CtaBlock title="Vuoi trasformare il catalogo in shop reale?" />
    </PageShell>
  );
}
