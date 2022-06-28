import { Avatar } from 'components/Avatar'
import { FC } from 'react'

type Props = {
  key: number
  name: string
  fullName?: string
}

export const Item: FC<Props> = ({ key, name, fullName }) => {
  return (
    <li key={key}>
      <Avatar.Small name={name} fullName={fullName} />
      <div>Name: {name}</div>
    </li>
  )
}
