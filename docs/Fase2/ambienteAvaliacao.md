---
title: Ambiente de Avaliação
sidebar_position: 5
---

# Ambiente de Avaliação e Procedimentos

Este documento faz a ponte entre o planejamento teórico (GQM) e a execução prática (Fase 3 e Fase 4). Aqui estruturamos as ferramentas que serão utilizadas, a escala unificada de pontuação para o julgamento e o roteiro de como a avaliação deverá ser conduzida.

---

## 1. Ferramentas e Recursos de Avaliação

Para assegurar a imparcialidade e a reprodutibilidade da avaliação, utilizaremos uma combinação de auditoria automatizada e inspeção manual:

*   **Google Lighthouse (via Chrome DevTools):** Ferramenta principal para as medições quantitativas de Eficiência de Desempenho (Tempo de Resposta/LCP e TBT) e Portabilidade (Best Practices, Acessibilidade e SEO). Ele fornece um *score* inquestionável de 0 a 100.
*   **Emulação de Dispositivos (Chrome DevTools):** Utilizado para forçar visualizações mobile (ex: iPhone 12) e aplicar estrangulamento (*throttling*) de rede 4G e lentidão de CPU para emular um ambiente realista e medir a Responsividade.
*   **Testes de Caixa Preta Funcional:** Navegação guiada pelos cenários definidos no GQM para avaliar a Adequação Funcional e Completude dos dados integrados com o Crawler.
*   **Massa de Dados (Scripts Python):** Obrigatório rodar o backend localmente para que o banco SQLite esteja devidamente populado. Sem vagas cadastradas, o teste de velocidade do Lighthouse seria um "falso positivo" (rápido demais) e a checagem funcional seria impossível.

---

## 2. Matriz de Níveis de Pontuação (Escala Unificada)

Para transformar as métricas brutas coletadas em julgamentos de qualidade compreensíveis, todas as medições seguirão um esquema de níveis de pontuação unificado, variando em uma escala de 1 a 5:

| Nível | Classificação | Significado Teórico para o Produto |
| :---: | :--- | :--- |
| **5** | **Excelente** | O sistema excede as expectativas na característica avaliada. Funciona perfeitamente e serve como referência. |
| **4** | **Bom** | O sistema atende aos propósitos com folga. Possui falhas irrisórias que não impactam a experiência central do estudante. |
| **3** | **Satisfatório** | O sistema cumpre o papel mínimo, mas apresenta falhas perceptíveis que exigem esforço do usuário (workarounds) ou pequenos consertos da equipe. |
| **2** | **Insuficiente** | O sistema tem bloqueios graves. A experiência do usuário é altamente prejudicada (lentidão severa, bugs frequentes em mobile). |
| **1** | **Crítico** | Funcionalidade totalmente comprometida. O sistema é incapaz de operar para o propósito ao qual foi projetado. Refatoração urgente. |

> **Nota de Rastreabilidade:** Cada característica (Adequação, Eficiência e Portabilidade) possui, em seus respectivos arquivos, o mapeamento exato de quais valores (ex: "LCP em segundos" ou "Taxa de Sucesso em %") correspondem a cada um desses níveis (1 a 5).

---

## 3. Procedimento Metodológico de Avaliação

O cronograma e a execução prática da avaliação deverão seguir rigorosamente as etapas descritas abaixo, garantindo a reprodutibilidade do experimento:

1. **Preparação do Ambiente de Testes:** 
   - Subir o ambiente local do frontend (`cd site && npm install && npm run dev`).
   - Ativar o ambiente virtual Python, instalar dependências (`pip install -r requirements.txt`) e executar os crawlers para injetar a massa de dados.
2. **Auditoria de Desempenho e Portabilidade (Automatizada):**
   - Executar a aba *Lighthouse* no navegador para a Home e a tela de Feed de Vagas.
   - Forçar a execução na emulação Mobile (CPU e Rede limitadas) para representar a base da pirâmide de usuários, e em Desktop (Hardware integral).
   - Exportar os HTMLs originais do relatório.
3. **Coleta de Adequação Funcional (Auditoria Manual):**
   - Execução controlada dos três cenários de negócio críticos mapeados pelo GQM: Pesquisa livre; Exibição de recomendações via tag; e Verificação de completude dos campos dos cards.
   - O sucesso ou falha dessas operações deverá ser formalmente registrado através de capturas de tela das etapas transacionais.

---

## 4. Análise e Julgamento dos Resultados (Fases Posteriores)

Após a etapa 3 de Coleta de Dados, as seguintes ações definirão o julgamento formal do produto de software:

- **Consolidação de Dados (Fase 3):** Tabulação estruturada de todos os valores brutos coletados diretamente na página de relatório no Docusaurus (LCP, TBT, Scores do Lighthouse, fórmulas matemáticas aplicadas para M1/M2/M3, e anexação dos *print screens* de responsividade e completude).
- **Mapeamento de Níveis (Fase 4):** Enquadramento matemático dos valores brutos na escala unificada de Níveis de Pontuação (1 a 5), utilizando as regras rigorosas definidas nas matrizes de cada documento GQM.
- **Julgamento de Maturidade (Fase 4):** Agregação das notas e limiares das métricas para determinar formalmente o nível de maturidade global do Mural UnB em Adequação Funcional, Eficiência e Portabilidade.
- **Elaboração do Parecer Técnico (Fase 4):** Redação do relatório final oficializando as fortalezas do software (níveis 4 e 5), evidenciando as vulnerabilidades críticas (níveis 1 e 2, como os gargalos em dispositivos móveis) e consolidando recomendações precisas de refatoração para a equipe de desenvolvimento.
