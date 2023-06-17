import './Faq.css';
import Pergunta from './pergunta/Pergunta'

export default function Faq(){
  return(
    <div className='faq'>
      <h2>Perguntas Frequentes</h2>
      <div className='faq-content'>
        <Pergunta nomeUser='Usuário 1' data='22/07/2023'
          questao='Lorem ipsum dolor sit amet?'
          resposta='Sed volutpat, purus nec feugiat egestas.'/>
        <Pergunta nomeUser='Usuário 2' data='23/07/2022'
          questao='Nulla semper massa est?'
          resposta=' Suspendisse volutpat tortor magna.'/>
         <div className='caixa-pergunta'>
        <h3>Faça uma pergunta</h3>
        <div>
          <input type='text' />
          <button>Enviar</button>
        </div>
      </div>
      </div>
    </div>
  )
}