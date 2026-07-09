import { useEffect, useRef } from 'react'
import './PageBackground.css'

const LAYERS = [
  { src: '/fond3.jpeg', speed: 0.12, layerOpacity: 0.38 },
  { src: '/fond2.jpeg', speed: 0.18, layerOpacity: 0.52 },
  { src: '/image3.jpeg', speed: 0.25, layerOpacity: 1 },
]

export default function PageBackground() {
  const rootRef = useRef(null)
  const layerRefs = useRef([])

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const heroHeight = window.innerHeight * 1.2
          const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1)
          const opacity = Math.min(Math.max((progress - 0.35) / 0.45, 0), 1)

          if (rootRef.current) {
            rootRef.current.style.opacity = String(opacity)
          }

          LAYERS.forEach((layer, index) => {
            const el = layerRefs.current[index]
            if (!el) return
            el.style.transform = `translate3d(0, ${-scrollY * layer.speed}px, 0) scale(1.07)`
          })

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page-bg" ref={rootRef} aria-hidden="true">
      {LAYERS.map((layer, index) => (
        <img
          key={layer.src}
          ref={(node) => {
            layerRefs.current[index] = node
          }}
          src={layer.src}
          alt=""
          width={1920}
          height={1080}
          className="page-bg__layer"
          style={{ opacity: layer.layerOpacity }}
        />
      ))}
      <div className="page-bg__wash" />
    </div>
  )
}
