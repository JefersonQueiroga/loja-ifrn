# lojaIFRN

Projeto de exemplo da disciplina de **Programação para Internet** (IFRN).
Uma página em React que lista produtos consumindo a [DummyJSON](https://dummyjson.com/docs/products).

Feito com [Vite](https://vite.dev) + [React](https://react.dev).

É o mesmo padrão do [pokeIFRN](https://github.com/JefersonQueiroga/poke-ifrn) — `useState` + `useEffect` + `fetch` + `map` — trocando só a API.

---

## Como rodar no Windows

O Node.js já está instalado nos computadores do laboratório. São três passos: **baixar → instalar dependências → rodar**.

Abra o **Prompt de Comando** (tecla `Windows`, digite `cmd`, Enter) e siga:

### 1. Baixar o projeto

Escolha uma pasta para guardar seus projetos e entre nela:

```cmd
cd %USERPROFILE%\Documents
mkdir projetos
cd projetos
```

Agora clone o repositório:

```cmd
git clone https://github.com/JefersonQueiroga/loja-ifrn.git
cd loja-ifrn
```

> Sem Git na máquina? Baixe pelo botão verde **Code → Download ZIP** no GitHub, extraia a pasta e entre nela com `cd`.

### 2. Instalar as dependências

```cmd
npm install
```

Esse comando baixa as bibliotecas (React, Vite…) para dentro da pasta `node_modules`. **Demora alguns minutos na primeira vez** e precisa de internet. Avisos amarelos (`warn`) são normais — só se preocupe com erros vermelhos.

Você só roda isso uma vez, ou quando o professor adicionar uma biblioteca nova ao projeto.

### 3. Rodar

```cmd
npm run dev
```

Abra o navegador em **http://localhost:5173** — ou segure `Ctrl` e clique no link do terminal.

Toda vez que você salvar um arquivo (`Ctrl + S`), a página atualiza sozinha.

**Para parar o servidor:** clique no terminal e aperte `Ctrl + C`.

### 4. Abrir o código no editor

```cmd
code .
```

---

## Estrutura do projeto

```
loja-ifrn/
├── index.html                  ponto de entrada do site
├── package.json                dependências e comandos (scripts)
├── vite.config.js              configuração do Vite
└── src/
    ├── main.jsx                liga o React ao index.html
    ├── App.jsx                 componente principal (a tela)
    ├── App.css                 estilos da tela
    ├── index.css               estilos globais
    └── components/
        ├── ProdutoCard.jsx     o card de cada produto
        └── ProdutoCard.css     estilos do card
```

A pasta `node_modules/` **não** vai para o GitHub (está no `.gitignore`).

---

## A API: DummyJSON

Endereço usado:

```
https://dummyjson.com/products?limit=20
```

Resposta:

```json
{
  "products": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 10.48,
      "rating": 2.56,
      "stock": 99,
      "thumbnail": "https://cdn.dummyjson.com/.../thumbnail.webp"
    }
  ],
  "total": 194, "skip": 0, "limit": 20
}
```

### Duas diferenças em relação à PokeAPI

| | PokeAPI (pokeIFRN) | DummyJSON (lojaIFRN) |
|---|---|---|
| Onde está a lista | `dados.results` | `dados.products` |
| A imagem | não vem — montamos a URL na mão | vem pronta em `thumbnail` |

Por isso o `map` daqui é mais curto: não precisa daquele `pokemon.url.split('/')[6]`.

### Endereços úteis para os próximos passos

| Para quê | Endereço |
|---|---|
| Buscar por nome | `https://dummyjson.com/products/search?q=phone` |
| Um produto só | `https://dummyjson.com/products/1` |
| Lista de categorias | `https://dummyjson.com/products/category-list` |
| Produtos de uma categoria | `https://dummyjson.com/products/category/smartphones` |
| Paginação | `https://dummyjson.com/products?limit=20&skip=20` |

> Os preços da DummyJSON são fictícios e estão em dólar — por isso o card mostra `US$`.

---

## Links úteis

- [Documentação do React (em português)](https://pt-br.react.dev)
- [Documentação do Vite](https://vite.dev/guide/)
- [DummyJSON — Products](https://dummyjson.com/docs/products)
