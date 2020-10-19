import { useState } from 'react'
import { useRouter } from 'next/router'

import Button from 'components/Button/Button'
import { useUser } from 'hooks/useUser'
import { addDevit } from 'firebase/client'

const Devit = () => {
  const user = useUser()
  const router = useRouter()

  const [content, setContent] = useState('')

  const handleChange = ({ target }) => setContent(target.value)
  const handleSubmit = event => {
    event.preventDefault()

    setContent('')

    addDevit({
      userId: user.userId,
      avatar: user.avatar,
      username: user.username,
      content,
    })
      .then(router.push('/home'))
      .catch(error => console.log(error))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder={"What's happening?"}
          onChange={handleChange}
        ></textarea>
        <Button disabled={content === '' && true}>Devit</Button>
      </form>

      <style jsx>{`
        textarea {
          width: 100%;

          min-height: 20rem;
        }
      `}</style>
    </>
  )
}

export default Devit
