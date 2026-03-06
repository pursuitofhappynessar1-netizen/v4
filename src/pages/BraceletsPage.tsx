import { useRef, useState } from 'react';
import { products } from '../data/products';

function BraceletSection({
  product,
  index,
  onOrder,
}: {
  product: (typeof products)[number];
  index: number;
  onOrder: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [fading, setFading] = useState(false);

  const handleThumb = (i: number) => {
    if (i === activeImage) return;
    setFading(true);
    setTimeout(() => {
      setActiveImage(i);
      setFading(false);
    }, 150);
  };

  const isReversed = index % 2 === 1;

  return (
    <div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
          isReversed ? 'md:grid-flow-col-dense' : ''
        }`}
      >
        <div
          className={`group relative overflow-hidden rounded-sm ${isReversed ? 'md:col-start-2' : ''}`}
          style={{ aspectRatio: '4/5' }}
        >
          <img
            src={product.images[activeImage]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{
              opacity: fading ? 0 : 1,
              transition: 'opacity 0.3s ease, transform 0.7s ease',
            }}
          />
          <div className="absolute inset-0 bg-[#243247] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        </div>

        <div
          className={`flex flex-col gap-6 ${isReversed ? 'md:col-start-1 md:row-start-1' : ''}`}
          dir="rtl"
        >
          <div>
            <p
              className="text-xs tracking-widest uppercase text-[#243247] mb-3 opacity-50"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
            >
              ORZI 1998
            </p>
            <h3
              className="text-4xl md:text-5xl font-bold text-[#243247] mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {product.name}
            </h3>
            <div className="w-10 h-px bg-[#243247] opacity-30 mb-6" />
          </div>

          <p
            className="text-lg text-[#243247] opacity-70 leading-relaxed"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            {product.descriptionAr}
          </p>

          <div className="space-y-3 py-6 border-t border-b border-[#243247] border-opacity-10">
            <div className="flex justify-between text-sm" style={{ fontFamily: "'Amiri', serif" }}>
              <span className="text-[#243247] opacity-50">الخامة</span>
              <span className="text-[#243247] opacity-80">{product.specs.materialAr}</span>
            </div>
            <div className="flex justify-between text-sm" style={{ fontFamily: "'Amiri', serif" }}>
              <span className="text-[#243247] opacity-50">اللون</span>
              <span className="text-[#243247] opacity-80">{product.specs.colorAr}</span>
            </div>
            <div className="flex justify-between text-sm" style={{ fontFamily: "'Amiri', serif" }}>
              <span className="text-[#243247] opacity-50">المقاس</span>
              <span className="text-[#243247] opacity-80">{product.specs.sizeAr}</span>
            </div>
            <div className="flex justify-between text-sm" style={{ fontFamily: "'Amiri', serif" }}>
              <span className="text-[#243247] opacity-50">السعر</span>
              <span className="text-[#243247]" style={{ opacity: 0.9, fontWeight: 500 }}>{product.price} جنيه</span>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => handleThumb(i)}
                className="w-16 h-16 overflow-hidden flex-shrink-0 transition-all duration-300"
                style={{
                  borderRadius: '2px',
                  border:
                    i === activeImage
                      ? '2px solid #243247'
                      : '2px solid rgba(36,50,71,0.12)',
                  outline: 'none',
                  cursor: 'pointer',
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="/order-bracelets.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          style={{
            fontFamily: "'Amiri', serif",
            letterSpacing: '0.08em',
            fontSize: '1rem',
            padding: '14px 48px',
            background: '#243247',
            color: '#e7ddcc',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 600,
            boxShadow: '0 2px 12px rgba(36,50,71,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-3px)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(36,50,71,0.25)';
            (e.currentTarget as HTMLAnchorElement).style.background = '#1a2b3c';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 12px rgba(36,50,71,0.15)';
            (e.currentTarget as HTMLAnchorElement).style.background = '#243247';
          }}
        >
          أُطلب الآن
        </a>
      </div>
    </div>
  );
}

export default function BraceletsPage() {
  const collectionRef = useRef<HTMLDivElement>(null);

  const bracelets = products.filter((p) => p.collection === 'bracelets');

  const benefits = [
    {
      title: 'أناقة خالدة',
      titleEn: 'Timeless Elegance',
      desc: 'تصاميم لا تخضع لقواعد الموضة، بل تتجاوزها',
    },
    {
      title: 'خامات فاخرة',
      titleEn: 'Premium Materials',
      desc: 'نحاس مطلي بعناية، مقاوم لتغير اللون مع الزمن',
    },
    {
      title: 'حضور واثق',
      titleEn: 'Confident Presence',
      desc: 'قطعة تُضاف إلى أسلوبك دون ضجيج، بثقة كاملة',
    },
    {
      title: 'مصممة للجنسين',
      titleEn: 'For Him & Her',
      desc: 'تناسب كل معصم بفضل تصميمها القابل للتعديل',
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Amiri', serif" }}
      dir="rtl"
    >

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #f5f0e8 0%, #e7ddcc 40%, #f0ebe0 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, #243247 1px, transparent 1px), radial-gradient(circle at 80% 20%, #243247 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex flex-col gap-8">
            <div>
              <p
                className="text-xs tracking-widest uppercase text-[#243247] mb-4 opacity-60"
                style={{ fontFamily: "'amiri', serif", letterSpacing: '0.25em' }}
              >
                التشكيلة الأساسية
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#243247] leading-tight mb-6"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                ORZI
                <br />
                <span className="text-3xl md:text-4xl font-normal opacity-80">Heritage Bracelets</span>
              </h1>
              <p className="text-xl text-[#243247] opacity-75 leading-relaxed mb-3" style={{ fontFamily: "'Amiri', serif" }}>
                من أصالة الماضي إلى معصمك
              </p>
              <p className="text-base text-[#243247] opacity-55 leading-loose max-w-md" style={{ fontFamily: "'Amiri', serif" }}>
                ثلاثة تصاميم. فلسفة واحدة. حضور لا يُنسى.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/order-bracelets.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#243247] text-[#e7ddcc] font-semibold transition-all duration-300 hover:bg-[#1a2b3c] hover:shadow-xl hover:-translate-y-0.5 inline-block text-center"
                style={{ fontFamily: "'amiri', serif", letterSpacing: '0.1em', fontSize: '0.85rem' }}
              >
                أُطلب قطعتك
              </a>
              <a
                href="/"
                className="px-10 py-4 border border-[#243247] text-[#243247] font-semibold transition-all duration-300 hover:bg-[#243247] hover:text-[#e7ddcc] hover:opacity-90 inline-block text-center"
                style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.15em', fontSize: '0.85rem' }}
              >
                ORZI 1998
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-sm overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/curved1.jpg"
                  alt="ORZI Heritage Bracelets"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="rounded-sm overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src="/straight1.jpg"
                  alt="AURA Bracelet"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="rounded-sm overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img
                  src="/curvedgold1.jpg"
                  alt="SOPHIA Bracelet"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-[#243247] opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* COLLECTION SHOWCASE */}
      <section ref={collectionRef} className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <p
              className="text-xs tracking-widest uppercase text-[#243247] mb-4 opacity-50"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
            >
              Collection
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#243247]"
              style={{ fontFamily: "'amiri', serif" }}
            >
              التشكيلة الكاملة
            </h2>
            <div className="w-16 h-px bg-[#243247] opacity-30 mx-auto mt-6" />
          </div>

          <div className="space-y-28 md:space-y-36">
            {bracelets.map((product, index) => (
              <BraceletSection
                key={product.id}
                product={product}
                index={index}
                onOrder={() => window.open('/order-bracelets.html', '_blank')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(36,50,71,0.04) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#243247] mb-6 opacity-50"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
          >
            Craftsmanship
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#243247] mb-12"
            style={{ fontFamily: "'Amiri', serif", lineHeight: '1.7' }}
          >
            وُلِدت من التِراث،<br />صُنِعت للهوية
          </h2>
          <div className="w-16 h-px bg-[#243247] opacity-20 mx-auto mb-12" />
          <div
            className="space-y-8 text-lg text-[#243247] opacity-65 leading-loose font-light"
            style={{ fontFamily: "'Amiri', serif" }}
          >
            <p>
              كل إسورة من تشكيلة ORZI تحمل فلسفة واحدة — أن الأناقة الحقيقية لا تُصرَخ، بل تُشعر.
            </p>
            <p>
              نستلهم من حقبة كان فيها الحضور هادئاً لكنه لا يُنسى، والتفاصيل بسيطة لكنها تترك أثراً دائماً.
            </p>
            <p>
              نحاس مصقول، طلاء مدروس، ومقاس قابل للتعديل — لأن كل معصم يستحق ما يناسبه تماماً.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32" style={{ background: 'rgba(36, 50, 71, 0.04)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-widest uppercase text-[#243247] mb-4 opacity-50"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.25em' }}
            >
              Why ORZI
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#243247]"
              style={{ fontFamily: "'amiri', serif" }}
            >
              ما يجعل ORZI مختلفة
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-8 text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-8 h-px bg-[#243247] opacity-20 mx-auto mb-6 group-hover:opacity-40 transition-opacity" />
                <p
                  className="text-xs tracking-widest uppercase text-[#243247] opacity-40 mb-3"
                  style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.2em' }}
                >
                  {b.titleEn}
                </p>
                <h3
                  className="text-lg font-bold text-[#243247] mb-4"
                  style={{ fontFamily: "'Amiri', serif" }}
                >
                  {b.title}
                </h3>
                <p
                  className="text-sm text-[#243247] opacity-55 leading-loose"
                  style={{ fontFamily: "'Amiri', serif" }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p
              className="text-[#243247] opacity-50 mb-6 text-base"
              style={{ fontFamily: "'Amiri', serif" }}
            >
              اختر قطعتك وانضم إلى من يحملون الأصالة
            </p>
            <a
              href="/order-bracelets.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3 border border-[#243247] text-[#243247] font-semibold transition-all duration-300 hover:bg-[#243247] hover:text-[#e7ddcc] hover:-translate-y-0.5"
              style={{ fontFamily: "'amiri', serif", letterSpacing: '0.1em', fontSize: '0.85rem', textDecoration: 'none' }}
            >
              أُطلب الآن
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#243247] text-white py-12 md:py-16 border-t border-[#e7ddcc] border-opacity-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p
              className="text-[#e7ddcc] opacity-55 mb-6 text-lg"
              style={{ fontFamily: "'Amiri', serif" }}
            >
              لا تؤجل لحظة الأناقة — قطعتك في انتظارك
            </p>
            <a
              href="/order-bracelets.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-3 bg-[#e7ddcc] text-[#243247] font-semibold transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-lg"
              style={{ fontFamily: "'amiri', serif", letterSpacing: '0.1em', fontSize: '0.85rem', textDecoration: 'none' }}
            >
              أُطلب الآن
            </a>
          </div>

          <div className="text-center mb-10">
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Amiri', serif" }}>
              تواصل معنا
            </h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.tiktok.com/@orzi.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e7ddcc] text-[#243247] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/orzi.eg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e7ddcc] text-[#243247] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/orzieg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e7ddcc] text-[#243247] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p style={{ fontFamily: "'Cinzel', serif" }}>© {new Date().getFullYear()} Orzi-1998.</p>
            <p className="mt-2" style={{ fontFamily: "'Amiri', serif" }}>.خالد. راقٍ. أصيل</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
