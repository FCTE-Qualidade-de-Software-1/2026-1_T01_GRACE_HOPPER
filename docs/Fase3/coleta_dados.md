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

## 3. Coleta de Evidências: Adequação Funcional - PRECISA MELHORARRRR

Para afastar a subjetividade, a Adequação Funcional foi medida através de **amostragem quantitativa**. Os roteiros manuais foram executados em lote para extrair as frações matemáticas exigidas pelas métricas M1, M2 e M3 definidas no GQM.

### 3.1. Medição M1: Cobertura Funcional Essencial
A equipe mapeou as funcionalidades vitais documentadas na Fase 1 (Busca, Filtro de Tags e Visualização Completa da Vaga).
- **Fórmula GQM:** `(Funcionalidades implementadas / Funcionalidades mapeadas) * 100`
- **Coleta:** Das 3 funcionalidades críticas exigidas no escopo, as 3 foram encontradas acessíveis na interface.
- **Resultado Matemático (M1):** `(3 / 3) * 100` = **100%**.


### 3.2. Medição M2: Taxa de Sucesso Operacional
Para aferir a estabilidade (ausência de *crashes* ou falsos retornos), executou-se um lote de buscas e filtros sequenciais.
- **Fórmula GQM:** `(Cenários concluídos sem falhas / Total de execuções do lote) * 100`
- **Coleta:** A equipe executou 20 tentativas de filtragem via Tags (ex: alternando rapidamente entre "Estágio" e "Extensão"). Em 20 tentativas, o frontend não travou e o backend retornou status HTTP 200.
- **Resultado Matemático (M2):** `(20 / 20) * 100` = **100%**.


### 3.3. Medição M3: Completude dos Dados Apresentados
Para validar se a injeção do Crawler para o Frontend perdeu dados, foi feita uma amostragem direta nos *cards* renderizados.
- **Fórmula GQM:** `(Cards completos / Amostra de Cards analisados) * 100`
- **Coleta:** Foram auditados aleatoriamente 30 *cards* no feed de vagas. A validação binária verificou a presença obrigatória de: 1) Título, 2) Tag e 3) Link do Edital.
- **Observação:** Dos 30 cards, constatou-se que todos os 30 possuíam os 3 campos preenchidos.
- **Resultado Matemático (M3):** `(30 / 30) * 100` = **100%**.


---

Esses dados brutos agora seguem para a etapa de tratamento e cruzamento de níveis de qualidade, que ocorre no documento da **Fase 4 - Análise dos Resultados**.
