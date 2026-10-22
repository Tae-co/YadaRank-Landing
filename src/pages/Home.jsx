import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

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

const problems = [
  {
    icon: '🧾',
    title: 'The score pad gets thrown away',
    desc: 'Added up on the back of the rulebook, then recycled with the pizza box.',
  },
  {
    icon: '🤷',
    title: 'Nobody remembers last month',
    desc: 'Who won Catan three weeks ago? Everyone remembers it differently.',
  },
  {
    icon: '⚔️',
    title: 'The argument never ends',
    desc: 'Someone always says they’re the best at Azul. Without a record, nobody can prove it.',
  },
]

// SCORE_SCHEMAS(Board_Game_Front/src/scoreSheets/schemas/index.js)에 등록된 게임과 맞춘다.
const games = [
  'Catan', 'Cascadia', 'Azul', '7 Wonders', 'Splendor', 'Splendor Duel',
  'Rummikub', 'Uno', 'Dixit', 'Stella', 'Takenoko', 'Little Towns',
  'Saboteur', 'Radlands', 'Dice Throne', 'Unmatched', 'Duel for Middle-earth',
]

const steps = [
  { title: 'Start a community', desc: 'Your club, meetup, or regular table. Share one invite link.' },
  { title: 'Add a group per game', desc: 'Catan gets a group, Dixit gets a group. Each keeps its own standings.' },
  { title: 'Play, then fill the sheet', desc: 'Enter the numbers from the table, save, and the ranking moves.' },
]

const faqs = [
  {
    q: 'How do I get YadaRank?',
    a: 'The app is on the App Store for iOS and on Google Play for Android. You can also open YadaRank in a browser on a phone, tablet, or laptop, and everything signs in to the same account either way. The app is the smoother way to use it at the table, since it sits on your home screen and opens straight into your groups.',
  },
  {
    q: 'Which board games have a score sheet?',
    a: 'Seventeen games have a dedicated score sheet, including Catan, Cascadia, Azul, 7 Wonders, Splendor, Rummikub, Uno, Dixit, Takenoko, Saboteur, Dice Throne, and Unmatched. Each sheet follows that game’s own scoring categories rather than a single generic scoreboard. If the game you play is not on the list, a community admin can build a score sheet for it, and new games get added as groups ask for them.',
  },
  {
    q: 'How is the player ranking calculated?',
    a: 'YadaRank uses an Elo rating, the system chess has used for decades, adapted for games with more than two players. Every finish is scored as a head-to-head result against each player at the table, weighted by how likely that result was, so an upset against stronger players moves you more than an expected win. Your first three games in a group move faster so you find your level quickly.',
  },
  {
    q: 'Why not just count wins?',
    a: 'A win count rewards whoever shows up the most, and it treats a four-player win the same as a two-player one. A rating system weighs who you played against and where you finished, so a player with fewer games can still rank above someone who has played all year.',
  },
  {
    q: 'What is the difference between a community and a group?',
    a: 'A community is the circle of people — your club, your meetup, your regular table — and it holds the invite link everyone joins through. A group sits inside a community and covers one board game. You can run as many groups as you play games, and each keeps its own score sheet and its own ranking. There is also an overall ranking across the whole app if you want to see where you land more broadly.',
  },
  {
    q: 'Can I keep score for card games too?',
    a: 'Yes. Uno, Rummikub, Dixit, and Saboteur have their own score sheets, and they work the same way as the board games: enter each round or final score, save the match, and the group leaderboard updates. Uno adds up round scores toward a target, and Rummikub totals the tiles left in each rack, jokers included.',
  },
  {
    q: 'Does this work for in-person games?',
    a: 'That is exactly what it is built for. YadaRank does not play the game for you and does not need the game to be digital. You play on a real table with real components, then record the result afterwards.',
  },
]

// 앱 화면 캡처(390x844 @2x)를 폰 모양 프레임에 넣는다. 원본은 로컬 데모 데이터로 찍었다.
const Phone = ({ src, alt, className, eager }) => (
  <div className={className ? `phone ${className}` : 'phone'}>
    <img src={src} alt={alt} width="390" height="844"
         loading={eager ? 'eager' : 'lazy'} decoding="async" />
  </div>
)

const StoreBadges = () => (
  <div style={styles.badges}>
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
       className="hover-lift" style={{ ...styles.badge, background: PURPLE, color: '#fff' }}>
      <AppleIcon />
      <div>
        <span style={styles.badgeLabel}>Download on the</span>
        <span style={styles.badgeStore}>App Store</span>
      </div>
    </a>
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"
       className="hover-lift" style={{ ...styles.badge, background: '#1a1a1a', color: '#fff' }}>
      <PlayIcon />
      <div>
        <span style={styles.badgeLabel}>Get it on</span>
        <span style={styles.badgeStore}>Google Play</span>
      </div>
    </a>
  </div>
)

const trust = [
  { num: '17', label: 'games with their own score sheet' },
  { num: 'Elo', label: 'rating built for 3+ players' },
  { num: '3', label: 'platforms: iOS, Android, Web' },
]

const featureRows = [
  {
    tag: 'GAME-SPECIFIC SCORE SHEETS',
    title: 'A score sheet built for each game',
    body: 'Settlements, cities, longest road — enter what you see on the table and the totals add themselves up.',
    visual: <Phone src="/screens/scoresheet.webp" alt="Catan score sheet in YadaRank with totals and the winner" />,
  },
  {
    tag: 'SKILL-BASED RANKINGS',
    title: 'A ranking that measures skill, not attendance',
    body: 'Beating a table of strong players moves you more than beating one beginner. Every group gets its own standings.',
    visual: <Phone src="/screens/ranking_list.webp" alt="Group ranking with podium and Elo scores" />,
    reversed: true,
  },
  {
    tag: 'COMMUNITIES AND GROUPS',
    title: 'Your club on top, a group for every game',
    body: 'One invite link for the whole club. Catan and Dixit keep separate records instead of blurring into one leaderboard.',
    visual: <Phone src="/screens/lobby.webp" alt="Community page with a group for each board game" />,
  },
]

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div style={styles.body}>
      <Header />

      <main style={{ flex: 1 }}>
        {/* 히어로 — 좁은 화면은 문구 → 폰 순서로 쌓이고, 넓으면 좌우 2단 */}
        <section style={styles.hero}>
          <div className="hero-grid" style={styles.inner}>
            <div className="hero-copy">
              <span style={styles.eyebrow}>iOS · Android · Web</span>
              <h1 style={styles.h1}>Board game score tracker for your group</h1>
              <p className="hero-tagline" style={styles.tagline}>
                The score keeper app for board game groups: a sheet for each game, every
                match saved, and a leaderboard that settles who&rsquo;s actually best.
              </p>
              <div className="hero-badges"><StoreBadges /></div>
              <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" style={styles.webLink}>
                Or open it in your browser &rarr;
              </a>
            </div>
            <div className="hero-phones">
              <Phone src="/screens/scoresheet.webp" alt="Catan score sheet in YadaRank" className="phone-back" eager />
              <Phone src="/screens/ranking_list.webp" alt="Group ranking in YadaRank" className="phone-front" eager />
            </div>
          </div>
        </section>

        {/* 신뢰 띠 */}
        <div style={styles.trust}>
          {trust.map((t) => (
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
              <h2 style={styles.h2}>Paper score pads don&rsquo;t remember who won</h2>
              <p style={styles.sectionLead}>
                Most groups keep score on whatever is nearby, then lose it before the next game night.
              </p>
            </div>
            <div style={styles.cardGrid}>
              {problems.map((p, i) => (
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
            {featureRows.map((f) => (
              <Reveal key={f.tag}>
                <div className={f.reversed ? 'feature-row is-reversed' : 'feature-row'}>
                  <div className="feature-copy">
                    <div style={styles.featureTag}>{f.tag}</div>
                    <h3 style={styles.h3}>{f.title}</h3>
                    <p style={styles.featureBody}>{f.body}</p>
                  </div>
                  <div>{f.visual}</div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ ...styles.h2, fontSize: 'clamp(22px, 3vw, 28px)', marginBottom: '24px' }}>
                  Try it at your next game night
                </h2>
                <StoreBadges />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 지원 게임 */}
        <section style={styles.section}>
          <div style={styles.inner}>
            <Reveal>
              <h2 style={styles.h2}>Score sheets ready for {games.length} games</h2>
              <p style={styles.sectionLead}>
                Pick the game, fill in the sheet, save the match. More get added as groups ask for them.
              </p>
            </Reveal>
            <div style={styles.gameGrid}>
              {games.map((g, i) => (
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
              <h2 style={styles.h2}>How it works</h2>
              <p style={styles.sectionLead}>Three steps, and none of them happen during the game.</p>
            </Reveal>
            <div style={styles.steps}>
              {steps.map((s, i) => (
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
              <h2 style={{ ...styles.h2, marginBottom: '48px' }}>Questions groups ask</h2>
            </Reveal>
            {/* 답변은 접혀 있어도 DOM에 그대로 있어서 크롤러가 읽는다 */}
            {faqs.map((f, i) => (
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
              <h2 style={styles.h2}>Settle it before the next game night</h2>
              <p style={styles.sectionLead}>
                Get the app, start a community, and share the invite link. Your group&rsquo;s
                results land in one place.
              </p>
              {/* 앱 우선. 웹은 마지막에 보조 수단으로 둔다. */}
              <StoreBadges />
              <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" style={styles.webLink}>
                Or open it in your browser &rarr;
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />

      {/* 화면의 FAQ와 같은 배열에서 생성한다 — 둘이 어긋나면 구글이 리치 결과를 뺀다. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
