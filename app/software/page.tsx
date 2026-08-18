import { CtaBlock, FaqBlock, Hero, PageShell, SectionIntro } from "../components";
import { faqs, products } from "../site-data";

export default function SoftwarePage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Software proprietari"
        title="Strumenti presentati come prodotti, non come promesse."
        text="Una pagina per raccontare piattaforme, servizi digitali e asset vendibili: lead generation, social, landing, CRM verticali e kit operativi."
        secondary="Vai al catalogo"
        secondaryHref="/shop"
      />
      <section className="section cards-section">
        <SectionIntro eyebrow="Catalogo software" title="Ogni prodotto ha funzione, target e uscita commerciale.">
          La struttura riprende la logica del benchmark: prodotti separati ma
          collegati da un unico ecosistema.
        </SectionIntro>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.slug}>
              <p className="mini-label">{product.category}</p>
              <h3>{product.name}</h3>
              <strong>{product.label}</strong>
              <p>{product.text}</p>
              <ul>
                {product.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {product.href ? (
                <a className="button secondary" href={product.href} target="_blank" rel="noopener noreferrer">
                  Scopri il prodotto ↗
                </a>
              ) : (
                <a className="button secondary" href={`/prodotto/${product.slug}`}>
                  Scopri il prodotto
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
      <FaqBlock items={faqs} />
      <CtaBlock title="Vuoi scegliere quali software rendere reali per la nuova azienda?" />
    </PageShell>
  );
}
