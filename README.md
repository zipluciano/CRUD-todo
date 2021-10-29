# TODO APP CRUD

Esta aplicação do tipo "TODO List", foi construída com a Stack React | Node | PostgreSQL | Express. O foco era aprender como realizar um CRUD e construir uma API, envolvendo somente JavaScript e o banco Postgres.

## Instalando Dependências

- Para utilizar o projeto é necessário possuir o banco de dados PostgreSQL versão 13.2 ou superior
- Node versão 14.17.5 ou superior

## Utilização

Primeiro é necessário clonar este repositório

`git clone https://github.com/zipluciano/CRUD-todo.git`

Tanto na pasta `./server` quanto `./client` executar o comando `npm install` para baixar as dependências do projeto

Dentro da pasta `./server` utilizar o comando `npm install dotenv` e na mesma pasta criar um arqivo chama `.env` com as informações da base de dados. Mais informações sobre arquivos dotenv você encontra aqui https://github.com/motdotla/dotenv

Para utilizar a aplicação basta rodar o comando `npm start` tanto no pasta `./server` como `./client`

## App

#### Home Page

<img src='./images/home_page.png'>

#### Tarefas existentes

<img src='./images/tarefas_listadas.png'>

#### Edição de tarefas

<img src='./images/edicao_tarefas.png'>

#### Tarefas editadas

<img src='./images/tarefas_editadas.png'>

#### Tarefas no banco de dados

<img src='./images/tarefas_banco.png'>

### Consulta na API pelo Postman

<img src='./images/tarefas_API.png'>
