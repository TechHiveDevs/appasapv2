import { ShowSupplierDiscount } from './show.supplierDiscount'
import { CreateSupplierDiscount } from './create.supplierDiscount'
import { EditSupplierDiscount } from './edit.supplierDiscount'
import { ListSupplierDiscount } from './list.supplierDiscount'

export const SupplierDiscount = { 
  name: 'supplierDiscount',
  label: 'SupplierDiscount',
  hide: false,
  create: CreateSupplierDiscount,
  edit: EditSupplierDiscount,
  list: ListSupplierDiscount,
  show: ShowSupplierDiscount,
}
