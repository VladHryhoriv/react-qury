import { Control } from './Control'
import { Item } from './Item'

type SideBarProps = {
  SideBar: typeof Control
  Item: typeof Item
}

Control.displayName = 'SideBar'
Item.displayName = 'Item'

export const SideBar: SideBarProps = {
  Item,
  SideBar: Control,
}
