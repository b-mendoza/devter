import firebase from 'firebase'

try {
  firebase.initializeApp({
    apiKey: 'AIzaSyAeQ-7kISuRyS3mUc6-wKD0ARRIxUqS-Uc',
    authDomain: 'devter-95646.firebaseapp.com',
    databaseURL: 'https://devter-95646.firebaseio.com',
    projectId: 'devter-95646',
    storageBucket: 'devter-95646.appspot.com',
    messagingSenderId: '507071473633',
    appId: '1:507071473633:web:dc1213a0c019705384d4a0',
    measurementId: 'G-ZDP8V3DVLF',
  })
} catch (error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error raised', error.stack)
  }
}

const db = firebase.firestore()

const normalizeUser = user => {
  const { uid, displayName, email, photoURL } = user

  return { userId: uid, avatar: photoURL, username: displayName, email }
}

export const SIGN_IN_WITH_GITHUB = () => {
  const provider = new firebase.auth.GithubAuthProvider()

  firebase.auth().signInWithPopup(provider)
}

export const onAuthStateChanged = setUser => {
  firebase.auth().onAuthStateChanged(user => {
    const normalizedUser = user ? normalizeUser(user) : null

    setUser(normalizedUser)
  })
}

export const addDevit = ({ userId, avatar, username, content }) => {
  return db.collection('devits').add({
    userId,
    avatar,
    username,
    content,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likes: 0,
    redevits: 0,
  })
}

export const fetchLatestDevits = () => {
  return db
    .collection('devits')
    .get()
    .then(snapshot =>
      snapshot.docs.map(doc => {
        const data = doc.data()

        const { createdAt } = data

        const date = new Date(createdAt.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat('en-US').format(
          date
        )

        const id = doc.id

        return { ...data, id, createdAt: normalizedCreatedAt }
      })
    )
}
