import { useRef, useState } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import type { Product } from '../../types/Product';
import './ProductGridWithTabs.scss';

interface ProductGridWithTabsProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const categories = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS'
];

export const ProductGridWithTabs = ({ products, onProductClick }: ProductGridWithTabsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('CELULAR');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-grid-tabs" aria-label="Produtos relacionados por categoria">
      <div className="container">
        <div className="product-grid-tabs__header">
          <h2 className="product-grid-tabs__title">Produtos relacionados</h2>
        </div>

        <nav className="product-grid-tabs__nav" aria-label="Categorias de produtos">
          {categories.map((category) => (
            <button
              key={category}
              className={`product-grid-tabs__tab ${
                activeCategory === category ? 'product-grid-tabs__tab--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="product-grid-tabs__carousel">
          <button
            className="product-grid-tabs__arrow product-grid-tabs__arrow--left"
            onClick={() => scroll('left')}
            aria-label="Ver produtos anteriores"
          >
            ‹
          </button>

          <div 
            className="product-grid-tabs__container" 
            ref={scrollContainerRef}
            role="region"
            aria-label="Lista de produtos"
          >
            {products.map((product, index) => (
              <ProductCard
                key={`${product.productName}-${index}`}
                product={product}
                onProductClick={onProductClick}
              />
            ))}
          </div>

          <button
            className="product-grid-tabs__arrow product-grid-tabs__arrow--right"
            onClick={() => scroll('right')}
            aria-label="Ver próximos produtos"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};
