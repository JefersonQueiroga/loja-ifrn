import ProdutoCard from './components/ProdutoCard'
import './App.css'

// Os produtos ainda sao fixos - o foco agora e o componente, nao o fetch.
const produtos = [
  {
    id: 1,
    title: 'Essence Mascara Lash Princess',
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    category: 'beauty',
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
  },
  {
    id: 2,
    title: 'Eyeshadow Palette with Mirror',
    price: 19.99,
    discountPercentage: 18.19,
    rating: 2.86,
    category: 'beauty',
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
  },
  {
    id: 3,
    title: 'Powder Canister',
    price: 14.99,
    discountPercentage: 9.84,
    rating: 4.64,
    category: 'beauty',
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp',
  },
  {
    id: 4,
    title: 'Red Lipstick',
    price: 12.99,
    discountPercentage: 12.16,
    rating: 4.36,
    category: 'beauty',
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
  },
  {
    id: 5,
    title: 'Red Nail Polish',
    price: 8.99,
    discountPercentage: 11.44,
    rating: 4.32,
    category: 'beauty',
    thumbnail: 'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp',
  },
]

function App() {
  return (
    <div className="container">
      <h1>lojaIFRN</h1>

      <p className="contador">{produtos.length} produtos</p>

      <div className="grade">
        {produtos.map((produto) => (
          // Agora o card de cada produto vive em ProdutoCard.jsx.
          // O .map() so decide QUAIS dados mandar via props; quem desenha e o componente.
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
