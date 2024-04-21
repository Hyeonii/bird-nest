import Link from "next/link";
import Logo from "../../../../public/logo.svg";

export default function Menu() {
  const menus = ['홈', '검색', '내정보']
  return (
    <div className="w-min-menu">
      <Logo className="mt-3 mb-2" width={40} height={40} alt="Logo"/>
      <ul>
        {menus.map((menu) => {
          return (
            <li className="p-2 font-bold">
              <Link href="/">{menu}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}