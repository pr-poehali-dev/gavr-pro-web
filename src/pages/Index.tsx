import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Gallery from '@/components/Gallery';

/* ─── Assets ─────────────────────────────────────────────── */
const HERO_IMAGE   = "https://cdn.poehali.dev/projects/36adff41-d365-445e-8d5f-dd8bed2bd445/files/d6567017-3fe5-45e7-b378-926bdaa639ed.jpg";
const LOGO_URL     = "https://cdn.poehali.dev/files/28b12595-508c-46e8-87a0-fad54fb5c1c5.png";
const EU_LOGO      = "https://cdn.poehali.dev/files/dbf183fd-8b1e-46f6-9ba9-d02f634bdf25.png";
const ABOUT_IMG    = "https://cdn.poehali.dev/files/08c99862-d2e2-428f-ba2a-a2a2eb054fd5.jpg";
const PRODUCTS_IMG = "https://cdn.poehali.dev/projects/36adff41-d365-445e-8d5f-dd8bed2bd445/bucket/3bd0b17b-6a41-4406-a868-5a06b8449045.png";

/* ─── Data ───────────────────────────────────────────────── */
const BASE = "https://cdn.poehali.dev/projects/36adff41-d365-445e-8d5f-dd8bed2bd445/files/";
const PRODUCTS = [
  { name: "Buckwheat",       organic: true,  img: BASE + "f9b974d1-c841-4331-96a3-842822cdaed9.jpg" },
  { name: "Green\nBuckwheat",organic: true,  img: BASE + "ab0b7037-37e4-4f3e-b487-c56bc4e02e57.jpg" },
  { name: "Buckwheat\nFlour",organic: true,  img: BASE + "45bd13b5-0f8f-46d1-9041-f8f2e3c7cecd.jpg" },
  { name: "Oat Flakes",      organic: true,  img: BASE + "b151bdca-e773-4697-8764-4a7ab451a99c.jpg" },
  { name: "Flaxseed",        organic: true,  img: BASE + "ddadd2fe-c880-48b8-a99b-d7789cc47e5e.jpg" },
  { name: "Red Lentils",     organic: false, img: BASE + "28b5f2c3-288d-4414-8d97-0bcddc4973ce.jpg" },
  { name: "Yellow Peas",     organic: false, img: BASE + "5b5f3b2a-1b2f-4d86-9963-c68f3779eac8.jpg" },
  { name: "Chickpeas",       organic: false, img: BASE + "460f0d5e-3246-4bc3-bb61-d666425bd3b2.jpg" },
  { name: "Green Peas",      organic: false, img: BASE + "42d58a12-be44-4e2e-9fce-aa230f9f1752.jpg" },
  { name: "Wheat",           organic: false, img: BASE + "a053f393-ef0f-4397-80d6-e81be107e082.jpg" },
  { name: "Rye",             organic: false, img: BASE + "3735e42c-c759-45f5-adda-afaf0fa39aba.jpg" },
  { name: "Barley",          organic: false, img: BASE + "b3930bb5-1961-4b75-b197-caa4978820e1.jpg" },
  { name: "Millet",          organic: false, img: BASE + "137f8b3c-1b6d-47e5-bc8c-4d9ea377b007.jpg" },
  { name: "Sunflower\nSeeds",organic: false, img: BASE + "770d2c50-1176-4f6a-ac74-df87fda8539c.jpg" },
  { name: "Rapeseed",        organic: false, img: BASE + "0f1ca6a0-b16d-40a0-b7e0-0e4d9c7571d7.jpg" },
];

const ABOUT_FEATURES = [
  "Own farming and trusted growers",
  "Modern processing facilities",
  "Strict quality control",
  "Stable supply and volume",
  "Export experience worldwide",
];

const ORGANIC_FEATURES = [
  "EU Organic Certified",
  "Traceable from field to final product",
  "Sustainable farming practices",
  "Available in organic grains, pulses and oilseeds",
];

const EXPORT_REGIONS = ["Europe", "North America", "Middle East", "Latin America", "Asia", "Africa"];

const PACKAGING = [
  { icon: "Package",   label: "Retail Packaging" },
  { icon: "Box",       label: "Bulk Supply / Big Bags" },
  { icon: "Container", label: "Container Supply" },
  { icon: "Tag",       label: "Private Label Available" },
];

const EXPORT_ICONS = [
  { icon: "Shield",    label: "Reliable Supply" },
  { icon: "Award",     label: "Consistent Quality" },
  { icon: "Handshake", label: "Long-term Partnership" },
];

/* ── Gallery groups ──────────────────────────────────────── */
const GALLERY_GROUPS = [
  {
    title: "Machinery & Equipment",
    icon: "Tractor",
    images: [
      { src: "https://cdn.poehali.dev/files/a6b50e4f-9b2b-4f04-81b9-3712c3abf7fb.jpg", alt: "Combine harvester GS10 in the field" },
      { src: "https://cdn.poehali.dev/files/e218b691-9429-4cfd-90be-fee24e2e94e4.jpg", alt: "John Deere 9460R tractor" },
      { src: "https://cdn.poehali.dev/files/9fa9b978-477e-4c69-bfdd-aa010369bf58.jpg", alt: "KAMAZ grain truck" },
      { src: "https://cdn.poehali.dev/files/808f2178-f3d0-49c8-ab20-a51b836ab80d.jpg", alt: "Telehandler DIECI loading grain silo" },
    ],
  },
  {
    title: "Warehouse & Big Bags",
    icon: "Warehouse",
    images: [
      { src: "https://cdn.poehali.dev/files/62b224e7-f743-44a1-a822-5b3b8d06a4cf.jpg", alt: "Big bags in warehouse storage" },
      { src: "https://cdn.poehali.dev/files/f06d46f8-3c1d-41ab-abf9-44ba57413bb5.jpg", alt: "Big bags with grain ready for export" },
      { src: "https://cdn.poehali.dev/files/a30d0ce6-760c-444a-9e96-7751bcb91787.jpg", alt: "Stacked 25kg bags on pallets" },
      { src: "https://cdn.poehali.dev/files/712d6784-b71f-4a7c-baca-9e0662e66386.jpg", alt: "Packaged product pallets in warehouse" },
    ],
  },
  {
    title: "Processing Equipment",
    icon: "Settings",
    images: [
      { src: "https://cdn.poehali.dev/files/dab19fe5-67e1-46c4-94e0-896a64670591.jpg", alt: "TEKO automatic packaging machine" },
    ],
  },
  {
    title: "Fields & Crops",
    icon: "Leaf",
    images: [
      { src: "https://cdn.poehali.dev/files/08c99862-d2e2-428f-ba2a-a2a2eb054fd5.jpg", alt: "Buckwheat field in bloom with blue sky" },
      { src: "https://cdn.poehali.dev/files/71677e6f-588a-4c24-91ca-22e14fa60e4d.jpg", alt: "Buckwheat crop close-up with flowers" },
    ],
  },
];

/* ── Catalog PDF (replace with real PDF when ready) ─────── */
const CATALOG_URL = "/catalog/gavrilov-foods-catalog.pdf";

/* ── Proof of Scale data ─────────────────────────────────── */
const PROOF_OF_SCALE = [
  {
    category: "Production",
    icon: "Tractor",
    stats: [
      { value: "10,000 ha", label: "own farmland — full field-to-shelf control" },
      { value: "10,000–15,000 MT", label: "annual grain & pulse output" },
      { value: "200 MT / mo", label: "processing capacity — groats, flour, flakes" },
      { value: "5,000 m²", label: "own warehouse & storage facilities" },
    ],
  },
  {
    category: "Export",
    icon: "Ship",
    stats: [
      { value: "3+ regions", label: "China, Europe, Serbia & growing" },
      { value: "5,000–10,000 MT", label: "annual export volume" },
    ],
  },
  {
    category: "Packaging",
    icon: "Package",
    stats: [
      { value: "250 g – 5 kg", label: "retail packs, private label available" },
      { value: "25 / 50 kg", label: "standard bags for trade & distribution" },
      { value: "500–1,000 kg", label: "big bags for bulk & industrial buyers" },
    ],
  },
  {
    category: "MOQ & Orders",
    icon: "Container",
    stats: [
      { value: "1 MT", label: "minimum order quantity" },
      { value: "20 / 40 ft", label: "full container options available" },
    ],
  },
];

/* ─── Helpers ────────────────────────────────────────────── */
const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-3 mb-5">
    <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
    <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>{text}</span>
    <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
  </div>
);

const SectionLabelLeft = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
    <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>{text}</span>
  </div>
);

/* ─── Structured Data ────────────────────────────────────── */
const SD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gavrilov Foods",
  "description": "Russian agricultural producer and grain processor with full-cycle control from farm to export.",
  "url": "https://gavrilovfarm.ru",
  "telephone": "+7-903-790-17-95",
  "email": "info@gavrilovorganic.com",
  "address": { "@type": "PostalAddress", "addressRegion": "Smolensk Region", "addressCountry": "RU" },
  "areaServed": ["Europe","North America","Middle East","Latin America","Asia","Africa"],
};

/* ════════════════════════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════════════════════════ */
const Index = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', country: '', message: '' });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid var(--cream-dark)',
    backgroundColor: 'var(--cream)',
    color: 'var(--dark)',
    fontFamily: "'Golos Text', sans-serif",
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SD) }} />

      <div className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>

        {/* ══ NAV ═════════════════════════════════════════════ */}
        <nav
          className="fixed top-0 left-0 right-0 z-50"
          style={{ backgroundColor: 'rgba(42,32,21,0.97)', backdropFilter: 'blur(14px)' }}
        >
          <div className="flex items-center justify-between px-5 md:px-14 py-4">
            <img src={LOGO_URL} alt="Gavrilov Foods logo" className="h-10 w-auto" />

            <div className="hidden md:flex items-center gap-7 font-body text-sm font-medium">
              {[['#about','About'],['#products','Products'],['#organic','Organic'],['#export','Export'],['#certifications','Certifications'],['#private-label','Private Label'],['#contact','Contact']].map(([href, label]) => (
                <a key={href} href={href} className="hover:opacity-100 transition-opacity" style={{ color: 'rgba(245,240,230,0.75)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,230,0.75)')}
                >{label}</a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="#request" className="hidden md:block font-body text-sm font-semibold px-5 py-2 rounded-lg transition-opacity hover:opacity-85"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}>
                Request a Quote
              </a>
              <button
                className="md:hidden flex flex-col items-center justify-center gap-1.5 w-9 h-9 rounded-lg"
                style={{ backgroundColor: 'rgba(245,240,230,0.08)' }}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
              >
                <span className="w-5 h-px block transition-all duration-200" style={{ backgroundColor: 'rgba(245,240,230,0.85)', transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none' }} />
                <span className="w-5 h-px block transition-all duration-200" style={{ backgroundColor: 'rgba(245,240,230,0.85)', opacity: menuOpen ? 0 : 1 }} />
                <span className="w-5 h-px block transition-all duration-200" style={{ backgroundColor: 'rgba(245,240,230,0.85)', transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col px-4 pb-4 gap-0.5" style={{ borderTop: '1px solid rgba(184,150,46,0.15)' }}>
              {[['#about','About'],['#products','Products'],['#organic','Organic'],['#export','Export'],['#certifications','Certifications'],['#private-label','Private Label'],['#contact','Contact']].map(([href, label]) => (
                <a key={href} href={href}
                  className="font-body text-sm font-medium py-3 px-3 rounded-lg"
                  style={{ color: 'rgba(245,240,230,0.8)' }}
                  onClick={() => setMenuOpen(false)}
                >{label}</a>
              ))}
              <a href="#request"
                className="font-body text-sm font-semibold py-3 rounded-lg text-center mt-2"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}
                onClick={() => setMenuOpen(false)}
              >Request a Quote</a>
            </div>
          )}
        </nav>

        {/* ══ 1. HERO ══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center" style={{ paddingTop: 80 }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          {/* Градиент для десктопа */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{ background: 'linear-gradient(130deg, rgba(42,32,21,0.72) 0%, rgba(42,32,21,0.52) 55%, rgba(42,32,21,0.18) 100%)' }}
          />
          {/* Градиент для мобиле — равномерно темнее для читаемости */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: 'rgba(28,18,8,0.68)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 w-full" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
            <div className="max-w-2xl">
              {/* Sub-label */}
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
                <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  Farm Origin · Grain Processing · Export Supply
                </span>
              </div>

              <h1
                className="font-display font-light leading-tight mb-5 animate-fade-in-up-1"
                style={{ fontSize: 'clamp(2.4rem,5.5vw,4.5rem)', color: '#fff', textShadow: '0 2px 16px rgba(0,0,0,0.55)' }}
              >
                Organic &amp; Conventional<br />
                <em style={{ color: 'var(--gold-light)' }}>Grain Supplier</em>
              </h1>

              <p className="font-body text-base md:text-lg mb-6 animate-fade-in-up-2 font-medium" style={{ color: 'rgba(255,255,255,0.92)', maxWidth: 540, textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                Grains · Pulses · Flaxseed · Private Label · Export Logistics
              </p>

              {/* EU badge */}
              <div className="flex items-center gap-3 mb-8 animate-fade-in-up-2">
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ backgroundColor: 'rgba(245,240,230,0.10)', border: '1px solid rgba(184,150,46,0.4)' }}
                >
                  <img src={EU_LOGO} alt="EU Organic Certified" className="h-10 w-10 rounded" />
                  <div>
                    <div className="font-body text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--gold-light)' }}>EU ORGANIC</div>
                    <div className="font-body text-xs" style={{ color: 'rgba(245,240,230,0.6)' }}>CERTIFIED</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 animate-fade-in-up-3">
                <a href="#products" className="font-body font-semibold px-6 py-3.5 rounded-lg text-sm transition-opacity hover:opacity-85 whitespace-nowrap"
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}>
                  View Products
                </a>
                <a href="#request"
                  className="font-body font-medium px-6 py-3.5 rounded-lg text-sm transition-all whitespace-nowrap
                    border md:border md:hover:bg-white/10"
                  style={{
                    borderColor: 'rgba(245,240,230,0.35)',
                    color: 'var(--cream)',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                  }}>Request a Quote</a>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div
            className="absolute bottom-0 left-0 right-0 grid grid-cols-3 divide-x"
            style={{ backgroundColor: 'rgba(42,32,21,0.88)', borderTop: '1px solid rgba(184,150,46,0.2)', divideColor: 'rgba(184,150,46,0.2)' }}
          >
            {[
              ['EU Organic Certified', 'Farm → Processing → Export'],
              ['Bulk & Retail Packaging', 'Big Bags · FCL/LCL'],
              ['Private Label Available', 'From concept to shelf-ready'],
            ].map(([t, s]) => (
              <div key={t} className="py-5 px-6 text-center">
                <div className="font-body text-xs font-semibold mb-0.5" style={{ color: 'var(--gold-light)' }}>{t}</div>
                <div className="font-body text-xs" style={{ color: 'rgba(245,240,230,0.5)' }}>{s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ WHY BUYERS CHOOSE US ═══════════════════════════ */}
        <section style={{ backgroundColor: 'var(--cream-mid)', borderBottom: '1px solid var(--cream-dark)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-14 py-16">
            <div className="text-center mb-10">
              <SectionLabel text="Why Buyers Choose Us" />
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--dark)' }}>
                Everything a grain buyer needs —<br /><em style={{ color: 'var(--gold)' }}>in one supplier</em>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: "Award",    title: "EU Organic Certified",        sub: "Certified grains & pulses" },
                { icon: "Workflow", title: "Farm → Processing → Export",  sub: "Full cycle, zero middlemen" },
                { icon: "Package",  title: "Bulk & Retail Packaging",     sub: "250 g to Big Bags 1000 kg" },
                { icon: "Tag",      title: "Private Label",               sub: "From concept to shelf-ready" },
                { icon: "Ship",     title: "Export Logistics",            sub: "FCL / LCL, worldwide" },
              ].map(item => (
                <div key={item.title}
                  className="hover-lift rounded-2xl p-5 flex flex-col items-center text-center gap-3"
                  style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--cream-dark)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--dark)' }}>
                    <Icon name={item.icon} size={22} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <div className="font-body font-bold text-sm mb-1" style={{ color: 'var(--dark)' }}>{item.title}</div>
                    <div className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PHOTO STRIP ════════════════════════════════════ */}
        <section className="overflow-hidden" style={{ backgroundColor: 'var(--dark)' }}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {[
              { src: "https://cdn.poehali.dev/files/a6b50e4f-9b2b-4f04-81b9-3712c3abf7fb.jpg", alt: "Combine harvester in the field" },
              { src: "https://cdn.poehali.dev/files/62b224e7-f743-44a1-a822-5b3b8d06a4cf.jpg", alt: "Big bags warehouse storage" },
              { src: "https://cdn.poehali.dev/files/dab19fe5-67e1-46c4-94e0-896a64670591.jpg", alt: "Processing equipment" },
              { src: "https://cdn.poehali.dev/files/08c99862-d2e2-428f-ba2a-a2a2eb054fd5.jpg", alt: "Buckwheat field in bloom" },
              { src: "https://cdn.poehali.dev/files/9fa9b978-477e-4c69-bfdd-aa010369bf58.jpg", alt: "KAMAZ grain truck" },
            ].map(img => (
              <div key={img.alt} className="overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>

        {/* ══ 2. ABOUT ═════════════════════════════════════════ */}
        <section id="about" className="max-w-7xl mx-auto px-6 md:px-14 py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabelLeft text="About Gavrilov Foods" />
              <h2 className="font-display font-light leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--dark)' }}>
                From farm<br /><em style={{ color: 'var(--gold)' }}>to export</em>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'var(--dark-soft)' }}>
                We are a Russian agricultural producer and grain processor with full-cycle control from farm to export.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'var(--dark-soft)' }}>
                Located in the Smolensk Region, our company combines modern processing technologies, strict quality standards and reliable logistics to deliver premium products to customers worldwide.
              </p>

              <div className="space-y-3 mb-10">
                {ABOUT_FEATURES.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}>
                      <Icon name="Check" size={11} />
                    </div>
                    <span className="font-body text-sm" style={{ color: 'var(--dark-soft)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <div className="divider-gold mb-8" />
              <p className="font-display italic" style={{ fontSize: '1.55rem', color: 'var(--dark)', lineHeight: 1.5 }}>
                "Growing quality.<br />Delivering trust.<br />Building partnership."
              </p>
            </div>

            {/* Right: aerial farm photo */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--cream-dark)', boxShadow: '0 20px 60px rgba(42,32,21,0.15)' }}>
                <img src={ABOUT_IMG} alt="Gavrilov Foods grain fields aerial view" className="w-full object-cover" style={{ height: 460 }} />
              </div>
              <div
                className="absolute -bottom-5 -left-5 rounded-xl px-5 py-4"
                style={{ backgroundColor: 'var(--dark)', border: '1px solid rgba(184,150,46,0.3)' }}
              >
                <div className="font-display text-2xl font-semibold" style={{ color: 'var(--gold-light)' }}>30+</div>
                <div className="font-body text-xs" style={{ color: 'rgba(245,240,230,0.6)' }}>countries worldwide</div>
              </div>
            </div>
          </div>

          {/* ── Proof of Scale ────────────────────────────────── */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <SectionLabel text="Proof of Scale" />
              <h3 className="font-display font-light" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', color: 'var(--dark)' }}>
                Real numbers behind every shipment
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROOF_OF_SCALE.map(cat => (
                <div key={cat.category}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--cream-dark)' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}>
                      <Icon name={cat.icon} size={14} />
                    </div>
                    <span className="font-body text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--dark)' }}>{cat.category}</span>
                  </div>
                  <div className="space-y-3">
                    {cat.stats.map(s => (
                      <div key={s.label}>
                        <div className="font-display font-semibold leading-none mb-0.5" style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)', color: 'var(--gold)' }}>{s.value}</div>
                        <div className="font-body text-xs leading-snug" style={{ color: 'var(--dark-soft)' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 3. PRODUCTS ══════════════════════════════════════ */}
        <section id="products" style={{ backgroundColor: 'var(--cream-mid)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-14 py-24">
            <div className="text-center mb-14">
              <SectionLabel text="Our Products" />
              <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--dark)' }}>
                Wide range of grains, pulses<br />and oilseeds for global markets
              </h2>
            </div>

            {/* 3-column grid — photo bowl + name капслоком, как в буклете */}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {PRODUCTS.map(p => (
                <div
                  key={p.name}
                  className="hover-lift relative flex flex-col items-center text-center"
                  itemScope itemType="https://schema.org/Product"
                >
                  <meta itemProp="name" content={p.name.replace('\n', ' ')} />

                  {/* BIO badge */}
                  {p.organic && (
                    <div
                      className="absolute top-1 right-1 z-10 font-body font-bold rounded-full px-1.5 py-0.5"
                      style={{ fontSize: '0.55rem', letterSpacing: '0.08em', backgroundColor: 'var(--gold)', color: 'var(--dark)' }}
                    >
                      BIO
                    </div>
                  )}

                  {/* Bowl photo — square, rounded */}
                  <div className="w-full rounded-xl overflow-hidden mb-3" style={{ border: '1px solid var(--cream-dark)' }}>
                    <img
                      src={p.img}
                      alt={p.name.replace('\n', ' ')}
                      className="w-full object-cover"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>

                  {/* Name — капслок, bold, как в буклете */}
                  <p
                    className="font-body font-bold uppercase leading-tight tracking-wide"
                    style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.72rem)', color: 'var(--dark)', whiteSpace: 'pre-line' }}
                  >
                    {p.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom strip */}
            <div
              className="mt-8 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ backgroundColor: 'var(--dark)', border: '1px solid rgba(184,150,46,0.2)' }}
            >
              <span className="text-2xl hidden sm:block">🌿</span>
              <p className="font-body text-sm flex-1" style={{ color: 'rgba(245,240,230,0.75)' }}>
                <strong style={{ color: 'var(--gold-light)' }}>Organic &amp; Conventional options available</strong> — we meet your needs with flexibility and care
              </p>
              <a
                href={CATALOG_URL}
                download="Gavrilov-Foods-Catalog.pdf"
                className="flex items-center gap-2 font-body text-sm font-semibold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-85 whitespace-nowrap flex-shrink-0"
                style={{ backgroundColor: 'rgba(184,150,46,0.15)', border: '1px solid rgba(184,150,46,0.4)', color: 'var(--gold-light)' }}
              >
                <Icon name="FileDown" size={15} />
                Download Catalog PDF
              </a>
            </div>
          </div>
        </section>

        {/* ══ 4. ORGANIC & CONVENTIONAL ════════════════════════ */}
        <section id="organic" className="max-w-7xl mx-auto px-6 md:px-14 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-2xl p-10"
              style={{ backgroundColor: 'var(--dark)', border: '1px solid rgba(184,150,46,0.25)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8" style={{ background: 'var(--gold)' }} />
                <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Organic & Conventional</span>
              </div>
              <h2 className="font-display font-light leading-tight mb-3"
                style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: 'var(--cream)' }}>
                Organic &amp;<br /><em style={{ color: 'var(--gold-light)' }}>Conventional Options</em>
              </h2>
              <p className="font-body text-sm mb-6" style={{ color: 'rgba(245,240,230,0.65)' }}>
                We meet your needs with flexibility and care
              </p>
              <div
                className="rounded-xl p-5 flex items-center gap-4"
                style={{ backgroundColor: 'rgba(184,150,46,0.12)', border: '1px solid rgba(184,150,46,0.25)' }}
              >
                <span className="text-3xl">🌿</span>
                <p className="font-body text-sm" style={{ color: 'rgba(245,240,230,0.75)' }}>
                  Organic &amp; Conventional options available —<br />we meet your needs with flexibility and care
                </p>
              </div>
            </div>

            <div>
              <SectionLabelLeft text="Certified Organic" />
              <h3 className="font-display font-light mb-6" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'var(--dark)' }}>
                Healthy products —<br /><em style={{ color: 'var(--gold)' }}>healthy planet</em>
              </h3>
              <div className="space-y-3 mb-8">
                {ORGANIC_FEATURES.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}>
                      <Icon name="Check" size={11} />
                    </div>
                    <span className="font-body text-sm" style={{ color: 'var(--dark-soft)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl" style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--cream-dark)' }}>
                <img src={EU_LOGO} alt="EU Organic" className="h-16 w-16 rounded-lg" />
                <div>
                  <div className="font-body font-bold text-sm mb-1" style={{ color: 'var(--dark)' }}>EU ORGANIC CERTIFIED</div>
                  <div className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>Available in organic grains, pulses and oilseeds</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 5. EXPORT ════════════════════════════════════════ */}
        <section id="export" style={{ backgroundColor: 'var(--dark)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-14 py-24">
            <div className="text-center mb-14">
              <SectionLabel text="Exporting Worldwide" />
              <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--cream)' }}>
                Delivering quality to customers<br /><em style={{ color: 'var(--gold-light)' }}>across the globe</em>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {EXPORT_REGIONS.map(r => (
                <div key={r} className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm"
                  style={{ border: '1px solid rgba(184,150,46,0.35)', color: 'var(--cream)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <Icon name="MapPin" size={13} style={{ color: 'var(--gold)' }} />
                  {r}
                </div>
              ))}
            </div>

            <div className="divider-gold mb-14" style={{ opacity: 0.3 }} />

            <div className="grid grid-cols-3 gap-8 text-center">
              {EXPORT_ICONS.map(i => (
                <div key={i.label} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(184,150,46,0.12)', border: '1px solid rgba(184,150,46,0.3)' }}>
                    <Icon name={i.icon} size={24} style={{ color: 'var(--gold)' }} />
                  </div>
                  <span className="font-body text-sm font-semibold" style={{ color: 'rgba(245,240,230,0.8)' }}>{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 6. CERTIFICATIONS ════════════════════════════════ */}
        <section id="certifications" className="max-w-7xl mx-auto px-6 md:px-14 py-24">
          <div className="text-center mb-14">
            <SectionLabel text="Certifications" />
            <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--dark)' }}>
              Quality You Can Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* EU Organic */}
            <div className="hover-lift rounded-2xl overflow-hidden" style={{ border: '1px solid var(--cream-dark)' }}>
              <div className="p-8 flex items-center gap-6" style={{ backgroundColor: 'var(--cream-mid)' }}>
                <img src={EU_LOGO} alt="EU Organic Certification" className="h-20 w-20 rounded-xl object-cover" />
                <div>
                  <div className="font-display text-2xl font-semibold mb-1" style={{ color: 'var(--dark)' }}>EU Organic</div>
                  <div className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>European Organic Certification</div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {ORGANIC_FEATURES.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={15} style={{ color: 'var(--gold)', marginTop: 2 }} />
                      <span className="font-body text-sm" style={{ color: 'var(--dark-soft)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Packaging & Supply */}
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--cream-dark)' }}>
              <div className="p-6" style={{ backgroundColor: 'var(--cream-mid)', borderBottom: '1px solid var(--cream-dark)' }}>
                <div className="font-body text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--gold)' }}>Packaging & Supply</div>
                <div className="font-display text-xl" style={{ color: 'var(--dark)' }}>Flexible Delivery Options</div>
              </div>
              <div className="grid grid-cols-2 gap-4 p-6">
                {PACKAGING.map(pkg => (
                  <div key={pkg.label} className="hover-lift rounded-xl p-5 flex flex-col items-start gap-3"
                    style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--cream-dark)' }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--cream-mid)' }}>
                      <Icon name={pkg.icon} size={18} style={{ color: 'var(--gold)' }} />
                    </div>
                    <span className="font-body text-xs font-semibold" style={{ color: 'var(--dark)' }}>{pkg.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 7. PRIVATE LABEL ═════════════════════════════════ */}
        <section id="private-label" style={{ backgroundColor: 'var(--cream-mid)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-14 py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabelLeft text="Private Label" />
                <h2 className="font-display font-light leading-tight mb-6"
                  style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--dark)' }}>
                  Your Brand,<br /><em style={{ color: 'var(--gold)' }}>Our Quality</em>
                </h2>
                <p className="font-body text-base leading-relaxed mb-3" style={{ color: 'var(--dark-soft)' }}>
                  From concept to shelf-ready packaging — we produce premium grain products under your brand for retailers, distributors and private importers worldwide.
                </p>
                <p className="font-body text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  Design, certification, packaging format and logistics — all handled on our side. You focus on selling.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Custom packaging design",
                    "Your brand, your label",
                    "All product types available",
                    "Retail & wholesale volumes",
                    "EU Organic certification possible",
                  ].map(f => (
                    <div key={f} className="flex items-center gap-3">
                      <Icon name="CheckCircle" size={16} style={{ color: 'var(--gold)' }} />
                      <span className="font-body text-sm" style={{ color: 'var(--dark-soft)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a href="#request"
                  className="inline-block font-body font-semibold px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}>
                  Discuss Private Label
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Package",   title: "Retail Packaging",  text: "250 g · 500 g · 1 kg · 5 kg" },
                  { icon: "Box",       title: "Big Bags",          text: "500 kg · 1 000 kg bulk supply" },
                  { icon: "Container", title: "FCL / LCL Export",  text: "Full & partial container loads" },
                  { icon: "Tag",       title: "Private Label",     text: "Concept → shelf-ready packaging" },
                ].map(item => (
                  <div key={item.title} className="hover-lift rounded-xl p-6"
                    style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--cream-dark)' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'var(--cream-mid)' }}>
                      <Icon name={item.icon} size={20} style={{ color: 'var(--gold)' }} />
                    </div>
                    <div className="font-body font-semibold text-sm mb-1" style={{ color: 'var(--dark)' }}>{item.title}</div>
                    <div className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 8. GALLERY ═══════════════════════════════════════ */}
        <section id="gallery" className="max-w-7xl mx-auto px-6 md:px-14 py-24">
          <div className="text-center mb-12">
            <SectionLabel text="Our Facility" />
            <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--dark)' }}>
              See what's behind<br /><em style={{ color: 'var(--gold)' }}>every shipment</em>
            </h2>
          </div>
          <Gallery groups={GALLERY_GROUPS} />
        </section>

        {/* ══ 9. CONTACT ═══════════════════════════════════════ */}
        <section id="contact" className="max-w-7xl mx-auto px-6 md:px-14 py-24">
          <div className="text-center mb-14">
            <SectionLabel text="Contact Us" />
            <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--dark)' }}>
              Let's Build a Partnership
            </h2>
            <p className="font-body text-base" style={{ color: 'var(--text-muted)' }}>
              Reach us through any convenient channel
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mb-10">
            {[
              { icon: "Phone",  label: "Phone / WhatsApp", value: "+7 903 790 17 95",       href: "tel:+79037901795" },
              { icon: "Mail",   label: "Email",            value: "info@gavrilovorganic.com", href: "mailto:info@gavrilovorganic.com" },
              { icon: "Globe",  label: "Website",          value: "gavrilovfarm.ru",           href: "https://gavrilovfarm.ru" },
              { icon: "MapPin", label: "Location",         value: "Smolensk Region, Russia",   href: "#" },
            ].map(c => (
              <a
                key={c.label}
                href={c.href}
                className="hover-lift rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                style={{ backgroundColor: 'var(--cream-mid)', border: '1px solid var(--cream-dark)', textDecoration: 'none' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--cream-dark)' }}>
                  <Icon name={c.icon} size={22} style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <div className="font-body text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>{c.label}</div>
                  <div className="font-body font-semibold text-sm" style={{ color: 'var(--dark)' }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ══ 9. REQUEST FORM ══════════════════════════════════ */}
        <section id="request" style={{ backgroundColor: 'var(--dark)' }}>
          <div className="max-w-3xl mx-auto px-6 md:px-14 py-24">
            <div className="text-center mb-12">
              <SectionLabel text="Get a Quote" />
              <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: 'var(--cream)' }}>
                Request a Quote<br />
                <span style={{ fontSize: '0.6em', color: 'var(--gold-light)' }}>Запросить экспортное предложение</span>
              </h2>
              <p className="font-body text-sm" style={{ color: 'rgba(245,240,230,0.55)' }}>
                Fill in the form and we'll get back to you within 24 hours
              </p>
            </div>

            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'rgba(184,150,46,0.15)', border: '1px solid var(--gold)' }}>
                  <Icon name="CheckCircle" size={32} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--cream)' }}>Thank you!</h3>
                <p className="font-body text-sm" style={{ color: 'rgba(245,240,230,0.55)' }}>
                  We've received your request and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                className="rounded-2xl p-8 md:p-10 space-y-5"
                style={{ backgroundColor: 'rgba(245,240,230,0.05)', border: '1px solid rgba(184,150,46,0.2)' }}
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--gold)' }}>Name *</label>
                    <input
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ ...inputStyle, backgroundColor: 'rgba(245,240,230,0.07)', border: '1px solid rgba(184,150,46,0.25)', color: 'var(--cream)' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)')}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--gold)' }}>Company</label>
                    <input
                      placeholder="Company name"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      style={{ ...inputStyle, backgroundColor: 'rgba(245,240,230,0.07)', border: '1px solid rgba(184,150,46,0.25)', color: 'var(--cream)' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--gold)' }}>Email *</label>
                    <input
                      required type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ ...inputStyle, backgroundColor: 'rgba(245,240,230,0.07)', border: '1px solid rgba(184,150,46,0.25)', color: 'var(--cream)' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)')}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--gold)' }}>Phone / WhatsApp</label>
                    <input
                      placeholder="+1 000 000 0000"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ ...inputStyle, backgroundColor: 'rgba(245,240,230,0.07)', border: '1px solid rgba(184,150,46,0.25)', color: 'var(--cream)' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--gold)' }}>Product of Interest</label>
                    <select
                      value={form.product}
                      onChange={e => setForm({ ...form, product: e.target.value })}
                      style={{ ...inputStyle, backgroundColor: 'rgba(245,240,230,0.07)', border: '1px solid rgba(184,150,46,0.25)', color: form.product ? 'var(--cream)' : 'rgba(245,240,230,0.4)' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)')}
                    >
                      <option value="" disabled style={{ background: 'var(--dark)' }}>Select product</option>
                      {PRODUCTS.map(p => <option key={p.name} value={p.name} style={{ background: 'var(--dark)' }}>{p.name.replace('\n', ' ')}</option>)}
                      <option value="Other / Multiple" style={{ background: 'var(--dark)' }}>Other / Multiple Products</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--gold)' }}>Destination Country *</label>
                    <input
                      required
                      placeholder="e.g. Germany, UAE, Brazil"
                      value={form.country}
                      onChange={e => setForm({ ...form, country: e.target.value })}
                      style={{ ...inputStyle, backgroundColor: 'rgba(245,240,230,0.07)', border: '1px solid rgba(184,150,46,0.25)', color: 'var(--cream)' }}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)')}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider block mb-2" style={{ color: 'var(--gold)' }}>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Volume, packaging, destination country, any specific requirements..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, backgroundColor: 'rgba(245,240,230,0.07)', border: '1px solid rgba(184,150,46,0.25)', color: 'var(--cream)', resize: 'vertical' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-body font-semibold py-4 rounded-lg text-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ══ FOOTER ═══════════════════════════════════════════ */}
        <footer style={{ backgroundColor: 'rgba(28,20,12,0.99)', borderTop: '1px solid rgba(184,150,46,0.15)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-14 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <img src={LOGO_URL} alt="Gavrilov Foods" className="h-12 w-auto mb-4" />
                <p className="font-body text-xs leading-relaxed mb-5" style={{ color: 'rgba(245,240,230,0.45)' }}>
                  Russian grain producer & exporter. Farm-to-export supply chain.
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <img src={EU_LOGO} alt="EU Organic Certified" className="h-9 w-9 rounded" />
                  <div>
                    <div className="font-body text-xs font-bold" style={{ color: 'var(--gold-light)' }}>EU ORGANIC CERTIFIED</div>
                    <div className="font-body text-xs" style={{ color: 'rgba(245,240,230,0.35)' }}>Certified grains & pulses</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <div className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>Quick Links</div>
                <div className="space-y-2.5">
                  {[['#about','About Us'],['#products','Our Products'],['#organic','Organic'],['#export','Export'],['#private-label','Private Label'],['#gallery','Gallery'],['#request','Request a Quote']].map(([href, label]) => (
                    <a key={href} href={href} className="block font-body text-sm transition-colors"
                      style={{ color: 'rgba(245,240,230,0.5)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,230,0.5)')}
                    >{label}</a>
                  ))}
                </div>
              </div>

              {/* Export Regions */}
              <div>
                <div className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>Export Regions</div>
                <div className="space-y-2">
                  {EXPORT_REGIONS.map(r => (
                    <div key={r} className="flex items-center gap-2">
                      <Icon name="MapPin" size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                      <span className="font-body text-sm" style={{ color: 'rgba(245,240,230,0.5)' }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact & CTA */}
              <div>
                <div className="font-body text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--gold)' }}>Contact</div>
                <div className="space-y-3 mb-5">
                  <a href="tel:+79037901795" className="flex items-center gap-2 font-body text-sm" style={{ color: 'rgba(245,240,230,0.55)' }}>
                    <Icon name="Phone" size={13} style={{ color: 'var(--gold)' }} />+7 903 790 17 95
                  </a>
                  <a href="mailto:info@gavrilovorganic.com" className="flex items-center gap-2 font-body text-sm" style={{ color: 'rgba(245,240,230,0.55)' }}>
                    <Icon name="Mail" size={13} style={{ color: 'var(--gold)' }} />info@gavrilovorganic.com
                  </a>
                  <div className="flex items-center gap-2 font-body text-sm" style={{ color: 'rgba(245,240,230,0.45)' }}>
                    <Icon name="MapPin" size={13} style={{ color: 'var(--gold)' }} />Smolensk Region, Russia
                  </div>
                </div>
                <a
                  href="https://wa.me/79037901795?text=Hello%2C%20I%27d%20like%20to%20request%20an%20export%20quote"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm font-semibold px-4 py-2.5 rounded-lg mb-3 transition-opacity hover:opacity-85"
                  style={{ backgroundColor: '#25D366', color: '#fff' }}
                >
                  <Icon name="MessageCircle" size={15} />WhatsApp Export Manager
                </a>
                <a
                  href={CATALOG_URL}
                  download="Gavrilov-Foods-Catalog.pdf"
                  className="flex items-center gap-2 font-body text-xs font-semibold px-4 py-2 rounded-lg transition-opacity hover:opacity-85"
                  style={{ border: '1px solid rgba(184,150,46,0.4)', color: 'var(--gold-light)' }}
                >
                  <Icon name="FileDown" size={13} />Download Catalog PDF
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(184,150,46,0.1)' }}>
              <div className="font-body text-xs" style={{ color: 'rgba(245,240,230,0.25)' }}>
                © 2024 Gavrilov Foods · Smolensk Region, Russia
              </div>
              <div className="font-body text-xs text-center" style={{ color: 'rgba(245,240,230,0.2)' }}>
                Grains · Pulses · Oilseeds · Private Label · Export Logistics
              </div>
            </div>
          </div>
        </footer>

        {/* ══ WHATSAPP STICKY BUTTON ═══════════════════════════ */}
        <a
          href="https://wa.me/79037901795?text=Hello%2C%20I%27d%20like%20to%20request%20an%20export%20quote"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 font-body font-semibold text-sm px-5 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 hover:shadow-green-500/30"
          style={{ backgroundColor: '#25D366', color: '#fff', boxShadow: '0 8px 32px rgba(37,211,102,0.35)' }}
        >
          <Icon name="MessageCircle" size={20} />
          <span className="hidden sm:inline">Chat with Export Team</span>
        </a>

      </div>
    </>
  );
};

export default Index;