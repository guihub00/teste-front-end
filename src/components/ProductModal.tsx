import { useEffect, useState } from 'react';
import type { Product } from '../types/product';
import { formatPrice } from '../utils/formatPrice';

interface Props {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" className="modal__close" aria-label="Fechar" onClick={onClose} autoFocus>
          <svg width="15" height="15" viewBox="0 0 15 15" aria-hidden="true">
            <path d="M1 1l13 13M14 1L1 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <img className="modal__image" src={product.photo} alt={product.productName} />
        <div className="modal__info">
          <h2 id="modal-title" className="modal__title">{product.productName}</h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <a className="modal__details" href="#">Veja mais detalhes do produto &gt;</a>
          <div className="modal__actions">
            <div className="modal__qty" role="group" aria-label="Quantidade">
              <button type="button" aria-label="Diminuir" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                <img src="banner 4" alt="" />
              </button>
              <output>{String(quantity).padStart(2, '0')}</output>
              <button type="button" aria-label="Aumentar" onClick={() => setQuantity((q) => q + 1)}>
                <img src="banner 4" alt="" />
              </button>
            </div>
            <button type="button" className="modal__buy">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
