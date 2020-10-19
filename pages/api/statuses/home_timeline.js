const timeline = [
  {
    id: '0',
    avatar:
      'https://pbs.twimg.com/profile_images/1313031739413917697/5WVSnBRE_reasonably_small.jpg',
    username: 'wongmjane',
    message:
      'Twitter Web App now runs ES6+ for modern browsers, reducing the polyfill bundle size by 83%',
  },
  {
    id: '1',
    avatar:
      'https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg',
    username: 'midudev',
    message: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán',
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '3',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '4',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '5',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '6',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '7',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '8',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '9',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '10',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '11',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
  {
    id: '12',
    username: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar:
      'https://pbs.twimg.com/profile_images/1298571647180472320/zjkVwkJL_reasonably_small.jpg',
    message:
      'Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.',
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(timeline))
}
