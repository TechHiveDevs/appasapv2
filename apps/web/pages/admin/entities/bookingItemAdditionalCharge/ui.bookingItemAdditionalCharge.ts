import { ShowBookingItemAdditionalCharge } from './show.bookingItemAdditionalCharge'
import { CreateBookingItemAdditionalCharge } from './create.bookingItemAdditionalCharge'
import { EditBookingItemAdditionalCharge } from './edit.bookingItemAdditionalCharge'
import { ListBookingItemAdditionalCharge } from './list.bookingItemAdditionalCharge'

export const BookingItemAdditionalCharge = { 
  name: 'bookingItemAdditionalCharge',
  label: 'BookingItemAdditionalCharge',
  hide: false,
  create: CreateBookingItemAdditionalCharge,
  edit: EditBookingItemAdditionalCharge,
  list: ListBookingItemAdditionalCharge,
  show: ShowBookingItemAdditionalCharge,
}
