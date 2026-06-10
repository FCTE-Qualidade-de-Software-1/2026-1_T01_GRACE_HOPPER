---
title: Análise e Respostas GQM
sidebar_position: 3
---

## 3. Análise e Respostas GQM

Nesta seção, os dados brutos são enquadrados nos **Níveis de Pontuação (1 a 5)** definidos na Fase 2 para cada métrica, e utilizados para responder formalmente a cada **Questão (Q)** e **Objetivo de Medição (G)** do modelo GQM. Os gráficos e tabelas a seguir apresentam o resultado completo.

### 3.1. Adequação Funcional

**Objetivo de Medição:** _Avaliar a completude e a correção funcional do sistema Mural UnB, do ponto de vista dos Usuários Finais e da Equipe de Desenvolvimento, no contexto de busca, recomendação e consumo de oportunidades._

#### Enquadramento nos Níveis de Pontuação

| Métrica                       | Valor Obtido | Faixa da Fase 2                | Nível Atribuído   |
| :---------------------------- | :----------: | :----------------------------- | :---------------- |
| M1 — Cobertura Funcional (%)  |     100%     | 100% = Nível 5                 | **5 (Excelente)** |
| M2 — Sucesso Operacional (%)  |     100%     | 100%, zero bugs = Nível 5      | **5 (Excelente)** |
| M3 — Completude dos Dados (%) |     100%     | 100%, todos corretos = Nível 5 | **5 (Excelente)** |

#### Respostas às Questões GQM

**Q1: As funcionalidades essenciais do Mural UnB estão implementadas e cobrem os requisitos definidos?**

> **Resposta:** Sim. Todas as 5 funcionalidades essenciais mapeadas na [Fase 1 — Escopo](../Fase1/escopo.md) (renderização da Home, busca/filtragem, exibição de cards, responsividade mobile e integridade de dados da API) estão implementadas e acessíveis na interface. A **Hipótese H1** (">90% das funcionalidades prioritárias estão implementadas") é **confirmada** com 100% de cobertura.

**Q2: Qual é a taxa de correção funcional nas operações de busca e recomendação?**

> **Resposta:** A taxa de correção é de 100%. Os 20 cenários executados (pesquisa livre, filtragem por tags, navegação e visualização de cards) foram concluídos sem falhas, sem erros HTTP 500, sem telas em branco e sem retornos incorretos. A **Hipótese H2** ("Taxa de sucesso >= 95%") é **confirmada** com margem de 5 pontos percentuais.

**Q3: As informações retornadas pelo sistema são adequadas e relevantes para o usuário final?**

> **Resposta:** Sim. A auditoria por amostragem sistemática de 30 cards comprovou que 100% possuem os três campos obrigatórios (título, tag, link original) corretamente preenchidos. Os dados extraídos pelos crawlers são exibidos de forma íntegra no frontend. A **Hipótese H3** ("Aceitação >= 80%") é **confirmada** com 100% de completude.

#### Julgamento do Objetivo — Adequação Funcional

| Aspecto           | Resultado                                                                                                                                                                                                                                                                     |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nível Consolidado | **5 (Excelente)** — Média aritmética das métricas: (5 + 5 + 5) / 3 = 5,0                                                                                                                                                                                                      |
| Parecer           | O sistema atende **plenamente** ao seu propósito de negócio. As funcionalidades de busca, filtro, exibição de cards e integração com o crawler funcionam de forma completa, correta e com dados íntegros, garantindo confiança total ao estudante na busca por oportunidades. |

---

### 3.2. Eficiência de Desempenho

**Objetivo de Medição:** _Avaliar a resposta temporal e uso de recursos do frontend Mural UnB, do ponto de vista dos Usuários Finais que acessam via navegadores, no contexto de carregamento de páginas, feeds e renderização._

#### Enquadramento nos Níveis de Pontuação

| Métrica                           | Valor Mobile | Faixa da Fase 2                | Nível Atribuído      |
| :-------------------------------- | :----------: | :----------------------------- | :------------------- |
| M1 — LCP (s)                      |   16,45 s    | > 10s = Nível 1                | **1 (Crítico)**      |
| M2 — TBT (ms)                     |    597 ms    | > 200ms e `<=` 600ms = Nível 4 | **4 (Bom)**          |
| M3 — Lighthouse Performance Score | 46 (Mobile)  | >= 40 e < 65 = Nível 2         | **2 (Insuficiente)** |

#### Respostas às Questões GQM

**Q1: Qual o tempo de carregamento da página principal e do feed de vagas para o usuário?**

> **Resposta:** O LCP medido foi de **16,45 segundos** no cenário Mobile, um valor **criticamente elevado** que excede em mais de 6x o limiar "Bom" (2,5s) dos Core Web Vitals. A **Hipótese H1** ("FCP/LCP ocorre em menos de 2,5 segundos") é **rejeitada**. A causa principal identificada é o tamanho das imagens não otimizadas e a ausência de _lazy loading_ nos cards do feed, fazendo com que o elemento visual mais pesado da viewport demore excessivamente para renderizar.

**Q2: A estrutura e código do frontend evitam gargalos de execução no navegador?**

> **Resposta:** O TBT de **597 ms** indica que o JavaScript do frontend gera tarefas longas que bloqueiam a interação por quase 600 milissegundos — próximo ao limite superior da faixa "Precisa melhorar" (200-600ms). Embora o valor se enquadre no Nível 4, está no limiar com o Nível 3. A **Hipótese H2** ("TBT inferior a 300ms") é **rejeitada** (597ms > 300ms). A causa está nos bundles JavaScript não fragmentados (_code splitting_) e na hidratação completa do React/Next.js na primeira carga.

**Q3: Qual o desempenho global (Performance Score) aferido por ferramentas consolidadas?**

> **Resposta:** O Lighthouse Performance Score é de **46 (Mobile)** e **31 (Desktop)**. Ambos os valores ficam abaixo do limiar mínimo para "Verde" (≥90). A **Hipótese H3** ("Lighthouse Performance >= 90 desktop e >= 80 mobile") é **rejeitada em ambos os perfis**. A nota Desktop é inferior à Mobile porque os thresholds de punição do Lighthouse são mais rigorosos para hardware integral, conforme detalhado na Seção 2.4.3 da Fase 3.

#### Julgamento do Objetivo — Eficiência de Desempenho

| Aspecto           | Resultado                                                                                                                                                                                                                                                                                                                                                                       |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nível Consolidado | **2 (Insuficiente)** — Média ponderada: M1 (peso 25%) = 1 + M2 (peso 30%) = 4 + M3 (peso 45%) = 2 → nota ponderada ≈ 2,3 → arredondado para **2**.                                                                                                                                                                                                                              |
| Parecer           | O sistema sofre de **gargalos graves de desempenho** no carregamento da primeira página, especialmente em dispositivos móveis. O LCP de 16,45s torna a experiência inicial inaceitável para um estudante acessando via celular com rede limitada. Embora o TBT esteja em faixa aceitável, o score global do Lighthouse confirma que o frontend necessita de otimização urgente. |

---

### 3.3. Portabilidade

**Objetivo de Medição:** _Avaliar a adaptabilidade visual, acessibilidade e compatibilidade cruzada do frontend Mural UnB, do ponto de vista dos Usuários Finais, no contexto de acesso via diferentes navegadores e tamanhos de tela._

#### Enquadramento nos Níveis de Pontuação

| Métrica                               | Valor Obtido | Faixa da Fase 2        | Nível Atribuído      |
| :------------------------------------ | :----------: | :--------------------- | :------------------- |
| M1 — Taxa de Quebra de Layout (%)     |      0%      | 0% = Nível 5           | **5 (Excelente)**    |
| M2 — Best Practices Score             |     100      | >= 95 = Nível 5        | **5 (Excelente)**    |
| M3 — Accessibility & SEO Score Mínimo |      83      | >= 70 e < 85 = Nível 3 | **3 (Satisfatório)** |

#### Respostas às Questões GQM

**Q1: A interface da aplicação se adapta corretamente aos dispositivos móveis sem perda de funcionalidade?**

> **Resposta:** Sim. A auditoria visual com emulação de iPhone 12 Pro nas 3 telas principais (Home, Mural, Sobre) resultou em **0% de quebra visual**. O menu colapsa corretamente, os cards redistribuem sem overflow, e os botões permanecem espaçados para _touch targets_. A **Hipótese H1** (">95% das páginas sem sobreposição ou botões inacessíveis") é **confirmada** com 100% de adaptabilidade.

**Q2: A estrutura HTML e o código seguem as boas práticas universais e padrões web exigidos?**

> **Resposta:** Sim, com excelência. O Best Practices Score de **100** indica que o código atende a todas as regras modernas validadas pelo Lighthouse (HTTPS, headers de segurança, ausência de APIs deprecated, etc.). A **Hipótese H2** ("Best Practices >= 90") é **confirmada** com margem de 10 pontos.

**Q3: A aplicação é adequadamente acessível e descritiva para indexadores ou tecnologias assistivas?**

> **Resposta:** Parcialmente. O Accessibility Score é de **95** (Excelente), mas o SEO Score é de **83**, ficando abaixo do limiar de 85 definido na Hipótese H3. O menor valor entre os dois (83) é utilizado como M3. Identificou-se a ausência de algumas meta-tags descritivas e atributos `alt` completos em imagens secundárias. A **Hipótese H3** ("SEO/Accessibility >= 85") é **rejeitada** por 2 pontos percentuais na dimensão SEO.

#### Julgamento do Objetivo — Portabilidade

| Aspecto           | Resultado                                                                                                                                                                                                                                                                                                                              |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nível Consolidado | **4 (Bom)** — Média aritmética: (5 + 5 + 3) / 3 = 4,3 → arredondado para **4**.                                                                                                                                                                                                                                                        |
| Parecer           | O sistema demonstra **alta aderência multiplataforma**. O layout responsivo e as boas práticas web estão em nível de excelência. A única fragilidade está no SEO (83), que necessita de pequenos ajustes (meta-descriptions e atributos de imagem) para atingir o nível máximo. A experiência visual em Mobile é fluida e sem quebras. |

---
