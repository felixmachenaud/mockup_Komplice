import './StarRating.css'

const STAR_PATH =
  'M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z'

export default function StarRating({ count = 5, size = 'md', className = '' }) {
  return (
    <span
      className={`star-rating star-rating--${size} ${className}`.trim()}
      role="img"
      aria-label={`${count} étoiles sur 5`}
    >
      {Array.from({ length: count }, (_, index) => (
        <svg
          key={index}
          className="star-rating__star"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </span>
  )
}
