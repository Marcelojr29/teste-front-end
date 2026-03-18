import { useEffect, useState } from 'react';
import type { Product } from '../../types/Product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      setQuantity(1);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [product, onClose]);

  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal__close" 
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="modal__content">
          <div className="modal__image-section">
            <img
              src={product.photo}
              alt={product.productName}
              className="modal__image"
            />
          </div>
          
          <div className="modal__info">
            <h2 id="modal-title" className="modal__title">{product.productName}</h2>
            <p className="modal__price">{formatPrice(product.price)}</p>
            <p className="modal__description">
              Many desktop publishing packages and web page editors now use many desktop publishing packages and web page
            </p>
            <a href="#" className="modal__details-link">Veja mais detalhes do produto &gt;</a>
            
            <div className="modal__actions">
              <div className="modal__quantity">
                <button 
                  className="modal__quantity-btn" 
                  onClick={decreaseQuantity}
                  aria-label="Diminuir quantidade"
                >
                  -
                </button>
                <span className="modal__quantity-value">{String(quantity).padStart(2, '0')}</span>
                <button 
                  className="modal__quantity-btn" 
                  onClick={increaseQuantity}
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
              </div>
              
              <button className="modal__buy-button">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
