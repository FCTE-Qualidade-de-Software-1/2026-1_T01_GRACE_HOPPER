# Portabilidade — Modelo GQM

## Objetivo GQM
- Analisar o sistema Mural UnB
- Com o propósito de avaliar compatibilidade e adaptabilidade em diferentes ambientes e navegadores
- Com respeito a Portabilidade (adaptabilidade, instalabilidade, substituibilidade)
- Sob o ponto de vista de Estudantes da UnB
- No contexto de acesso via navegadores desktop e mobile e diferentes sistemas operacionais

## Questões
1. O sistema mantém funcionalidade e apresentação aceitáveis nos navegadores e versões alvo (Chrome, Firefox, Edge, Safari) e em dispositivos móveis?
2. Existem diferenças funcionais ou de usabilidade significativas entre plataformas que afetem o acesso?
3. O processo de deploy/instalação (back-end) e configuração em ambientes alvo é reproduzível e documentado?
4. Quais componentes (CSS, JS, chamadas API) causam maior incompatibilidade entre plataformas?

## Hipóteses
1. As funcionalidades essenciais são executadas corretamente nas versões de navegador alvo (>= 90% das funções testadas sem erros específicos de navegador).
2. A interface é adaptativa e utilizável em tamanhos de tela mobile padrão sem perda de funcionalidade crítica.
3. O deploy em ambientes documentados (ex.: Docker/CI) é reproduzível com as instruções existentes no repositório.
4. Incompatibilidades são primariamente de apresentação (CSS) e não de lógica de negócio.

## Métricas
- M1 — Taxa de compatibilidade funcional por navegador: (% funcionalidades essenciais funcionando por navegador).
- M2 — Número de defeitos específicos de navegador/ambiente detectados (contagem).
- M3 — Percentual de resoluções/tamanhos de tela com layout comprometido identificado por checklist simples (ex.: pass/fail por breakpoint).
- M4 — Tempo/complexidade para replicar deploy (horas ou passos documentados).

## Tabela resumida

| Questão | Métrica(s) principal(is) | Rubrica (exemplo) |
|---|---|---|
| Compatibilidade por navegador | M1: % funções funcionando por navegador | 5: >=98% — 1: <70% |
| Diferenças entre plataformas | M2: defeitos por navegador | 5: 0–1 — 1: >=20 |
| Layout/responsividade | M3: % breakpoints com problema | 5: 0–1% — 1: >20% |
| Reprodutibilidade do deploy | M4: tempo/complexidade do deploy | medição em horas/etapas documentadas |

_Tabela — Resumo das questões, métricas e rubricas para Portabilidade._

## Diagrama

![Diagrama GQM — Portabilidade](diagrams/portabilidade.png)

_Figura — Diagrama GQM para Portabilidade._
