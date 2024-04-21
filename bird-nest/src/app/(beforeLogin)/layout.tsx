import {ReactNode} from "react"
import Menu from "@/app/(beforeLogin)/_components/Menu";
import RecommendUser from "@/app/(beforeLogin)/_components/RecommendUser";
import RecommendKeyword from "@/app/(beforeLogin)/_components/RecommendKeyword";
import {recommendedUserType} from "@/types/user";
import {Divider} from "@nextui-org/react";

export default function BeforeLoginLayout({ children }: { children: ReactNode }) {
  const userData: recommendedUserType[] = [
    {
      name: "서울특별시 자립지원전담기관",
      follower: 130,
      img: "https://func.seoul.go.kr/upload/mediahub/2023/07/hCRYpjtXskcqtRiPIorJTEbbpgbmPhmA.jpg"
    },
    {
      name: "직방",
      follower: 14000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPYWYFtWrVdiWHR1PJoJLu7cBCQGc8spF9R58Glktlg&s"
    },
    {
      name: "새둥지",
      follower: 673,
      img: "https://png.pngtree.com/template/20191014/ourlarge/pngtree-bird-nest-logo-vector-line-art-outline-download-monoline-image_318764.jpg"
    },
  ]
  const keywordList = ['전세지원', '밀키트', '취업연계', '심리상담', '보호연장']

  return (
    <div className="h-lvh flex justify-center space-x-8">
      <Menu />
      <div className="w-wide-content w-min-content border-l-1 border-r-1 border-zinc-200">
        <div className="text-xl font-bold pt-4 pl-4 pb-2">Home</div>
        <Divider />
        {children}
      </div>
      <div className="flex flex-col gap-4 pt-6 w-min-card">
        <RecommendUser userData={userData} />
        <RecommendKeyword keywordList={keywordList} />
      </div>
    </div>
  )
}