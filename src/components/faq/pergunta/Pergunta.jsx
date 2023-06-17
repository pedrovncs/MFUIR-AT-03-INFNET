import './Pergunta.css';

export default function Pergunta({nomeUser, questao, resposta, data}){
  return(
    <div className='pergunta'>
      <div>
        <h3>{nomeUser}</h3>
        <p>{data}</p>
      </div>
        <p><b>{questao}</b></p>
        <p><b>R:</b>{resposta}</p>
    </div>
  )
}