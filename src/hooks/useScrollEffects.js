import { useEffect, useState } from 'react'

export function useScrollMotion() {
  const [motion, setMotion] = useState({ scrollY: 0, progress: 0 })

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const heroHeight = window.innerHeight * 1.2
          const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1)
          setMotion({ scrollY, progress })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return motion
}

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollY
}

export function useImageReveal(ref) {
  const [reveal, setReveal] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const start = vh * 0.92
        const end = vh * 0.35
        const progress = (start - rect.top) / (start - end)
        setReveal(Math.min(Math.max(progress, 0), 1))
        ticking = false
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ref])

  return reveal
}
