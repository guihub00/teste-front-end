import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const product = { productName: 'iPhone X', descriptionShort: 'Descrição', photo: 'x.png', price: 1000 };

describe('ProductCard', () => {
  it('chama onSelect ao clicar em comprar', () => {
    const onSelect = vi.fn();
    render(<ul><ProductCard product={product} onSelect={onSelect} /></ul>);
    fireEvent.click(screen.getByRole('button'));
    expect(onSelect).toHaveBeenCalledWith(product);
  });
});
