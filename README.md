# MaisTODOS challenge-frontend-react

## O que foi desenvolvido

Foi desenvolvido uma loja utilizando os produtos cadastradaos na [fakestoreapi](https://fakestoreapi.com/). Eu criei uma api para fazer a gestão dos produtos e possibilitar a compra desses produtos.

## Como rodar

subir a aplicação em modo desenvolvimento

```
docker compose up
```

subir a aplicação em modo produção

```
docker compose -f docker-compose.yml -f docker-compose.prod.yml up
```

## Ferramentas utilizadas

Tentei seguir a risca as bibliotecas requeridas no teste.

- Criei o projeto utilizando `create-react-app`.
- Utilizei `react-router` para fazer o roteamento das páginas.
- Utilizei `react-hook-forms` para fazer o gerenciamento dos formulários.
- Fiz a validação dos itens do formulário com `zod`.
- Utilizei `react-query` para fazer o cacheamento das requisições.
- Fiz o gerenciamento do contexto da aplicação com zustand.
- Para requests para a api utilizei `axios`.
- Utilizei `styled-components` para fazer a estilização dos componentes.
- Testes foram feitos utilizando `Jest + testing-library`.
- Criei a API utilizando `express + typescrypt`.
- Utilizei `mongoDB` como ferramenta de banco de dados para salvar as compras do usuário.
- Por fim, utilizei docker para rodar a aplicação e gerar os stages de produção e desenvolvimento do projeto.

## Melhorias pendentes

A maioria das pendencias foi por falta de tempo, a seguir o que eu gostaria de ter feito para complementar o teste.

- Fazer login e passar o id do usuário correto para ser salvo no banco de dados.
- Implementar a integração com a Stripe, infelizmente não tive tempo para terminar.
- Melhorias na usabilidade, criar componente de loading e uma página de erro para servir de fallback para o react-router.
- Ter os produtos salvos no mongo para aumentar a velocidade de entrega nas requisições.
- Implementar camada de redis para fazer o cache do retorno da API
- Listar as compras do usuário
- Fazer os testes na API
