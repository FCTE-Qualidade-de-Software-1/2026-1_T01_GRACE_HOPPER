---
title: Adequação Funcional
sidebar_position: 2
---

# Adequação Funcional

A Adequação Funcional refere-se à capacidade do sistema em fornecer funcionalidades que atendam às necessidades declaradas e implícitas dos usuários.

## 1. Nível Conceitual: Objetivo de Medição

O objetivo foi estabelecido seguindo rigorosamente a estrutura do template GQM, alinhado com o Propósito da Avaliação definido na Fase 1.

- **Analisar:** O sistema web e scripts backend do Mural UnB.
- **Para o propósito de:** Avaliar a completude e a correção funcional.
- **Com respeito à:** Característica de Adequação Funcional (Completude Funcional, Correção Funcional e Adequação).
- **Do ponto de vista de:** Usuários Finais (Estudantes da UnB) e Equipe de Desenvolvimento.
- **No contexto de:** Uso cotidiano para busca, recomendação e consumo de oportunidades acadêmicas e profissionais.

## 2. Nível Operacional: Questões e Hipóteses

As questões foram elaboradas para cobrir os atributos do foco de qualidade estabelecido no objetivo, e para cada questão foi elaborada uma hipótese testável correspondente.

- **Q1:** As funcionalidades essenciais do Mural UnB (busca de oportunidades, recomendação via tags, e exibição do feed) estão implementadas e cobrem os requisitos definidos?
  - **H1:** Mais de 90% das funcionalidades prioritárias documentadas na Fase 1 estão implementadas e acessíveis na interface do usuário.
- **Q2:** Qual é a taxa de correção funcional nas operações de busca e recomendação no backend e frontend?
  - **H2:** A maioria dos cenários de uso da plataforma (ex: buscar por um termo específico) é executada sem a ocorrência de erros sistêmicos ou de retorno incorreto (Taxa de sucesso >= 95%).
- **Q3:** As informações retornadas pelo sistema (resultados de busca e recomendações do perfil) são adequadas e relevantes para o usuário final?
  - **H3:** As recomendações e resultados exibem dados completos extraídos pelos crawlers, sendo considerados de alta relevância pelos estudantes (aceitação >= 80%).

## 3. Nível Quantitativo: Métricas

As métricas selecionadas objetivam responder diretamente às questões formuladas (M1 para Q1, M2 para Q2, M3 para Q3).

- **M1 — Cobertura Funcional Essencial (%):** `(Funcionalidades essenciais implementadas / Funcionalidades essenciais mapeadas na Fase 1) * 100`.
- **M2 — Taxa de Sucesso Operacional (%):** `% de cenários de teste essenciais concluídos sem falhas` (com base na execução de roteiros de teste manuais focados na busca e filtro).
- **M3 — Completude dos Dados Apresentados (%):** `% de vagas listadas no frontend que possuem todos os campos obrigatórios preenchidos corretamente (título, tag, link original)`.

## 4. Níveis de Pontuação e Critérios de Julgamento

Para transformar os dados brutos das métricas em um julgamento de qualidade claro e acionável, definiu-se a seguinte escala de pontuação (1 a 5) baseada nas ferramentas de avaliação detalhadas na página de Ambiente de Avaliação.

| Nível                | M1 - Cobertura Funcional | M2 - Taxa de Sucesso Operacional               | M3 - Completude dos Dados Apresentados                       | Critério de Julgamento Geral (Adequação)                                                                                               |
| :------------------- | :----------------------- | :--------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **5 (Excelente)**    | 100% de cobertura.       | 100% de sucesso. Zero bugs relatados na busca. | 100% de completude. Todos os dados das vagas estão corretos. | O sistema atende plenamente ao seu propósito de negócio, garantindo confiança total ao usuário na busca por oportunidades.             |
| **4 (Bom)**          | >= 90% e &lt; 100%.      | >= 95% e &lt; 100%. (Ex: falha mínima visual). | >= 90% e &lt; 100%.                                          | O sistema é altamente funcional. As poucas falhas ou faltas de dados não comprometem o uso central da plataforma.                      |
| **3 (Satisfatório)** | >= 75% e &lt; 90%.       | >= 85% e &lt; 95%.                             | >= 75% e &lt; 90%. (Ex: falta de links originais).           | O sistema possui as funções base, mas os erros ou dados faltantes exigem contornos por parte do usuário (workarounds). Exige correção. |
| **2 (Insuficiente)** | >= 50% e &lt; 75%.       | >= 60% e &lt; 85%. Erros frequentes em buscas. | >= 50% e &lt; 75%.                                           | Funcionalidade severamente comprometida. Recomendações falham frequentemente, frustrando o propósito da plataforma.                    |
| **1 (Crítico)**      | &lt; 50% de cobertura.   | &lt; 60% de sucesso (Sistema instável).        | &lt; 50% de completude (Dados vazios).                       | Plataforma inutilizável para o propósito acadêmico. Refatoração urgente.                                                               |

## 5. Representação da Hierarquia

![Diagrama GQM — Adequação Funcional](diagrams/adequacao.png)

_Figura — Diagrama GQM para Adequação Funcional._
