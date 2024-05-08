import { http, HttpResponse } from 'msw'
import { faker } from '@faker-js/faker'

function generateDate(type: string) {
  let from
  let to

  if (type === 'future') {
    const future = new Date(Date.now())
    from = Date.now()
    to = future.setDate(future.getDate() + 30)
  } else if (type === 'past') {
    const future = new Date(Date.now())
    from = future.setDate(future.getDate() - 7)
    to = Date.now()
  } else {
    return Date.now()
  }

  return faker.date.between({ from, to })
}

const fakeNumber = (digits: number) => {
  const min = Math.pow(10, digits - 1)
  const max = Math.pow(10, digits) - 1
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getFakeUser = () => {
  return {
    name: faker.person.fullName(),
    follower: fakeNumber(3),
    image: faker.image.avatar(),
  }
}

const getFakeUserList = (count: number) => {
  const userList = []
  for (let i = 0; i < count; i++) {
    userList.push(getFakeUser())
  }
  return userList
}

const getFakePost = () => {
  return {
    postId: 1,
    user: getFakeUser(),
    text: faker.lorem.paragraph({ min: 1, max: 5 }),
    comments: [],
    likes: fakeNumber(3),
    apply: fakeNumber(2),
    deadline: generateDate('future'),
    createdAt: generateDate('past'),
    images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
  }
}

const getFakePostList = (count: number) => {
  const userList = []
  for (let i = 0; i < count; i++) {
    userList.push(getFakePost())
  }
  return userList
}

const getFakeKeyword = (count: number) => {
  const userList = []
  for (let i = 0; i < count; i++) {
    userList.push(faker.lorem.word())
  }
  return userList
}

export const handlers = [
  http.get('/api/followed-posts', ({ request }) => {
    return HttpResponse.json(getFakePostList(3))
  }),
  http.get('/api/recommended-posts', ({ request }) => {
    return HttpResponse.json(getFakePostList(5))
  }),
  http.get('/api/recommended', ({ request }) => {
    return HttpResponse.json({
      users: getFakeUserList(3),
      keywords: getFakeKeyword(6),
    })
  }),
]
