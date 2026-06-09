import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

const quickLinks = [
  {
    title: "Fase 1",
    description: "Fase 1 da avaliação do Mural UnB.",
    to: "/docs/category/fase-1",
  },
  {
    title: "Fase 2",
    description: "Fase 2 da avaliação do Mural UnB.",
    to: "/docs/category/fase-2",
  },
  {
    title: "Fase 3",
    description: "Fase 3 da avaliação do Mural UnB.",
    to: "/docs/category/fase-3",
  },
  {
    title: "Fase 4",
    description: "Fase 4 da avaliação do Mural UnB.",
    to: "/docs/category/fase-4",
  },
];

export default function Home() {
  const homeImageBasePath = useBaseUrl("/img/home/");

  return (
    <Layout
      title="Página Inicial"
      description="Estrutura organizacional e navegação principal do projeto"
    >
      <main className={styles.page}>
        <section className={styles.heroSection} aria-labelledby="home-title">
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Documentação do Projeto</p>
            <h1 id="home-title" className={styles.heroTitle}>
              Qualidade de Software
            </h1>
            <p className={styles.heroDescription}>
              Avaliação do projeto Mural UnB.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryLink} to="/docs/intro">
              Acessar documentação
            </Link>
            <Link
              className={styles.secondaryLink}
              href="https://github.com/FCTE-Qualidade-de-Software-1/2026-1_T01_GRACE_HOPPER"
            >
              Ver repositório no GitHub
            </Link>
          </div>
        </section>

        <section
          className={styles.linksSection}
          aria-labelledby="quick-links-title"
        >
          <div className={styles.sectionHeader}>
            <h2 id="quick-links-title" className={styles.sectionTitle}>
              Navegação rápida
            </h2>
            <p className={styles.sectionDescription}>
              Acesse diretamente os principais blocos da documentação para
              localizar o contexto geral e os artefatos de cada subsistema.
            </p>
          </div>

          <div className={styles.linksGrid}>
            {quickLinks.map((item) => (
              <Link key={item.title} className={styles.linkCard} to={item.to}>
                <div className={styles.linkCardHeader}>
                  <span className={styles.linkCardTitle}>{item.title}</span>
                  <span className={styles.linkCardDescription}>
                    {item.description}
                  </span>
                </div>
                <div className={styles.linkCardButton}>
                  Acessar <span aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
