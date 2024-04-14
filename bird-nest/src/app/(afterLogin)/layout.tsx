import {ReactNode} from "react"

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      로그인 후 layout
      {children}
    </div>
  )
}