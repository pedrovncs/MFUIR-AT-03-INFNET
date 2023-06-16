import './Produto.css'

export default function Produto({nomeProd, imagemProd, }){
  return(
    <div className='produto'>
      <img src={imagemProd} alt={nomeProd}
    </div>
  )
}