import { Card, CardBody } from '@nextui-org/react'

type Props = {
  keywordList: string[] | []
}
export default function RecommendKeyword({ keywordList }: Props) {
  return (
    <Card className="bg-gray-100" shadow="none" radius="sm">
      <div className="border-b-1 border-zinc-200 p-3 pb-2 text-sm font-bold">
        인기 검색어
      </div>
      <CardBody>
        <ul>
          {keywordList?.map((keyword: string, idx) => {
            return (
              <li key={keyword + idx} className="flex pb-2 pl-1 text-sm">
                <span className="mr-1 text-gray-500">#</span>
                <span>{keyword}</span>
              </li>
            )
          })}
        </ul>
      </CardBody>
    </Card>
  )
}
