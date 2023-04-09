import { ShowAccomodationOffer } from './show.accomodationOffer'
import { CreateAccomodationOffer } from './create.accomodationOffer'
import { EditAccomodationOffer } from './edit.accomodationOffer'
import { ListAccomodationOffer } from './list.accomodationOffer'

export const AccomodationOffer = { 
  name: 'accomodationOffer',
  label: 'AccomodationOffer',
  hide: false,
  create: CreateAccomodationOffer,
  edit: EditAccomodationOffer,
  list: ListAccomodationOffer,
  show: ShowAccomodationOffer,
}
