import { ITeam } from 'features/teams/types'
import { FC } from 'react'
import { SideBar } from '.'

type SideBarProps = {
  data: Array<ITeam>
  title: string
}

const SideBarControl: FC<SideBarProps> = (props) => {
  const { data, title } = props

  return (
    <section>
      {title}
      {data.map((item) => (
        <SideBar.Item
          key={item.id}
          name={item.name}
          fullName={item.abbreviation}
        />
      ))}
    </section>
  )
}

SideBarControl.displayName = 'SideBar'

export const Control = SideBarControl
