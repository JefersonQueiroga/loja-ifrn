import './App.css'
import './components/ProdutoCard.css'

// Por enquanto os produtos sao fixos (sem buscar de lugar nenhum).
// O foco aqui e so o .map(): pegar um array e transformar cada item em JSX.
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
        {produtos.map((produto) => {
          const precoFinal = produto.price - (produto.price * produto.discountPercentage) / 100

          // Cada item do array vira um bloco JSX aqui dentro.
          // O "key" e obrigatorio: e como o React identifica qual item e qual na lista.
          return (
            <div className="card" key={produto.id}>
              <img className="foto" src={produto.thumbnail} alt={produto.title} />
              <span className="categoria">{produto.category}</span>
              <h3 className="titulo">{produto.title}</h3>
              <p className="preco">
                US$ {precoFinal.toFixed(2)}
                <span className="preco-cheio">US$ {produto.price.toFixed(2)}</span>
              </p>
              <span className="nota">&#9733; {produto.rating}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
