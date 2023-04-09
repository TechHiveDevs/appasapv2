import { ShowSupplierAdditionalCharge } from './show.supplierAdditionalCharge'
import { CreateSupplierAdditionalCharge } from './create.supplierAdditionalCharge'
import { EditSupplierAdditionalCharge } from './edit.supplierAdditionalCharge'
import { ListSupplierAdditionalCharge } from './list.supplierAdditionalCharge'

export const SupplierAdditionalCharge = { 
  name: 'supplierAdditionalCharge',
  label: 'SupplierAdditionalCharge',
  hide: false,
  create: CreateSupplierAdditionalCharge,
  edit: EditSupplierAdditionalCharge,
  list: ListSupplierAdditionalCharge,
  show: ShowSupplierAdditionalCharge,
}
