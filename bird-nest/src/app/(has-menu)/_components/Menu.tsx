import Link from 'next/link'
import Logo from '../../../../public/logo.svg'

export default function Menu() {
  const menus = [
    {
      title: '홈',
      url: '/',
    },
    {
      title: '검색',
      url: '/explore',
    },
    {
      title: '내정보',
      url: '/mypage',
    },
  ]

  return (
    <div className="w-min-menu">
      <Logo className="mb-2 mt-3" width={40} height={40} alt="Logo" />
      <ul>
        {menus.map((menu, idx) => {
          return (
            <li key={menu.title + idx} className="p-2 font-bold">
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          )
        })}
        <li className="m-2 h-10 w-10 rounded-full bg-orange-400 text-center text-3xl text-white">
          <Link href="new-post">+</Link>
        </li>
      </ul>
    </div>
  )
}
