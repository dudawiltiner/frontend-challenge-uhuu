# Desafio Técnico - _FrontEnd Uhuu!_

## Boas vindas ao repositório do Desafio Técnico - Case da empresa Uhuu

Esse desafio foi proposto pelo time de recrutamento da empresa Uhuu, em que foram requisitadas habilidades necessáiras para desenvolver um projeto **Front-End**. O resultado final é uma aplicação em React baseado no design feito no Figma de uma plataforma para **visualizar filmes, séries e atores** com informações adquiridas da API [TMDB(The Movie Data Base)](https://developer.themoviedb.org/reference/intro/getting-started).

---

## 📌 Sumário

- [Entregáveis](#entregáveis)
- [Uso do projeto localmente](#uso-do-projeto-localmente)

---

## 🚀 Entregáveis

A solução do desafio front-end React foram utilizadas as seguintes tecnologias principais:

### Front-End

[React](https://reactjs.org/)<br>
[Typescript](https://www.typescriptlang.org/)<br>
[Next](https://nextjs.org/)<br>
[Axios](https://axios-http.com/docs/intro/)<br>
[SWR](https://swr.vercel.app/pt-BR)<br>
[Stitches](https://stitches.dev/)<br>

Na aplicação React tentei trazer algumas tecnologias que ajudam bastante no desenvolvimento e na qualidade do código que é o Eslint, Prettier, Commitzen e Commitlint. O Eslint e Prettier ajudam na qualidade de escrita do código e por isso o desenvolvimento da lógica se torna bem mais focado. O Commitizen e commitlint ajudam a deixar o controle de versionamento mais bem estrutura e descrito, sabemos o quanto commits organizados ajudam a identificar bugs e documentar avanços na aplicação, então como consequência permite dar mais atenção ao que está de fato sendo desenvolvido e ainda assim manter a qualidade do código desenvolvido. O SWR foi escolhido como ferramenta, primeiramente a título de aprendizado e como alternativa para uma aplicação simples como a que foi desenvolvida para ter o controle de cache e facilidades na chamda da API TMDB para adquirir dados da melhor forma, porém com menos recursos que o React Query. Por fim, o Stitches que ajuda na implementação CSS-IN-JS e é uma biblioteca menor e que foca na performance mais do que o Styled Components. Outra coisa que pode ser encontrada no projeto, é a sua organização baseada em Design Atômico, tornando a os componentes reutilizáveis e contextualizados.

---

## ⬇️ Uso do projeto localmente

### Clone do repositório

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:

```javascript
  mkdir desafio-uhuu
```

2. Entre no diretório que acabou de criar e depois clone o projeto:

```javascript
  cd desafio-uhuu
  git clone https://github.com/dudawiltiner/frontend-challenge-uhuu.git
```

### Rode o Desafio React

3. Entre no diretório criado após a clonagem do repositório.

```javascript
  cd frontend-challenge-uhuu
```

4. Instale as dependencias.

```javascript
  npm i
```

5. Crie um arquivo chamdo .env, usando o arquivo .env.example para cria-lo, você deve conseguir o seguinte conteúdo no arquivo:

```javascript
  NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3
  NEXT_PUBLIC_AUTH_TOKEN= SEU TOKEN DE AUTORIZAÇÃO
```

6. Realize o start da Aplicacao.

```javascript
  npm run dev
```

7. Caso queira contribuir e subir algum código, para commitar as suas modificações você pode rodar o comando a baixo, que irá passar por uma avaliação da qualidade do seu código e formatação.

```javascript
  npm run commit
```

### Aplicação em Produção

8. Acesse a aplicação em produção pelo seguinte link:
   link:
