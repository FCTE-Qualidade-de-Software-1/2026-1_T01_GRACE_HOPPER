---
title: Escopo, Profundidade e Objetos de Avaliação
sidebar_position: 8
---

# Escopo, Profundidade e Objetos de Avaliação

## 1. Escopo da Avaliação

### Incluso
- **Frontend (site/)**: React 19 + TypeScript + TailwindCSS + DaisyUI
- **Dados**: Arquivos JSON estáticos (oportunidades.json, tags.json)
- **Hospedagem**: GitHub Pages (frontend)
- **Características SQuaRE**: Eficiência de Desempenho + Portabilidade

### Excluído
- Pipeline ETL (scripts/) - Backend de ingestão de dados
- API Google Gemini - Apenas consumida, não avaliada
- Sistema de autenticação (se houver)

## 2. Profundidade da Avaliação

### Nível: COMPLETA

#### Para Eficiência de Desempenho:
- Testes de performance com Lighthouse (auditorias automáticas)
- Medição de tempo de carregamento (desktop + mobile + 4G simulado)
- Análise de bundle size e assets
- Medição de "First Contentful Paint" (FCP) e "Largest Contentful Paint" (LCP)

#### Para Portabilidade:
- Testes de responsividade em breakpoints: 1920x1080 (desktop), 768x1024 (tablet), 375x667 (mobile)
- Compatibilidade de navegadores: Chrome, Firefox, Safari, Edge (versões atuais)
- Testes de funcionalidade core em cada dispositivo

## 3. Objetos de Avaliação

### Caso de Uso Crítico
**"Estudante buscando oportunidade recomendada"**
- Usuário acessa Mural-UnB
- Sistema recomenda oportunidades baseado no perfil
- Usuário visualiza detalhes e faz contato

### Funcionalidades Avaliadas
1. Carregamento inicial da página
2. Busca e filtro de oportunidades
3. Exibição de recomendações personalizadas
4. Navegação responsiva em diferentes dispositivos
5. Compatibilidade cross-browser

## 4. Relação com Avaliações Anteriores/Futuras

- **Fase 1 (Atual):** Definição de requisitos e modelo de qualidade
- **Fase 2:** Especificação de métricas e plano de avaliação
- **Fase 3:** Execução de testes e coleta de dados
- **Fase 4:** Análise de resultados e recomendações

## 5. Limitações e Restrições

- Sem acesso a métricas históricas de produção
- Avaliação em ambiente de desenvolvimento/staging
- Testes manuais de portabilidade (sem automação de browsers)
