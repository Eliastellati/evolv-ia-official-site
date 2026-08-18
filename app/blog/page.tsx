import { CtaBlock, Hero, PageShell, SectionIntro } from "../components";
import { blogPosts } from "../site-data";

export default function BlogPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Blog"
        title="Guide, analisi e contenuti per generare clienti."
        text="La base include un blog con articoli SEO-ready: ogni contenuto può diventare una pagina verticale di acquisizione."
        secondary="Torna all'ecosistema"
        secondaryHref="/ecosistema"
      />
      <section className="section cards-section">
        <SectionIntro eyebrow="Risorse" title="Un piano editoriale già impostato.">
          I titoli sono originali e pensati come base per una nuova azienda AI,
          senza riutilizzare gli articoli del sito benchmark.
        </SectionIntro>
        <div className="article-grid">
          {blogPosts.map((post) => (
            <a className="article-card" href={`/blog/${post.slug}`} key={post.slug}>
              <p className="mini-label">{post.date} · {post.read}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span>Leggi →</span>
            </a>
          ))}
        </div>
      </section>
      <CtaBlock title="Vuoi usare il blog come canale di acquisizione?" />
    </PageShell>
  );
}
