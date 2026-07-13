import { reviews } from '../data/reviewsData'
import { useLanguage } from '../context/LanguageContext'
import StarRating from './StarRating'
import './ReviewsSection.css'

function ReviewCard({ review }) {
  return (
    <article className="reviews__card">
      <StarRating size="sm" />
      <blockquote className="reviews__quote">
        <p>« {review.text} »</p>
        {review.author && <cite>{review.author}</cite>}
      </blockquote>
    </article>
  )
}

export default function ReviewsSection() {
  const { t } = useLanguage()
  const track = [...reviews, ...reviews]

  return (
    <section
      id="avis"
      className="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="reviews__header container">
        <p className="label">{t.reviews.label}</p>
        <h2 id="reviews-title" className="reviews__title">{t.reviews.title}</h2>
        <div className="reviews__summary">
          <StarRating size="md" />
          <span className="reviews__count">{t.reviews.count}</span>
        </div>
      </div>

      <div className="reviews__marquee" aria-label={t.reviews.label}>
        <div className="reviews__track">
          {track.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
