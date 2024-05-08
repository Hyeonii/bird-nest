'use client'
import { Chip, Image, User } from '@nextui-org/react'
import Heart from '../../../../public/heart.svg'
import Repost from '../../../../public/repost.svg'
import Comment from '../../../../public/chat-bubble.svg'
import Hand from '../../../../public/hand.svg'
import { useEffect, useState } from 'react'

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchMainData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/followed-posts`,
          { method: 'get' },
        )

        if (response.status === 200) {
          return await response.json()
        }
      } catch (err) {
        console.error(err)
        return { message: null }
      }
    }

    fetchMainData().then((data) => setPosts(data))
  }, [])

  console.log(posts)

  return (
    <article className="h-main flex flex-col overflow-y-scroll scrollbar-hide">
      {posts?.map((post: any, idx) => {
        const daysUntil = (targetDate: Date) => {
          // 현재 날짜와 목표 날짜 사이의 밀리초 차이 계산
          const currentDate = new Date()
          const targetDateTime = new Date(targetDate).getTime()
          const difference = targetDateTime - currentDate.getTime()

          // 밀리초를 일로 변환하여 정수로 반환
          const millisecondsPerDay = 1000 * 60 * 60 * 24
          const days = Math.ceil(difference / millisecondsPerDay)

          return days
        }

        return (
          <div
            key={'posting_' + idx}
            className="border-b-1 border-zinc-200 p-4"
          >
            <div className="flex items-center justify-between">
              <User
                name={post.user.name}
                description={`팔로워: ${post.user.follower}`}
                avatarProps={{
                  src: post.user.image,
                }}
              />
              <Chip color="success" className="text-white">
                {`모집중 D-${daysUntil(post.deadline)}`}
              </Chip>
              {/*<Chip color="default" className="text-white">*/}
              {/*  지원 마감*/}
              {/*</Chip>*/}
            </div>
            <div className="flex flex-col gap-2 pb-6 pl-12 pt-4">
              <p>{post.text}</p>
              {post.images.map((image: any) => {
                return (
                  <Image width={300} alt="NextUI hero Image" src={image.link} />
                )
              })}
            </div>
            <div className="flex justify-between">
              <Repost width={20} height={20} color="red" />
              <Comment width={20} height={20} />
              <div className="flex">
                <Heart width={20} height={20} />
                <span className="ml-1 text-sm text-stone-700">
                  {post.likes}
                </span>
              </div>
              <div className="flex">
                <Hand width={20} height={20} />
                <span className="ml-1 text-sm text-stone-700">
                  {post.apply}
                </span>
              </div>
              <span>공유</span>
            </div>
          </div>
        )
      })}
    </article>
  )
}
