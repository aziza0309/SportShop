import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import './App.css';

const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'Nike Air Zoom Alphafly NEXT% 3',
    category: 'Бег',
    price: 2450000,
    oldPrice: 2890000,
    rating: 4.9,
    reviews: 142,
    badge: 'ХИТ ПРОДАЖ',
    badgeType: 'hot',
    sizes: ['40', '41', '42', '43', '44'],
    description: 'Карбоновая пластина Flyplate и пена ZoomX для максимального возврата энергии на марафоне.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Гантели разборные Hex Pro 2x20 кг',
    category: 'Фитнес',
    price: 1180000,
    oldPrice: null,
    rating: 4.8,
    reviews: 89,
    badge: 'НОВИНКА',
    badgeType: 'new',
    sizes: ['20 кг', '30 кг'],
    description: 'Обрезиненные шестигранные диски с хромированным грифом и антискользящей насечкой.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Боксерские перчатки Venum Elite Evo',
    category: 'Единоборства',
    price: 960000,
    oldPrice: 1150000,
    rating: 4.9,
    reviews: 210,
    badge: '-16%',
    badgeType: 'sale',
    sizes: ['10 oz', '12 oz', '14 oz', '16 oz'],
    description: 'Четырехслойная пена высокой плотности и анатомическая фиксация запястья для спаррингов.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Компрессионный рашгард Under Armour',
    category: 'Одежда',
    price: 490000,
    oldPrice: 580000,
    rating: 4.7,
    reviews: 64,
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Технология HeatGear отводит влагу и поддерживает мышцы в тонусе во время интенсивных сетов.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Смарт-часы Garmin Forerunner 265',
    category: 'Аксессуары',
    price: 4850000,
    oldPrice: 5200000,
    rating: 5.0,
    reviews: 95,
    badge: 'PRO ВЫБОР',
    badgeType: 'hot',
    sizes: ['42 мм', '46 мм'],
    description: 'AMOLED дисплей, двухчастотный GPS, анализ восстановления и вариабельности сердечного ритма.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Коврик для йоги и кроссфита TPE Pro',
    category: 'Фитнес',
    price: 320000,
    oldPrice: null,
    rating: 4.6,
    reviews: 53,
    badge: null,
    sizes: ['183x61 см'],
    description: 'Двухслойный нескользящий материал толщиной 8 мм с ремнем для переноски в комплекте.',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    title: 'Мяч баскетбольный Wilson Evolution',
    category: 'Игровые виды',
    price: 890000,
    oldPrice: 990000,
    rating: 4.9,
    reviews: 178,
    badge: 'ТОП',
    badgeType: 'new',
    sizes: ['Размер 6', 'Размер 7'],
    description: 'Композитная микрофибра Cushion Core для идеального контроля дриблинга в зале.',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    title: 'Спортивная сумка-дафл Adidas 4ATHLTS',
    category: 'Аксессуары',
    price: 540000,
    oldPrice: 650000,
    rating: 4.8,
    reviews: 77,
    badge: '-17%',
    badgeType: 'sale',
    sizes: ['M (39L)', 'L (55L)'],
    description: 'Вентилируемый отсек для кроссовок, водоотталкивающее дно и мягкий плечевой ремень.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80'
  }
];

const NEWS_DATA = [
  {
    id: 1,
    tag: 'ТРЕНИРОВКИ',
    date: '14 Ноября 2026',
    readTime: '5 мин чтения',
    author: 'Алексей Громов',
    title: 'Как подготовиться к первому полумарафону за 8 недель без травм',
    excerpt: 'Разбираем правильное распределение пульсовых зон, выбор беговых кроссовок с амортизацией и план восстановления.',
    fullText: 'Разбираем правильное распределение пульсовых зон, выбор беговых кроссовок с амортизацией и план восстановления. Главное правило новичка — 80% пробежек должны проходить в разговорном темпе (2-я пульсовая зона). Добавляйте не более 10% объема в неделю и обязательно включайте силовые упражнения на стабилизаторы стопы и кора.',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 2,
    tag: 'ЭКИПИРОВКА',
    date: '10 Ноября 2026',
    readTime: '4 мин чтения',
    author: 'Тимур Каримов',
    title: 'Карбоновые пластины в кроссовках: кому они действительно нужны?',
    excerpt: 'Технологии марафонских рекордов пришли в массовый спорт. Объясняем, когда карбон ускоряет, а когда мешает.',
    fullText: 'Технологии марафонских рекордов пришли в массовый спорт. Объясняем, когда карбон ускоряет, а когда мешает. Кроссовки с карбоновой пластиной раскрывают свой потенциал на темпе быстрее 4:30 мин/км. Для ежедневных восстановительных кроссов лучше использовать модели на мягкой пене без жесткой пластины, чтобы тренировать мышцы стопы.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 3,
    tag: 'ПИТАНИЕ И РЕЖИМ',
    date: '05 Ноября 2026',
    readTime: '6 мин чтения',
    author: 'Диана Садыкова',
    title: 'Электролиты и гидратация: что пить во время интенсивного кроссфита',
    excerpt: 'Обычная вода не всегда спасает от судорог и падения выносливости. Разбираем баланс натрия, калия и магния.',
    fullText: 'Обычная вода не всегда спасает от судорог и падения выносливости. Разбираем баланс натрия, калия и магния. При активном потоотделении за час тренировки организм теряет до 1.5 литров жидкости и важные минералы. Изотонические напитки поддерживают осмотическое давление плазмы и позволяют сохранять взрывную мощность до конца тренировки.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80'
  }
];

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([1, 3]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const categories = ['Все', 'Бег', 'Фитнес', 'Единоборства', 'Одежда', 'Игровые виды', 'Аксессуары'];

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const key = `${item.id}-${item.selectedSize || 'std'}`;
      const existing = prev.find((el) => el.cartKey === key);
      if (existing) {
        return prev.map((el) =>
          el.cartKey === key ? { ...el, qty: el.qty + 1 } : el
        );
      }
      return [...prev, { ...item, cartKey: key, qty: 1 }];
    });
  };

  const handleUpdateQty = (cartKey, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.cartKey === cartKey ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const handleToggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCat = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const favoriteProducts = PRODUCTS_DATA.filter((p) => favorites.includes(p.id));
  const totalCartItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalCartPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setCart([]);
      setOrderSuccess(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <div className="app-wrapper">
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={totalCartItems}
        favCount={favorites.length}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="main-content">
        {/* ВКЛАДКА 1: ГЛАВНАЯ */}
        {activePage === 'home' && (
          <>
            <section className="hero-section">
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <span className="hero-pill">🔥 НОВАЯ КОЛЛЕКЦИЯ ОСЕНЬ / ЗИМА 2026</span>
                <h1 className="hero-title">
                  ПРЕВЗОЙДИ СВОЙ <br />
                  <span>ПРЕДЕЛ ВОЗМОЖНОСТЕЙ</span>
                </h1>
                <p className="hero-subtitle">
                  Оригинальная экипировка от мировых брендов для бега, силового тренинга и боевых искусств. Технологии чемпионов теперь доступны каждому.
                </p>
                <div className="hero-buttons">
                  <button className="btn-primary" onClick={() => setActivePage('catalog')}>
                    Перейти в каталог →
                  </button>
                  <button className="btn-secondary" onClick={() => setActivePage('news')}>
                    Читать блог тренеров
                  </button>
                </div>

                <div className="hero-stats">
                  <div className="stat-item">
                    <strong>15 000+</strong>
                    <span>Довольных атлетов</span>
                  </div>
                  <div className="stat-item">
                    <strong>100%</strong>
                    <span>Оригинальные бренды</span>
                  </div>
                  <div className="stat-item">
                    <strong>24 часа</strong>
                    <span>Экспресс-доставка</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="section-container">
              <div className="section-header">
                <div>
                  <span className="section-kicker">ВЫБОР АТЛЕТОВ</span>
                  <h2>ПОПУЛЯРНАЯ ЭКИПИРОВКА</h2>
                </div>
                <button className="view-all-btn" onClick={() => setActivePage('catalog')}>
                  Смотреть весь каталог →
                </button>
              </div>

              <div className="products-grid">
                {PRODUCTS_DATA.slice(0, 4).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleFav={handleToggleFav}
                    isFavorite={favorites.includes(product.id)}
                  />
                ))}
              </div>
            </section>

            <section className="promo-banner-section">
              <div className="promo-card">
                <div className="promo-text">
                  <span className="promo-tag">СПЕЦПРЕДЛОЖЕНИЕ</span>
                  <h2>СКИДКА 20% НА ВСЕ БОКСЕРСКИЕ ПЕРЧАТКИ И ЗАЩИТУ</h2>
                  <p>Обновите экипировку перед новым сезоном соревнований. Акция действует до конца недели.</p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setSelectedCategory('Единоборства');
                      setActivePage('catalog');
                    }}
                  >
                    Выбрать экипировку
                  </button>
                </div>
                <div className="promo-visual">🥊</div>
              </div>
            </section>

            <section className="section-container">
              <div className="section-header">
                <div>
                  <span className="section-kicker">ПОЛЕЗНЫЕ МАТЕРИАЛЫ</span>
                  <h2>СВЕЖИЕ СТАТЬИ И ОБЗОРЫ</h2>
                </div>
                <button className="view-all-btn" onClick={() => setActivePage('news')}>
                  Все публикации →
                </button>
              </div>

              <div className="news-grid">
                {NEWS_DATA.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* ВКЛАДКА 2: КАТАЛОГ */}
        {activePage === 'catalog' && (
          <section className="section-container page-top-space">
            <div className="page-header-banner">
              <h1>КАТАЛОГ ЭКИПИРОВКИ</h1>
              <p>Найдено товаров: {filteredProducts.length}</p>
            </div>

            <div className="filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="empty-state">
                <h3>По вашему запросу ничего не найдено 😕</h3>
                <p>Попробуйте сбросить фильтры или изменить поисковый запрос.</p>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSelectedCategory('Все');
                    setSearchQuery('');
                  }}
                >
                  Сбросить фильтры
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleFav={handleToggleFav}
                    isFavorite={favorites.includes(product.id)}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ВКЛАДКА 3: НОВОСТИ */}
        {activePage === 'news' && (
          <section className="section-container page-top-space">
            <div className="page-header-banner">
              <h1>СПОРТИВНЫЙ ЖУРНАЛ APEX</h1>
              <p>Методики тренировок, обзоры технологий и советы спортивных врачей</p>
            </div>

            <div className="news-grid">
              {NEWS_DATA.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {/* ВКЛАДКА 4: ИЗБРАННОЕ */}
        {activePage === 'favorites' && (
          <section className="section-container page-top-space">
            <div className="page-header-banner">
              <h1>ИЗБРАННЫЕ ТОВАРЫ ({favoriteProducts.length})</h1>
              <p>Сохраненная экипировка для быстрого заказа</p>
            </div>

            {favoriteProducts.length === 0 ? (
              <div className="empty-state">
                <h3>Список избранного пуст</h3>
                <p>Нажимайте на сердечко на карточках товаров, чтобы сохранить их здесь.</p>
                <button className="btn-primary" onClick={() => setActivePage('catalog')}>
                  Перейти в каталог
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {favoriteProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onToggleFav={handleToggleFav}
                    isFavorite={true}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* ВКЛАДКА 5: О МАГАЗИНЕ */}
        {activePage === 'about' && (
          <section className="section-container page-top-space">
            <div className="page-header-banner">
              <h1>О МАГАЗИНЕ APEX SPORT</h1>
              <p>Мы создаем культуру профессионального спорта с 2019 года</p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">🏆</div>
                <h3>Только оригинал</h3>
                <p>Прямые контракты с дистрибьюторами Nike, Adidas, Under Armour, Venum и Garmin. Каждый товар проходит проверку подлинности.</p>
              </div>
              <div className="about-card">
                <div className="about-icon">👟</div>
                <h3>GAIT-анализ стопы</h3>
                <p>В нашем флагманском магазине в Ташкенте работает беговая лаборатория для точного подбора кроссовок под вашу пронацию.</p>
              </div>
              <div className="about-card">
                <div className="about-icon">🚀</div>
                <h3>Быстрая логистика</h3>
                <p>Доставляем заказы по Ташкенту за 3 часа, а по всему Узбекистану — в течение 1–2 рабочих дней с примеркой перед оплатой.</p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ВЫДВИЖНАЯ КОРЗИНА */}
      {isCartOpen && (
        <div className="cart-drawer-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <h3>🛒 ВАША КОРЗИНА ({totalCartItems})</h3>
              <button className="close-drawer-btn" onClick={() => setIsCartOpen(false)}>✕</button>
            </div>

            <div className="cart-drawer-body">
              {orderSuccess ? (
                <div className="order-success-box">
                  <div className="success-check">🎉</div>
                  <h3>ЗАКАЗ ОФОРМЛЕН!</h3>
                  <p>Менеджер APEX SPORT свяжется с вами в течение 5 минут для подтверждения доставки.</p>
                </div>
              ) : cart.length === 0 ? (
                <div className="empty-cart-msg">
                  <p>Корзина пока пуста</p>
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setIsCartOpen(false);
                      setActivePage('catalog');
                    }}
                  >
                    Выбрать товары
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartKey} className="cart-item-row">
                    <img src={item.image} alt={item.title} />
                    <div className="cart-item-info">
                      <h4>{item.title}</h4>
                      {item.selectedSize && <span className="cart-item-size">Размер: {item.selectedSize}</span>}
                      <span className="cart-item-price">{(item.price * item.qty).toLocaleString()} сум</span>
                    </div>
                    <div className="qty-controls">
                      <button onClick={() => handleUpdateQty(item.cartKey, -1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => handleUpdateQty(item.cartKey, 1)}>+</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && !orderSuccess && (
              <div className="cart-drawer-footer">
                <div className="cart-total-row">
                  <span>Итого к оплате:</span>
                  <strong>{totalCartPrice.toLocaleString()} сум</strong>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Оформить заказ →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
