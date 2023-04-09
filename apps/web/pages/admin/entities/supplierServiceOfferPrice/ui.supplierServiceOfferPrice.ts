import { ShowSupplierServiceOfferPrice } from './show.supplierServiceOfferPrice'
import { CreateSupplierServiceOfferPrice } from './create.supplierServiceOfferPrice'
import { EditSupplierServiceOfferPrice } from './edit.supplierServiceOfferPrice'
import { ListSupplierServiceOfferPrice } from './list.supplierServiceOfferPrice'

export const SupplierServiceOfferPrice = { 
  name: 'supplierServiceOfferPrice',
  label: 'SupplierServiceOfferPrice',
  hide: false,
  create: CreateSupplierServiceOfferPrice,
  edit: EditSupplierServiceOfferPrice,
  list: ListSupplierServiceOfferPrice,
  show: ShowSupplierServiceOfferPrice,
}
