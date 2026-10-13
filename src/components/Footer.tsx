import { footerColumns } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <img src="/Grupo 8 (1).svg" alt="Econverse" width={164} height={48} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="footer__socials">
            <a href="#instagram" aria-label="Instagram"><img src="/instagram.svg" alt="" width={24} height={24} /></a>
            <a href="#facebook" aria-label="Facebook"><img src="/facebook.svg" alt="" width={24} height={24} /></a>
            <a href="#linkedin" aria-label="LinkedIn"><img src="/linkedin.svg" alt="" width={24} height={24} /></a>
          </div>
        </div>
        <span className="footer__divider" aria-hidden="true" />
        <div className="footer__columns">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title} className={`footer__column footer__column--${col.font}`}>
              <h3>{col.title}</h3>
              <ul>{col.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
            </nav>
          ))}
        </div>
      </div>
      <p className="footer__bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  );
}
