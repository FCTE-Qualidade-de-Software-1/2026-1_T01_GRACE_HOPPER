---
title: Julgamento Final e Conclusões
sidebar_position: 6
---

## 6. Julgamento Final, Conclusões e Sugestões de Melhoria

### 6.1. Julgamento Final do Produto

O **Mural UnB** é um produto de software **funcionalmente maduro e visualmente portável**, com excelência na integração Crawler→API→Frontend e na aderência a boas práticas web. No entanto, apresenta uma **vulnerabilidade crítica na Eficiência de Desempenho** que compromete diretamente a experiência do usuário mobile — o perfil prioritário definido na Fase 1.

| Classificação Final | Justificativa                                                                                  |
| :------------------ | :--------------------------------------------------------------------------------------------- |
| **Fortalezas**      | Adequação Funcional Excelente (5); Layout Responsivo perfeito (0% quebra); Best Practices 100. |
| **Fragilidades**    | LCP de 16,45s (Nível 1); Performance Score 46 Mobile / 31 Desktop (Nível 2); SEO 83 (Nível 3). |

### 6.2. Conclusões

1. **A Adequação Funcional é o ponto mais forte do sistema.** O Mural UnB cumpre integralmente sua missão de centralizar e apresentar oportunidades acadêmicas. A integração entre crawlers, API Django e frontend Next.js é estável, sem falhas operacionais nos 20 cenários testados e com 100% de integridade nos dados exibidos.

2. **A Portabilidade está em nível Bom, com ajuste pontual necessário no SEO.** O layout responsivo e as boas práticas web estão em nível de excelência. O único ponto de melhoria é elevar o SEO Score de 83 para ≥85, o que requer intervenções simples em meta-tags.

3. **A Eficiência de Desempenho é a principal vulnerabilidade.** O LCP de 16,45 segundos é o indicador mais preocupante. Ele decorre da combinação de imagens não otimizadas, ausência de _lazy loading_ e bundles JavaScript pesados que não utilizam _code splitting_. Essa deficiência impacta diretamente a missão da plataforma, pois afeta desproporcionalmente os estudantes com dispositivos de menor capacidade computacional.

### 6.3. Sugestões de Melhoria — Ações Concretas

As ações abaixo são ordenadas por **prioridade de impacto** e vinculadas diretamente aos dados da avaliação:

#### Prioridade 1 — Crítica (Eficiência de Desempenho)

| Ação                                          | Métrica Impactada          | Impacto Esperado                                                                     | Módulo/Arquivo Alvo                         |
| :-------------------------------------------- | :------------------------- | :----------------------------------------------------------------------------------- | :------------------------------------------ |
| **Otimizar e comprimir imagens do feed**      | M1 (LCP)                   | Redução do LCP de ~16s para < 4s ao converter imagens para WebP/AVIF com compressão. | `site/` — componentes de cards e imagens    |
| **Implementar Lazy Loading nos cards**        | M1 (LCP), M3 (Performance) | Carregar imagens e cards sob demanda, reduzindo o peso da carga inicial.             | `site/` — componente Feed e lista de cards  |
| **Aplicar Code Splitting nos bundles JS**     | M2 (TBT)                   | Fragmentar os pacotes JavaScript para reduzir TBT de 597ms para < 200ms.             | `next.config.js` — configuração de _chunks_ |
| **Ativar compressão Gzip/Brotli no servidor** | M3 (Performance)           | Reduzir o tamanho dos assets transferidos, melhorando Speed Index e FCP.             | Configuração do servidor/Vercel             |
| **Implementar caching de assets estáticos**   | M1, M3                     | Carregamentos subsequentes praticamente instantâneos com cache de longa duração.     | Headers HTTP (`Cache-Control`)              |

#### Prioridade 2 — Média (Portabilidade — SEO)

| Ação                                                 | Métrica Impactada | Impacto Esperado                                               | Módulo/Arquivo Alvo              |
| :--------------------------------------------------- | :---------------- | :------------------------------------------------------------- | :------------------------------- |
| **Adicionar meta-descriptions em todas as páginas**  | M3 (SEO)          | Aumentar SEO Score de 83 para ≥ 90.                            | `site/` — componentes `<Head>`   |
| **Completar atributos `alt` em imagens secundárias** | M3 (SEO/A11y)     | Melhorar descritibilidade para indexadores e leitores de tela. | Templates JSX de imagens         |
| **Adicionar dados estruturados (Schema.org)**        | M3 (SEO)          | Melhorar a indexação semântica das oportunidades publicadas.   | Componentes de cards/publicações |

#### Prioridade 3 — Baixa (Manutenção Contínua)

| Ação                                                    | Justificativa                                                                       |
| :------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| **Automatizar auditorias Lighthouse no CI/CD**          | Detectar regressões de performance automaticamente antes de cada deploy.            |
| **Monitorar Core Web Vitals em produção (CrUX/RUM)**    | Obter dados reais de campo para complementar os dados de laboratório do Lighthouse. |
| **Revisar periodicamente a base de dados dos crawlers** | Garantir que a completude dos dados (M3) se mantenha em 100% ao longo do tempo.     |

---

### 7. Rastreabilidade Completa (Fase 1 → Fase 2 → Fase 3 → Fase 4)

| Fase   | Artefato                                                 | Contribuição para a Fase 4                                               |
| :----- | :------------------------------------------------------- | :----------------------------------------------------------------------- |
| Fase 1 | [Propósito da Avaliação](../Fase1/propositoAvaliacao.md) | Define o _uso pretendido_ que orienta o julgamento final (Seção 5).      |
| Fase 1 | [Escopo e Objetos](../Fase1/escopo.md)                   | Lista as funcionalidades avaliadas em M1 da Adequação Funcional.         |
| Fase 1 | [ODS Relacionados](../Fase1/ods.md)                      | Contextualiza o impacto social das deficiências de desempenho (Seção 5). |
| Fase 2 | [Adequação Funcional GQM](../Fase2/adequacao.md)         | Fornece Q1-Q3, H1-H3, M1-M3 e os Níveis de Pontuação (Seção 3.1).        |
| Fase 2 | [Eficiência de Desempenho GQM](../Fase2/eficiencia.md)   | Fornece Q1-Q3, H1-H3, M1-M3 e os Níveis de Pontuação (Seção 3.2).        |
| Fase 2 | [Portabilidade GQM](../Fase2/portabilidade.md)           | Fornece Q1-Q3, H1-H3, M1-M3 e os Níveis de Pontuação (Seção 3.3).        |
| Fase 2 | [Ambiente de Avaliação](../Fase2/ambienteAvaliacao.md)   | Define ferramentas e escala unificada usada no julgamento.               |
| Fase 3 | [Plano de Avaliação](../Fase3/plano_avaliacao.md)        | Define o método e cronograma seguidos na coleta (Seção 1).               |
| Fase 3 | [Coleta de Dados](../Fase3/coleta_dados.md)              | Fornece todos os dados brutos processados nesta Fase 4 (Seção 2).        |
