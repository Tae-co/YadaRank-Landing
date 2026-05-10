import { Link } from 'react-router-dom'

const styles = {
  header: {
    padding: '24px 32px',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    letterSpacing: '-0.3px',
    textDecoration: 'none',
  },
}

export default function Header() {
  return (
    <header style={styles.header}>
      <img src="/logo.png" width="36" height="36" style={{ borderRadius: '10px', objectFit: 'contain' }} alt="YadaRank" />
      <Link to="/" style={styles.logoText}>YadaRank</Link>
    </header>
  )
}
