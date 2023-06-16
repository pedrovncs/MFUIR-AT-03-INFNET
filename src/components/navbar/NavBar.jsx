import './NavBar.css';

export default function Navbar() {
  function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.toggleBtn img');

    menu.classList.toggle('active');
    icon.src = menu.classList.contains('active') ? "./src/components/navbar/assets/close.svg" : "./src/components/navbar/assets/menu.svg";
  }

  return (
    <header>
      <nav>
        <div className="mobile-menu-icon">
          <button className="toggleBtn" onClick={toggleMenu}>
            <img src="./src/components/navbar/assets/menu.svg" alt="menu" />
          </button>
        </div>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="nav-list">
          <ul>
            <li className="list-item"><a href="/">Home</a></li>
            <li className="list-item"><a href="/">Produtos</a></li>
            <li className="list-item"><a href="/">Sobre</a></li>
            <li className="list-item"><a href="/">Github</a></li>
          </ul>
        </div>
        <div className='nav-items'>
          <div className="searchBox">
            <input type="text" placeholder="Busque um produto" />
            <img src="./src/components/navbar/assets/search.svg" alt="search" />
          </div>
          <img className="cart" src="./src/components/navbar/assets/shopping_cart.svg" alt="carrinho" />
        </div>
      </nav>
      <div className="mobile-menu">
        <ul>
          <li className="list-item"><a href="/">Home</a></li>
          <li className="list-item"><a href="/">Produtos</a></li>
          <li className="list-item"><a href="/">Sobre</a></li>
        </ul>
      </div>
    </header>
  );
}
