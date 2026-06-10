---
title: Análise e Julgamento dos Resultados
sidebar_position: 1
---

# Fase 4 — Análise e Julgamento dos Resultados

Este documento consolida a etapa final do processo de avaliação de qualidade do sistema **Mural UnB**, seguindo o framework GQM (Goal–Question–Metric). Os dados brutos coletados na [Fase 3 — Coleta de Dados](../Fase3/coleta_dados.md) são aqui processados, enquadrados nos níveis de pontuação estabelecidos na [Fase 2 — Modelo GQM](../Fase2/GQM.md) e transformados em julgamentos de qualidade formais, respondendo a todas as Questões e Objetivos de Medição.

O propósito desta análise é cumprir o uso pretendido dos resultados definido na [Fase 1 — Propósito da Avaliação](../Fase1/propositoAvaliacao.md): _"identificar pontos fortes, limitações e possíveis oportunidades de melhoria na plataforma"_, gerando recomendações concretas para a equipe de desenvolvimento e para os requisitantes da avaliação.

---

## 1. Obtenção das Medidas e Rastreabilidade da Coleta

As medidas foram obtidas seguindo integralmente os procedimentos e o método definidos no [Plano de Avaliação da Fase 3](../Fase3/plano_avaliacao.md). A tabela abaixo resume as condições de coleta e as evidências geradas, garantindo a verificabilidade de cada dado bruto.

### 1.1. Registro das Condições de Coleta

| Item                    | Valor registrado                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| Data da coleta          | Junho de 2026 (coletas realizadas entre 04/06/2026 e 08/06/2026, conforme cronograma da Fase 3).                           |
| Sistema avaliado        | Mural UnB — frontend Next.js/React acessando API Django com base PostgreSQL.                                               |
| Versão/Branch           | Branch `fase3-plano-avaliacao`, commit `ca34c78`.                                                                          |
| Ambiente                | Ambiente local controlado, com backend rodando localmente e base de dados previamente populada pelos crawlers.             |
| Navegador               | Google Chrome (versão mais recente estável), com DevTools e Lighthouse integrados.                                         |
| Perfil Desktop          | Hardware integral do notebook de teste, sem throttling aplicado.                                                           |
| Perfil Mobile           | Emulação iPhone 12 Pro (390×844px) via Chrome DevTools, com Simulated Throttling (CPU 4x slowdown, rede Fast 3G simulada). |
| Repetições Lighthouse   | Cada teste Lighthouse foi executado 3 vezes por página/perfil; registrou-se a **mediana** como valor oficial.              |
| Responsável pela coleta | Diogo Barboza (Lighthouse e evidências automatizadas), Ana Carolina e Raissa Oliveira (testes manuais funcionais).         |

### 1.2. Evidências Documentadas

Clique nos link para ser redirecionado.

| Tipo de evidência                          | Localização no repositório                                                                                                        |
| :----------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| Relatório Lighthouse Mobile (HTML)         | [`static/relatorios/relatorio_lighthouse_mobile.html`](../Fase3/coleta_dados#21-relatório-de-auditoria---mobile-simulado)         |
| Relatório Lighthouse Desktop (HTML)        | [`static/relatorios/relatorio_lighthouse_desktop.html`](../Fase3/coleta_dados#22-relatório-de-auditoria---desktop)                |
| Capturas de tela Mobile (Home/Mural/Sobre) | [`static/img/home.png`](../Fase3/coleta_dados#25-auditoria-visual-de-responsividade-emulação-mobile)                              |
| Capturas da calculadora Lighthouse         | [`static/img/lighthouse_calculator_mobile.jpeg`](../Fase3/coleta_dados#24-a-matemática-por-trás-da-calculadora-do-lighthouse)     |
| Tabelas de testes manuais funcionais       | [Seção 3 do coleta_dados.md](../Fase3/coleta_dados#3-coleta-de-evidências-adequação-funcional) — checklists, cenários e amostras. |

---
