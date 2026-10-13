import { brandCount } from '../data/content';

export default function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title" className="brands__title">Navegue por marcas</h2>
      <ul>
        {Array.from({ length: brandCount }, (_, i) => (
          <li key={i}><a href="#" aria-label="Marca Econverse"><img src="/Group 35.svg" alt="" width={117} height={35} /></a></li>
        ))}
      </ul>
    </section>
  );
}
