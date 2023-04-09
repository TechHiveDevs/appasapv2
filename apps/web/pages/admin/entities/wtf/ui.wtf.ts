import { ShowWtf } from './show.wtf'
import { CreateWtf } from './create.wtf'
import { EditWtf } from './edit.wtf'
import { ListWtf } from './list.wtf'

export const Wtf = { 
  name: 'wtf',
  label: 'Wtf',
  hide: false,
  create: CreateWtf,
  edit: EditWtf,
  list: ListWtf,
  show: ShowWtf,
}
