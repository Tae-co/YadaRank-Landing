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
  langSwitch: {
    marginLeft: 'auto',
    display: 'flex',
    padding: '3px',
    borderRadius: '999px',
    background: '#f4f4f6',
    fontSize: '13px',
    fontWeight: '600',
  },
  langOption: { padding: '5px 12px', borderRadius: '999px', color: '#888', textDecoration: 'none' },
  langActive: { background: '#fff', color: '#1a1a1a', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' },
}

const LANGS = [
  { code: 'ko', label: '한국어', href: '/ko' },
  { code: 'en', label: 'English', href: '/' },
]

// lang을 넘기면(홈만) 오른쪽에 언어 선택이 붙는다. 개인정보·계정 삭제 페이지는 영어판만 있다.
export default function Header({ lang }) {
  return (
    <header style={styles.header}>
      <img src="/logo.png" width="36" height="36" style={{ borderRadius: '10px', objectFit: 'contain' }} alt="YadaRank" />
      <Link to={lang === 'ko' ? '/ko' : '/'} style={styles.logoText}>YadaRank</Link>
      {lang && (
        <nav style={styles.langSwitch} aria-label="Language">
          {/* <html lang>까지 바뀌어야 해서 전체 새로고침(<a>)으로 이동한다 */}
          {LANGS.map((l) => (
            <a key={l.code} href={l.href} hrefLang={l.code}
               aria-current={l.code === lang ? 'page' : undefined}
               style={l.code === lang ? { ...styles.langOption, ...styles.langActive } : styles.langOption}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
