import { ShowAccomodationServiceOption } from './show.accomodationServiceOption'
import { CreateAccomodationServiceOption } from './create.accomodationServiceOption'
import { EditAccomodationServiceOption } from './edit.accomodationServiceOption'
import { ListAccomodationServiceOption } from './list.accomodationServiceOption'

export const AccomodationServiceOption = { 
  name: 'accomodationServiceOption',
  label: 'AccomodationServiceOption',
  hide: false,
  create: CreateAccomodationServiceOption,
  edit: EditAccomodationServiceOption,
  list: ListAccomodationServiceOption,
  show: ShowAccomodationServiceOption,
}
