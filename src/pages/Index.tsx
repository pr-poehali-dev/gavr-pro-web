import { useState } from 'react';
import Icon from '@/components/ui/icon';

/* ─── Assets ─────────────────────────────────────────────── */
const HERO_IMAGE   = "https://cdn.poehali.dev/projects/36adff41-d365-445e-8d5f-dd8bed2bd445/files/d6567017-3fe5-45e7-b378-926bdaa639ed.jpg";
const LOGO_URL     = "https://cdn.poehali.dev/files/28b12595-508c-46e8-87a0-fad54fb5c1c5.png";
const EU_LOGO      = "https://cdn.poehali.dev/files/dbf183fd-8b1e-46f6-9ba9-d02f634bdf25.png";
const ABOUT_IMG    = "https://cdn.poehali.dev/projects/36adff41-d365-445e-8d5f-dd8bed2bd445/files/e73eb289-9058-41d7-bd3d-6bb7f2c9be60.jpg";
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
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
  const [sent, setSent] = useState(false);

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
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4"
          style={{ backgroundColor: 'rgba(42,32,21,0.97)', backdropFilter: 'blur(14px)' }}
        >
          <img src={LOGO_URL} alt="Gavrilov Foods logo" className="h-10 w-auto" />

          <div className="hidden md:flex items-center gap-7 font-body text-sm font-medium" style={{ color: 'rgba(245,240,230,0.75)' }}>
            {[['#about','About'],['#products','Products'],['#organic','Organic'],['#export','Export'],['#certifications','Certifications'],['#private-label','Private Label'],['#contact','Contact']].map(([href, label]) => (
              <a key={href} href={href} className="hover:opacity-100 transition-opacity" style={{ color: 'rgba(245,240,230,0.75)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,230,0.75)')}
              >{label}</a>
            ))}
          </div>

          <a
            href="#request"
            className="hidden md:block font-body text-sm font-semibold px-5 py-2 rounded-lg transition-opacity hover:opacity-85"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}
          >
            Request a Price
          </a>
        </nav>

        {/* ══ 1. HERO ══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center" style={{ paddingTop: 80 }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(130deg, rgba(42,32,21,0.91) 0%, rgba(42,32,21,0.72) 55%, rgba(42,32,21,0.32) 100%)' }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-24 w-full">
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
                style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', color: 'var(--cream)' }}
              >
                Reliable Russian<br />
                Grain Products<br />
                <em style={{ color: 'var(--gold-light)' }}>for the World</em>
              </h1>

              <p className="font-body text-base mb-6 animate-fade-in-up-2" style={{ color: 'rgba(245,240,230,0.75)', maxWidth: 500 }}>
                Premium Quality · Sustainable · Traceable
              </p>

              {/* EU badge */}
              <div className="flex items-center gap-3 mb-10 animate-fade-in-up-2">
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

              <div className="flex flex-wrap gap-4 animate-fade-in-up-3">
                <a href="#products" className="font-body font-semibold px-8 py-4 rounded-lg text-sm transition-opacity hover:opacity-85"
                  style={{ backgroundColor: 'var(--gold)', color: 'var(--dark)' }}>
                  View Products
                </a>
                <a href="#request" className="font-body font-medium px-8 py-4 rounded-lg text-sm border transition-all hover:bg-white/10"
                  style={{ borderColor: 'rgba(245,240,230,0.35)', color: 'var(--cream)' }}>
                  Request a Price
                </a>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div
            className="absolute bottom-0 left-0 right-0 grid grid-cols-3 divide-x"
            style={{ backgroundColor: 'rgba(42,32,21,0.88)', borderTop: '1px solid rgba(184,150,46,0.2)', divideColor: 'rgba(184,150,46,0.2)' }}
          >
            {[
              ['Farm to Export', 'Full Control'],
              ['Consistent Quality', 'Every Shipment'],
              ['Long-term Partnership', 'Mutual Growth'],
            ].map(([t, s]) => (
              <div key={t} className="py-5 px-6 text-center">
                <div className="font-body text-xs font-semibold mb-0.5" style={{ color: 'var(--gold-light)' }}>{t}</div>
                <div className="font-body text-xs" style={{ color: 'rgba(245,240,230,0.5)' }}>{s}</div>
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
              className="mt-8 rounded-xl p-5 flex items-center gap-4"
              style={{ backgroundColor: 'var(--dark)', border: '1px solid rgba(184,150,46,0.2)' }}
            >
              <span className="text-2xl">🌿</span>
              <p className="font-body text-sm" style={{ color: 'rgba(245,240,230,0.75)' }}>
                <strong style={{ color: 'var(--gold-light)' }}>Organic &amp; Conventional options available</strong> — we meet your needs with flexibility and care
              </p>
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
                <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'var(--dark-soft)' }}>
                  We offer private label production for retailers, distributors and brands worldwide. You get premium-quality grain products under your own label — we handle the rest.
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
                  { icon: "Package", title: "Retail Packaging", text: "Custom sizes from 250g to 5kg" },
                  { icon: "Box", title: "Big Bags", text: "500–1000 kg bulk supply" },
                  { icon: "Container", title: "Containers", text: "Full container loads, FCL/LCL" },
                  { icon: "Tag", title: "Private Label", text: "Your brand on our products" },
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

        {/* ══ 8. CONTACT ═══════════════════════════════════════ */}
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
              <SectionLabel text="Request a Price" />
              <h2 className="font-display font-light mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--cream)' }}>
                Get Your Quote
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
                    {PRODUCTS.map(p => <option key={p.name} value={p.name} style={{ background: 'var(--dark)' }}>{p.name}</option>)}
                    <option value="Other / Multiple" style={{ background: 'var(--dark)' }}>Other / Multiple Products</option>
                  </select>
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
        <footer style={{ backgroundColor: 'rgba(42,32,21,0.97)', borderTop: '1px solid rgba(184,150,46,0.15)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={LOGO_URL} alt="Gavrilov Foods" className="h-10 w-auto" />
            <div className="font-body text-xs text-center" style={{ color: 'rgba(245,240,230,0.35)' }}>
              © 2024 Gavrilov Foods · Smolensk Region, Russia
            </div>
            <div className="flex items-center gap-2">
              <img src={EU_LOGO} alt="EU Organic Certified" className="h-8 w-8 rounded" />
              <span className="font-body text-xs" style={{ color: 'rgba(245,240,230,0.4)' }}>EU Organic Certified</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Index;