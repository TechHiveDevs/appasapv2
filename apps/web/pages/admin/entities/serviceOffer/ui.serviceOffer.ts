import { ShowServiceOffer } from './show.serviceOffer'
import { CreateServiceOffer } from './create.serviceOffer'
import { EditServiceOffer } from './edit.serviceOffer'
import { ListServiceOffer } from './list.serviceOffer'

export const ServiceOffer = { 
  name: 'serviceOffer',
  label: 'ServiceOffer',
  hide: false,
  create: CreateServiceOffer,
  edit: EditServiceOffer,
  list: ListServiceOffer,
  show: ShowServiceOffer,
}
