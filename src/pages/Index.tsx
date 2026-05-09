import Icon from '@/components/ui/icon';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/36adff41-d365-445e-8d5f-dd8bed2bd445/files/d6567017-3fe5-45e7-b378-926bdaa639ed.jpg";
const LOGO_URL = "https://cdn.poehali.dev/files/28b12595-508c-46e8-87a0-fad54fb5c1c5.png";
const EU_ORGANIC_LOGO = "https://cdn.poehali.dev/files/dbf183fd-8b1e-46f6-9ba9-d02f634bdf25.png";

const PRODUCTS = [
  { name: "Гречиха", nameEn: "Buckwheat", emoji: "🌾", organic: true },
  { name: "Зелёная гречка", nameEn: "Green Buckwheat", emoji: "🌿", organic: true },
  { name: "Гречневая мука", nameEn: "Buckwheat Flour", emoji: "🫙", organic: true },
  { name: "Овсяные хлопья", nameEn: "Oat Flakes", emoji: "🌾", organic: true },
  { name: "Льняное семя", nameEn: "Flaxseed", emoji: "🌱", organic: true },
  { name: "Красная чечевица", nameEn: "Red Lentils", emoji: "🫘", organic: false },
  { name: "Жёлтый горох", nameEn: "Yellow Peas", emoji: "🫛", organic: false },
  { name: "Нут", nameEn: "Chickpeas", emoji: "🫘", organic: false },
  { name: "Зелёный горох", nameEn: "Green Peas", emoji: "🫛", organic: false },
  { name: "Пшеница", nameEn: "Wheat", emoji: "🌾", organic: false },
  { name: "Рожь", nameEn: "Rye", emoji: "🌾", organic: false },
  { name: "Подсолнечник", nameEn: "Sunflower Seeds", emoji: "🌻", organic: false },
];

const EXPORT_REGIONS = ["Европа", "Северная Америка", "Ближний Восток", "Азия", "Латинская Америка", "Африка"];

const PACKAGING = [
  { label: "Розничная упаковка", icon: "Package" },
  { label: "Big Bags (биг-бэги)", icon: "Box" },
  { label: "Контейнерные поставки", icon: "Container" },
  { label: "Private Label", icon: "Tag" },
];

const ADVANTAGES = [
  { icon: "Tractor", title: "Собственное производство", text: "Собственные поля и проверенные поставщики в Смоленской области" },
  { icon: "Factory", title: "Современные мощности", text: "Полный цикл переработки — от поля до готовой продукции" },
  { icon: "ShieldCheck", title: "Строгий контроль качества", text: "Каждая партия проходит лабораторный контроль на всех этапах" },
  { icon: "Globe", title: "Экспортный опыт", text: "Поставки в более чем 30 стран мира с надёжной логистикой" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gavrilovorganic.com/#organization",
      "name": "Gavrilov Organic Foods",
      "alternateName": "Гавриловы Органик Фудс",
      "description": "Российский производитель и экспортёр органических зерновых, бобовых и масличных культур. Полный цикл производства от поля до экспорта. Смоленская область.",
      "url": "https://gavrilovorganic.com",
      "email": "info@gavrilovorganic.com",
      "telephone": "+7-903-790-17-95",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Смоленская область",
        "addressCountry": "RU"
      },
      "areaServed": ["EU", "US", "Asia", "Africa", "Latin America", "Middle East"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Зерновые, бобовые и масличные культуры",
        "itemListElement": PRODUCTS.map((p, i) => ({
          "@type": "Offer",
          "position": i + 1,
          "itemOffered": {
            "@type": "Product",
            "name": p.nameEn,
            "description": `${p.organic ? 'Organic certified ' : ''}${p.nameEn} from Smolensk Region, Russia`,
            "category": "Agricultural Products",
            ...(p.organic ? { "certification": "EU Organic Certification" } : {})
          }
        }))
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://gavrilovorganic.com/#website",
      "url": "https://gavrilovorganic.com",
      "name": "Gavrilov Organic Foods",
      "inLanguage": ["en", "ru"],
      "publisher": { "@id": "https://gavrilovorganic.com/#organization" }
    }
  ]
};

const Index = () => {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>

        {/* NAV */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
          style={{ backgroundColor: 'rgba(26,58,42,0.97)', backdropFilter: 'blur(12px)' }}
        >
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Gavrilov Organic Foods logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium" style={{ color: 'var(--cream-dark)' }}>
            <a href="#about" className="hover:text-yellow-300 transition-colors duration-200">О компании</a>
            <a href="#products" className="hover:text-yellow-300 transition-colors duration-200">Продукция</a>
            <a href="#certifications" className="hover:text-yellow-300 transition-colors duration-200">Сертификаты</a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors duration-200">Контакты</a>
          </div>
          <a
            href="#contact"
            className="hidden md:block font-body text-sm font-semibold px-5 py-2 rounded transition-colors duration-200"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--forest)' }}
          >
            Запросить прайс
          </a>
        </nav>

        {/* HERO */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ paddingTop: '80px' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(26,58,42,0.93) 0%, rgba(26,58,42,0.75) 55%, rgba(26,58,42,0.35) 100%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
                <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="font-body text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  Смоленская область · Россия
                </span>
              </div>

              <h1
                className="font-display font-light leading-tight mb-6 animate-fade-in-up-1"
                style={{ color: 'var(--cream)', fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                Надёжные зерновые<br />
                <em style={{ color: 'var(--gold-light)' }}>для мирового рынка</em>
              </h1>

              <p
                className="font-body text-lg leading-relaxed mb-4 animate-fade-in-up-2"
                style={{ color: 'rgba(244,239,230,0.82)', maxWidth: '520px' }}
              >
                Российский производитель и экспортёр органических зерновых, бобовых и масличных культур. Полный цикл — от поля до поставки.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up-2">
                {["Премиальное качество", "Устойчивое производство", "Прослеживаемость"].map(tag => (
                  <span
                    key={tag}
                    className="font-body text-xs font-medium px-3 py-1 rounded-full border"
                    style={{ borderColor: 'rgba(184,150,46,0.5)', color: 'rgba(244,239,230,0.75)', backgroundColor: 'rgba(26,58,42,0.4)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 animate-fade-in-up-3">
                <a
                  href="#products"
                  className="font-body font-semibold px-8 py-4 rounded text-sm transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--forest)' }}
                >
                  Смотреть продукцию
                </a>
                <a
                  href="#contact"
                  className="font-body font-medium px-8 py-4 rounded text-sm border transition-all duration-300 hover:bg-white/10"
                  style={{ borderColor: 'rgba(244,239,230,0.4)', color: 'var(--cream)' }}
                >
                  Связаться с нами
                </a>
              </div>
            </div>

            {/* EU Organic badge */}
            <div
              className="absolute bottom-12 right-8 md:right-12 flex items-center gap-3 animate-fade-in-up-4 hidden md:flex"
              style={{ backgroundColor: 'rgba(26,58,42,0.85)', borderRadius: '12px', padding: '12px 16px', border: '1px solid rgba(184,150,46,0.3)' }}
            >
              <img src={EU_ORGANIC_LOGO} alt="EU Organic Certified" className="h-12 w-12 rounded" />
              <div>
                <div className="font-body text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold)' }}>EU Organic</div>
                <div className="font-body text-xs" style={{ color: 'rgba(244,239,230,0.75)' }}>Сертифицировано</div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section style={{ backgroundColor: 'var(--forest)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12+", label: "Культур в каталоге" },
              { value: "30+", label: "Стран экспорта" },
              { value: "100%", label: "Прослеживаемость" },
              { value: "EU", label: "Органик сертификат" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display font-semibold mb-1"
                  style={{ fontSize: '2.2rem', color: 'var(--gold-light)' }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-sm" style={{ color: 'rgba(244,239,230,0.65)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="font-body text-sm font-medium tracking-widest uppercase text-gold">О компании</span>
              </div>
              <h2
                className="font-display font-light leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--forest)' }}
              >
                Gavrilov Foods —<br />
                <em>от поля к столу</em>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--text-mid)' }}>
                Мы российский агропроизводитель и переработчик зерна с полным циклом контроля от посева до экспорта. Расположены в Смоленской области — регионе с богатыми агрокультурными традициями.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--text-mid)' }}>
                Современные технологии переработки, строгие стандарты качества и надёжная логистика позволяют нам поставлять продукцию высшего класса покупателям по всему миру.
              </p>
              <div className="divider-gold mb-8" />
              <p
                className="font-display italic text-2xl leading-relaxed"
                style={{ color: 'var(--forest)' }}
              >
                «Растим качество.<br />Доставляем доверие.<br />Строим партнёрство.»
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ADVANTAGES.map(a => (
                <div
                  key={a.title}
                  className="hover-lift rounded-xl p-6"
                  style={{ backgroundColor: 'white', border: '1px solid var(--cream-dark)' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--cream-dark)' }}
                  >
                    <Icon name={a.icon} size={20} style={{ color: 'var(--forest)' }} />
                  </div>
                  <h3 className="font-body font-semibold text-sm mb-2" style={{ color: 'var(--forest)' }}>{a.title}</h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" style={{ backgroundColor: 'var(--cream-dark)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="font-body text-sm font-medium tracking-widest uppercase text-gold">Каталог</span>
                <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
              </div>
              <h2
                className="font-display font-light leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--forest)' }}
              >
                Наша продукция
              </h2>
              <p className="font-body text-base" style={{ color: 'var(--text-mid)', maxWidth: '520px', margin: '0 auto' }}>
                Широкий ассортимент зерновых, бобовых и масличных культур для мировых рынков
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {PRODUCTS.map(product => (
                <div
                  key={product.name}
                  className="hover-lift relative rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--cream-dark)',
                    boxShadow: '0 2px 12px rgba(26,58,42,0.06)'
                  }}
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  <meta itemProp="name" content={product.nameEn} />
                  {product.organic && <meta itemProp="award" content="EU Organic Certified" />}

                  {product.organic && (
                    <div
                      className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full font-body"
                      style={{ backgroundColor: '#6daf2e', color: 'white', fontSize: '0.65rem' }}
                    >
                      BIO
                    </div>
                  )}
                  <div
                    className="flex items-center justify-center text-4xl"
                    style={{ height: '90px', backgroundColor: 'var(--cream)' }}
                    aria-hidden="true"
                  >
                    {product.emoji}
                  </div>
                  <div className="p-4">
                    <h3 className="font-body font-semibold text-sm mb-0.5" style={{ color: 'var(--forest)' }}>
                      {product.name}
                    </h3>
                    <p className="font-body text-xs" style={{ color: 'var(--text-mid)' }}>{product.nameEn}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 rounded-xl p-6 flex items-center gap-4"
              style={{ backgroundColor: 'var(--forest)', border: '1px solid rgba(184,150,46,0.3)' }}
            >
              <div className="text-2xl">🌿</div>
              <div>
                <p className="font-body font-semibold text-sm mb-0.5" style={{ color: 'var(--gold-light)' }}>
                  Органические и конвенциональные варианты
                </p>
                <p className="font-body text-xs" style={{ color: 'rgba(244,239,230,0.7)' }}>
                  Мы гибко подходим к потребностям каждого клиента и предлагаем оба формата поставок
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="font-body text-sm font-medium tracking-widest uppercase text-gold">Сертификация</span>
              </div>
              <h2
                className="font-display font-light leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--forest)' }}
              >
                EU Organic<br />
                <em>Certified</em>
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  "Сертификация EU Organic",
                  "Прослеживаемость от поля до конечного продукта",
                  "Устойчивые методы хозяйствования",
                  "Органические зерновые, бобовые и масличные культуры",
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#6daf2e' }}
                    >
                      <Icon name="Check" size={12} style={{ color: 'white' }} />
                    </div>
                    <span className="font-body text-sm" style={{ color: 'var(--text-mid)' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs italic" style={{ color: 'var(--text-mid)' }}>
                «Здоровые продукты — здоровая планета»
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="rounded-2xl p-8 flex items-center gap-6"
                style={{ backgroundColor: '#6daf2e' }}
              >
                <img src={EU_ORGANIC_LOGO} alt="EU Organic Certification logo" className="h-20 w-20 rounded-lg object-cover" />
                <div>
                  <div className="font-display text-2xl font-semibold text-white mb-1">EU Organic</div>
                  <div className="font-body text-sm text-white/80">Европейский органический сертификат</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {PACKAGING.map(pkg => (
                  <div
                    key={pkg.label}
                    className="rounded-xl p-5 flex flex-col items-start gap-3 hover-lift"
                    style={{ backgroundColor: 'white', border: '1px solid var(--cream-dark)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--cream-dark)' }}
                    >
                      <Icon name={pkg.icon} size={18} style={{ color: 'var(--forest)' }} />
                    </div>
                    <span className="font-body text-xs font-medium" style={{ color: 'var(--text-dark)' }}>{pkg.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPORT MAP */}
        <section style={{ backgroundColor: 'var(--forest)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="font-body text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Экспорт</span>
                <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
              </div>
              <h2
                className="font-display font-light leading-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--cream)' }}
              >
                Поставки по всему миру
              </h2>
              <p className="font-body text-sm" style={{ color: 'rgba(244,239,230,0.65)' }}>
                Доставляем качество покупателям по всему земному шару
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {EXPORT_REGIONS.map(region => (
                <div
                  key={region}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border font-body text-sm"
                  style={{ borderColor: 'rgba(184,150,46,0.4)', color: 'var(--cream)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon name="MapPin" size={14} style={{ color: 'var(--gold)' }} />
                  {region}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { icon: "Shield", label: "Надёжные поставки" },
                { icon: "Award", label: "Стабильное качество" },
                { icon: "Handshake", label: "Долгосрочное партнёрство" },
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(184,150,46,0.15)', border: '1px solid rgba(184,150,46,0.3)' }}
                  >
                    <Icon name={item.icon} size={22} style={{ color: 'var(--gold)' }} />
                  </div>
                  <span className="font-body text-sm font-medium" style={{ color: 'rgba(244,239,230,0.8)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="font-body text-sm font-medium tracking-widest uppercase text-gold">Контакты</span>
              <div className="h-px w-8" style={{ backgroundColor: 'var(--gold)' }} />
            </div>
            <h2
              className="font-display font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--forest)' }}
            >
              Обсудим сотрудничество
            </h2>
            <p className="font-body text-base" style={{ color: 'var(--text-mid)' }}>
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "Phone",
                label: "Телефон / WhatsApp",
                value: "+7 903 790 17 95",
                href: "tel:+79037901795",
              },
              {
                icon: "Mail",
                label: "Email",
                value: "info@gavrilovorganic.com",
                href: "mailto:info@gavrilovorganic.com",
              },
              {
                icon: "Globe",
                label: "Сайт",
                value: "gavrilovfarm.ru",
                href: "https://gavrilovfarm.ru",
              },
            ].map(contact => (
              <a
                key={contact.label}
                href={contact.href}
                className="hover-lift rounded-xl p-8 flex flex-col items-center text-center gap-4 transition-colors"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--cream-dark)',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cream-dark)' }}
                >
                  <Icon name={contact.icon} size={22} style={{ color: 'var(--forest)' }} />
                </div>
                <div>
                  <div className="font-body text-xs font-medium uppercase tracking-wider mb-1" style={{ color: 'var(--text-mid)' }}>
                    {contact.label}
                  </div>
                  <div className="font-body font-semibold text-sm" style={{ color: 'var(--forest)' }}>
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <div
              className="inline-block rounded-xl px-4 py-2 font-body text-sm"
              style={{ backgroundColor: 'var(--cream-dark)', color: 'var(--text-mid)' }}
            >
              <Icon name="MapPin" size={14} className="inline mr-1.5" style={{ color: 'var(--forest)' }} />
              Смоленская область, Россия
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: 'var(--text-dark)', borderTop: '1px solid rgba(184,150,46,0.2)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img src={LOGO_URL} alt="Gavrilov Organic Foods" className="h-10 w-auto" />
              </div>
              <div className="font-body text-xs text-center" style={{ color: 'rgba(244,239,230,0.4)' }}>
                © 2024 Gavrilov Organic Foods · Смоленская область, Россия
              </div>
              <div className="flex items-center gap-2">
                <img src={EU_ORGANIC_LOGO} alt="EU Organic Certified" className="h-8 w-8 rounded" />
                <span className="font-body text-xs" style={{ color: 'rgba(244,239,230,0.5)' }}>EU Organic Certified</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;