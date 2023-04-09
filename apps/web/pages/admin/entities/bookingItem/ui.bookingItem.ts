import { ShowBookingItem } from './show.bookingItem'
import { CreateBookingItem } from './create.bookingItem'
import { EditBookingItem } from './edit.bookingItem'
import { ListBookingItem } from './list.bookingItem'

export const BookingItem = { 
  name: 'bookingItem',
  label: 'BookingItem',
  hide: false,
  create: CreateBookingItem,
  edit: EditBookingItem,
  list: ListBookingItem,
  show: ShowBookingItem,
}
