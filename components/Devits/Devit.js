import PropTypes from 'prop-types'

import Avatar from 'components/Avatar/Avatar'
import TextBody from './TextBody'

const Devit = ({ userId, avatar, username, content, createdAt }) => {
  return (
    <>
      <article>
        <Avatar src={avatar} alt={username} />

        <section>
          <TextBody
            username={username}
            content={content}
            createdAt={createdAt}
          />
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;

          align-items: flex-start;

          padding: 1rem 2rem;

          border-bottom: 0.1rem solid var(--colors-white-secondary);
        }

        article > :global(div) {
          margin-right: 0.5em;
        }
      `}</style>
    </>
  )
}

Devit.propTypes = {
  userId: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default Devit
