import './RelProd.css'

export default function RelProd({imagem, valor, nome}){
  return(
    <div className='rel-prod'>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
    </div>
  )
}