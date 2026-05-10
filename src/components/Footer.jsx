import { Link } from 'react-router-dom'

const styles = {
  footer: {
    padding: '24px 32px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#aaa',
    borderTop: '1px solid #f0f0f0',
  },
  link: { color: '#888' },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        © 2026 YadaRank ·{' '}
        <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
        {' · '}
        <Link to="/delete" style={styles.link}>Delete Account</Link>
      </p>
    </footer>
  )
}
