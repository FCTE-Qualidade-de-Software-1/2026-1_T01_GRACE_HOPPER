---
title: Plano de Avaliação
sidebar_position: 1
---

# Fase 3 — Plano de Avaliação

Este plano define o método de avaliação do sistema **Mural UnB** para a coleta de evidências empíricas. A Fase 3 tem como função operacionalizar as métricas definidas na [Fase 2 — Modelo GQM](../Fase2/GQM.md), garantindo que os dados coletados possam ser utilizados posteriormente na [Fase 4 — Análise e Julgamento](../Fase4/analise_resultados.md).

Os procedimentos descritos neste documento não apresentam julgamentos finais sobre o produto. Os resultados numéricos, pareceres técnicos e sugestões de melhoria devem ser consolidados apenas na Fase 4, a partir das evidências coletadas.

## 1. Objetivo da Avaliação

O objetivo da avaliação é coletar evidências suficientes para responder às questões e métricas definidas na Fase 2 pelo modelo GQM. A avaliação busca verificar, de forma rastreável e reprodutível, se o Mural UnB atende ao propósito de disponibilizar oportunidades acadêmicas e profissionais de forma funcional, eficiente e acessível em diferentes ambientes de uso.

As medições realizadas nesta fase devem permitir:

- responder às questões GQM de Adequação Funcional, Eficiência de Desempenho e Portabilidade;
- comparar os dados obtidos com as rubricas de pontuação estabelecidas na Fase 2;
- gerar evidências verificáveis para os julgamentos e pareceres técnicos da Fase 4.

## 2. Escopo da Avaliação

A avaliação seguirá o escopo definido na Fase 1 e detalhado na Fase 2. Serão avaliadas as seguintes características de qualidade da ISO/IEC 25010:

| Característica | Foco da avaliação | Objetos observados |
| :--- | :--- | :--- |
| Adequação Funcional | Verificar se as funcionalidades essenciais estão disponíveis, corretas e apresentam dados completos. | Feed de oportunidades, busca, filtros/tags, cards de publicação e links de acesso. |
| Eficiência de Desempenho | Medir o tempo de carregamento, bloqueios de interação e desempenho geral da interface. | Página inicial, feed de oportunidades e carregamento dos principais elementos visuais. |
| Portabilidade | Verificar adaptação da interface a diferentes telas, navegadores e boas práticas web. | Layout responsivo, execução em navegadores, auditorias de Best Practices, Accessibility e SEO. |

Não fazem parte do foco principal desta fase a avaliação interna dos scripts de coleta de dados, da infraestrutura externa de hospedagem ou de serviços de terceiros utilizados pelo sistema. Esses elementos podem ser citados como limitações quando afetarem a interpretação dos resultados.

## 3. Ambiente de Avaliação

| Item | Definição para a avaliação |
| :--- | :--- |
| Sistema avaliado | Mural UnB. |
| Tipo de ambiente | Ambiente local/controlado ou ambiente de homologação disponível para a equipe, desde que registrado no momento da coleta. |
| Navegador principal | Google Chrome, por disponibilizar o Lighthouse e o DevTools utilizados nas medições automatizadas. |
| Navegadores complementares | Microsoft Edge e Mozilla Firefox, quando disponíveis, para inspeção manual de compatibilidade. Safari deve ser utilizado apenas se houver dispositivo compatível disponível para a equipe. |
| Dispositivos | Computador/notebook da equipe para testes desktop e emulação mobile pelo Chrome DevTools. Dispositivos físicos podem ser usados como evidência adicional, caso disponíveis. |
| Sistema operacional | Sistema operacional do equipamento usado na coleta, a ser registrado junto das evidências. No ambiente atual da equipe, a execução local ocorre em Windows. |
| Dados necessários | Base de oportunidades previamente populada, permitindo verificar feed, busca, filtros/tags, cards e links. A ausência de dados deve ser registrada como limitação, pois compromete as métricas funcionais e de desempenho. |
| Condições gerais | Executar os testes com a aplicação disponível, conexão estável, navegador atualizado e, quando aplicável, sem extensões que alterem carregamento, layout ou bloqueio de recursos. |

Para assegurar repetibilidade, cada rodada de avaliação deve registrar a data, o navegador, o dispositivo ou perfil de emulação, a página avaliada e o responsável pela coleta.

## 4. Ferramentas Utilizadas

As ferramentas foram escolhidas por serem compatíveis com as métricas definidas na Fase 2 e por gerarem evidências auditáveis.

| Ferramenta | Uso na avaliação | Evidência esperada |
| :--- | :--- | :--- |
| Lighthouse | Coletar métricas de desempenho, Best Practices, Accessibility e SEO. | Relatórios HTML exportados, como os relatórios já iniciados em `static/relatorios/`. |
| Google Chrome | Executar Lighthouse, DevTools, emulação mobile e inspeção visual. | Relatórios, capturas de tela e registro do perfil de emulação. |
| Chrome DevTools | Simular dispositivos móveis, observar layout, verificar carregamento e inspecionar erros visuais. | Capturas de tela e descrição das condições de teste. |
| Testes manuais | Verificar busca, navegação, visualização de publicação, filtros/tags e completude dos dados exibidos. | Checklist preenchido, observações e capturas de tela. |
| Checklist de funcionalidades | Padronizar a execução dos cenários de Adequação Funcional. | Tabela de casos executados com status de sucesso, falha ou observação. |
| Capturas de tela | Registrar evidências visuais de telas, falhas, responsividade ou execução correta. | Imagens organizadas por característica, métrica e cenário. |
| Relatórios exportados | Preservar os dados brutos gerados por ferramentas automatizadas. | Arquivos HTML, imagens ou tabelas anexadas ao repositório. |

Os relatórios Lighthouse já adicionados ao Docusaurus devem ser tratados como evidências de coleta já iniciadas. Eles só devem ser usados como resultado final após confirmação de que foram obtidos seguindo o procedimento definido neste plano.

## 5. Métricas Avaliadas

As métricas abaixo derivam diretamente da Fase 2. A Fase 3 define apenas como cada métrica será coletada e qual evidência deverá ser armazenada.

| Característica | Métrica | Procedimento de coleta | Ferramenta | Evidência |
| :--- | :--- | :--- | :--- | :--- |
| Adequação Funcional | M1 — Cobertura Funcional Essencial (%) | Listar as funcionalidades essenciais mapeadas na Fase 1 e verificar quais estão implementadas e acessíveis na interface. | Checklist de funcionalidades e testes manuais. | Checklist preenchido e capturas das funcionalidades acessadas. |
| Adequação Funcional | M2 — Taxa de Sucesso Operacional (%) | Executar cenários essenciais de busca, filtro/tag, navegação e visualização, registrando sucesso ou falha em cada tentativa. | Testes manuais no navegador. | Tabela de execução dos cenários, observações e capturas quando houver falha. |
| Adequação Funcional | M3 — Completude dos Dados Apresentados (%) | Selecionar amostra de publicações/cards e verificar presença dos campos obrigatórios definidos na Fase 2. | Inspeção manual e checklist. | Planilha/tabela da amostra e capturas dos cards avaliados. |
| Eficiência de Desempenho | M1 — Largest Contentful Paint (LCP) | Executar Lighthouse nas páginas selecionadas e registrar o LCP informado no relatório. | Lighthouse no Chrome DevTools. | Relatório HTML exportado e valor do LCP transcrito na coleta. |
| Eficiência de Desempenho | M2 — Total Blocking Time (TBT) | Executar Lighthouse nas mesmas condições do LCP e registrar o TBT informado no relatório. | Lighthouse no Chrome DevTools. | Relatório HTML exportado e valor do TBT transcrito na coleta. |
| Eficiência de Desempenho | M3 — Lighthouse Performance Score | Registrar a pontuação de Performance gerada pelo Lighthouse para desktop e mobile, quando ambos forem executados. | Lighthouse no Chrome DevTools. | Relatórios HTML de desktop e mobile. |
| Portabilidade | M1 — Taxa de Quebra de Layout em Mobile (%) | Avaliar telas selecionadas em perfil mobile, registrando sobreposição, corte de conteúdo, rolagem horizontal indevida ou botões inacessíveis. | Chrome DevTools, emulação mobile e capturas de tela. | Capturas das telas avaliadas e tabela de ocorrência de quebra visual. |
| Portabilidade | M2 — Lighthouse Best Practices Score | Executar Lighthouse e registrar a pontuação de Best Practices. | Lighthouse no Chrome DevTools. | Relatório HTML exportado. |
| Portabilidade | M3 — Lighthouse Accessibility & SEO Score Mínimo | Registrar as pontuações de Accessibility e SEO e considerar o menor valor, conforme definido na Fase 2. | Lighthouse no Chrome DevTools. | Relatório HTML exportado e tabela de consolidação. |

## 6. Procedimentos de Avaliação

1. Preparar o ambiente de execução do Mural UnB, garantindo que a aplicação esteja acessível e que exista massa de dados suficiente para avaliar feed, busca, filtros/tags e cards.
2. Registrar as condições da coleta: data, responsável, sistema operacional, navegador, dispositivo ou perfil de emulação, página avaliada e versão/URL do sistema.
3. Acessar o sistema Mural UnB pelo navegador definido para a rodada de teste.
4. Executar o Lighthouse nas páginas selecionadas, no perfil desktop e, quando aplicável, no perfil mobile.
5. Exportar os relatórios gerados pelo Lighthouse em HTML e armazená-los no repositório, preferencialmente em diretório de evidências ou em `static/relatorios/` quando forem exibidos no Docusaurus.
6. Registrar em tabela os valores brutos de LCP, TBT, Performance Score, Best Practices, Accessibility e SEO.
7. Executar os casos de uso manuais definidos neste plano, registrando sucesso, falha, comportamento inesperado ou limitação observada.
8. Capturar evidências visuais das telas avaliadas, principalmente quando houver quebra de layout, falha funcional ou comportamento relevante para a análise.
9. Verificar a completude dos dados exibidos em uma amostra de publicações/cards, conforme a métrica M3 de Adequação Funcional.
10. Comparar os dados coletados com as rubricas de pontuação da Fase 2 apenas na etapa de análise da Fase 4.
11. Registrar eventuais limitações da coleta, como indisponibilidade de navegador, ausência de dispositivo físico, massa de dados reduzida ou diferença entre ambiente local e produção.

## 7. Casos de Uso Avaliados

| Caso de uso | Objetivo | Características relacionadas | Evidência esperada |
| :--- | :--- | :--- | :--- |
| Acessar a página inicial/feed | Verificar carregamento inicial e disponibilidade da interface principal. | Adequação Funcional, Eficiência de Desempenho e Portabilidade. | Relatório Lighthouse, captura de tela e observação da execução. |
| Realizar busca | Verificar se a busca retorna resultados coerentes e sem falhas operacionais. | Adequação Funcional. | Checklist com status da busca e captura em caso de falha. |
| Utilizar filtros ou tags | Verificar se a navegação por categorias/tags altera corretamente os resultados exibidos. | Adequação Funcional. | Checklist de execução e observações. |
| Visualizar uma publicação | Verificar se os dados essenciais da oportunidade são apresentados de forma completa. | Adequação Funcional. | Captura da publicação/card e registro dos campos observados. |
| Navegar pela interface | Verificar se menus, links e fluxo entre telas funcionam sem bloqueios. | Adequação Funcional e Portabilidade. | Checklist de navegação. |
| Testar responsividade | Verificar adaptação visual em perfil mobile e desktop. | Portabilidade. | Capturas de tela e tabela de quebras de layout. |
| Testar diferentes navegadores/dispositivos | Verificar compatibilidade básica fora do navegador principal. | Portabilidade. | Registro do navegador/dispositivo e observações de comportamento. |

## 8. Cronograma de Execução

| Atividade | Responsável | Data prevista | Evidência esperada |
| :--- | :--- | :--- | :--- |
| Revisar métricas, questões e rubricas da Fase 2 | Equipe de avaliação | Início da Fase 3 | Lista final de métricas rastreadas. |
| Preparar ambiente e massa de dados | Responsável técnico pela execução | Antes da coleta | Registro do ambiente e observação sobre disponibilidade de dados. |
| Executar Lighthouse em desktop e mobile | Responsável pela coleta automatizada | Durante a Fase 3 | Relatórios HTML exportados e tabela de métricas brutas. |
| Executar testes manuais de funcionalidades | Responsável pela coleta funcional | Durante a Fase 3 | Checklist preenchido e capturas de tela. |
| Executar inspeção de responsividade e compatibilidade | Responsável pela coleta de portabilidade | Durante a Fase 3 | Capturas de tela e registro de navegadores/dispositivos. |
| Organizar evidências no repositório e Docusaurus | Equipe de documentação | Final da Fase 3 | Links para relatórios, imagens e tabelas de coleta. |
| Encaminhar dados para análise da Fase 4 | Equipe de avaliação | Transição para a Fase 4 | Conjunto de dados brutos e consolidados prontos para julgamento. |

## 9. Rastreabilidade com a Fase 2

Cada métrica avaliada nesta fase deriva das métricas definidas na Fase 2. A Fase 3 não altera o modelo GQM: ela transforma as métricas planejadas em procedimentos de coleta, ferramentas e evidências verificáveis.

| Documento da Fase 2 | Questões/Métricas relacionadas | Como a Fase 3 mantém a rastreabilidade |
| :--- | :--- | :--- |
| [Adequação Funcional](../Fase2/adequacao.md) | M1, M2 e M3 sobre cobertura funcional, sucesso operacional e completude dos dados. | Define checklists, cenários manuais e amostras de cards/publicações para coletar os percentuais previstos. |
| [Eficiência de Desempenho](../Fase2/eficiencia.md) | M1, M2 e M3 sobre LCP, TBT e Performance Score. | Define execução do Lighthouse, registro dos valores brutos e preservação dos relatórios exportados. |
| [Portabilidade](../Fase2/portabilidade.md) | M1, M2 e M3 sobre quebra de layout, Best Practices e Accessibility/SEO. | Define inspeção mobile, testes de compatibilidade e coleta dos scores do Lighthouse. |
| [Ambiente de Avaliação](../Fase2/ambienteAvaliacao.md) | Ferramentas, recursos e escala de pontuação. | Consolida o ambiente e explicita como as evidências serão obtidas para posterior comparação com as rubricas. |

Essa rastreabilidade também mantém coerência com a Fase 1, pois as características selecionadas, o propósito da avaliação e os objetos avaliados continuam sendo os mesmos definidos no escopo inicial do projeto.

## 10. Relação com a Fase 4

Os dados coletados na Fase 3 serão utilizados na Fase 4 para:

- calcular e consolidar as métricas do modelo GQM;
- responder às questões de avaliação definidas na Fase 2;
- comparar os valores obtidos com as rubricas de pontuação;
- elaborar julgamentos por característica de qualidade;
- fundamentar os pareceres técnicos;
- propor sugestões de melhoria para o Mural UnB.

Assim, a Fase 3 atua como ponte entre o planejamento teórico da Fase 2 e o julgamento técnico da Fase 4. A validade dos pareceres finais depende da clareza dos procedimentos, da organização das evidências e da correspondência direta entre cada dado coletado e sua métrica de origem.
