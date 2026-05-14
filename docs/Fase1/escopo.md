---
title: Escopo, Profundidade e Objetos de Avaliação
sidebar_position: 8
---

# 7. Escopo, Profundidade e Objetos de Avaliação

## 1. Escopo da Avaliação

### Incluso

- **Frontend**: Aplicação Next.js (React + TypeScript) voltada ao usuário final.
- **Backend de Consumo**: API REST em Django que serve os dados ao frontend.
- **Persistência**: Integração com Banco de Dados Relacional (PostgreSQL).
- **Características SQuaRE**: Adequação Funcional, Eficiência de Desempenho e Portabilidade.

### Excluído

- **Módulo de Web Scraping (scripts/bot/)**: A lógica de extração de dados externa não será avaliada em sua implementação, apenas no resultado final entregue à API.
- **Infraestrutura de Rede**: Latência de provedores de terceiros (Cloudflare/Vercel) e serviços de infraestrutura externa.
- **API Google Gemini**: A inteligência externa para geração de resumos é considerada uma "caixa-preta", avaliando-se apenas a exibição do seu retorno.

## 2. Profundidade da Avaliação

### Nível: COMPLETA

#### Para Adequação Funcional:

- Validação da **Completude**: Verificação se todos os campos necessários das oportunidades (título, descrição, link, tags) estão presentes.
- Teste de **Correção**: Validação se os filtros e o mecanismo de busca retornam resultados coerentes com os parâmetros inseridos.

#### Para Eficiência de Desempenho:

- Testes de performance com **Lighthouse** (Foco em FCP, LCP e CLS).
- Medição de **Time to First Byte (TTFB)**, considerando o processamento das rotas dinâmicas do Next.js.
- Análise de latência nas requisições à API Django e tempo de resposta nas consultas ao PostgreSQL.

#### Para Portabilidade:

- Testes de responsividade (Breakpoints): Desktop (1920x1080), Tablet (768x1024) e Mobile (375x667).
- Compatibilidade Cross-browser: Chrome, Firefox, Safari e Edge.
- Avaliação da **Adaptabilidade** da interface às diferentes resoluções.

## 3. Objetos de Avaliação

### Caso de Uso Crítico

**"Estudante buscando oportunidade recomendada"**

- O usuário acessa a plataforma;
- O sistema processa os dados do banco via API;
- O usuário utiliza filtros para refinar a busca;
- O sistema exibe recomendações baseadas no conteúdo filtrado.

### Funcionalidades Avaliadas

1. Renderização inicial via Next.js;
2. Mecanismo de busca e filtragem por categorias/tags;
3. Exibição e formatação das oportunidades (cards e detalhes);
4. Responsividade da interface em dispositivos móveis;
5. Persistência e integridade dos dados exibidos vindos da API.

## 4. Relação com Avaliações Anteriores/Futuras

- **Fase 1 (Atual):** Definição do Escopo, Propósito e Seleção de Características ISO 25010.
- **Fase 2 (Próxima):** Elaboração das Questões GQM e seleção de Métricas Quantitativas.
- **Fase 3:** Coleta de dados (testes laboratoriais e auditorias automáticas).
- **Fase 4:** Interpretação dos resultados e proposição de melhorias de software.

## 5. Limitações e Restrições

- **Ambiente:** A avaliação será realizada em ambiente de desenvolvimento/staging, o que pode diferir levemente do desempenho em produção (Vercel/Docker).
- **Dados:** Dependência da disponibilidade dos dados previamente populados pelo script de scraping no banco de dados.
- **Ferramental:** Uso de emuladores de navegador para testes de portabilidade mobile, devido à ausência de uma fazenda de dispositivos reais.
