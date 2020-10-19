import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { onAuthStateChanged } from 'firebase/client'

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export const useUser = () => {
  const router = useRouter()
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/')
  }, [user])

  return user
}
