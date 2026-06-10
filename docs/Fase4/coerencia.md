---
title: Coerência com o Propósito da Avaliação
sidebar_position: 5
---

## 5. Coerência com o Propósito da Avaliação (Fase 1)

Conforme estabelecido na [Fase 1 — Propósito da Avaliação](../Fase1/propositoAvaliacao.md), o objetivo declarado era:

> _"Analisar o sistema Mural UnB para o propósito de entender e avaliar a viabilidade técnica e a experiência de uso, com respeito a Eficiência de Desempenho e Portabilidade, do ponto de vista da Equipe de desenvolvimento e Usuários finais, no contexto de uso real em dispositivos diversos."_

### Como os resultados atendem ao Propósito

| Dimensão do Propósito             | Como o resultado responde                                                                                                                                                                                                                                                  |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Viabilidade técnica**           | O sistema é **tecnicamente viável** em Adequação Funcional (Nível 5) e Portabilidade (Nível 4). A Eficiência (Nível 2) representa um risco técnico que, embora não impeça o uso, compromete severamente a experiência em dispositivos móveis.                              |
| **Experiência de uso**            | Para estudantes com Desktop, a experiência é funcional e adaptável. Para estudantes com celular e rede limitada, a experiência de **primeira carga é inaceitável** (LCP > 16s), o que pode gerar abandono (_bounce rate_) e impactar negativamente a missão da plataforma. |
| **Dispositivos diversos**         | A Portabilidade confirma que o layout se adapta perfeitamente a Mobile e Desktop (0% de quebra visual). O problema não é visual/estrutural, mas de **velocidade de carga** — as otimizações de desempenho são independentes da responsividade.                             |
| **Uso pretendido dos resultados** | Os dados permitem à equipe de desenvolvimento priorizar ações concretas: a Adequação Funcional está validada, a Portabilidade exige ajuste pontual no SEO, e a Eficiência demanda refatoração significativa nos assets e bundles do frontend.                              |

### Alinhamento com os ODS (Fase 1)

Os resultados reforçam a relação com o **ODS 4 — Educação de Qualidade** e o **ODS 10 — Redução das Desigualdades**: a plataforma _funciona_ e _se adapta_ visualmente, mas a **barreira de desempenho mobile** limita o acesso de estudantes com dispositivos de baixo custo — justamente o público-alvo que os ODS buscam incluir. A correção da Eficiência é, portanto, não apenas uma melhoria técnica, mas um **imperativo de inclusão digital**.

---
