import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: LujainDesign,
})

const products = [
  {
    name: 'عباءة الليل الفاخرة',
    cat: 'عبايات كلاسيك',
    price: '300',
    image: '/abaya-1.jpg',
    badge: 'جديد',
    desc: 'عباءة سوداء كلاسيكية من أجود أقمشة الكريب المزدوج، تتميز بقصّة سادة أنيقة تُناسب جميع المقاسات وتمنحكِ إطلالة راقية في كل وقت.',
  },
  {
    name: 'عباءة ذهب وليل',
    cat: 'عبايات مطرزة',
    price: '300',
    image: '/abaya-2.jpg',
    badge: 'الأكثر طلبًا',
    desc: 'تصميم حصري يجمع بين الأسود الفاخر والتطريز الذهبي اليدوي على الأكمام والياقة، لتكوني مركز الاهتمام في أي مناسبة.',
  },
  {
    name: 'عباءة نجوم السهرة',
    cat: 'عبايات سهرة',
    price: '300',
    image: '/abaya-3.jpg',
    badge: 'حصري',
    desc: 'عباءة سهرة فاخرة مزينة بأحجار السواروفسكي اللامعة، مصممة خصيصًا للمناسبات الراقية والأفراح.',
  },
  {
    name: 'عباءة الصباح',
    cat: 'عبايات يومية',
    price: '300',
    image: '/abaya-1.jpg',
    badge: '',
    desc: 'عباءة عملية وأنيقة للاستخدام اليومي من قماش الجورجيت الخفيف، تمنحكِ الراحة والأناقة طوال اليوم.',
  },
  {
    name: 'عباءة الأميرة',
    cat: 'عبايات مطرزة',
    price: '300',
    image: '/abaya-2.jpg',
    badge: 'VIP',
    desc: 'تحفة فنية من التطريز الحريري على القماش الأطلس الفاخر، تصميم لا يُضاهى للمناسبات الخاصة والأفراح.',
  },
  {
    name: 'عباءة الياسمين',
    cat: 'عبايات كلاسيك',
    price: '300',
    image: '/abaya-3.jpg',
    badge: '',
    desc: 'عباءة كلاسيكية بتفصيلة أنيقة على الأكمام والطوق، مناسبة للعمل والخروج اليومي.',
  },
  {
    name: 'عباءة قمر عدن',
    cat: 'عبايات سهرة',
    price: '300',
    image: '/abaya-1.jpg',
    badge: 'جديد',
    desc: 'إلهام من جمال عدن الساحلي، عباءة سهرة بلون أسود منجز بخيوط ذهبية رفيعة على الحواف.',
  },
  {
    name: 'عباءة الفراشة',
    cat: 'عبايات يومية',
    price: '300',
    image: '/abaya-3.jpg',
    badge: '',
    desc: 'عباءة يومية خفيفة بقصة واسعة مريحة، مثالية للطقس الدافئ مع الحفاظ على الأناقة.',
  },
]

const WA_NUMBER = '967776212433'
const IG_HANDLE = 'Lujain.design7'
const waLink = (msg = 'السلام عليكم، أريد الاستفسار عن العبايات') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
const igLink = `https://instagram.com/${IG_HANDLE}`

function goTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

function orderNow(name: string, price: string) {
  window.open(waLink(`السلام عليكم، أريد الاستفسار عن ${name} بسعر ${price} ريال سعودي`), '_blank')
}

type Product = (typeof products)[0]

function ProductModal({
  product,
  onClose,
}: {
  product: Product | null
  onClose: () => void
}) {
  if (!product) return null
  return (
    <div
      className={`modal-bg ${product ? 'open' : ''}`}
      id="modal"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'modal') onClose()
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h3>{product.name}</h3>
        <div className="modal-cat">{product.cat}</div>
        <div className="modal-price">
          <small>ر.س</small> {product.price}
        </div>
        <p className="modal-desc">{product.desc}</p>
        <div className="modal-actions">
          <a
            href={waLink(`السلام عليكم، أريد الاستفسار عن ${product.name} بسعر ${product.price} ريال سعودي`)}
            target="_blank"
            rel="noreferrer"
            className="btn-wa-big"
            style={{ justifyContent: 'center' }}
          >
            💬 اطلبي عبر واتساب
          </a>
          <a
            href={igLink}
            target="_blank"
            rel="noreferrer"
            className="btn-ig-big"
            style={{ justifyContent: 'center' }}
          >
            📸 شاهدي المزيد على إنستغرام
          </a>
        </div>
      </div>
    </div>
  )
}

function ProductsGrid({ filter }: { filter: string }) {
  const [modal, setModal] = useState<Product | null>(null)
  const items = filter === 'الكل' ? products : products.filter((p) => p.cat === filter)

  return (
    <>
      <div className="products-grid">
        {items.map((p) => (
          <div key={p.name} className="product-card" onClick={() => setModal(p)}>
            <div className="p-img">
              <img src={p.image} alt={p.name} className="p-img-photo" />
              {p.badge && <div className="p-badge">{p.badge}</div>}
              <div className="p-hover-overlay">
                <button
                  className="p-btn p-btn-main"
                  onClick={(e) => {
                    e.stopPropagation()
                    setModal(p)
                  }}
                >
                  عرض التفاصيل
                </button>
                <button
                  className="p-btn p-btn-wa"
                  onClick={(e) => {
                    e.stopPropagation()
                    orderNow(p.name, p.price)
                  }}
                >
                  اطلبي الآن 💬
                </button>
              </div>
            </div>
            <div className="p-info">
              <div className="p-name">{p.name}</div>
              <div className="p-cat">{p.cat}</div>
              <div className="p-footer">
                <div className="p-price">
                  <small>ر.س</small>
                  {p.price}
                </div>
                <button
                  className="p-add"
                  onClick={(e) => {
                    e.stopPropagation()
                    orderNow(p.name, p.price)
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductModal product={modal} onClose={() => setModal(null)} />
    </>
  )
}

function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  function sendWa() {
    if (!name || !msg) {
      alert('يرجى تعبئة الاسم والرسالة')
      return
    }
    window.open(
      waLink(`السلام عليكم، اسمي ${name} ورقمي ${phone}. ${msg}`),
      '_blank',
    )
  }

  return (
    <div className="contact-form">
      <input
        type="text"
        placeholder="اسمكِ الكريم"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <textarea
        placeholder="استفساركِ أو طلبكِ ..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={sendWa}>إرسال عبر واتساب ←</button>
    </div>
  )
}

function LujainDesign() {
  const [activeFilter, setActiveFilter] = useState('الكل')

  const filters = ['الكل', 'عبايات كلاسيك', 'عبايات مطرزة', 'عبايات سهرة', 'عبايات يومية']
  const filterLabels: Record<string, string> = {
    'الكل': 'الكل',
    'عبايات كلاسيك': 'كلاسيك',
    'عبايات مطرزة': 'مطرزة',
    'عبايات سهرة': 'سهرة',
    'عبايات يومية': 'يومية',
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="logo-wrap">
          <div className="logo-en">Lujain</div>
          <div className="logo-sub">Design · عدن</div>
        </div>
        <ul className="nav-links">
          <li><a onClick={() => goTo('#categories')}>التصنيفات</a></li>
          <li><a onClick={() => goTo('#products')}>المجموعات</a></li>
          <li><a onClick={() => goTo('#about')}>عن المحل</a></li>
          <li><a onClick={() => goTo('#contact')}>تواصل معنا</a></li>
        </ul>
        <div className="nav-right">
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="nav-wa">💬 واتساب</a>
          <a href={igLink} target="_blank" rel="noreferrer" className="nav-ig">📸 إنستغرام</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="ornament orn1" />
        <div className="ornament orn2" />
        <div className="ornament orn3" />
        <div className="ornament orn4" />
        <div className="hero-inner">
          <div className="hero-badge">✦ بوتيك عبايات فاخرة · عدن ✦</div>
          <div className="hero-brand">Lujain</div>
          <div className="hero-brand-sub">D E S I G N</div>
          <div className="hero-divider">
            <span />
            <span>◆</span>
            <span style={{ background: 'linear-gradient(to right,transparent,var(--gold))' }} />
          </div>
          <p className="hero-tagline">
            أناقة تُعبّر عنكِ … تصاميم عبايات حصرية<br />
            تجمع بين الفخامة والذوق الرفيع
          </p>
          <div className="hero-ctas">
            <button className="btn-gold" onClick={() => goTo('#products')}>تسوّقي الآن</button>
            <button className="btn-ghost" onClick={() => goTo('#about')}>تعرّفي علينا</button>
          </div>
        </div>
        <div className="scroll-hint">
          <span>اكتشفي</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories" id="categories">
        <div className="categories-inner">
          <div className="cat-header">
            <div className="section-eyebrow">✦ تصنيفاتنا ✦</div>
            <h2 className="section-title">كل ما يناسب إطلالتكِ</h2>
            <div className="section-rule" />
          </div>
          <div className="cat-grid">
            <div
              className="cat-card"
              onClick={() => {
                setActiveFilter('عبايات كلاسيك')
                goTo('#products')
              }}
            >
              <div className="cat-bg" /><img src="/abaya-1.jpg" alt="عبايات كلاسيك" className="cat-img" /><div className="cat-overlay" />
              <div className="cat-content">
                <div className="cat-label">الأكثر طلبًا</div>
                <div className="cat-name">عبايات كلاسيك</div>
                <div className="cat-count">١٢ تصميم</div>
                <div className="cat-arrow">تسوّقي الآن ←</div>
              </div>
            </div>
            <div
              className="cat-card"
              onClick={() => {
                setActiveFilter('عبايات مطرزة')
                goTo('#products')
              }}
            >
              <div className="cat-bg" /><img src="/abaya-2.jpg" alt="عبايات مطرزة" className="cat-img" /><div className="cat-overlay" />
              <div className="cat-content">
                <div className="cat-label">فاخر</div>
                <div className="cat-name">عبايات مطرزة</div>
                <div className="cat-count">٨ تصاميم</div>
                <div className="cat-arrow">تسوّقي الآن ←</div>
              </div>
            </div>
            <div
              className="cat-card"
              onClick={() => {
                setActiveFilter('عبايات سهرة')
                goTo('#products')
              }}
            >
              <div className="cat-bg" /><img src="/abaya-3.jpg" alt="عبايات سهرة" className="cat-img" /><div className="cat-overlay" />
              <div className="cat-content">
                <div className="cat-label">مناسبات</div>
                <div className="cat-name">عبايات سهرة</div>
                <div className="cat-count">٦ تصاميم</div>
                <div className="cat-arrow">تسوّقي الآن ←</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="products-inner">
          <div className="products-header">
            <div className="section-eyebrow">✦ أحدث التصاميم ✦</div>
            <h2 className="section-title">مجموعتنا الحصرية</h2>
            <div className="section-rule" />
          </div>
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>
          <ProductsGrid filter={activeFilter} />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-frame">
              <div className="about-frame-inner">
                <div className="about-logo-text">Lujain</div>
                <div className="about-logo-sub">Design</div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="section-eyebrow">✦ قصتنا ✦</div>
            <h2 className="section-title">
              لجين ديزاين<br />
              <small style={{ fontSize: '.55em', color: 'var(--gold)' }}>أناقة صُنعت بحبٍّ</small>
            </h2>
            <div className="section-rule right" />
            <p>لجين ديزاين بوتيك متخصص في تصميم وخياطة العبايات الفاخرة في مدينة عدن، نُقدّم لكِ تصاميم حصرية تجمع بين الأصالة والحداثة.</p>
            <p>كل قطعة تُصنع بعناية فائقة واختيار دقيق للأقمشة الفاخرة، لتضمن لكِ إطلالة مميزة في كل مناسبة سواء كانت يومية أو رسمية أو سهرة.</p>
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-num">٥٠٠+</div>
                <div className="highlight-label">عميلة سعيدة</div>
              </div>
              <div className="highlight">
                <div className="highlight-num">٣٠+</div>
                <div className="highlight-label">تصميم حصري</div>
              </div>
              <div className="highlight">
                <div className="highlight-num">٥★</div>
                <div className="highlight-label">تقييم العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER CTA */}
      <section className="order-cta">
        <div className="section-eyebrow">✦ اطلبي الآن ✦</div>
        <h2 className="section-title">هل أعجبكِ تصميم ما؟</h2>
        <p>تواصلي معنا مباشرة عبر واتساب أو إنستغرام للاستفسار عن التصاميم والأسعار والمقاسات المتوفرة</p>
        <div className="order-buttons">
          <a
            href={waLink('السلام عليكم، أريد الاستفسار عن العبايات')}
            target="_blank"
            rel="noreferrer"
            className="btn-wa-big"
          >
            💬 اطلبي عبر واتساب
          </a>
          <a href={igLink} target="_blank" rel="noreferrer" className="btn-ig-big">
            📸 تابعينا على إنستغرام
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <div className="gallery-inner">
          <div className="gallery-header">
            <div className="section-eyebrow">✦ معرض الصور ✦</div>
            <h2 className="section-title">أعمالنا تتحدث عنّا</h2>
            <div className="section-rule" />
          </div>
          <div className="gallery-grid">
            <div className="g-item"><img src="/abaya-1.jpg" alt="عباءة" className="g-img" /></div>
            <div className="g-item"><img src="/abaya-2.jpg" alt="عباءة" className="g-img" /></div>
            <div className="g-item"><img src="/abaya-3.jpg" alt="عباءة" className="g-img" /></div>
            <div className="g-item"><img src="/abaya-2.jpg" alt="عباءة" className="g-img" /></div>
            <div className="g-item"><img src="/abaya-1.jpg" alt="عباءة" className="g-img" /></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-info">
            <div className="section-eyebrow">✦ تواصلي معنا ✦</div>
            <h2 className="section-title">نحن هنا لخدمتكِ</h2>
            <div className="section-rule right" />
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div className="contact-detail">
                  <small>واتساب</small>
                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">776212433</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📸</div>
                <div className="contact-detail">
                  <small>إنستغرام</small>
                  <a href={igLink} target="_blank" rel="noreferrer">@Lujain.design7</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-detail">
                  <small>الموقع</small>
                  <a>عدن، اليمن</a>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">Lujain Design</div>
        <div className="footer-copy">© 2025 لجين ديزاين · عدن · جميع الحقوق محفوظة</div>
        <div className="footer-socials">
          <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer" className="social-link">💬</a>
          <a href={igLink} target="_blank" rel="noreferrer" className="social-link">📸</a>
        </div>
      </footer>

      {/* FLOATING WA */}
      <a
        href={waLink('السلام عليكم، أريد الاستفسار عن العبايات')}
        target="_blank"
        rel="noreferrer"
        className="floating-wa"
      >
        💬
      </a>
    </>
  )
}
