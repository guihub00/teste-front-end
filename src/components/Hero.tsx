export default function Hero() {
  return (
    <section className="hero" aria-label="Promoção Black Friday">
      <img className="hero__bg" src="/Rectangle 250.svg" alt="" />
      <div className="hero__overlay" />
      <h1 className="hero__title">Venha conhecer nossas promoções</h1>
      <p className="hero__subtitle"><strong>50% Off </strong>nos produtos</p>
      <a className="hero__button" href="#produtos">Ver produto</a>
    </section>
  );
}
