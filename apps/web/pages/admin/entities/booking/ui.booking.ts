import { ShowBooking } from './show.booking'
import { CreateBooking } from './create.booking'
import { EditBooking } from './edit.booking'
import { ListBooking } from './list.booking'

export const Booking = { 
  name: 'booking',
  label: 'Booking',
  hide: false,
  create: CreateBooking,
  edit: EditBooking,
  list: ListBooking,
  show: ShowBooking,
}
