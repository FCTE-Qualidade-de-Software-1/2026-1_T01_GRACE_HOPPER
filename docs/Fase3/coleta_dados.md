---
title: Coleta de Dados e Execução
sidebar_position: 2
---

# Coleta de Dados e Execução

Esta etapa documenta a execução empírica do processo de avaliação de qualidade de software do sistema **Mural UnB**. Todo o processo seguiu os protocolos definidos no Ambiente de Avaliação estruturado na Fase 2.

## 1. Contexto da Execução

A avaliação prática ocorreu em um ambiente local controlado. 
- O **backend** (Python) atuou na sustentação de dados através dos crawlers implementados, populando a base de vagas.
- O **frontend** foi instanciado via Vite (`npm run dev`) simulando a experiência do usuário final.
- As auditorias web foram conduzidas através da ferramenta **Google Lighthouse** embutida no DevTools do navegador, garantindo imparcialidade na coleta de dados de performance, acessibilidade e SEO.

---

## 2. Coleta de Evidências: Eficiência de Desempenho e Portabilidade

Durante os testes automatizados com o Lighthouse, simulamos dois cenários de hardware e rede para extrair as métricas quantitativas reais. 

import useBaseUrl from '@docusaurus/useBaseUrl';

Abaixo, você pode explorar e interagir diretamente com os relatórios originais gerados pelo Google Lighthouse, que servem como prova empírica incontestável para a nossa avaliação:

### 2.1. Relatório de Auditoria - Mobile (Simulado)
*(Neste teste, aplicou-se o Throttling de CPU 4x e rede simulada 4G para emular a experiência de um estudante com um dispositivo intermediário).*

<iframe src={useBaseUrl('/relatorios/relatorio_lighthouse_mobile.html')} width="100%" height="600px" style={{border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px'}}></iframe>

### 2.2. Relatório de Auditoria - Desktop
*(Neste teste, a aplicação rodou sem gargalos induzidos, utilizando a capacidade máxima do hardware para avaliar a estrutura base).*

<iframe src={useBaseUrl('/relatorios/relatorio_lighthouse_desktop.html')} width="100%" height="600px" style={{border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px'}}></iframe>

### 2.3. Resumo dos Dados Brutos Extraídos (Pior Cenário - Mobile)
- **LCP (Largest Contentful Paint):** ~16.5 segundos.
- **TBT (Total Blocking Time):** ~600 ms.
- **Accessibility Score:** 95.
- **Best Practices Score:** 100.
- **SEO Score:** 83.

### 2.4. A Matemática por trás da Calculadora do Lighthouse

Para assegurar o rigor da métrica, precisamos detalhar como os tempos brutos em milissegundos extraídos na auditoria se transformam na nota agregada de Eficiência (0 a 100). Segundo a documentação oficial da Google, a pontuação é o resultado de uma média ponderada aliada a uma curva estatística log-normal.

#### 2.4.1. Distribuição de Pesos (Versão 10)
O *Performance Score* é fracionado em 5 métricas centrais, cada uma com um impacto percentual (Weighting) específico no cálculo:
- **Total Blocking Time (TBT) — 30% de Peso:** O maior peso. Soma as frações de todas as tarefas longas (acima de 50ms) do JavaScript que bloqueiam interações do usuário.
- **Largest Contentful Paint (LCP) — 25% de Peso:** Avalia quando o elemento principal da viewport é totalmente renderizado.
- **Cumulative Layout Shift (CLS) — 25% de Peso:** Avalia quebras de renderização e instabilidades.
- **First Contentful Paint (FCP) — 10% de Peso:** Mede a primeira pintura do DOM na tela.
- **Speed Index (SI) — 10% de Peso:** Calcula a velocidade do preenchimento visual durante a carga.

#### 2.4.2. A Curva Log-Normal e o HTTP Archive
A conversão do valor numérico (ex: TBT de 597ms) em uma nota de 0 a 100 não é linear. O algoritmo mapeia o valor contra o banco de dados do **HTTP Archive** (milhões de sites reais). O Lighthouse traça uma curva onde o 8º percentil dos melhores sites recebe a nota 90 (Verde), e o 25º percentil recebe 50. Como a curva é log-normal, atingir o limite da perfeição exige saltos de otimização cada vez mais altos (a "lei dos retornos decrescentes").

#### 2.4.3. Discrepância de Thresholds (Mobile vs Desktop)
Os limiares de punição (*thresholds*) divergem totalmente entre dispositivos. Por exemplo, para obter nota "Verde" no FCP em Mobile, tolera-se até 1.8 segundos; em Desktop, exige-se impressionantes 0.9 segundos. 

Esse rigor matemático explica o resultado gerado pela calculadora com os nossos dados do **Mural UnB**: injetando exatamente os mesmos números brutos (LCP em 16.451ms e TBT em 597ms), obtemos uma **nota 41 (Mobile)** e apenas **31 (Desktop)**, pois a exigência no ambiente de computador é substancialmente mais implacável.

<div style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '20px', marginBottom: '20px'}}>
  <div style={{width: '45%', minWidth: '300px'}}>
    <h4 style={{textAlign: 'center'}}>Cálculo de Curva - Mobile</h4>
    <img src={useBaseUrl('/img/lighthouse_calculator_mobile.jpeg')} alt="Calculadora Lighthouse Mobile" style={{width: '100%', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  </div>
  <div style={{width: '45%', minWidth: '300px'}}>
    <h4 style={{textAlign: 'center'}}>Cálculo de Curva - Desktop</h4>
    <img src={useBaseUrl('/img/lighthouse_calculator_desktop.jpeg')} alt="Calculadora Lighthouse Desktop" style={{width: '100%', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  </div>
</div>

### 2.5. Auditoria Visual de Responsividade (Emulação Mobile)
Além da auditoria sintética automatizada, executou-se a auditoria visual forçando a *Viewport* de um dispositivo móvel (iPhone 12 Pro) através da aba *Device Toolbar* do Chrome DevTools, extraindo capturas de tela integrais (*Full Size Screen Capture*).
- **Condições:** Simulação visual com estrangulamento de CPU/Rede aplicado.
- **Evidências Brutas Observadas:** Foram analisadas as três principais páginas do fluxo de navegação estudantil: a **Home** (Página Inicial), o **Mural** (Feed de Oportunidades) e a tela **Sobre**. Em todas elas, o layout base adaptou-se perfeitamente às margens do dispositivo. Os botões permaneceram espaçados o suficiente para o "toque" na tela (*touch targets*), e o menu de navegação colapsou corretamente.
- **Taxa de Quebra Visual Detectada (M1 da Portabilidade):** 0%. Não houve sobreposição de texto, estouro de margens (overflow horizontal) ou quebra de tabelas para fora da tela nas três páginas inspecionadas.

<div style={{display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '20px', marginBottom: '20px'}}>
  <img src={useBaseUrl('/img/home.png')} alt="Home Mobile - Full Size" style={{width: '30%', minWidth: '250px', height: 'auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <img src={useBaseUrl('/img/mural.png')} alt="Mural Mobile - Full Size" style={{width: '30%', minWidth: '250px', height: 'auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <img src={useBaseUrl('/img/sobre.png')} alt="Sobre Mobile - Full Size" style={{width: '30%', minWidth: '250px', height: 'auto', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
</div>

---

## 3. Coleta de Evidências: Adequação Funcional

Para garantir objetividade e rastreabilidade, a Adequação Funcional foi medida através de **amostragem quantitativa estruturada**, seguindo rigorosamente as métricas M1, M2 e M3 definidas no [GQM de Adequação Funcional](../Fase2/adequacao.md). Os roteiros manuais foram executados em lote, com registro formal de cada cenário, para extrair as frações matemáticas exigidas pelo modelo.

### 3.1. Rastreabilidade Métrica–Procedimento

A tabela abaixo vincula cada métrica da Fase 2 ao procedimento de coleta executado nesta fase, assegurando a consistência entre o planejamento (GQM) e a execução empírica:

| Métrica (Fase 2) | Questão GQM | Procedimento de Coleta (Fase 3) | Evidência Gerada |
| :--- | :--- | :--- | :--- |
| M1 — Cobertura Funcional Essencial (%) | Q1: Funcionalidades essenciais implementadas? | Checklist de funcionalidades mapeadas na Fase 1, verificadas individualmente na interface. | Tabela de checklist com status por funcionalidade. |
| M2 — Taxa de Sucesso Operacional (%) | Q2: Taxa de correção funcional nas operações? | Execução de lote de cenários de busca, filtro e navegação com registro de sucesso/falha. | Tabela de execução dos cenários com status individual. |
| M3 — Completude dos Dados Apresentados (%) | Q3: Informações retornadas são adequadas? | Amostragem aleatória de cards no feed, com verificação dos campos obrigatórios. | Planilha da amostra com validação por campo. |

### 3.2. Medição M1: Cobertura Funcional Essencial

**Definição (Fase 2):** `(Funcionalidades essenciais implementadas / Funcionalidades essenciais mapeadas na Fase 1) * 100`.

A equipe mapeou as funcionalidades essenciais documentadas na Fase 1 ([escopo.md — Funcionalidades Avaliadas](../Fase1/escopo.md)) e verificou individualmente a presença e acessibilidade de cada uma na interface do sistema:

| # | Funcionalidade Essencial (Fase 1) | Implementada? | Acessível na UI? | Status |
| :---: | :--- | :---: | :---: | :---: |
| 1 | Renderização inicial da página (Home) | ✅ Sim | ✅ Sim | ✅ OK |
| 2 | Mecanismo de busca e filtragem por categorias/tags | ✅ Sim | ✅ Sim | ✅ OK |
| 3 | Exibição e formatação das oportunidades (cards e detalhes) | ✅ Sim | ✅ Sim | ✅ OK |
| 4 | Responsividade da interface em dispositivos móveis | ✅ Sim | ✅ Sim | ✅ OK |
| 5 | Persistência e integridade dos dados exibidos vindos da API | ✅ Sim | ✅ Sim | ✅ OK |

- **Resultado Matemático (M1):** `(5 / 5) * 100` = **100%**.
- **Nível de Pontuação (Fase 2):** Nível **5 (Excelente)** — 100% de cobertura.

### 3.3. Medição M2: Taxa de Sucesso Operacional

**Definição (Fase 2):** `% de cenários de teste essenciais concluídos sem falhas`.

Para aferir a correção funcional e a estabilidade operacional, a equipe executou um lote de **20 cenários sequenciais**, cobrindo os três fluxos críticos definidos no GQM: pesquisa livre, filtragem por tags e navegação pelo feed. Os cenários foram distribuídos da seguinte forma:

| # | Tipo de Cenário | Ação Executada | Resultado Esperado | Status |
| :---: | :--- | :--- | :--- | :---: |
| 1–5 | Pesquisa livre | Buscar termos como "estágio", "extensão", "pesquisa", "bolsa" e "monitoria" | Resultados coerentes com o termo | ✅ 5/5 OK |
| 6–12 | Filtragem por tags | Alternar rapidamente entre tags "Estágio", "Extensão", "Pesquisa", "EJ", "IC", "Evento" e "Monitoria" | Feed atualizado sem travamento, HTTP 200 | ✅ 7/7 OK |
| 13–16 | Navegação pelo feed | Scroll contínuo, clique em cards, retorno à listagem, navegação entre páginas | Transições fluidas sem erro de carregamento | ✅ 4/4 OK |
| 17–20 | Visualização de cards | Abrir detalhes de 4 oportunidades distintas e verificar carregamento completo | Todos os campos renderizados | ✅ 4/4 OK |

- **Total de cenários executados:** 20.
- **Cenários concluídos sem falhas:** 20.
- **Resultado Matemático (M2):** `(20 / 20) * 100` = **100%**.
- **Nível de Pontuação (Fase 2):** Nível **5 (Excelente)** — 100% de sucesso, zero bugs relatados.

### 3.4. Medição M3: Completude dos Dados Apresentados

**Definição (Fase 2):** `% de vagas listadas no frontend que possuem todos os campos obrigatórios preenchidos corretamente (título, tag, link original)`.

**Critério de amostragem:** Para validar se a injeção dos dados pelos crawlers para o frontend preservou a integridade dos campos, foi realizada uma amostragem aleatória de **30 cards** dentre as vagas renderizadas no feed. A seleção foi feita por **amostragem sistemática**: a cada 3 cards exibidos durante a rolagem do feed, o próximo card era auditado, até completar 30 unidades. A validação binária verificou a presença obrigatória dos três campos definidos na Fase 2:

| Campo Obrigatório | Descrição | Presente em 30/30? |
| :--- | :--- | :---: |
| Título | Identificação textual da oportunidade | ✅ Sim (30/30) |
| Tag | Categoria de classificação (ex: Estágio, Extensão, Pesquisa) | ✅ Sim (30/30) |
| Link Original | URL de redirecionamento para a fonte da oportunidade/edital | ✅ Sim (30/30) |

- **Cards com todos os campos preenchidos:** 30 de 30.
- **Resultado Matemático (M3):** `(30 / 30) * 100` = **100%**.
- **Nível de Pontuação (Fase 2):** Nível **5 (Excelente)** — 100% de completude, todos os dados das vagas estão corretos.

### 3.5. Consolidação dos Resultados de Adequação Funcional

| Métrica | Questão GQM | Valor Obtido | Hipótese (Fase 2) | Hipótese Confirmada? | Nível (Fase 2) |
| :--- | :--- | :---: | :--- | :---: | :---: |
| M1 — Cobertura Funcional | Q1 | 100% | > 90% | ✅ Sim | 5 (Excelente) |
| M2 — Sucesso Operacional | Q2 | 100% | >= 95% | ✅ Sim | 5 (Excelente) |
| M3 — Completude dos Dados | Q3 | 100% | >= 80% | ✅ Sim | 5 (Excelente) |

---

Esses dados brutos, juntamente com os dados de Eficiência de Desempenho e Portabilidade coletados na Seção 2, seguem para a etapa de tratamento, cruzamento de níveis de qualidade e julgamento formal, que ocorre no documento da [Fase 4 — Análise dos Resultados](../Fase4/analise_resultados.md).
