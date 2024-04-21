import {Card, CardBody} from "@nextui-org/react";

type Props = {
  keywordList: string[]
}
export default function RecommendKeyword({keywordList}: Props) {
  return (
    <Card className="bg-gray-100" shadow="none" radius="sm">
      <div className="p-3 pb-2 border-b-1 border-zinc-200 text-sm font-bold">
        인기 검색어
      </div>
      <CardBody>
        <ul>
          {keywordList.map((keyword: string) => {
            return(
              <li className="flex pl-1 pb-2 text-sm">
                <span className="text-gray-500 mr-1">#</span>
                <span>{keyword}</span>
              </li>
            )
          })}
        </ul>
      </CardBody>
    </Card>
  )
}