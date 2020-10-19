import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Button from 'components/Button/Button'
import GitHub from 'components/Icons/GitHub'
import InlineSpinner from 'components/Spinners/InlineSpinner'
import { useUser, USER_STATES } from 'hooks/useUser'
import { SIGN_IN_WITH_GITHUB } from 'firebase/client'

const Index = () => {
  const router = useRouter()
  const user = useUser()

  const handleClick = () => SIGN_IN_WITH_GITHUB()

  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <img src="/devter-logo.svg" alt="Logo" />

        <h1>devter</h1>
        <h3>
          <small>Develop for developers</small>
        </h3>

        {user === USER_STATES.NOT_LOGGED && (
          <Button onClick={handleClick}>
            <GitHub />
            <small>Sign In with Github</small>
          </Button>
        )}

        {user === USER_STATES.NOT_KNOWN && <InlineSpinner />}
      </section>

      <style jsx>{`
        section {
          height: 100%;

          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 30% repeat(3, min-content);

          place-content: center;
          place-items: center;
        }

        h1 {
          margin: 0.5rem 0;

          font-weight: 800;

          background: linear-gradient(
            90deg,
            rgba(67, 97, 238, 1) 0%,
            rgba(63, 55, 201, 1) 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        h3 {
          color: var(--colors-secondary);

          margin: 0;
        }

        h3 + :global(button) {
          margin-top: 1em;
        }

        @media (min-height: 900px) {
          section {
            grid-template-rows: 20rem repeat(3, min-content);
          }
        }
      `}</style>
    </>
  )
}

export default Index
