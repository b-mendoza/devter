import PropTypes from 'prop-types'

const Avatar = ({ src, alt, text }) => {
  return (
    <div>
      <img
        src={src}
        alt={`Profile Picture`}
        title={`${alt}'s Profile Picture`}
      />

      {text && <strong>{text}</strong>}

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }

        img {
          border-radius: 50%;

          height: 3em;
          width: 3em;
        }

        img + strong {
          margin-left: 1rem;
        }

        strong {
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Avatar
