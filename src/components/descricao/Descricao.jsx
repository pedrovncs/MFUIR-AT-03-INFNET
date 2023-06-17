import './Descricao.css';

export default function Descricao({descProd}){
  return(
     <div className='descricao'>
        <h2>Descrição</h2>
        <div className='descricao-content'>
          <p>{descProd}</p>
        </div>
     </div>
  )
}