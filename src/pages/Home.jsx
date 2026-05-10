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
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.22.99.14l12.47-7.19-2.52-2.52-10.94 9.57zm-1.71-20.3C1.17 3.83 1 4.22 1 4.69v14.62c0 .47.17.86.47 1.13l.06.05 8.19-8.19v-.19L1.53 3.92l-.06.05zm18.52 7.89-2.63-1.51-2.83 2.83 2.83 2.83 2.66-1.53c.76-.44.76-1.15-.03-1.62zm-17.9 10.46 10.94-9.57-2.52-2.52L1.47 19.3l.62.51z"/>
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
          <span style={styles.badge}>
            <AppleIcon />
            <div>
              <span style={styles.badgeLabel}>Coming soon on</span>
              <span style={styles.badgeStore}>App Store</span>
            </div>
          </span>
          <span style={styles.badge}>
            <PlayIcon />
            <div>
              <span style={styles.badgeLabel}>Coming soon on</span>
              <span style={styles.badgeStore}>Google Play</span>
            </div>
          </span>
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
