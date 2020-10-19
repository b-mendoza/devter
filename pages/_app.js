import PropTypes from 'prop-types'

import 'styles/normalize.css'
import 'styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div>
        <main>
          <Component {...pageProps} />
        </main>
      </div>

      <style jsx>{`
        div {
          height: 100vh;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        main {
          background-color: #fff;

          width: 100vw;
          height: 100vh;

          overflow-y: auto;
        }

        @media (min-width: 576px) {
          main {
            height: 90vh;
            width: 55rem;

            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

            border-radius: var(--border-radius);
          }
        }

        @media (min-height: 1300px) {
          main {
            height: 70vh;
          }
        }
      `}</style>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
