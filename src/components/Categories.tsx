import { categories } from '../data/content';

export default function Categories() {
  return (
    <nav className="categories" aria-label="Compre por categoria">
      <ul>
        {categories.map((c) => (
          <li key={c.label} className={c.label === 'Bebidas' ? 'is-wide' : ''}>
            <a href="#">
              <span className="categories__box"><img src={c.image} alt="" width={61} height={61} /></span>
              <span className="categories__label">{c.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
