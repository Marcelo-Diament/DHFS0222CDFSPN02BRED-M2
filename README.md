# DHFS0222CDFSPN02BRED-M2

Resolução prática PG do módulo 02 - Introdução a Node e JavaScript - da turma FS0222CDFSPN02BRED

___

## Objetivo

Pôr em prática os conceitos aprendidos ao longo do módulo "Introdução ao Node e JavaScript" através das práticas propostas no PG.

## Pré Requisitos

O que é necessário para acompanhar a prática?

* Ter as ferramentas instaladas em ambiente local (*node.js*, *npm*, *VSCode*, *gitBash*)

* Ter uma conta no gitHub (ou similar) para versionar o projeto

* Consumir o conteúdo do PlayGround

* Assistir as aulas síncronas

## Enunciados

Replicação dos enunciados para facilitar a compreensão dos exercícios.

### Módulo 02 | Aula 01

Práticas referentes a Aula 01

#### Parte 01

* No terminal verificar se o *node* foi instalado (`node -v`)

* Criar pasta para projeto, chamada CineHouse (`mkdir CineHouse`)

* Criar arquivo chamado *cinema.js* (`cd CineHouse && touch cinema.js`), nele criar uma variável chamada cinema e esta deverá receber um valor como nome da loja

#### Parte 02

* Executar `npm init` e verificar as mudanças que ocorreram na pasta e arquivos novos adicionados ao projeto

* No arquivo *cinema.js* passar a variável anteriormente criada como parâmetro do `console.log`, a fim de que ao executar o arquivo

* Executar o arquivo

* Instalar o pacote *nodemon* (`npm i -d nodemon`)

* Analisar a pasta *node_modules*

### Módulo 02 | Aula 02

Práticas referentes a Aula 02

#### Parte 01

* No arquivo criado na última aula (*cinema.js*), deve ser criada uma variável do tipo *array* chamada catalogo. Esta será um *array* de objetos, onde cada objeto representará um filme.

* O filme deve conter os seguintes atributos:

  a. `codigo` (numérico - identificador do filme)

  b. `titulo` (*string*)

  c. `duracao` (numérico - em horas)

  d. `atores` (*array* de *strings* - nomes)

  e. `anoDeLancamento` (numérico)

  f. `emCartaz` (*booleano*)

* Deverão ser criados dois registros de filmes (de acordo com sua preferência). É importante apenas que um deles receba o valor de `true` na propriedade `emCartaz` e o outro o valor `false`.

#### Parte 02

* `adicionarFilme` | A função deve receber os parâmetros com as informações necessárias para criar um objeto do tipo Filme.

* `buscarFilme` | A função deve receber como parâmetro o número identificador do filme e fazer busca no *array* de catálogo e ao fim retornar o objeto encontrado. Preferencialmente, retorne de forma mais amigável ao usuário final (pode utilizar `console` para não retornar apenas o objeto).

* `alterarStatusEmCartaz` | A função deve receber como parâmetro o número identificador do filme escolhido, buscar o filme com base no parâmetro recebido e alterar o status existente da propriedade `emCartaz` (se estava como `true`, alterar para `false`, e vice e versa).

#### Parte 03

* Criar uma pasta nova - *Calculadora* - (separa dos projetos anteriores para perdermos onde essa prática será feita).

* Criar um arquivo *somar.js* que contenha uma função chamada `somar`, a qual deve ser exportada ao final do arquivo. Esta função deve receber 2 parâmetros e retornar a soma dos mesmos.

* Criar um arquivo *subtrair.js* que contenha uma função chamada `subtrair`, a qual deve ser exportada ao final do arquivo. Esta função deve receber 2 parâmetros e retornar a diferença entre eles.

* Criar um arquivo *multiplicar.js* que contenha uma função chamada `multiplicar`, a qual deve ser exportada ao final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos.

* Criar um arquivo *dividir.js* que contenha uma função chamada `dividir`, a qual deve ser exportada ao final do arquivo. Esta função deve receber 2 parâmetros e retornar a divisão dos mesmos. Importante: contemplar o cenário em que se algum dos dois parâmetros é zero, a função
retornará "Não se pode dividir por zero".

> **ERRATA**: na realidade, apenas o segundo parâmetro não pode ser 0. Isso por que não se pode dividir um número por 0, mas **é possível dividir 0 por qualquer número (que não seja 0)**.

#### Parte 04

* Criar um arquivo *calculadora.js* (`touch calculadora.js`), em que devemos importar os quatro arquivos feitos anteriormente.

* Executar a função que permite somar e a função que permite subtrair, passando como argumentos dois números quaisquer. Mostrar no *console* os resultados.

* Executar a função que permite multiplicar, passando como argumentos dois números quaisquer. Mostrar no *console* o resultado.

* Executar a função que permite multiplicar, passando agora como um dos dois argumentos, o número zero. Mostrar no *console* o resultado.

* Executar a função que permite dividir, passando como argumentos dois números quaisquer. Mostrar no *console* o resultado.

* Executar a função que permite dividir, passando agora como um dos dois argumentos, o número zero. Mostrar no *console* o resultado.

## Changelog

Registro de alterações (em ordem cronológica decrescente).

### Módulo 02 - Aula 02 - CineHouse e Calculadora | Extra

* **doc: [#M2A02] Adicionando enunciados da Aula 02 do Módulo 02**
_Adicionando os enunciados da Aula 02 do Módulo 02 (projetos CineHouse e Calculadora) e atualizando o changelog._

### Módulo 02 - Aula 01 - CineHouse | Extra

* **doc: [#M2A01] Adicionando enunciados da Aula 01 do Módulo 02**
_Adicionando os enunciados da Aula 01 do Módulo 02 e atualizando o changelog._

### Módulo 02 - Aula 02 - Calculadora | Extra

* **doc: [#M2A02-pt04] Adicionando documentação**
_Adicionando detalhes sobre as etapas realizadas na parte 04, Calculadora (changelog)._

### Módulo 02 - Aula 02 - Calculadora | Parte 04

* **feat: [#M2A02-pt04] Executando `dividir` - com num2 recebendo 0 - em *calculadora.js***
_Movendo o teste de dividir.js (usando num2 como 0) para calculadora.js._

* **feat: [#M2A02-pt04] Executando `dividir` em *calculadora.js***
_Importando o arquivo dividir.js e movendo o teste de dividir.js para calculadora.js._

* **feat: [#M2A02-pt04] Executando `multiplicar` em *calculadora.js***
_Importando o arquivo multiplicar.js e movendo o teste de multiplicar.js para calculadora.js._

* **feat: [#M2A02-pt04] Executando `subtrair` em *calculadora.js***
_Importando o arquivo subtrair.js e movendo o teste de subtrair.js para calculadora.js._

* **feat: [#M2A02-pt04] Executando `somar` em *calculadora.js***
_Importando o arquivo somar.js e movendo o teste de somar.js para calculadora.js._

* **feat: [#M2A02-pt04] Adicionando arquivo *calculadora.js***
_Criando o arquivo `calculadora.js` ._

### Módulo 02 - Aula 02 - Calculadora | Extra

* **fix: [#M2A02-pt03] Ajustando título da etapa de documentaçao da Calculadora no *changelog***
_Atualizando o título "Módulo 02 - Aula 02 - Calculadora | Extra" e atualizando o changelog._

* **doc: [#M2A02-pt03] Adicionando documentação**
_Adicionando detalhes sobre as etapas realizadas na parte 03, Calculadora (changelog)._

### Módulo 02 - Aula 02 - Calculadora | Parte 03

* **feat: [#M2A02-pt03] Adicionando função `dividir` com condicional e testando**
_Criando a função `dividir` - que recebe 2 números e retorna a divisão (a menos que o segundo número seja 0) - e testando._

* **feat: [#M2A02-pt03] Adicionando função `multiplicar` e testando**
_Criando a função `multiplicar` - que recebe 2 números e retorna a multiplicação - e testando._

* **feat: [#M2A02-pt03] Adicionando função `subtrair` e testando**
_Criando a função `subtrair` - que recebe 2 números e retorna a subtração - e testando._

* **feat: [#M2A02-pt03] Criando projeto Calculadora, adicionando função `somar` e testando**
_Criando a pasta `Calculadora` e a função `somar` - que recebe 2 números e retorna a soma - e testando._

### Módulo 02 - Aula 02 - CineHouse | Extra

* **doc: [#M2A02] Adicionando documentação**
_Adicionando detalhes sobre as etapas realizadas (changelog)._

### Módulo 02 - Aula 02 - CineHouse | Parte 02

* **feat: [#M2A02-pt02] Adicionando função `alterarStatusEmCartaz` e testando**
_Criando a função `alterarStatusEmCartaz` - que recebe um código e modifica o valor da propriedade `emCartaz` - e testando._

* **feat: [#M2A02-pt02] Adicionando função `buscarFilme` e testando**
_Criando a função `buscarFilme` - que recebe um código e retorna o filme identificado - e testando._

* **feat: [#M2A02-pt02] Adicionando função `adicionarFilme` e testando**
_Criando a função `adicionarFilme` - que recebe um objeto com um novo filme e adiciona ao `catalogo` - e testando._

### Módulo 02 - Aula 02 - CineHouse | Parte 01

* **feat: [#M2A02-pt01] Adicionando *Array* catalogo com 2 filmes**
_Atribuindo um array com 2 objetos (que representam filmes) à variável `catalogo` ._

### Módulo 02 - Aula 01 - CineHouse | Extra

* **doc: [#M2A01] Adicionando documentação**
_Adicionando detalhes sobre a prática e as etapas realizadas (changelog)._

### Módulo 02 - Aula 01 - CineHouse | Parte 02

* **feat: [#M2A01-pt02] Adicionando *nodemon* como dependência de desenvolvimento**
_Instalando nodemon como devDependency com `npm i -d nodemon` ._

* **feat: [#M2A01-pt02] Exibindo valor da variável cinema com `console.log()`**
_Exibindo o valor de `cinema` com `console.log()` ._

* **feat: [#M2A01-pt02] Adicionando `package.json`**
_Criação do `package.json` ._

### Módulo 02 - Aula 01 - CineHouse | Parte 01

* **feat: [#M2A01-pt01] Adicionaendo nome do cinema**
_Criação da pasta CineHouse e do arquivo `cinema.js` ._
_Criação da variável `cinema` , quer recebe o nome do cinema._
