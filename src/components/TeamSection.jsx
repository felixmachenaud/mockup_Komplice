import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { conversionContent } from '../data/conversionContent'
import './TeamSection.css'

export default function TeamSection() {
  const { t, lang } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const members = [
    { key: 'chef', data: t.team.chef, media: conversionContent.team.chef },
    { key: 'sommelier', data: t.team.sommelier, media: conversionContent.team.sommelier },
  ]

  return (
    <section id="komplices" className="team" ref={ref} aria-labelledby="team-title">
      <div className="container">
        <div className={`team__header reveal ${isInView ? 'is-visible' : ''}`}>
          <p className="label">{t.team.label}</p>
          <h2 id="team-title" className="team__title">{t.team.title}</h2>
        </div>

        <div className="team__grid">
          {members.map(({ key, data, media }, index) => (
            <article
              key={key}
              className={`team__member reveal ${isInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <figure className="team__photo">
                <img
                  src={media.image}
                  alt={media.imageAlt[lang] || media.imageAlt.fr}
                  width={600}
                  height={750}
                  loading="lazy"
                />
              </figure>
              <div className="team__info">
                <p className="label team__role">{data.role}</p>
                <h3 className="team__name">{data.name}</h3>
                <p className="team__bio">{data.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
