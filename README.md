# 🧮 Calculadora - Angular 19

Este projeto é uma **calculadora web interativa**, desenvolvida com **Angular 19**, com forte ênfase na componentização, experiência de usuário e modularidade. Ela realiza operações matemáticas básicas de maneira fluida, com gerenciamento completo de estados e memória de cálculo.

---

## 🚀 Tecnologias Utilizadas

- **Angular 19** com `standalone components`
- **TypeScript** moderno
- **SCSS** com organização modular
- **Bootstrap 5** como framework CSS para estilização responsiva
- Arquitetura baseada em **componentes reutilizáveis e desacoplados**

---

## 🎨 Interface Visual

A aplicação foi estilizada utilizando o **framework Bootstrap**, que facilitou:

- Layout responsivo com `grid system`
- Estilização de botões com variações de `btn-primary`, `btn-warning`, etc.
- Estrutura visual clara com `form-control`, `container`, e `display` amigáveis

---

## 🎯 Funcionalidades

- Interface limpa e responsiva
- Teclado numérico e de operações totalmente componentizado
- Execução de operações matemáticas básicas (`+`, `-`, `*`, `/`)
- Validação semântica para entradas de ponto flutuante
- Armazenamento de estado interno para:
  - Primeiro número (`calculo1`)
  - Segundo número (`calculo2`)
  - Operação selecionada (`+`, `-`, etc.)
  - Resultado (`resultado`)
- Exibição de:
  - Campo de entrada (`expression`) para digitação
  - Painel de memória (`historico`) com operação ativa e resultados
- Regras de comportamento inteligentes:
  - Não permite múltiplos pontos ou operadores seguidos
  - Calcula automaticamente valores intermediários em sequência de operações
  - Permite reutilizar o último resultado como entrada para uma nova operação
  - Reinicialização total com o botão `C`

---

## 🧩 Arquitetura dos Componentes

### `NumericButtonComponent`
Componente responsável pelos botões numéricos (`0-9` e `.`):
- Recebe o valor (`label`) a ser exibido
- Recebe a expressão atual
- Emite um novo valor concatenado ao componente pai

### `OperacaoButtonComponent`
Gerencia os botões de operação (`+`, `-`, `*`, `/`, `C`):
- Define cor automaticamente com base na operação
- Emite comandos para cálculos ou limpeza via `@Output()`
- Não contém lógica de cálculo, apenas dispara ações

### `FormularioComponent` (componente principal)
Controla toda a lógica da calculadora:
- Recebe os eventos dos botões filhos
- Armazena os valores de operação
- Executa os cálculos e gerencia a exibição

---

## 🔧 Lógica Implementada

### 1. Ao clicar em uma **operação**:
- Se houver um `resultado` e um novo número (`expression`), o cálculo é feito
- Caso contrário, apenas a operação é armazenada junto com o número anterior

### 2. Ao clicar em **igual (`=`)**:
- A operação é realizada somente se ambos `calculo1` e `calculo2` estiverem definidos
- O resultado é exibido e armazenado em `historico`

### 3. Ao clicar em **`C`**:
- Todos os campos são limpos
- A memória (`historico`) volta para `= 0`

### 4. Operações consecutivas:
- Caso o usuário digite novo número antes de pressionar `=`, ao clicar em uma nova operação:
  - A operação anterior será executada automaticamente
  - O resultado será utilizado como base da nova operação

---

## 🧪 Pré-requisitos para execução local

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

```bash
npm install
ng serve --o

Abrir uma Issue descrevendo o problema ou a sugestão. Criar um Pull Request com suas alterações.

✉️ Contato Se você tiver alguma dúvida sobre o projeto ou a implementação da calculadora, sinta-se à vontade para entrar em contato:

Rodrigo Barcellos - GitHub: rbarcellos84 Portfolio: https://rbarcellos84.github.io/Rocketseat-Portfolio/
