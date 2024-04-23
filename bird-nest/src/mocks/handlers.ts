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

const Users = [
  {
    name: '서울특별시 자립지원전담기관',
    follower: 135,
    image:
      'https://func.seoul.go.kr/upload/mediahub/2023/07/hCRYpjtXskcqtRiPIorJTEbbpgbmPhmA.jpg',
  },
  {
    name: '직방',
    follower: 1400,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPYWYFtWrVdiWHR1PJoJLu7cBCQGc8spF9R58Glktlg&s',
  },
  {
    name: '새둥지',
    follower: 673,
    image:
      'https://png.pngtree.com/template/20191014/ourlarge/pngtree-bird-nest-logo-vector-line-art-outline-download-monoline-image_318764.jpg',
  },
]

export const handlers = [
  http.get('/api/recommended-posts', ({ request }) => {
    return HttpResponse.json([
      {
        postId: 1,
        user: Users[0],
        text: '',
        comments: [],
        likes: [],
        apply: [],
        deadline: generateDate('future'),
        createdAt: generateDate('past'),
        images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
      },
    ])
  }),
  http.get('/api/recommended', ({ request }) => {
    return HttpResponse.json({
      users: Users,
      keywords: ['전세지원', '밀키트', '취업연계', '심리상담', '보호연장'],
    })
  }),
]
