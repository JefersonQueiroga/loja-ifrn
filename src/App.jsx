import { useState } from 'react'
import ProdutoCard from './components/ProdutoCard'
import './App.css'

function App() {
  const [lista, setLista] = useState([])

  function buscarProdutos() {
    // fetch devolve uma Promise: os dados nao chegam na hora.
    // O primeiro .then() transforma a resposta em JSON, o segundo guarda no estado.
    fetch('https://dummyjson.com/products?limit=20')
      .then((resposta) => resposta.json())
      .then((dados) => setLista(dados.products))
  }

  return (
    <div className="container">
      <h1>lojaIFRN</h1>

      <button className="busca" onClick={buscarProdutos}>
        Buscar produtos
      </button>

      <p className="contador">{lista.length} produtos</p>

      <div className="grade">
        {lista.map((produto) => (
          <ProdutoCard
            key={produto.id}
            titulo={produto.title}
            preco={produto.price}
            desconto={produto.discountPercentage}
            nota={produto.rating}
            categoria={produto.category}
            imagem={produto.thumbnail}
          />
        ))}
      </div>
    </div>
  )
}

export default App
