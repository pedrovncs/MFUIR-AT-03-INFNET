import './UserComentario.css'
import Avaliacao from '/src/components/avaliacao/Avaliacao'

export default function UserComnentario({nomeUser, mensagem, nota, data}){
  return(
    <div className='user-comentario'>
      <div>
        <h3>{nomeUser}</h3>
        <p>{data}</p>
      </div>
        <Avaliacao nota={nota} />
        <p>{mensagem}</p>
    </div>
  )
}