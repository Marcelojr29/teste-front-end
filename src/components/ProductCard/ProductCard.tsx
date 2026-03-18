import type { Product } from '../../types/Product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard = ({ product, onProductClick }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100);
  };

  const originalPrice = product.price * 1.1; // Simula preço original 10% maior

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper" onClick={() => onProductClick(product)}>
        <img
          src={product.photo}
          alt={product.productName}
          className="product-card__image"
          loading="lazy"
        />
      </div>
      
      <div className="product-card__content">
        <p className="product-card__description">
          {product.descriptionShort}
        </p>
        
        <div className="product-card__prices">
          <span className="product-card__price-old">R$ {(originalPrice / 100).toFixed(2).replace('.', ',')}</span>
          <span className="product-card__price">{formatPrice(product.price)}</span>
        </div>
        
        <p className="product-card__installments">
          ou 2x de {formatPrice(product.price / 2)} sem juros
        </p>
        
        <span className="product-card__badge">Frete grátis</span>
        
        <button 
          className="product-card__button"
          aria-label={`Comprar ${product.productName}`}
          onClick={() => onProductClick(product)}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
};
