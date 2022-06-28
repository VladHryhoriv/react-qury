import { SmallAvatar } from './Small'

type AvatarProps = {
  Small: typeof SmallAvatar
}

SmallAvatar.displayName = 'SmallAvatar'

export const Avatar: AvatarProps = {
  Small: SmallAvatar,
}
