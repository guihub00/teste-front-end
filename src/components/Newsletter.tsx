import { useState } from 'react';

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form className="newsletter__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="newsletter__row">
            <input type="text" name="nome" placeholder="Digite seu nome" aria-label="Nome" required />
            <input type="email" name="email" placeholder="Digite seu e-mail" aria-label="E-mail" required />
            <button type="submit">INSCREVER</button>
          </div>
          <label className="newsletter__terms">
            <input type="checkbox" required />
            <span>Aceito os termos e condições</span>
          </label>
          {sent && <p role="status" className="visually-hidden">Inscrição realizada com sucesso.</p>}
        </form>
      </div>
    </section>
  );
}
