'use client'
import Link from 'next/link'
import Logo from '../../../../public/logo.svg'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function Menu() {
  const segment = useSelectedLayoutSegment()
  const menus = [
    {
      title: '홈',
      url: '/',
      isPrivate: false,
    },
    {
      title: '검색',
      url: 'explore',
      isPrivate: false,
    },
    {
      title: '내 정보',
      url: 'mypage',
      isPrivate: true,
    },
  ]
  const me = {
    id: 'hyeonii',
  }

  return (
    <div className="w-min-menu">
      <Logo className="mb-2 mt-3" width={40} height={40} alt="Logo" />
      <nav>
        {menus.map((menu, idx) => {
          let isSelected = false
          let isLogedIn = !!me

          if (!segment && menu.url === '/') isSelected = true
          if (segment === menu.url) isSelected = true

          if (menu.isPrivate && !isLogedIn) return <></>

          return (
            <li
              key={menu.title + idx}
              className={`ml-2 mt-4 ${isSelected ? 'text-xl font-extrabold' : 'font-bold'} hover:text-neutral-500`}
            >
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          )
        })}
        <li className="ml-2 mt-4 w-20 rounded-2xl bg-orange-400 py-1 text-center font-bold text-white hover:bg-orange-300">
          <Link href="new-post">+ 글 작성</Link>
        </li>
      </nav>
    </div>
  )
}
