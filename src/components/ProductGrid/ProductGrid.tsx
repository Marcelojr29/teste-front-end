import { useRef } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../types/Product';
import './ProductGrid.scss';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductGrid = ({ products, onProductClick }: ProductGridProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-grid" aria-label="Produtos relacionados">
      <div className="container">
        <div className="product-grid__header">
          <div className="product-grid__title-wrapper">
            <h2 className="product-grid__title">Produtos relacionados</h2>
            <a href="#" className="product-grid__link">Ver todos</a>
          </div>
        </div>
        
        {products.length === 0 ? (
          <div className="product-grid__empty">
            <p>Nenhum produto encontrado</p>
          </div>
        ) : (
          <div className="product-grid__carousel">
            <button 
              className="product-grid__nav product-grid__nav--prev"
              onClick={() => scroll('left')}
              aria-label="Produto anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="product-grid__items" ref={scrollContainerRef}>
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.productName}-${index}`}
                  product={product}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
            
            <button 
              className="product-grid__nav product-grid__nav--next"
              onClick={() => scroll('right')}
              aria-label="Próximo produto"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
