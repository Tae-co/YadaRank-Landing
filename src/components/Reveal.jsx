import { useEffect, useRef, useState } from 'react'

// 스크롤로 뷰포트에 들어오면 나타나는 래퍼.
// 숨김 상태는 CSS의 `html.js .reveal`에만 걸려 있어서, 프리랜더된 HTML과
// JS가 꺼진 환경에서는 처음부터 보이는 상태로 남는다 (크롤러 대비).
export default function Reveal({ children, delay = 0, style, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        io.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={visible ? 'reveal is-visible' : 'reveal'}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}
