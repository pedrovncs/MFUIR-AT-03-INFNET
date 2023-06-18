import './Vendedor.css';

export default function Vendedor({infoVend}){
  return(
    <div className='vendedor-info'>
      <div className='vendedor-nome'>
        <p><b>Vendido por:</b> {infoVend.nome}</p>
        <div>
          <img src='./src/components/produto/dadosproduto/vendedor/assets/star.svg' />
          <p>{infoVend.nota}</p>
        </div>
      </div>
      <div className='vendedor-contato'>
        <p><b>E-mail: </b> {infoVend.email}</p>
         <p><b>Tel: </b> {infoVend.tel}</p>
      </div>
    </div>
  )
}