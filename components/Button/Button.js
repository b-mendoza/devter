import PropTypes from 'prop-types'

const Button = ({ children, onClick, disabled }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>

      <style jsx>{`
        button {
          background: var(--colors-black);

          color: var(--colors-white-primary);

          font-weight: 600;

          padding: 1em;

          transition: opacity 0.5s ease-in-out;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        button:hover {
          outline: none;

          opacity: 0.7;
        }

        button[disabled] {
          opacity: 0.2;

          pointer-events: none;

          user-select: none;
        }

        button > :global(svg) {
          margin-right: 0.5em;
        }
      `}</style>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
