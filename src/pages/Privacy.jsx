import Header from '../components/Header'
import Footer from '../components/Footer'

const styles = {
  main: { maxWidth: '680px', margin: '0 auto', padding: '60px 24px 80px' },
  h1: { fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '8px' },
  updated: { fontSize: '13px', color: '#999', marginBottom: '48px' },
  h2: { fontSize: '17px', fontWeight: '700', marginTop: '40px', marginBottom: '12px', color: '#1a1a1a' },
  p: { fontSize: '15px', color: '#444', marginBottom: '12px' },
  ul: { paddingLeft: '20px', marginBottom: '12px' },
  li: { fontSize: '15px', color: '#444', marginBottom: '6px' },
}

export default function Privacy() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <p style={styles.updated}>Last updated: May 2026</p>

        <p style={styles.p}>YadaRank ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>

        <h2 style={styles.h2}>1. Information We Collect</h2>
        <p style={styles.p}>We collect the following information when you sign in:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Name and profile picture</strong> — provided via Google or Kakao OAuth</li>
          <li style={styles.li}><strong>Email address</strong> — provided via Google or Kakao OAuth (used for account identification only)</li>
          <li style={styles.li}><strong>Nickname</strong> — displayed in rankings and match history</li>
        </ul>
        <p style={styles.p}>We also collect the following data generated through app usage:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Game match results and placement records</li>
          <li style={styles.li}>Glicko-2 rating scores and ranking history</li>
          <li style={styles.li}>Room membership information</li>
        </ul>

        <h2 style={styles.h2}>2. How We Use Your Information</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>To create and manage your account</li>
          <li style={styles.li}>To calculate and display player rankings</li>
          <li style={styles.li}>To show match history within your group</li>
        </ul>
        <p style={styles.p}>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2 style={styles.h2}>3. Third-Party Services</h2>
        <p style={styles.p}>We use the following third-party authentication services:</p>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Google Sign-In</strong> — subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google's Privacy Policy</a></li>
          <li style={styles.li}><strong>Kakao Login</strong> — subject to <a href="https://www.kakao.com/policy/privacy" target="_blank" rel="noreferrer">Kakao's Privacy Policy</a></li>
        </ul>

        <h2 style={styles.h2}>4. Data Retention</h2>
        <p style={styles.p}>Your data is retained for as long as your account is active. You may request account deletion at any time by contacting us. Upon deletion, all personal information and associated game records will be permanently removed.</p>

        <h2 style={styles.h2}>5. Data Security</h2>
        <p style={styles.p}>We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>

        <h2 style={styles.h2}>6. Children's Privacy</h2>
        <p style={styles.p}>YadaRank is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

        <h2 style={styles.h2}>7. Changes to This Policy</h2>
        <p style={styles.p}>We may update this Privacy Policy from time to time. We will notify users of any significant changes by updating the date at the top of this page.</p>

        <h2 style={styles.h2}>8. Contact Us</h2>
        <p style={styles.p}>
          If you have any questions about this Privacy Policy, please contact us at:<br />
          <a href="mailto:taecodev66@gmail.com">taecodev66@gmail.com</a>
        </p>
      </main>
      <Footer />
    </>
  )
}
