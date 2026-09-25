import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      name: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      name: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App">
      <Header cartCount={cart.length} />
      <Hero />

      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* Cart Section */}
      <section className="cart-section">
        <h2>Your Cart ({cart.length} items)</h2>

        {/* Conditional rendering for empty cart */}
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Add some products!</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  onRemove={() => removeFromCart(index)}
                />
              ))}
            </div>

            {/* Cart total */}
            <div className="cart-total">
              <strong>Total: ${cartTotal.toFixed(2)}</strong>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;