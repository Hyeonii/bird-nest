import {ReactNode} from "react"
import Link from "next/link";
import {Avatar} from "@nextui-org/react";

export default function BeforeLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-lvh flex justify-center space-x-4">
      <div>
        <h1>LOGO</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/explore">Search</Link>
          </li>
          <li>
            <Link href="/mypage">My Page</Link>
          </li>
          <li>
            <Link href="/login">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            </Link>
          </li>
        </ul>
      </div>
      {children}
      <div>
        <div>
          팔로우 추천
        </div>
        <div>
          인기 검색어
        </div>
      </div>
    </div>
  )
}