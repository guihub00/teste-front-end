export default function PromoBanners() {
  return (
    <section className="promos" aria-label="Parceiros">
      {[1, 2].map((i) => (
        <article key={i} className="promos__item">
          <img className="promos__image" src="/banner 4.svg" alt="" />
          <div className="promos__shade" />
          <h2 className="promos__title">Parceiros</h2>
          <p className="promos__text">Lorem ipsum dolor sit amet, consectetur</p>
          <a className="promos__button" href="#">Confira</a>
        </article>
      ))}
    </section>
  );
}
