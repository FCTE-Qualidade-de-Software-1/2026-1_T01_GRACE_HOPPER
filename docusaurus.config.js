// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "QSW",
  tagline: "Qualidade de Software",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://FCTE-Qualidade-de-Software-1.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/2026-1_T01_GRACE_HOPPER/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FCTE-Qualidade-de-Software-1", // Usually your GitHub org/user name.
  projectName: "2026-1_T01_GRACE_HOPPER", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Página Inicial",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Introdução",
          },
          {
            href: "https://github.com/FCTE-Qualidade-de-Software-1/2026-1_T01_GRACE_HOPPER",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Navegação",
            items: [
              {
                label: "Introdução",
                to: "/docs/intro",
              },
              {
                label: "Fase 1 — Planejamento",
                to: "/docs/Fase1/escopo",
              },
              {
                label: "Fase 2 — Modelo GQM",
                to: "/docs/Fase2/GQM",
              },
              {
                label: "Fase 3 — Coleta de Dados",
                to: "/docs/Fase3/plano_avaliacao",
              },
              {
                label: "Fase 4 — Análise e Julgamento",
                to: "/docs/Fase4/analise_resultados",
              },
            ],
          },
          {
            title: "Projeto",
            items: [
              {
                label: "Repositório GitHub",
                href: "https://github.com/FCTE-Qualidade-de-Software-1/2026-1_T01_GRACE_HOPPER",
              },
              {
                label: "Software Analisado — Mural UnB",
                href: "https://muralunb.com.br",
              },
            ],
          },
          {
            title: "Equipe Grace Hopper",
            items: [
              {
                label: "Ana Carolina",
                href: "https://github.com/anawcarol",
              },
              {
                label: "Davi Negreiros",
                href: "https://github.com/DaviNegreiros",
              },
              {
                label: "Diogo Barboza",
                href: "https://github.com/Diogo-Barboza",
              },
              {
                label: "João Guimarães",
                href: "https://github.com/JoaoMarceloGCN",
              },
              {
                label: "Raissa Oliveira",
                href: "https://github.com/daisha19",
              },
            ],
          },
        ],
        copyright: `Versão: Entrega 2 · Disciplina: Qualidade de Software 1 (FGA0315) · Software Analisado: Mural UnB · Equipe Grace Hopper — ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
