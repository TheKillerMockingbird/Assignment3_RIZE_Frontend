import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">JohnBoard Store</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Header;