import { useState } from 'react';
import { Header, Hero, CategoryFilter, Partners, Categories, ProductGrid, ProductGridWithTabs, ProductModal, Footer } from './components';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/Product';
import './App.css';

function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando produtos...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Header />
        <div className="error-container">
          <p>Erro ao carregar produtos: {error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CategoryFilter />
        <ProductGridWithTabs products={products} onProductClick={handleProductClick} />
        <Partners />
        <ProductGrid products={products} onProductClick={handleProductClick} />
        <Partners />
        <Categories />
        <ProductGrid products={products} onProductClick={handleProductClick} />
      </main>
      <Footer />
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
