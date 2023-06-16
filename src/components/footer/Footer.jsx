import './Footer.css';

export default function Footer(){
  return(
      <footer>
    <div className="footer-content">
      <div className="footer-social">
        <h2>Sociais</h2>
        <div className="icons">
          <a href="#"> <img  className="insta" src="./src/components/footer/assets/instagram.svg" /></a>
          <a href="#"><img className="face" src="./src/components/footer/assets/facebook.svg" /> </a>
          <a href="#"><img className="zap" src="./src/components/footer/assets/whatsapp.svg" /> </a>
        </div>
      </div>
      <h1><a href="">LOGO</a></h1>
    </div>
    <div className="copyright">
      © 2023 - Todos os direitos reservados.
    </div>
  </footer>
  )
}