import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import './ContainerScrollAnimation.css'

export function ContainerScroll({ titleComponent, middleComponent, children }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scaleRange = isMobile ? [0.72, 0.94] : [1.06, 1]
  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange)
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <div className="container-scroll" ref={containerRef}>
      <div className="container-scroll__stage">
        <ScrollHeader translate={translate} titleComponent={titleComponent} />
        {middleComponent}
        <ScrollCard rotate={rotate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </div>
  )
}

function ScrollHeader({ translate, titleComponent }) {
  return (
    <motion.div className="container-scroll__header" style={{ translateY: translate }}>
      {titleComponent}
    </motion.div>
  )
}

function ScrollCard({ rotate, scale, children }) {
  return (
    <motion.div
      className="container-scroll__card"
      style={{
        rotateX: rotate,
        scale,
      }}
    >
      <div className="container-scroll__card-inner">
        {children}
      </div>
    </motion.div>
  )
}
