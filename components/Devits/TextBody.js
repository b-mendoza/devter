import PropTypes from 'prop-types'

const TextBody = ({ username, content, createdAt }) => {
  return (
    <>
      <strong>{username}</strong>
      <span> &middot; {createdAt}</span>

      <p>
        <small>{content}</small>
      </p>

      <style jsx>{`
        strong {
          font-family: 'Nunito Sans', sans-serif;
        }

        p {
          margin: 0;
        }

        span {
          color: var(--colors-white-tertiary);
        }
      `}</style>
    </>
  )
}

TextBody.propTypes = {
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default TextBody
