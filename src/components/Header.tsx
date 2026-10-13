import { navLinks } from '../data/content';

export default function Header() {
  return (
    <header className="header">
      <aside className="header__top" aria-label="Benefícios da loja">
        <p><img src="/ShieldCheck.svg" alt="" width={20} height={20} /><span>Compra <strong>100% segura</strong></span></p>
        <p><img src="/Truck.svg" alt="" width={20} height={20} /><span><strong>Frete grátis</strong> acima de R$ 200</span></p>
        <p><img src="/CreditCard.svg" alt="" width={20} height={20} /><span><strong>Parcele</strong> suas compras</span></p>
      </aside>

      <div className="header__main">
        <a className="header__logo" href="/" aria-label="Econverse - página inicial">
          <img src="/Group 35.svg" alt="Econverse" width={139} height={41} />
        </a>
        <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="O que você está buscando?" aria-label="Buscar produtos" />
          <button type="submit" aria-label="Pesquisar"><img src="/MagnifyingGlass.svg" alt="" width={28} height={28} /></button>
        </form>
        <nav className="header__actions" aria-label="Minha conta">
          <a href="#pedidos" aria-label="Meus pedidos"><img src="/Group.svg" alt="" width={24} height={24} /></a>
          <a href="#favoritos" aria-label="Favoritos"><img src="/Heart.svg" alt="" width={32} height={32} /></a>
          <a href="#conta" aria-label="Minha conta"><img src="/UserCircle.svg" alt="" width={32} height={32} /></a>
          <a href="#carrinho" aria-label="Carrinho"><img src="/ShoppingCart.svg" alt="" width={32} height={32} /></a>
        </nav>
      </div>

      <nav className="header__nav" aria-label="Categorias">
        {navLinks.map((link) => <a key={link} href="#">{link}</a>)}
        <a href="#" className="is-highlight">Ofertas do dia</a>
        <a href="#" className="header__subscription">
          <img src="/CrownSimple.svg" alt="" width={20} height={20} />Assinatura
        </a>
      </nav>
    </header>
  );
}
