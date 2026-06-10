---
title: Consolidação Geral e Mapa de Maturidade
sidebar_position: 4
---

## 4. Consolidação Geral e Mapa de Maturidade

### 4.1. Quadro Resumo por Característica

| Característica           | M1  | M2  | M3  | Nível Consolidado | Classificação    |
| :----------------------- | :-: | :-: | :-: | :---------------: | :--------------- |
| Adequação Funcional      |  5  |  5  |  5  |       **5**       | **Excelente**    |
| Eficiência de Desempenho |  1  |  4  |  2  |       **2**       | **Insuficiente** |
| Portabilidade            |  5  |  5  |  3  |       **4**       | **Bom**          |

### 4.2. Verificação das Hipóteses

| Hipótese                                                    | Característica      | Resultado             |
| :---------------------------------------------------------- | :------------------ | :-------------------- |
| H1: Cobertura funcional > 90%                               | Adequação Funcional | ✅ Confirmada (100%)  |
| H2: Taxa de sucesso >= 95%                                  | Adequação Funcional | ✅ Confirmada (100%)  |
| H3: Aceitação >= 80%                                        | Adequação Funcional | ✅ Confirmada (100%)  |
| H1: FCP/LCP < 2,5s                                          | Eficiência          | ❌ Rejeitada (16,45s) |
| H2: TBT < 300ms                                             | Eficiência          | ❌ Rejeitada (597ms)  |
| H3: Lighthouse Performance >= 90 (desktop) e >= 80 (mobile) | Eficiência          | ❌ Rejeitada (31/46)  |
| H1: > 95% sem quebra visual                                 | Portabilidade       | ✅ Confirmada (100%)  |
| H2: Best Practices >= 90                                    | Portabilidade       | ✅ Confirmada (100)   |
| H3: SEO/Accessibility >= 85                                 | Portabilidade       | ❌ Rejeitada (83)     |

**Resultado global:** 5 de 9 hipóteses confirmadas (55,6%). As 4 rejeitadas concentram-se integralmente nas características de Eficiência de Desempenho (3 rejeições) e Portabilidade-SEO (1 rejeição).

---
