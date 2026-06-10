---
title: Eficiência de Desempenho
sidebar_position: 3
---

# Eficiência de Desempenho — Modelo GQM

A Eficiência de Desempenho refere-se ao tempo de resposta, taxa de transferência e uso de recursos do sistema em condições normais de uso e picos de acesso.

## 1. Nível Conceitual: Objetivo de Medição (GQM)

O objetivo a seguir atende aos requisitos do template GQM, alinhando-se à necessidade de velocidade e fluidez na interação, priorizadas na Fase 1.

*   **Analisar:** O frontend (plataforma web) do Mural UnB.
*   **Para o propósito de:** Avaliar a resposta temporal e uso de recursos (performance).
*   **Com respeito à:** Eficiência de Desempenho (Comportamento Temporal e Capacidade).
*   **Do ponto de vista de:** Usuários Finais (Estudantes da UnB) que acessam via navegadores.
*   **No contexto de:** Carregamento de páginas, feeds de oportunidades e renderização de elementos na plataforma de produção.

## 2. Nível Operacional: Questões e Hipóteses

As questões foram definidas de forma a isolar as principais preocupações de desempenho web para a plataforma.

*   **Q1:** Qual o tempo de carregamento da página principal e do feed de vagas para o usuário?
    *   **H1:** O tempo de carregamento do conteúdo principal e interação (FCP/LCP) ocorre em menos de 2.5 segundos, caracterizando uma boa métrica web (Core Web Vitals).
*   **Q2:** A estrutura e código do frontend evitam gargalos de execução no navegador (JavaScript não obstrutivo)?
    *   **H2:** A execução do frontend não sobrecarrega a CPU do dispositivo cliente (Métrica Total Blocking Time (TBT) inferior a 300ms).
*   **Q3:** Qual o desempenho global (Performance Score) aferido por ferramentas consolidadas de mercado?
    *   **H3:** A nota consolidada de Performance do Lighthouse é igual ou superior a 90 em desktop e 80 em mobile.

## 3. Nível Quantitativo: Métricas

As métricas respondem as questões através de dados quantificáveis gerados pela ferramenta de avaliação definida.

*   **M1 — Largest Contentful Paint (LCP) em segundos:** Tempo decorrido até que o maior elemento de texto ou imagem seja renderizado na tela. (Responde Q1).
*   **M2 — Total Blocking Time (TBT) em milissegundos:** Soma do tempo de tarefas longas que bloqueiam a interação do usuário. (Responde Q2).
*   **M3 — Lighthouse Performance Score (0-100):** Nota agregada de desempenho do frontend web (Responde Q3).

> **Nota de Rastreabilidade (Fase 1 → Fase 2):** O documento de escopo da Fase 1 mencionava FCP, LCP, CLS e TTFB como métricas candidatas. Na Fase 2, optou-se por priorizar **LCP** (por ser mais representativo do carregamento percebido pelo usuário do que o FCP, que mede apenas a primeira pintura parcial), **TBT** (por capturar diretamente o bloqueio de interação no navegador, substituindo a necessidade do TTFB no contexto frontend) e o **Lighthouse Performance Score** (que já incorpora FCP e CLS em sua fórmula ponderada com pesos de 10% e 25%, respectivamente). Dessa forma, as três métricas selecionadas cobrem indiretamente todos os indicadores planejados na Fase 1, com maior foco nas dimensões mais impactantes para a experiência do estudante.


## 4. Níveis de Pontuação e Critérios de Julgamento

As métricas são avaliadas contra os critérios do ambiente web moderno. O julgamento será feito com auxílio da ferramenta Google Lighthouse, executada no frontend do projeto (pasta `site`).

| Nível | M1 - LCP (Carregamento) | M2 - TBT (Bloqueio) | M3 - Lighthouse Score | Critério de Julgamento Geral (Eficiência) |
| :--- | :--- | :--- | :--- | :--- |
| **5 (Excelente)** | &lt;= 2.5s (Bom) | &lt;= 200ms (Bom) | >= 90 (Verde) | O sistema é altamente veloz. Os usuários não percebem lentidão ou travamentos durante a navegação pelo feed. |
| **4 (Bom)** | > 2.5s e &lt;= 4.0s (Precisa melhorar) | > 200ms e &lt;= 600ms (Precisa melhorar)| >= 80 e &lt; 90 | Desempenho geral sólido. Ocorre leve demora no carregamento inicial, mas a experiência pós-carregamento é fluida. |
| **3 (Satisfatório)**| > 4.0s e &lt;= 6.0s | > 600ms e &lt;= 1000ms | >= 65 e &lt; 80 (Laranja)| O tempo de resposta já afeta a experiência de forma perceptível. Algumas imagens do feed demoram a carregar. |
| **2 (Insuficiente)**| > 6.0s (Ruim) | > 1000ms e &lt;= 2000ms (Ruim) | >= 40 e &lt; 65 | O sistema sofre gargalos graves. Usuários com redes móveis terão forte tendência a abandonar o site (bounce rate alto). |
| **1 (Crítico)** | > 10s | > 2000ms | &lt; 40 (Vermelho) | Lentidão severa. O frontend trava ou não renderiza em tempo hábil para o uso. |

## 5. Representação da Hierarquia GQM

![Diagrama GQM — Eficiência de Desempenho](diagrams/eficiencia.png)

_Figura — Diagrama GQM para Eficiência de Desempenho._
