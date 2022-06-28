import { FC } from 'react'
import { useUpperName } from 'utils/hooks/useUpperName'
import { AvatarPropsType } from './types'

import './style.scss'

export const SmallAvatar: FC<AvatarPropsType> = ({ name, fullName }) => {
  const upper_name = useUpperName(name)

  return <div className="avatar avatar-small">{fullName || upper_name}</div>
}
