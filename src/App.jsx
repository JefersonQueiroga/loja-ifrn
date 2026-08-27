import { useEffect, useState } from 'react'
import ProdutoCard from './components/ProdutoCard'
import './App.css'

function App() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    // O array vazio [] diz pro React: rode este efeito so uma vez,
    // quando o componente for montado (sem isso, rodaria a cada render).

    // A funcao do useEffect nao pode ser "async" diretamente (o React espera
    // que ela devolva nada ou uma funcao de limpeza, nunca uma Promise).
    // Por isso criamos uma funcao async aqui dentro e so chamamos ela em seguida.
    async function buscarProdutos() {
      const resposta = await fetch('https://dummyjson.com/products?limit=20')
      const dados = await resposta.json()
      setLista(dados.products)
    }

    buscarProdutos()
  }, [])

  return (
    <div className="container">
      <h1>lojaIFRN</h1>

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
