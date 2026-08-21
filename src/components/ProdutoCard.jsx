import './ProdutoCard.css'

function ProdutoCard(props) {
  // A API manda o preco cheio e a porcentagem de desconto em campos separados.
  // O preco com desconto nao existe na resposta: a gente calcula aqui.
  const precoFinal = props.preco - (props.preco * props.desconto) / 100

  return (
    <div className="card">
      <img className="foto" src={props.imagem} alt={props.titulo} />

      <span className="categoria">{props.categoria}</span>
      <h3 className="titulo">{props.titulo}</h3>

      <p className="preco">
        US$ {precoFinal.toFixed(2)}
        <span className="preco-cheio">US$ {props.preco.toFixed(2)}</span>
      </p>

      <span className="nota">&#9733; {props.nota}</span>
    </div>
  )
}

export default ProdutoCard
