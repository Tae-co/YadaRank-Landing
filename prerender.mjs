// 빌드 시점에 각 라우트를 HTML로 미리 렌더한다.
// 크롤러가 JS 실행 없이 본문을 읽을 수 있게 하고, 페이지마다 다른 메타태그를 넣는다.
import fs from 'node:fs'
import path from 'node:path'
import { render } from './dist-ssr/entry-server.mjs'

const SITE = 'https://yadarank.com'

// title/description을 생략하면 index.html의 기본값(홈 문구)을 그대로 쓴다.
//
// 파일명을 `privacy/index.html`이 아니라 `privacy.html`로 두는 이유:
// 디렉터리 형태로 두면 Cloudflare Pages가 `/privacy` → `/privacy/`로 308 리다이렉트해서
// sitemap·canonical에 적은 슬래시 없는 URL과 어긋난다. `privacy.html`이면 `/privacy`가 200이다.
const pages = [
  { route: '/', file: 'index.html' },
  {
    route: '/privacy',
    file: 'privacy.html',
    title: 'Privacy Policy | YadaRank',
    description: 'How YadaRank collects, uses, and protects your information when you track board game scores and rankings.',
  },
  {
    route: '/delete',
    file: 'delete.html',
    title: 'Delete Your Account | YadaRank',
    description: 'How to delete your YadaRank account and permanently remove all associated game records.',
  },
]

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const replaceAttr = (html, pattern, value) => {
  if (!pattern.test(html)) throw new Error(`prerender: 치환 대상을 못 찾음 → ${pattern}`)
  return html.replace(pattern, `$1${escapeAttr(value)}$2`)
}

function applyMeta(html, { title, description, url }) {
  let out = html
  if (title) {
    out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(title)}</title>`)
    out = replaceAttr(out, /(<meta property="og:title" content=")[^"]*(")/, title)
    out = replaceAttr(out, /(<meta name="twitter:title" content=")[^"]*(")/, title)
  }
  if (description) {
    out = replaceAttr(out, /(<meta name="description" content=")[^"]*(")/, description)
    out = replaceAttr(out, /(<meta property="og:description" content=")[^"]*(")/, description)
    out = replaceAttr(out, /(<meta name="twitter:description" content=")[^"]*(")/, description)
  }
  out = replaceAttr(out, /(<link rel="canonical" href=")[^"]*(")/, url)
  out = replaceAttr(out, /(<meta property="og:url" content=")[^"]*(")/, url)
  return out
}

const template = fs.readFileSync(path.join('dist', 'index.html'), 'utf-8')

for (const page of pages) {
  const appHtml = render(page.route)
  if (!appHtml.trim()) throw new Error(`prerender: ${page.route} 렌더 결과가 비어 있음`)

  const url = SITE + page.route
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  if (html === template) throw new Error('prerender: #root 자리를 못 찾음')

  html = applyMeta(html, { ...page, url })

  const dest = path.join('dist', page.file)
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, html)
  console.log(`prerendered ${page.route.padEnd(9)} → dist/${page.file}  (${(html.length / 1024).toFixed(1)}KB)`)
}
