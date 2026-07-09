import './PageBackground.css'

const LAYERS = [
  { src: '/fond3.jpeg', speed: 0.12, layerOpacity: 0.38 },
  { src: '/fond2.jpeg', speed: 0.18, layerOpacity: 0.52 },
  { src: '/image3.jpeg', speed: 0.25, layerOpacity: 1 },
]

export default function PageBackground({ opacity, scrollY }) {
  return (
    <div className="page-bg" aria-hidden="true" style={{ opacity }}>
      {LAYERS.map((layer) => (
        <img
          key={layer.src}
          src={layer.src}
          alt=""
          width={1920}
          height={1080}
          className="page-bg__layer"
          style={{
            opacity: layer.layerOpacity,
            transform: `translate3d(0, ${-scrollY * layer.speed}px, 0) scale(1.07)`,
          }}
        />
      ))}
      <div className="page-bg__wash" />
    </div>
  )
}
