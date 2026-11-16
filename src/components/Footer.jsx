import React, { useState } from 'react';

function Footer({ setActivePage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-banner">
        <div className="newsletter-box">
          <div>
            <h3 className="brand-font">ВСТУПАЙ В КЛУБ APEX SPORT</h3>
            <p>Получай закрытые скидки до 30%, анонсы лимитированных кроссовок и советы тренеров.</p>
          </div>

          {subscribed ? (
            <div className="subscribe-success">
              ✅ Вы успешно подписались! Промокод <strong>APEX15</strong> отправлен на почту.
            </div>
          ) : (
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                placeholder="Введите ваш Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Подписаться</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-col">
          <div className="logo-block" onClick={() => setActivePage('home')}>
            <div className="logo-icon">⚡</div>
            <span className="brand-font logo-title">APEX<span>SPORT</span></span>
          </div>
          <p className="footer-about">
            Профессиональная спортивная экипировка, беговая обувь, инвентарь для фитнеса и единоборств. Официальная гарантия качества на каждый товар.
          </p>
          <div className="social-links">
            <a href="#tg" onClick={(e) => e.preventDefault()}>Telegram</a>
            <a href="#ig" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#yt" onClick={(e) => e.preventDefault()}>YouTube</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Навигация</h4>
          <ul>
            <li><button onClick={() => setActivePage('home')}>Главная страница</button></li>
            <li><button onClick={() => setActivePage('catalog')}>Каталог экипировки</button></li>
            <li><button onClick={() => setActivePage('news')}>Спортивный блог</button></li>
            <li><button onClick={() => setActivePage('about')}>О компании</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Категории</h4>
          <ul>
            <li><button onClick={() => setActivePage('catalog')}>Бег и марафон</button></li>
            <li><button onClick={() => setActivePage('catalog')}>Тренажерный зал</button></li>
            <li><button onClick={() => setActivePage('catalog')}>Единоборства и бокс</button></li>
            <li><button onClick={() => setActivePage('catalog')}>Аксессуары и питание</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Контакты</h4>
          <ul className="contact-list">
            <li>📍 г. Ташкент, пр-т Амира Темура, 88</li>
            <li>📞 +998 (90) 123-45-67</li>
            <li>🕒 Ежедневно: 09:00 – 22:00</li>
            <li>✉️ support@apexsport.uz</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 APEX SPORT STORE. Все права защищены.</p>
        <div className="payment-badges">
          <span>UZCARD</span>
          <span>HUMO</span>
          <span>VISA</span>
          <span>MASTERCARD</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;