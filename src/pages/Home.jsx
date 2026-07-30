import Header from '../components/Header'
import Footer from '../components/Footer'

const styles = {
  body: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 24px',
    textAlign: 'center',
  },
  appIcon: {
    width: '120px',
    height: '120px',
    borderRadius: '28px',
    background: '#f3f1ff',
    border: '1px solid #e0d9ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
    boxShadow: '0 4px 24px rgba(107, 92, 231, 0.12)',
  },
  h1: { fontSize: '42px', fontWeight: '800', letterSpacing: '-1px', marginBottom: '16px', color: '#1a1a1a' },
  tagline: { fontSize: '17px', color: '#555', lineHeight: '1.7', maxWidth: '480px', marginBottom: '48px' },
  badges: { display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 24px',
    borderRadius: '14px',
    background: '#e8e8e8',
    color: '#999',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'default',
    pointerEvents: 'none',
    minWidth: '160px',
  },
  badgeLabel: { fontSize: '10px', opacity: '0.7', display: 'block' },
  badgeStore: { fontSize: '15px', fontWeight: '700', display: 'block' },
  features: { display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '600px' },
  feature: { background: '#f7f7f7', borderRadius: '16px', padding: '24px', flex: '1', minWidth: '160px', maxWidth: '180px', textAlign: 'center' },
  featureIcon: { fontSize: '28px', marginBottom: '10px' },
  featureTitle: { fontSize: '13px', fontWeight: '700', marginBottom: '6px' },
  featureDesc: { fontSize: '12px', color: '#777', lineHeight: '1.5' },
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

const features = [
  { icon: '🎲', title: 'Board Game Friendly', desc: 'Built for offline communities who play together regularly' },
  { icon: '📊', title: 'TureSkil Rating', desc: 'Fair and accurate rankings using the TureSkil algorithm' },
  { icon: '👥', title: 'Group Rooms', desc: 'Create private rooms and invite your friends to track results' },
]

export default function Home() {
  return (
    <div style={styles.body}>
      <Header />
      <main style={styles.main}>
        <div style={styles.appIcon}>
          <img src="/logo.png" width="80" height="80" style={{ objectFit: 'contain' }} alt="YadaRank" />
        </div>

        <h1 style={styles.h1}>YadaRank</h1>
        <p style={styles.tagline}>
          A simplified ranking system designed for offline board game communities.
          We use the TrueSkill rating system to calculate player rankings.
        </p>

        <div style={styles.badges}>
          <a href="https://apps.apple.com/kr/app/yadarank/id6768907330" target="_blank" rel="noopener noreferrer" style={{ ...styles.badge, textDecoration: 'none', pointerEvents: 'auto', cursor: 'pointer', background: '#1a1a1a', color: '#fff' }}>
            <AppleIcon />
            <div>
              <span style={styles.badgeLabel}>Download on the</span>
              <span style={styles.badgeStore}>App Store</span>
            </div>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSbQlifE-y1inrhfLrfWl8llMCU0gL4aBsAFlDgjwhefg24g/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" style={{ ...styles.badge, textDecoration: 'none', pointerEvents: 'auto', cursor: 'pointer', background: '#1a1a1a', color: '#fff' }}>
            <PlayIcon />
            <div>
              <span style={styles.badgeLabel}>Join the beta test</span>
              <span style={styles.badgeStore}>Google Play</span>
            </div>
          </a>
          <a href="https://app.yadarank.com/login" target="_blank" rel="noopener noreferrer" style={{ ...styles.badge, textDecoration: 'none', pointerEvents: 'auto', cursor: 'pointer', background: '#6B5CE7', color: '#fff' }}>
            <WebIcon />
            <div>
              <span style={styles.badgeLabel}>Open in Browser</span>
              <span style={styles.badgeStore}>Web App</span>
            </div>
          </a>
        </div>

        <div style={styles.features}>
          {features.map((f) => (
            <div key={f.title} style={styles.feature}>
              <div style={styles.featureIcon}>{f.icon}</div>
              <div style={styles.featureTitle}>{f.title}</div>
              <div style={styles.featureDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
