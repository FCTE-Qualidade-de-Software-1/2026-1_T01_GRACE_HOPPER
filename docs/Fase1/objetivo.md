---
title: Objetivo e Contexto da Avaliação
sidebar_position: 1
---

# 1. Objetivo e Contexto

## Objetivo

Executar a Fase 1 (Planejamento) do framework GQM para definir os requisitos e o modelo de avaliação da qualidade do software **Mural UnB**, compreendendo:

- **a) Propósito da avaliação:** Validar a capacidade do sistema em entregar funcionalidades corretas (**Adequação Funcional**) com tempo de resposta otimizado (**Eficiência**) e acessibilidade multiplataforma (**Portabilidade**).
- **b) Identificação do produto:** Aplicação Web Full-stack baseada em Framework Next.js (Frontend) e Django (Backend).
- **c) Modelo de qualidade:** Seleção e priorização de 3 características principais da norma ISO/IEC 25010 (SQuaRE).

## Contexto

O Mural UnB é uma **plataforma de agregação e recomendação de oportunidades**, que centraliza e dissemina informações acadêmicas e profissionais para a comunidade da Universidade de Brasília, conectando estudantes a:

- Projetos de Extensão e Empresas Juniores (EJs);
- Laboratórios de Pesquisa e Iniciação Científica (ProIC);
- Eventos, editais e oportunidades de estágio.

**Público-alvo:** Estudantes, docentes e membros da comunidade acadêmica da UnB.

**Arquitetura:** Aplicação distribuída com interface em Next.js, lógica de negócio e Web Scraping em Django, e persistência em banco de dados relacional PostgreSQL.

## Foco da Avaliação (SQUARE)

| Característica               | Justificativa Estratégica                                                                                                                         |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Adequação Funcional**      | Essencial para garantir que as oportunidades filtradas e recomendadas sejam pertinentes e completas para o estudante.                             |
| **Eficiência de Desempenho** | Crítica para a retenção do usuário. Sistemas de busca e feeds lentos prejudicam a experiência em uma plataforma de consulta rápida.               |
| **Portabilidade**            | Vital para a inclusão digital, permitindo que o aluno acesse o mural tanto em computadores dos laboratórios da UnB quanto em dispositivos móveis. |

## Justificativa da Seleção

A escolha destas características reflete as prioridades dos _stakeholders_: o estudante necessita de uma ferramenta **útil** (Funcional), **rápida** (Eficiência) e que esteja **disponível** em qualquer dispositivo que ele possua (Portabilidade). Outras características, como Manutenabilidade ou Segurança, embora relevantes, não compõem o escopo primário desta avaliação focada na experiência de uso final.
