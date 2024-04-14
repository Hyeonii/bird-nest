import {ReactNode} from "react"

export default function BeforeLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      로그인 전 layout
      {children}
    </div>
  )
}