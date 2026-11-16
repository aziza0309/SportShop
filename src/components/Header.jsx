import React from 'react';

function Header({ activePage, setActivePage, cartCount, favCount, onOpenCart, searchQuery, setSearchQuery }) {
  return (
    <header className="site-header">
      <div className="top-promo-bar">
        <span>⚡ БЕСПЛАТНАЯ ДОСТАВКА ПРИ ЗАКАЗЕ ОТ 500 000 СУМ • СКИДКА 15% ПО ПРОМОКОДУ: APEX2026</span>
      </div>

      <div className="header-container">
        <div className="logo-block" onClick={() => setActivePage('home')}>
          <div className="logo-icon">⚡</div>
          <div className="logo-text">
            <span className="brand-font logo-title">APEX<span>SPORT</span></span>
            <span className="logo-sub">PRO GEAR STORE</span>
          </div>
        </div>

        <nav className="main-nav">
          <button
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => setActivePage('home')}
          >
            Главная
          </button>
          <button
            className={`nav-link ${activePage === 'catalog' ? 'active' : ''}`}
            onClick={() => setActivePage('catalog')}
          >
            Каталог товаров
          </button>
          <button
            className={`nav-link ${activePage === 'news' ? 'active' : ''}`}
            onClick={() => setActivePage('news')}
          >
            Новости и Блог
          </button>
          <button
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => setActivePage('about')}
          >
            О магазине
          </button>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Поиск экипировки..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activePage !== 'catalog') setActivePage('catalog');
              }}
            />
            <span className="search-icon">🔍</span>
          </div>

          <button
            className="icon-action-btn"
            title="Избранное"
            onClick={() => setActivePage('favorites')}
          >
            <span>❤️</span>
            {favCount > 0 && <span className="badge-count">{favCount}</span>}
          </button>

          <button
            className="cart-action-btn"
            onClick={onOpenCart}
          >
            <span>🛒 Корзина</span>
            <span className="cart-pill">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;