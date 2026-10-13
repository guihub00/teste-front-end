import { useCallback, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Showcase from './components/Showcase';
import PromoBanners from './components/PromoBanners';
import Brands from './components/Brands';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { useProducts } from './hooks/useProducts';
import { showcaseTabs } from './data/content';
import type { Product } from './types/product';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  const renderShowcase = (withTabs: boolean) => {
    if (loading) return <p className="feedback" role="status">Carregando produtos...</p>;
    if (error) return <p className="feedback" role="alert">{error}</p>;
    return (
      <Showcase title="Produtos relacionados" withTabs={withTabs} tabs={showcaseTabs}
        products={products} onSelect={setSelected} />
    );
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        {renderShowcase(true)}
        <PromoBanners />
        {renderShowcase(false)}
        <PromoBanners />
        <Brands />
        {renderShowcase(false)}
      </main>
      <Newsletter />
      <Footer />
      {selected && <ProductModal product={selected} onClose={closeModal} />}
    </>
  );
}
