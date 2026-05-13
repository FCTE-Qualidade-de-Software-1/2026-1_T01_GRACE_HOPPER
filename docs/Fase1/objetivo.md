---
title: Objetivo
sidebar_position: 1
---

## Objetivo

Executar a Fase 1 para definir os requisitos de avaliação da qualidade do software **Mural-UnB**, incluindo:

- **a)** Propósito da avaliação: Validar o atendimento aos requisitos não-funcionais de Eficiência de Desempenho e Portabilidade
- **b)** Identificação do tipo de produto: Web Application SPA (Single Page Application) baseada em JavaScript/TypeScript
- **c)** Especificação inicial do modelo de qualidade: Modelo com 2 características principais SQuaRE

## Contexto

O Mural-UnB é uma **plataforma de recomendação de oportunidades acadêmicas** que conecta estudantes da Universidade de Brasília a:
- Empresas Juniores (EJs)
- Laboratórios de Pesquisa
- Equipes de Competição

**Público-alvo:** Estudantes de diferentes cursos e períodos

**Arquitetura:** Serverless (GitHub Pages + React 19 SPA)

## Requisitos Não-Funcionais Alvo

| Característica | Requisito |
|---|---|
| **Eficiência de Desempenho** | ≤ 2s para recomendações personalizadas; ≤ 3s carregamento inicial |
| **Portabilidade** | Responsivo em Desktop, Tablet e Mobile |

## Justificativa das Características Selecionadas

1. **Eficiência de Desempenho**: Crítica para experiência do usuário. Recomendações lentas prejudicam adoção da plataforma.
2. **Portabilidade**: Essencial pois usuários acessam de múltiplos dispositivos (desktop nos labs, mobile entre aulas).
