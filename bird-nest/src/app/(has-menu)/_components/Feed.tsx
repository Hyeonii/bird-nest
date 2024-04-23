import { Chip, Image, User } from '@nextui-org/react'
import Heart from '../../../../public/heart.svg'
import Repost from '../../../../public/repost.svg'
import Comment from '../../../../public/chat-bubble.svg'
import Hand from '../../../../public/hand.svg'

export default function Feed() {
  return (
    <article className="h-main flex flex-col overflow-y-scroll scrollbar-hide">
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              key={'posting_' + idx}
              className="border-b-1 border-zinc-200 p-4"
            >
              <div className="flex items-center justify-between">
                <User
                  name="서울특별시 자립지원전담기관"
                  description="팔로워: 130"
                  avatarProps={{
                    src: 'https://func.seoul.go.kr/upload/mediahub/2023/07/hCRYpjtXskcqtRiPIorJTEbbpgbmPhmA.jpg',
                  }}
                />
                <Chip color="success" className="text-white">
                  모집중 D-12
                </Chip>
                {/*<Chip color="default" className="text-white">*/}
                {/*  지원 마감*/}
                {/*</Chip>*/}
              </div>
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
                <div className="flex">
                  <Heart width={20} height={20} />
                  <span className="ml-1 text-sm text-stone-700">98</span>
                </div>
                <div className="flex">
                  <Hand width={20} height={20} />
                  <span className="ml-1 text-sm text-stone-700">15</span>
                </div>
                <span>공유</span>
              </div>
            </div>
          )
        })}
    </article>
  )
}
