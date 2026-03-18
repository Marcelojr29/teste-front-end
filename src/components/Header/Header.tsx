import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__promo">
        <div className="container">
          <div className="header__promo-content">
            <div className="header__promo-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Compra <strong style={{color: '#3019B2'}}>100% segura</strong></span>
            </div>
            <div className="header__promo-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span><strong style={{color: '#3019B2'}}>Frete grátis</strong> acima de R$ 200</span>
            </div>
            <div className="header__promo-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span><strong style={{color: '#3019B2'}}>Parcele</strong> suas compras</span>
            </div>
          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="container">
          <div className="header__main-content">
            <a href="/" className="header__logo">
              <span className="header__logo-ec">ec</span><span className="header__logo-onverse">onverse</span>
            </a>

            <div className="header__search">
              <input 
                type="search" 
                className="header__search-input" 
                placeholder="O que você está buscando?"
                aria-label="Buscar produtos"
              />
              <button className="header__search-button" aria-label="Buscar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="header__actions">
              <button className="header__action" aria-label="Caixa">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="header__action" aria-label="Favoritos">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="header__action" aria-label="Minha conta">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="header__action" aria-label="Carrinho">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="header__nav" aria-label="Menu principal">
        <div className="container">
          <ul className="header__nav-list">
            <li><a href="#todas-categorias" className="header__nav-link">TODAS CATEGORIAS</a></li>
            <li><a href="#supermercado" className="header__nav-link">SUPERMERCADO</a></li>
            <li><a href="#livros" className="header__nav-link">LIVROS</a></li>
            <li><a href="#moda" className="header__nav-link">MODA</a></li>
            <li><a href="#lancamentos" className="header__nav-link">LANÇAMENTOS</a></li>
            <li><a href="#ofertas" className="header__nav-link header__nav-link--highlight">OFERTAS DO DIA</a></li>
            <li><a href="#assinatura" className="header__nav-link header__nav-link--special">
              <img src="/assets/icons/coroa.png" alt="" className="header__nav-icon" />
              ASSINATURA
            </a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
