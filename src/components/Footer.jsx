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

const DEFAULT_COPY = { privacy: 'Privacy Policy', delete: 'Delete Account' }

// copy는 홈(Home.jsx)이 언어별로 넘긴다.
export default function Footer({ copy = DEFAULT_COPY }) {
  return (
    <footer style={styles.footer}>
      <p>
        © 2026 YadaRank ·{' '}
        <Link to="/privacy" style={styles.link}>{copy.privacy}</Link>
        {' · '}
        <Link to="/delete" style={styles.link}>{copy.delete}</Link>
      </p>
    </footer>
  )
}
