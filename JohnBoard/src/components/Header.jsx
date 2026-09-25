import './Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <h1 className="logo">JohnBoard Store</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </nav>

      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;