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

// copy는 홈(Home.jsx)이 언어별로 넘긴다. switchHref가 있으면 다른 언어판 링크를 붙인다.
export default function Footer({ copy = DEFAULT_COPY }) {
  return (
    <footer style={styles.footer}>
      <p>
        © 2026 YadaRank ·{' '}
        <Link to="/privacy" style={styles.link}>{copy.privacy}</Link>
        {' · '}
        <Link to="/delete" style={styles.link}>{copy.delete}</Link>
        {/* 언어 전환은 <html lang>까지 바뀌어야 해서 전체 새로고침(<a>)으로 이동한다 */}
        {copy.switchHref && (
          <>
            {' · '}
            <a href={copy.switchHref} hrefLang={copy.switchHref === '/ko' ? 'ko' : 'en'} style={styles.link}>{copy.switchLabel}</a>
          </>
        )}
      </p>
    </footer>
  )
}
