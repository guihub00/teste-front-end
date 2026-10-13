import { useState } from 'react';
import type { Product } from '../types/product';
import ProductCard from './ProductCard';

const VISIBLE = 4;
const CARD_STEP = 343.5; 

interface Props {
  title: string;
  withTabs?: boolean;
  tabs?: string[];
  products: Product[];
  onSelect: (product: Product) => void;
}

function Chevron({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="19" height="34" viewBox="0 0 19 34" aria-hidden="true">
      <polyline
        points={direction === 'left' ? '17,2 2,17 17,32' : '2,2 17,17 2,32'}
        fill="none"
        stroke="#3f3f40"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function Showcase({ title, withTabs, tabs = [], products, onSelect }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, products.length - VISIBLE);

  return (
    <section className="showcase" aria-label={title} id={withTabs ? 'produtos' : undefined}>
      <div className="showcase__heading">
        <span className="showcase__line" aria-hidden="true" />
        <h2 className="showcase__title">{title}</h2>
        <span className="showcase__line" aria-hidden="true" />
      </div>
      {withTabs ? (
        <div className="showcase__tabs" role="tablist">
          {tabs.map((tab, i) => (
            <button key={tab} role="tab" type="button" aria-selected={i === activeTab}
              className={i === activeTab ? 'is-active' : ''} onClick={() => setActiveTab(i)}>
              {tab}
            </button>
          ))}
        </div>
      ) : (
        <a className="showcase__all" href="#">Ver todos</a>
      )}

      <div className="showcase__carousel">
        <button type="button" className="showcase__arrow showcase__arrow--prev" aria-label="Produtos anteriores"
          disabled={start === 0} onClick={() => setStart((s) => s - 1)}>
          <Chevron direction="left" />
        </button>
        <div className="showcase__viewport">
          <ul className="showcase__track" style={{ transform: `translateX(-${start * CARD_STEP}px)` }}>
            {products.map((p, i) => (
              <ProductCard key={`${p.productName}-${i}`} product={p} onSelect={onSelect} />
            ))}
          </ul>
        </div>
        <button type="button" className="showcase__arrow showcase__arrow--next" aria-label="Próximos produtos"
          disabled={start >= maxStart} onClick={() => setStart((s) => s + 1)}>
          <Chevron direction="right" />
        </button>
      </div>
    </section>
  );
}