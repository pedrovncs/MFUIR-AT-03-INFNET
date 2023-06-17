import './Relacionados.css'
import RelProd from './relprod/RelProd'

export default function Relacionados({relProds}){
  return(
    <div className='relacionados'>
      <h2>Você pode gostar</h2>
      <div className='relacionados-content'>
        <RelProd nome='Produto 1' valor={2123} imagem='https://i.imgur.com/WJ26CwA.png' />
        <RelProd nome='Produto 2' valor={765} imagem='https://i.imgur.com/WJ26CwA.png' />
        <RelProd nome='Produto 3' valor={213} imagem='https://i.imgur.com/WJ26CwA.png' />
        <RelProd nome='Produto 4' valor={5643} imagem='https://i.imgur.com/WJ26CwA.png' />
    </div>
      </div>
  )
}