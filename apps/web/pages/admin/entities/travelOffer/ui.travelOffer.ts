import { ShowTravelOffer } from './show.travelOffer'
import { CreateTravelOffer } from './create.travelOffer'
import { EditTravelOffer } from './edit.travelOffer'
import { ListTravelOffer } from './list.travelOffer'

export const TravelOffer = { 
  name: 'travelOffer',
  label: 'TravelOffer',
  hide: false,
  create: CreateTravelOffer,
  edit: EditTravelOffer,
  list: ListTravelOffer,
  show: ShowTravelOffer,
}
