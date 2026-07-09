import { useEffect, useRef, useState } from 'react'
import { LOGO_DRAW_PATH, LOGO_VIEWBOX } from '../data/logoDraw'
import './LogoMark.css'

const LOGO_SRC = '/logo.png'
const DRAW_DURATION_MS = 2800

export default function LogoMark({ variant = 'hero', className = '', style, animate }) {
  const pathRef = useRef(null)
  const [pathLength, setPathLength] = useState(0)
  const shouldAnimate = animate ?? variant === 'hero'

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength())
    }
  }, [])

  const drawVars =
    pathLength > 0
      ? {
          '--logo-path-length': pathLength,
          '--logo-draw-duration': `${DRAW_DURATION_MS}ms`,
        }
      : undefined

  return (
    <span
      className={[
        'logo-mark',
        `logo-mark--${variant}`,
        shouldAnimate ? 'logo-mark--animating' : 'logo-mark--drawn',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ...style, ...drawVars }}
      aria-hidden="true"
    >
      <svg
        className="logo-mark__svg"
        viewBox={`0 0 ${LOGO_VIEWBOX.width} ${LOGO_VIEWBOX.height}`}
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          className="logo-mark__stroke"
          d={LOGO_DRAW_PATH}
        />
      </svg>
      <img
        src={LOGO_SRC}
        alt=""
        className="logo-mark__fill"
        width={LOGO_VIEWBOX.width}
        height={LOGO_VIEWBOX.height}
        draggable="false"
      />
    </span>
  )
}
