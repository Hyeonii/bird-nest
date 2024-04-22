import { Card, CardBody, Chip, User } from '@nextui-org/react'
import { recommendedUserType } from '@/types/user'

type Props = {
  userData: recommendedUserType[]
}

export default function RecommendUser({ userData }: Props) {
  return (
    <Card className="border-1 border-zinc-200" shadow="none" radius="sm">
      <div className="border-b-1 border-zinc-200 p-3 pb-2 text-sm font-bold">
        팔로우 추천
      </div>
      <CardBody>
        <ul>
          {userData.map((user) => {
            return (
              <li className="flex justify-between pb-4">
                <User
                  name={user.name}
                  description={'팔로워: ' + user.follower}
                  avatarProps={{ src: user.img }}
                  className="mr-4"
                />
                <Chip variant="flat">팔로우</Chip>
              </li>
            )
          })}
        </ul>
      </CardBody>
    </Card>
  )
}
