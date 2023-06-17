import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/NavBar'
import Produto from './components/produto/Produto'
import Vendedor from './components/vendedor/Vendedor'
import Descricao from './components/descricao/Descricao'
import Faq from './components/faq/Faq'
import Comentarios from './components/comentarios/Comentarios'
import Relacionados from './components/relacionados/Relacionados'

export default function App() {
  const produtoInfo = {imagem: 'https://i.imgur.com/rTKUBAk.png', valor: 10999, nota: 3.7, vendas: 4, nome: 'Nome do Produto', desconto: 12, descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, purus nec feugiat egestas, diam turpis accumsan odio, sit amet efficitur ligula neque quis elit. Donec malesuada nibh eu blandit vestibulum. Fusce aliquam, eros a tempor laoreet, metus lectus convallis purus, iaculis auctor nisl leo eu turpis.'}
  
  const vendedorInfo = {nome: 'Pedro Vinicius', nota: 4.8, email: 'pdrovncs@gmail.com', tel: '21 999116142'}
  
  return (
    <main>
    <Navbar />
    <Produto infoProd={produtoInfo} />
    <Vendedor infoVend = {vendedorInfo} />
    <Descricao descProd={produtoInfo.descricao} />
    <Faq />
    <Comentarios />
    <Relacionados />
    <Footer />
    </main>
  )
}
