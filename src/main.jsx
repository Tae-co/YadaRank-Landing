import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// 스크롤 등장 애니메이션은 JS가 있을 때만 켠다 (index.css의 `html.js .reveal` 참고).
document.documentElement.classList.add('js')

const root = document.getElementById('root')

// 빌드 결과물에는 prerender.mjs가 미리 렌더한 HTML이 들어 있으므로 hydrate한다.
// dev 서버는 #root가 비어 있어 일반 렌더로 처리한다.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
