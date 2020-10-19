import Head from 'next/head'
import { useEffect, useState } from 'react'

import Devit from 'components/Devits/Devit'
import { useUser } from 'hooks/useUser'
import { fetchLatestDevits } from 'firebase/client'

const Home = () => {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    if (user) {
      fetchLatestDevits().then(setTimeline)
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h2>
          <small>Home</small>
        </h2>
      </header>

      <section>
        {timeline.map(devit => (
          <Devit key={devit.id} {...devit} />
        ))}
      </section>

      <nav></nav>

      <style jsx>{`
        header,
        nav {
          padding: 0 2rem;
        }

        header {
          background: #ffffffaa;

          backdrop-filter: blur(0.5rem);

          border-bottom: 0.1rem solid var(--colors-white-secondary);

          position: sticky;

          top: 0;

          height: 3em;

          display: flex;
          align-items: center;
        }

        h2 {
          font-weight: 900;
        }

        section {
          min-height: calc(100% - 6em);
        }

        nav {
          border-top: 0.1rem solid var(--colors-white-secondary);

          position: sticky;

          bottom: 0;

          height: 3em;

          width: 100%;

          background: var(--colors-white-primary);
        }
      `}</style>
    </>
  )
}

export default Home
