import { notFound } from "next/navigation";
import { CtaBlock, Hero, PageShell, SectionIntro } from "../../components";
import { blogPosts } from "../../site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <Hero
        eyebrow={`${post.date} · ${post.read}`}
        title={post.title}
        text={post.excerpt}
        primary="Parla con noi"
        secondary="Torna al blog"
        secondaryHref="/blog"
      />
      <article className="section article-body">
        <SectionIntro eyebrow="Struttura articolo" title="Base editoriale pronta da sviluppare.">
          Ogni articolo è impostato per lavorare come pagina SEO e come ingresso
          commerciale verso lead generation, CRM o catalogo.
        </SectionIntro>
        <h3>1. Il problema operativo</h3>
        <p>Descrivi il contesto reale del lettore, senza teoria generica e senza promettere scorciatoie.</p>
        <h3>2. Il sistema</h3>
        <p>Mostra canali, dati, qualifica, follow-up e responsabilità. Il valore deve essere nel metodo.</p>
        <h3>3. La conversione</h3>
        <p>Chiudi con un invito coerente: audit, demo, prodotto digitale o richiesta di contatto.</p>
      </article>
      <CtaBlock title="Vuoi trasformare questo articolo in una pagina SEO completa?" />
    </PageShell>
  );
}
