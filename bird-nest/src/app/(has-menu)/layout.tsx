'use client'
import { ReactNode, useEffect, useState } from 'react'
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

  return (
    <div className="relative flex justify-center space-x-8">
      <Menu />
      <div className="w-wide-content w-min-content h-lvh snap-none border-l-1 border-r-1 border-zinc-200">
        <div className="border-b-1 border-stone-300 bg-white pb-2 pl-4 pt-4 text-xl font-bold">
          Home
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
