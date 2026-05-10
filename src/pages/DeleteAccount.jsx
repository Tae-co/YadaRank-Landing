import Header from '../components/Header'
import Footer from '../components/Footer'

const styles = {
  main: { maxWidth: '680px', margin: '0 auto', padding: '60px 24px 80px' },
  h1: { fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '8px' },
  subtitle: { fontSize: '15px', color: '#777', marginBottom: '48px' },
  h2: { fontSize: '17px', fontWeight: '700', marginTop: '40px', marginBottom: '12px' },
  p: { fontSize: '15px', color: '#444', marginBottom: '12px' },
  ul: { paddingLeft: '20px', marginBottom: '16px' },
  li: { fontSize: '15px', color: '#444', marginBottom: '6px' },
  warningBox: {
    background: '#fff8f0',
    border: '1px solid #ffe0b2',
    borderRadius: '12px',
    padding: '16px 20px',
    margin: '24px 0',
    fontSize: '14px',
    color: '#b45309',
  },
  stepBox: { background: '#f7f7f7', borderRadius: '16px', padding: '24px 28px', marginBottom: '12px' },
  stepNum: { fontSize: '12px', fontWeight: '700', color: '#6b5ce7', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' },
  stepText: { fontSize: '15px', color: '#1a1a1a', fontWeight: '500' },
  stepSub: { fontSize: '13px', color: '#777', marginTop: '4px' },
  emailBtn: {
    display: 'inline-block',
    marginTop: '8px',
    padding: '12px 24px',
    background: '#1a1a1a',
    color: '#fff',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
  },
}

const steps = [
  { num: 'Step 1', text: 'Open the YadaRank app and log in' },
  { num: 'Step 2', text: 'Go to your Profile', sub: 'Tap the profile icon in the bottom navigation' },
  { num: 'Step 3', text: 'Tap "회원탈퇴" (Delete Account)', sub: 'Scroll to the bottom of the profile page' },
  { num: 'Step 4', text: 'Confirm deletion', sub: 'Your account and all data will be permanently deleted' },
]

export default function DeleteAccount() {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <h1 style={styles.h1}>Delete Your Account</h1>
        <p style={styles.subtitle}>You can delete your YadaRank account and all associated data at any time.</p>

        <div style={styles.warningBox}>
          ⚠️ Account deletion is permanent and cannot be undone. All your data will be removed within 30 days.
        </div>

        <h2 style={styles.h2}>Option 1 — Delete directly in the app</h2>
        <p style={styles.p}>The easiest way to delete your account is through the app itself.</p>

        {steps.map((s) => (
          <div key={s.num} style={styles.stepBox}>
            <div style={styles.stepNum}>{s.num}</div>
            <div style={styles.stepText}>{s.text}</div>
            {s.sub && <div style={styles.stepSub}>{s.sub}</div>}
          </div>
        ))}

        <h2 style={styles.h2}>Option 2 — Request via email</h2>
        <p style={styles.p}>
          If you cannot access the app, send us an email with the subject line{' '}
          <strong>"Account Deletion Request"</strong> and include the email address associated with your account.
        </p>
        <a
          href="mailto:styup1004@gmail.com?subject=Account Deletion Request"
          style={styles.emailBtn}
        >
          Email us to delete account
        </a>

        <h2 style={styles.h2}>What data gets deleted</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Your name, email address, and profile picture</li>
          <li style={styles.li}>Your nickname and account information</li>
          <li style={styles.li}>All game match records and ranking history</li>
          <li style={styles.li}>All group room memberships</li>
        </ul>
        <p style={styles.p}>Deletion is completed within <strong>30 days</strong> of your request.</p>
      </main>
      <Footer />
    </>
  )
}
