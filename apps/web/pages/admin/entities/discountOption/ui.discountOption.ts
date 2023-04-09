import { ShowDiscountOption } from './show.discountOption'
import { CreateDiscountOption } from './create.discountOption'
import { EditDiscountOption } from './edit.discountOption'
import { ListDiscountOption } from './list.discountOption'

export const DiscountOption = { 
  name: 'discountOption',
  label: 'DiscountOption',
  hide: false,
  create: CreateDiscountOption,
  edit: EditDiscountOption,
  list: ListDiscountOption,
  show: ShowDiscountOption,
}
