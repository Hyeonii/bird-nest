import {ReactNode} from "react"

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      메뉴 없음
      {children}
    </div>
  )
}