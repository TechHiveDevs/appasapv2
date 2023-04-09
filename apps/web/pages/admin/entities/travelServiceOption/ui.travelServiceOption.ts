import { ShowTravelServiceOption } from './show.travelServiceOption'
import { CreateTravelServiceOption } from './create.travelServiceOption'
import { EditTravelServiceOption } from './edit.travelServiceOption'
import { ListTravelServiceOption } from './list.travelServiceOption'

export const TravelServiceOption = { 
  name: 'travelServiceOption',
  label: 'TravelServiceOption',
  hide: false,
  create: CreateTravelServiceOption,
  edit: EditTravelServiceOption,
  list: ListTravelServiceOption,
  show: ShowTravelServiceOption,
}
