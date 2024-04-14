import {ReactNode} from "react"

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      로그인 관련 layout
      {children}
    </div>
  )
}