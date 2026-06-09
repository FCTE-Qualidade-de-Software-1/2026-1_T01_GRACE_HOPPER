---
title: Análise e Julgamento
sidebar_position: 1
---

# Análise e Julgamento dos Resultados PREICSA MELHORAAARRRR

Nesta etapa crucial do processo de avaliação, os valores brutos extraídos durante a Fase 3 (Coleta de Evidências) foram confrontados matematicamente com as matrizes de decisão criadas na Fase 2 (Planejamento GQM). 

O objetivo é transformar métricas cruas em um juízo de valor qualitativo sobre o sistema **Mural UnB**.

---

## 1. Julgamento das Características Priorizadas

Aplicamos as faixas de níveis (1 a 5) às métricas mapeadas.

### 1.1. Portabilidade
A capacidade do sistema de se adaptar a diferentes navegadores, tamanhos de tela e diretrizes web.

- **Best Practices Score (100):** O código atende estritamente a todas as regras modernas avaliadas pelo Lighthouse. Enquadra-se no **Nível 5 (Excelente)**.
- **Accessibility Score (95):** O uso correto de contrastes, labels em botões e HTML semântico atende com excelência às necessidades de tecnologias assistivas. Enquadra-se no **Nível 5 (Excelente)**.
- **Layout Responsivo Visual (Taxa de Quebra):** A auditoria visual minuciosa (via capturas completas de tela simulando um iPhone 12 Pro) comprovou que as 3 telas mais críticas do sistema (Home, Mural e Sobre) operam com 0% de quebra visual. Elementos de navegação colapsam corretamente e o *Feed* redistribui os cards sem *overflow*. Enquadra-se no **Nível 5 (Excelente)**.

> **Parecer de Portabilidade:** O sistema demonstra altíssima aderência multiplataforma. O código web está altamente maduro no que diz respeito às normas do W3C. A interface suporta perfeitamente a leitura em dispositivos móveis, consolidando-se como **Excelente**.

### 1.2. Eficiência de Desempenho
O quão rápido o sistema responde e carrega as oportunidades acadêmicas sob demanda.

- **Performance Score Mobile (46):** Em um ambiente móvel com rede e CPU limitadas, o *score* sofre impacto. Enquadra-se no **Nível 2 (Insuficiente)**.
- **Métricas Chave (LCP de 16.45s e TBT de 597ms):** Observou-se que a interface retarda a renderização da imagem principal (*Largest Contentful Paint*) e sofre com picos longos de processamento JavaScript (*Total Blocking Time*) que bloqueiam interações momentâneas na tela.

> **Parecer de Eficiência:** Existe uma discrepância marcante que depende diretamente do poder de hardware do usuário. No contexto Mobile (o qual exige alta prioridade), a primeira carga sofre de gargalos graves (*bottlenecks*). A característica obtém nota de **Satisfatório/Bom para Desktop e Insuficiente para Mobile**. 

### 1.3. Adequação Funcional
A competência do sistema em apresentar exatamente o que os estudantes necessitam.

- **Cobertura Funcional (M1 - 100%):** Todas as 3 funcionalidades prioritárias estão presentes e acessíveis. Enquadra-se no **Nível 5 (Excelente)**.
- **Sucesso Operacional (M2 - 100%):** O lote de testes de pesquisa e recomendação via tag não gerou *crashes*, retornos de erro HTTP 500 ou telas em branco em 100% dos cenários amostrados. Enquadra-se no **Nível 5 (Excelente)**.
- **Completude de Dados (M3 - 100%):** A auditoria dos *cards* atestou que 100% da amostra continha Título, Tag e Link Original perfeitamente legíveis. Enquadra-se no **Nível 5 (Excelente)**.

> **Parecer de Adequação:** O coração da aplicação funciona exatamente como proposto. O modelo de dados extraído pelo backend é exposto de maneira íntegra e sem inconsistências. O sistema ganha conceito **Excelente**.

---

## 2. Conclusão Final do Parecer Técnico

A avaliação sistemática (baseada no modelo GQM e nas diretrizes da SQuaRE ISO/IEC 25010) atesta que o projeto **Mural UnB** é um produto de software funcionalmente forte, estruturalmente acessível e perfeitamente aderente às boas práticas do desenvolvimento web.

**Fortalezas do Produto (Manter e Evoluir):**
- Adequação Funcional na integração Crawler-Frontend.
- Excelência em Acessibilidade e SEO.

**Vulnerabilidades Críticas (Ações de Refatoração Recomendadas):**
- A **Eficiência de Desempenho no ambiente Mobile** demanda atenção imediata da equipe de desenvolvedores. Recomenda-se:
  1. Otimizar e compactar as imagens que causam LCP alto.
  2. Implementar *Lazy Loading* nos cards do Feed.
  3. Reduzir e fragmentar os pacotes de JavaScript (bundles) que estão aumentando o TBT na carga inicial.
