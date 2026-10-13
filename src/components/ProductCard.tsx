import type { Product } from '../types/product';
import { formatPrice, getOldPrice } from '../utils/formatPrice';

interface Props {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: Props) {
  return (
    <li className="product-card">
      <img className="product-card__image" src={product.photo} alt={product.productName} loading="lazy" />
      <p className="product-card__description">{product.descriptionShort}</p>
      <p className="product-card__old-price">{formatPrice(getOldPrice(product.price))}</p>
      <p className="product-card__price">{formatPrice(product.price)}</p>
      <p className="product-card__installment">ou 2x de {formatPrice(product.price / 2)} sem juros</p>
      <p className="product-card__shipping">Frete grátis</p>
      <button type="button" className="product-card__buy" onClick={() => onSelect(product)}>
        Comprar
        <span className="visually-hidden"> {product.productName}</span>
      </button>
    </li>
  );
}
