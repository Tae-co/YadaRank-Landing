import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'

const PURPLE = '#6b5ce7'

const styles = {
  body: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  section: { padding: '96px 24px' },
  inner: { maxWidth: '1040px', margin: '0 auto' },

  hero: {
    padding: '88px 24px 40px',
    textAlign: 'center',
    background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #f3f1ff 0%, #fff 70%)',
  },
  appIcon: {
    width: '96px',
    height: '96px',
    borderRadius: '24px',
    background: '#fff',
    border: '1px solid #e0d9ff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px',
    boxShadow: '0 8px 32px rgba(107, 92, 231, 0.16)',
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
    lineHeight: '1.15',
    marginBottom: '20px',
    maxWidth: '760px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tagline: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.7',
    maxWidth: '560px',
    margin: '0 auto',
  },
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

  mock: {
    background: '#fff',
    border: '1px solid #ececec',
    borderRadius: '20px',
    padding: '22px',
    boxShadow: '0 16px 48px rgba(26, 26, 26, 0.08)',
  },
  mockTitle: { fontSize: '12px', fontWeight: '700', color: '#999', letterSpacing: '0.6px', marginBottom: '16px' },
  mockRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 0', fontSize: '14px' },

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

  faqItem: { borderBottom: '1px solid #f0f0f0', padding: '24px 0' },
  faqQ: { fontSize: '17px', fontWeight: '700', marginBottom: '10px' },
  faqA: { fontSize: '15px', color: '#666', lineHeight: '1.75' },

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

const WebIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
)

const APP_STORE_URL = 'https://apps.apple.com/kr/app/yadarank/id6768907330'
const BETA_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeSbQlifE-y1inrhfLrfWl8llMCU0gL4aBsAFlDgjwhefg24g/viewform?usp=dialog'
const WEB_APP_URL = 'https://app.yadarank.com/login'

const problems = [
  {
    icon: '🧾',
    title: 'The score pad gets thrown away',
    desc: 'You add up the last round on the back of the rulebook, then it goes in the recycling with the pizza box.',
  },
  {
    icon: '🤷',
    title: 'Nobody remembers last month',
    desc: 'Who actually won Catan three weeks ago? Everyone has a different answer and there is no way to check.',
  },
  {
    icon: '⚔️',
    title: 'The argument never ends',
    desc: 'Someone always claims they are the best at Azul. Without a record it stays a claim instead of a fact.',
  },
]

// SCORE_SCHEMAS(Board_Game_Front/src/scoreSheets/schemas/index.js)에 등록된 게임과 맞춘다.
const games = [
  'Catan', 'Cascadia', 'Azul', '7 Wonders', 'Splendor', 'Splendor Duel',
  'Rummikub', 'Uno', 'Dixit', 'Stella', 'Takenoko', 'Little Towns',
  'Saboteur', 'Radlands', 'Dice Throne', 'Unmatched', 'Duel for Middle-earth',
]

const steps = [
  { title: 'Start a community', desc: 'A community is your circle — the club, the meetup, the friends who show up every week. Share the invite link and everyone lands in the same place.' },
  { title: 'Add a group for each game', desc: 'Inside the community you create a group for a game. Catan gets a group, Cascadia gets a group. Each one carries its own score sheet and its own standings.' },
  { title: 'Start the game and fill in the sheet', desc: 'Open the group, hit start, and the score sheet for that game appears. Enter the numbers from the table, save, and the ranking moves.' },
]

const faqs = [
  {
    q: 'Do I need to install anything?',
    a: 'No. YadaRank runs in any browser on a phone, tablet, or laptop, which is usually the fastest way to keep score at the table. There is also an iOS app on the App Store, and the Android version is currently in beta testing.',
  },
  {
    q: 'Which board games have a score sheet?',
    a: 'Seventeen games have a dedicated score sheet, including Catan, Cascadia, Azul, 7 Wonders, Splendor, Rummikub, Uno, Dixit, Takenoko, Saboteur, Dice Throne, and Unmatched. Each sheet follows that game’s own scoring categories rather than a single generic scoreboard. If the game you play is not on the list, a community admin can build a score sheet for it, and new games get added as groups ask for them.',
  },
  {
    q: 'How is the player ranking calculated?',
    a: 'YadaRank uses TrueSkill, the Bayesian rating system Microsoft built for Xbox matchmaking. It tracks both an estimate of your skill and how confident it is about that estimate, so results settle quickly and beating a table of strong players counts for more than beating one beginner.',
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
    q: 'Does this work for in-person games?',
    a: 'That is exactly what it is built for. YadaRank does not play the game for you and does not need the game to be digital. You play on a real table with real components, then record the result afterwards.',
  },
]

const ScoreSheetMock = () => (
  <div style={styles.mock}>
    <div style={styles.mockTitle}>CASCADIA · SCORE SHEET</div>
    {[
      { icon: '🐻', label: 'Bear', a: 9, b: 5 },
      { icon: '🦌', label: 'Elk', a: 12, b: 14 },
      { icon: '🐟', label: 'Salmon', a: 8, b: 6 },
      { icon: '🌲', label: 'Forest', a: 6, b: 9 },
      { icon: '🍃', label: 'Nature tokens', a: 4, b: 2 },
    ].map((r) => (
      <div key={r.label} style={{ ...styles.mockRow, borderBottom: '1px solid #f6f6f6' }}>
        <span style={{ color: '#555' }}>{r.icon}&nbsp; {r.label}</span>
        <span style={{ display: 'flex', gap: '22px', fontVariantNumeric: 'tabular-nums', color: '#333' }}>
          <span style={{ width: '26px', textAlign: 'right' }}>{r.a}</span>
          <span style={{ width: '26px', textAlign: 'right' }}>{r.b}</span>
        </span>
      </div>
    ))}
    <div style={{ ...styles.mockRow, marginTop: '8px', fontWeight: '800' }}>
      <span>Total</span>
      <span style={{ display: 'flex', gap: '22px', fontVariantNumeric: 'tabular-nums' }}>
        <span style={{ width: '26px', textAlign: 'right', color: PURPLE }}>39</span>
        <span style={{ width: '26px', textAlign: 'right' }}>36</span>
      </span>
    </div>
  </div>
)

const RankingMock = () => (
  <div style={styles.mock}>
    <div style={styles.mockTitle}>GROUP RANKING</div>
    {[
      { rank: 1, name: 'Jiwon', score: 1284, delta: '+32' },
      { rank: 2, name: 'Minseo', score: 1170, delta: '+8' },
      { rank: 3, name: 'Taeyub', score: 1092, delta: '−19' },
      { rank: 4, name: 'Haeun', score: 964, delta: '−7' },
    ].map((p) => (
      <div key={p.name} style={{ ...styles.mockRow, borderBottom: '1px solid #f6f6f6' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            width: '24px', height: '24px', borderRadius: '8px', fontSize: '12px', fontWeight: '700',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            background: p.rank === 1 ? PURPLE : '#f2f2f2', color: p.rank === 1 ? '#fff' : '#888',
          }}>{p.rank}</span>
          <span style={{ fontWeight: '600' }}>{p.name}</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontVariantNumeric: 'tabular-nums' }}>
          <span style={{ fontSize: '12px', color: p.delta.startsWith('+') ? '#16a34a' : '#dc2626' }}>{p.delta}</span>
          <span style={{ fontWeight: '700' }}>{p.score}</span>
        </span>
      </div>
    ))}
  </div>
)

const GroupMock = () => (
  <div style={styles.mock}>
    <div style={styles.mockTitle}>TUESDAY NIGHT CLUB · GROUPS</div>
    {[
      { icon: '🎲', name: 'Catan', meta: '6 players · 48 matches' },
      { icon: '🧩', name: 'Azul', meta: '5 players · 12 matches' },
      { icon: '🌲', name: 'Cascadia', meta: '9 players · 63 matches' },
    ].map((group) => (
      <div key={group.name} style={{ ...styles.mockRow, alignItems: 'flex-start', borderBottom: '1px solid #f6f6f6' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            width: '34px', height: '34px', borderRadius: '10px', background: '#f3f1ff',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
          }}>{group.icon}</span>
          <span>
            <span style={{ display: 'block', fontWeight: '600' }}>{group.name}</span>
            <span style={{ display: 'block', fontSize: '12px', color: '#999' }}>{group.meta}</span>
          </span>
        </span>
      </div>
    ))}
  </div>
)

const featureRows = [
  {
    tag: 'GAME-SPECIFIC SCORE SHEETS',
    title: 'A score sheet built for each game',
    body: 'Every board game counts points differently. Cascadia scores wildlife cards and habitat corridors. Catan scores settlements, cities, and the longest road. Rummikub counts whatever is left in everyone’s rack. Instead of one generic scoreboard, YadaRank gives each game its own score sheet, so you enter the numbers you can actually see on the table and the totals add themselves up.',
    visual: <ScoreSheetMock />,
  },
  {
    tag: 'SKILL-BASED RANKINGS',
    title: 'A ranking that measures skill, not attendance',
    body: 'Counting wins rewards whoever plays the most. YadaRank rates players with TrueSkill, the system Microsoft built for Xbox matchmaking, so finishing first at a table of five strong players moves you more than beating one beginner. Your group gets its own standings, and there is an overall ranking across the whole app.',
    visual: <RankingMock />,
    reversed: true,
  },
  {
    tag: 'COMMUNITIES AND GROUPS',
    title: 'Your club on top, a group for every game',
    body: 'Start a community for your board game club, your meetup, or the friends who show up every week, then share the invite link. Inside it you add a group for each game you play. Every group carries its own score sheet and its own standings, so the Catan table and the Azul table keep separate records instead of blurring into one leaderboard.',
    visual: <GroupMock />,
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
        {/* 히어로 */}
        <section style={styles.hero}>
          <div style={styles.appIcon}>
            <img src="/logo.png" width="64" height="64" style={{ objectFit: 'contain' }} alt="YadaRank" />
          </div>
          <div>
            <span style={styles.eyebrow}>Web · iOS · Android beta</span>
          </div>
          <h1 style={styles.h1}>Board game score tracker for your group</h1>
          <p style={styles.tagline}>
            Keep score with a sheet built for the game you are playing, save every match,
            and see skill-based rankings for your play group. Runs in any browser, nothing to install.
          </p>
        </section>

        {/* 문제 제기 */}
        <section style={styles.section}>
          <div style={styles.inner}>
            <Reveal>
              <h2 style={styles.h2}>Paper score pads don&rsquo;t remember who won</h2>
              <p style={styles.sectionLead}>
                Most groups keep score on whatever is nearby, then lose it before the next game night.
              </p>
            </Reveal>
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
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i, 4) * 70}>
                <div style={styles.faqItem}>
                  <div style={styles.faqQ}>{f.q}</div>
                  <div style={styles.faqA}>{f.a}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 마무리 CTA */}
        <section style={{ ...styles.section, ...styles.cta }}>
          <div style={styles.inner}>
            <Reveal>
              <h2 style={styles.h2}>Settle it before the next game night</h2>
              <p style={styles.sectionLead}>
                Open it in the browser and start a room. Your group can join from the invite link.
              </p>
              <div style={styles.badges}>
                <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer"
                   className="hover-lift" style={{ ...styles.badge, background: PURPLE, color: '#fff' }}>
                  <WebIcon />
                  <div>
                    <span style={styles.badgeLabel}>Open in Browser</span>
                    <span style={styles.badgeStore}>Web App</span>
                  </div>
                </a>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                   className="hover-lift" style={{ ...styles.badge, background: '#1a1a1a', color: '#fff' }}>
                  <AppleIcon />
                  <div>
                    <span style={styles.badgeLabel}>Download on the</span>
                    <span style={styles.badgeStore}>App Store</span>
                  </div>
                </a>
                <a href={BETA_FORM_URL} target="_blank" rel="noopener noreferrer"
                   className="hover-lift" style={{ ...styles.badge, background: '#1a1a1a', color: '#fff' }}>
                  <PlayIcon />
                  <div>
                    <span style={styles.badgeLabel}>Join the beta test</span>
                    <span style={styles.badgeStore}>Google Play</span>
                  </div>
                </a>
              </div>
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
