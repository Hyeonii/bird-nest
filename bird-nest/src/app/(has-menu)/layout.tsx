'use client'
import { MouseEvent, ReactNode, useEffect, useState } from 'react'
import Menu from '@/app/(has-menu)/_components/Menu'
import RecommendUser from '@/app/(has-menu)/_components/RecommendUser'
import RecommendKeyword from '@/app/(has-menu)/_components/RecommendKeyword'

type Props = {
  children: ReactNode
  modal: ReactNode
}

export default function BeforeLoginLayout({ children, modal }: Props) {
  const [recommendedData, setRecommendedData] = useState({
    users: [],
    keywords: [],
  })
  const [tabTitle, setTabTitle] = useState('팔로우')

  useEffect(() => {
    const fetchMainData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/recommended`,
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

    fetchMainData().then((data) => setRecommendedData(data))
  }, [])

  const changeTab = (e: MouseEvent<HTMLDivElement>) => {
    const { textContent } = e.currentTarget
    console.log(textContent)
    if (textContent) setTabTitle(textContent)
  }

  return (
    <div className="relative flex justify-center space-x-8">
      <Menu />
      <div className="w-wide-content w-min-content h-lvh snap-none border-l-1 border-r-1 border-zinc-200">
        <div className="inline-flex w-full">
          <div
            onClick={changeTab}
            className={`flex-1 border-b-1 border-stone-300 bg-white pb-2 pl-4 pt-4 text-center ${tabTitle === '팔로우' && 'border-b-3 border-b-orange-500'}`}
          >
            팔로우
          </div>
          <div
            onClick={changeTab}
            className={`flex-1 border-b-1 border-stone-300 bg-white pb-2 pl-4 pt-4 text-center ${tabTitle === '인기' && 'border-b-3 border-b-orange-500'}`}
          >
            인기
          </div>
        </div>
        {children}
        {modal}
      </div>
      <div className="w-min-card flex flex-col gap-4 pt-6">
        <RecommendUser userData={recommendedData?.users || []} />
        <RecommendKeyword keywordList={recommendedData?.keywords || []} />
      </div>
    </div>
  )
}
