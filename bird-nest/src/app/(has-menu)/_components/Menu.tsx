import Link from "next/link";
import Logo from "../../../../public/logo.svg";

export default function Menu() {
  const menus = [
    {
      title: '홈',
      url: '/'
    },
    {
      title: '검색',
      url: '/explore'
    },
    {
      title: '내정보',
      url: '/mypage'
    }
  ]

  return (
    <div className="w-min-menu">
      <Logo className="mt-3 mb-2" width={40} height={40} alt="Logo"/>
      <ul>
        {menus.map((menu) => {
          return (
            <li className="p-2 font-bold">
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          )
        })}
        <li className="m-2 w-10 h-10 bg-orange-400 rounded-full text-3xl text-center text-white">
          <Link href="new-post">
            +
          </Link>
        </li>
      </ul>
    </div>
  )
}