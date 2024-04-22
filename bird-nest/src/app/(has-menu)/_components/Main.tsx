import { Image, User } from '@nextui-org/react'
import Heart from '../../../../public/heart.svg'
import Repost from '../../../../public/repost.svg'
import Comment from '../../../../public/chat-bubble.svg'

export default function Main() {
  return (
    <div className="flex flex-col">
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={'posting_' + idx}
              className="border-b-1 border-zinc-200 p-4"
            >
              <User
                name="서울특별시 자립지원전담기관"
                description="팔로워: 130"
                avatarProps={{
                  src: 'https://func.seoul.go.kr/upload/mediahub/2023/07/hCRYpjtXskcqtRiPIorJTEbbpgbmPhmA.jpg',
                }}
              />
              <div className="flex flex-col gap-2 pb-6 pl-12 pt-4">
                <p>
                  20~23세 청년들에게 문화관람비 20만원 지원
                  <br />
                  2001~2004년생 청년들에게 문화 관람비를 지원합니다!
                  <br />
                  지원 대상이신 분들 만관부~
                </p>
                <Image
                  width={300}
                  alt="NextUI hero Image"
                  src="https://cdn.imweb.me/upload/S2023052251bda22ced5db/9af8916b4eeff.png"
                />
              </div>
              <div className="flex justify-between">
                <Repost width={20} height={20} color="red" />
                <Comment width={20} height={20} />
                <Heart width={20} height={20} />
                <span>공유</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}
