import { ShowCustomer } from './show.customer'
import { CreateCustomer } from './create.customer'
import { EditCustomer } from './edit.customer'
import { ListCustomer } from './list.customer'

export const Customer = { 
  name: 'customer',
  label: 'Customer',
  hide: false,
  create: CreateCustomer,
  edit: EditCustomer,
  list: ListCustomer,
  show: ShowCustomer,
}
