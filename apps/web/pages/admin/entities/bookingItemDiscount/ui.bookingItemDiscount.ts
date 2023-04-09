import { ShowBookingItemDiscount } from './show.bookingItemDiscount'
import { CreateBookingItemDiscount } from './create.bookingItemDiscount'
import { EditBookingItemDiscount } from './edit.bookingItemDiscount'
import { ListBookingItemDiscount } from './list.bookingItemDiscount'

export const BookingItemDiscount = { 
  name: 'bookingItemDiscount',
  label: 'BookingItemDiscount',
  hide: false,
  create: CreateBookingItemDiscount,
  edit: EditBookingItemDiscount,
  list: ListBookingItemDiscount,
  show: ShowBookingItemDiscount,
}
