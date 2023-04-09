import { ShowExclusionOption } from './show.exclusionOption'
import { CreateExclusionOption } from './create.exclusionOption'
import { EditExclusionOption } from './edit.exclusionOption'
import { ListExclusionOption } from './list.exclusionOption'

export const ExclusionOption = { 
  name: 'exclusionOption',
  label: 'ExclusionOption',
  hide: false,
  create: CreateExclusionOption,
  edit: EditExclusionOption,
  list: ListExclusionOption,
  show: ShowExclusionOption,
}
