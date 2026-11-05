import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import en from '../content/en'
import ko from '../content/ko'

const COPY = { en, ko }

const PURPLE = '#6b5ce7'

const styles = {
  body: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  section: { padding: '96px 24px' },
  inner: { maxWidth: '1040px', margin: '0 auto' },

  hero: {
    padding: '64px 24px 72px',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #f3f1ff 0%, #fff 70%)',
    overflow: 'hidden',
  },
  eyebrow: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    background: '#f3f1ff',
    border: '1px solid #e0d9ff',
    color: PURPLE,
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '20px',
  },
  h1: {
    fontSize: 'clamp(34px, 5.5vw, 54px)',
    fontWeight: '800',
    letterSpacing: '-1.5px',
    lineHeight: '1.12',
    marginBottom: '20px',
  },
  tagline: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
    maxWidth: '480px',
    marginBottom: '32px',
  },
  webLink: { display: 'inline-block', marginTop: '16px', fontSize: '14px', color: '#777' },
  badges: { display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 24px',
    borderRadius: '14px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    minWidth: '168px',
  },
  badgeLabel: { fontSize: '10px', opacity: '0.7', display: 'block' },
  badgeStore: { fontSize: '15px', fontWeight: '700', display: 'block' },

  h2: {
    fontSize: 'clamp(26px, 3.5vw, 36px)',
    fontWeight: '800',
    letterSpacing: '-0.8px',
    lineHeight: '1.25',
    textAlign: 'center',
    marginBottom: '16px',
  },
  sectionLead: {
    fontSize: '16px',
    color: '#666',
    textAlign: 'center',
    maxWidth: '580px',
    margin: '0 auto 56px',
  },

  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' },
  card: { background: '#fafafa', border: '1px solid #f0f0f0', borderRadius: '18px', padding: '28px 24px' },
  cardIcon: { fontSize: '26px', marginBottom: '14px' },
  cardTitle: { fontSize: '16px', fontWeight: '700', marginBottom: '8px' },
  cardDesc: { fontSize: '14px', color: '#777', lineHeight: '1.65' },

  featureTag: { fontSize: '13px', fontWeight: '700', color: PURPLE, marginBottom: '12px', letterSpacing: '0.3px' },
  h3: { fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: '800', letterSpacing: '-0.6px', lineHeight: '1.3', marginBottom: '16px' },
  featureBody: { fontSize: '16px', color: '#5a5a5a', lineHeight: '1.75' },

  trust: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    maxWidth: '1040px',
    margin: '0 auto',
    padding: '0 24px',
  },
  trustItem: { textAlign: 'center', padding: '18px 8px', borderRadius: '16px', background: '#fafafa', border: '1px solid #f0f0f0' },
  trustNum: { display: 'block', fontSize: 'clamp(20px, 4vw, 26px)', fontWeight: '800', color: PURPLE, letterSpacing: '-0.5px', lineHeight: '1.2' },
  trustLabel: { display: 'block', fontSize: '12px', color: '#777', marginTop: '4px', lineHeight: '1.4' },

  gameGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(158px, 1fr))', gap: '10px' },
  gameChip: {
    background: '#fff',
    border: '1px solid #ececec',
    borderRadius: '12px',
    padding: '13px 16px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },

  steps: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' },
  stepNum: {
    width: '38px',
    height: '38px',
    borderRadius: '11px',
    background: PURPLE,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '16px',
    marginBottom: '16px',
  },

  faqItem: { borderBottom: '1px solid #f0f0f0' },
  faqA: { fontSize: '15px', color: '#666', lineHeight: '1.75', paddingBottom: '22px' },

  cta: { textAlign: 'center', background: '#faf9ff', borderTop: '1px solid #f0edff' },
}

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#00A0FF" d="M1.4 1.4C1.15 1.66 1 2.06 1 2.58v18.84c0 .52.15.92.4 1.18l.05.05 10.53-10.53v-.24L1.45 1.35l-.05.05z"/>
    <path fill="#FFCE00" d="M15.5 15.63l-3.52-3.52v-.24l3.52-3.52.08.05 4.16 2.37c1.19.67 1.19 1.78 0 2.46l-4.16 2.36-.08.04z"/>
    <path fill="#FF3A44" d="M15.58 15.59l-3.6-3.6L1.4 22.6c.39.42 1.04.47 1.77.05l12.41-7.06z"/>
    <path fill="#00E676" d="M15.58 8.41L3.17 1.35C2.44.93 1.79.98 1.4 1.4l10.58 10.59 3.6-3.58z"/>
  </svg>
)

const APP_STORE_URL = 'https://apps.apple.com/kr/app/yadarank/id6768907330'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.taeco.YadaRank&pcampaignid=web_share'
const WEB_APP_URL = 'https://app.yadarank.com/login'

// 앱 화면 캡처(390x844 @2x)를 폰 모양 프레임에 넣는다. 원본은 로컬 데모 데이터로 찍었다.
const Phone = ({ src, alt, className, eager }) => (
  <div className={className ? `phone ${className}` : 'phone'}>
    <img src={src} alt={alt} width="390" height="844"
         loading={eager ? 'eager' : 'lazy'} decoding="async" />
  </div>
)

const StoreBadges = ({ c }) => (
  <div style={styles.badges}>
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
       className="hover-lift" style={{ ...styles.badge, background: PURPLE, color: '#fff' }}>
      <AppleIcon />
      <div>
        <span style={styles.badgeLabel}>{c.badgeApple[0]}</span>
        <span style={styles.badgeStore}>{c.badgeApple[1]}</span>
      </div>
    </a>
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"
       className="hover-lift" style={{ ...styles.badge, background: '#1a1a1a', color: '#fff' }}>
      <PlayIcon />
      <div>
        <span style={styles.badgeLabel}>{c.badgePlay[0]}</span>
        <span style={styles.badgeStore}>{c.badgePlay[1]}</span>
      </div>
    </a>
  </div>
)

// lang: 'en'(/) | 'ko'(/ko). 문구만 바뀌고 레이아웃은 같다.
export default function Home({ lang = 'en' }) {
  const c = COPY[lang]
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div style={styles.body}>
      <Header lang={lang} />

      <main style={{ flex: 1 }}>
        {/* 히어로 — 좁은 화면은 문구 → 폰 순서로 쌓이고, 넓으면 좌우 2단 */}
        <section style={styles.hero}>
          <div className="hero-grid" style={styles.inner}>
            <div className="hero-copy">
              <span style={styles.eyebrow}>{c.eyebrow}</span>
              <h1 style={styles.h1}>{c.h1}</h1>
              <p className="hero-tagline" style={styles.tagline}>{c.tagline}</p>
              <div className="hero-badges"><StoreBadges c={c} /></div>
              <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" style={styles.webLink}>
                {c.webLink}
              </a>
            </div>
            <div className="hero-phones">
              <Phone src="/screens/scoresheet.webp" alt={c.heroAlts[0]} className="phone-back" eager />
              <Phone src="/screens/ranking_list.webp" alt={c.heroAlts[1]} className="phone-front" eager />
            </div>
          </div>
        </section>

        {/* 신뢰 띠 */}
        <div style={styles.trust}>
          {c.trust.map((t) => (
            <div key={t.label} style={styles.trustItem}>
              <span style={styles.trustNum}>{t.num}</span>
              <span style={styles.trustLabel}>{t.label}</span>
            </div>
          ))}
        </div>

        {/* 문제 제기 — 첫 화면 하단에 제목이 걸치도록 위쪽 여백을 줄였다.
            아래에 내용이 더 있다는 걸 스크롤 전에 알리기 위한 것. */}
        <section style={{ ...styles.section, paddingTop: '48px' }}>
          <div style={styles.inner}>
            {/* 첫 화면 경계에 걸치는 제목이라 Reveal로 감싸지 않는다.
                감싸면 짧은 뷰포트(1280x800, 모바일)에서 opacity 0인 채로 걸려
                "아래에 내용이 있다"는 신호가 사라진다. */}
            <div>
              <h2 style={styles.h2}>{c.problemsTitle}</h2>
              <p style={styles.sectionLead}>{c.problemsLead}</p>
            </div>
            <div style={styles.cardGrid}>
              {c.problems.map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <div className="hover-lift" style={styles.card}>
                    <div style={styles.cardIcon}>{p.icon}</div>
                    <div style={styles.cardTitle}>{p.title}</div>
                    <div style={styles.cardDesc}>{p.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 기능 소개 */}
        <section style={{ ...styles.section, background: '#fbfbfd', borderTop: '1px solid #f4f4f4', borderBottom: '1px solid #f4f4f4' }}>
          <div style={{ ...styles.inner, display: 'flex', flexDirection: 'column', gap: '104px' }}>
            {c.featureRows.map((f) => (
              <Reveal key={f.tag}>
                <div className={f.reversed ? 'feature-row is-reversed' : 'feature-row'}>
                  <div className="feature-copy">
                    <div style={styles.featureTag}>{f.tag}</div>
                    <h3 style={styles.h3}>{f.title}</h3>
                    <p style={styles.featureBody}>{f.body}</p>
                  </div>
                  <div><Phone src={f.src} alt={f.alt} /></div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ ...styles.h2, fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: '24px' }}>
                  {c.midCta}
                </h2>
                <StoreBadges c={c} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 지원 게임 */}
        <section style={styles.section}>
          <div style={styles.inner}>
            <Reveal>
              <h2 style={styles.h2}>{c.gamesTitle(c.games.length)}</h2>
              <p style={styles.sectionLead}>{c.gamesLead}</p>
            </Reveal>
            <div style={styles.gameGrid}>
              {c.games.map((g, i) => (
                <Reveal key={g} delay={Math.min(i, 8) * 45}>
                  <div className="hover-lift" style={styles.gameChip}>{g}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 사용 방법 */}
        <section style={{ ...styles.section, background: '#fbfbfd', borderTop: '1px solid #f4f4f4', borderBottom: '1px solid #f4f4f4' }}>
          <div style={styles.inner}>
            <Reveal>
              <h2 style={styles.h2}>{c.stepsTitle}</h2>
              <p style={styles.sectionLead}>{c.stepsLead}</p>
            </Reveal>
            <div style={styles.steps}>
              {c.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 110}>
                  <div>
                    <div style={styles.stepNum}>{i + 1}</div>
                    <div style={{ ...styles.cardTitle, fontSize: '17px' }}>{s.title}</div>
                    <div style={{ ...styles.cardDesc, fontSize: '15px' }}>{s.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={styles.section}>
          <div style={{ ...styles.inner, maxWidth: '760px' }}>
            <Reveal>
              <h2 style={{ ...styles.h2, marginBottom: '48px' }}>{c.faqTitle}</h2>
            </Reveal>
            {/* 답변은 접혀 있어도 DOM에 그대로 있어서 크롤러가 읽는다 */}
            {c.faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 4) * 70}>
                <details className="faq" style={styles.faqItem}>
                  <summary>{f.q}</summary>
                  <div style={styles.faqA}>{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 마무리 CTA */}
        <section id="get-app" style={{ ...styles.section, ...styles.cta }}>
          <div style={styles.inner}>
            <Reveal>
              <h2 style={styles.h2}>{c.ctaTitle}</h2>
              <p style={styles.sectionLead}>{c.ctaLead}</p>
              {/* 앱 우선. 웹은 마지막에 보조 수단으로 둔다. */}
              <StoreBadges c={c} />
              <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" style={styles.webLink}>
                {c.webLink}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer copy={c.footer} />

      {/* 화면의 FAQ와 같은 배열에서 생성한다 — 둘이 어긋나면 구글이 리치 결과를 뺀다. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
