---
title: Dados Brutos Consolidados
sidebar_position: 2
---

## 2. Dados Brutos Consolidados

Esta seção organiza todos os valores brutos extraídos durante a Fase 3, vinculando cada dado à métrica GQM correspondente e à evidência que o fundamenta. A rastreabilidade direta entre o dado bruto e a métrica calculada garante a transparência da execução.

### 2.1. Dados Brutos — Eficiência de Desempenho

| Métrica (Fase 2)                          | Perfil Mobile (Pior Cenário) | Perfil Desktop | Evidência                                       |
| :---------------------------------------- | :--------------------------- | :------------- | :---------------------------------------------- |
| M1 — Largest Contentful Paint (LCP)       | **16,45 s**                  | **16,45 s**    | Relatórios Lighthouse HTML (Mobile e Desktop)   |
| M2 — Total Blocking Time (TBT)            | **597 ms**                   | **597 ms**     | Relatórios Lighthouse HTML (Mobile e Desktop)   |
| M3 — Lighthouse Performance Score (0-100) | **46**                       | **31**         | Relatórios Lighthouse HTML e Calculadora Google |

> **Observação metodológica:** Os valores de LCP e TBT do Lighthouse são obtidos via _Simulated Throttling_ no perfil Mobile. O valor de Performance Score Desktop (31) é inferior ao Mobile (46) porque os _thresholds_ de punição do Lighthouse são mais rigorosos para Desktop, conforme documentado na [Seção 2.4.3 da Fase 3](../Fase3/coleta_dados#243-discrepância-de-thresholds-mobile-vs-desktop).

### 2.2. Dados Brutos — Portabilidade

| Métrica (Fase 2)                                 | Valor Obtido                                 | Evidência                                          |
| :----------------------------------------------- | :------------------------------------------- | :------------------------------------------------- |
| M1 — Taxa de Quebra de Layout em Mobile (%)      | **0%**                                       | Capturas Full-Size de 3 telas (Home, Mural, Sobre) |
| M2 — Lighthouse Best Practices Score (0-100)     | **100**                                      | Relatório Lighthouse Mobile HTML                   |
| M3 — Lighthouse Accessibility & SEO Score Mínimo | **83** (min entre Accessibility 95 e SEO 83) | Relatório Lighthouse Mobile HTML                   |

### 2.3. Dados Brutos — Adequação Funcional

| Métrica (Fase 2)                           | Valor Obtido | Base de Cálculo     | Evidência                                             |
| :----------------------------------------- | :----------- | :------------------ | :---------------------------------------------------- |
| M1 — Cobertura Funcional Essencial (%)     | **100%**     | 5/5 funcionalidades | Checklist individual (Seção 3.2 da Fase 3)            |
| M2 — Taxa de Sucesso Operacional (%)       | **100%**     | 20/20 cenários      | Tabela de execução de cenários (Seção 3.3 da Fase 3)  |
| M3 — Completude dos Dados Apresentados (%) | **100%**     | 30/30 cards         | Amostragem sistemática de cards (Seção 3.4 da Fase 3) |

---
