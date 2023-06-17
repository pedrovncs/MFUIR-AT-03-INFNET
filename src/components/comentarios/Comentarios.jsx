import './Comentarios.css'
import UserComentario from './usercomentario/UserComentario'

export default function Comentarios(){
  return(
    <div className='comentarios'>
      <h2>Comentários</h2>
      <div className='comentarios-content'>
        <UserComentario nomeUser='Nome 1' nota= {3} data='22/07/2023' 
          mensagem='Morbi fermentum ipsum in consequat fermentum' />
        <UserComentario nomeUser='Nome 2' nota= {1} data='23/07/2022' 
          mensagem='Morbi fermentum ipsum in consequat fermentum' />
        <UserComentario nomeUser='Nome 3' nota= {5} data='21/05/2022' 
          mensagem='Morbi fermentum ipsum in consequat fermentum' />
      </div>
    </div>
  )
}