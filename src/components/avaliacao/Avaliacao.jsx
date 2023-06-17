import './Avaliacao.css'

export default function Avaliacao({nota, vendas}){
  const estrelasArr = [];
  const estrelas = Math.floor(nota);
  const meiaEstrela = nota - estrelas;

  const criaEstrela = () => {
    for (let i = 0; i < estrelas; i++){
      estrelasArr.push(<img key={i} src='./src/components/produto/dadosproduto/assets/star.svg' alt='estrela'/>)
    }
    
    if (meiaEstrela > 0.5){
      estrelasArr.push(<img key={estrelasArr.length + 1} src='./src/components/produto/dadosproduto/assets/star_half.svg' alt='estrela'/>)
    }

    return estrelasArr
  }
  
  return(
    <div className='avaliacao'>
      <div className='nota'>
        {criaEstrela()} <p><b>{nota}</b></p>
      </div>
    </div>
  )
}