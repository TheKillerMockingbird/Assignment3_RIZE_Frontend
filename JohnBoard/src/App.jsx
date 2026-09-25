import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <ProductCard
            name="Wireless Headphones"
            price="79.99"
            image="https://placehold.co/600x400"
            description="High-quality wireless headphones with noise cancellation."
          />
          <ProductCard
            name="Smart Watch"
            price="149.99"
            image="https://placehold.co/600x400"
            description="Track your fitness and stay connected on the go."
          />
          <ProductCard
            name="Portable Speaker"
            price="49.99"
            image="https://placehold.co/600x400"
            description="Compact Bluetooth speaker with powerful bass."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;