import { ShowSupplierExclusion } from './show.supplierExclusion'
import { CreateSupplierExclusion } from './create.supplierExclusion'
import { EditSupplierExclusion } from './edit.supplierExclusion'
import { ListSupplierExclusion } from './list.supplierExclusion'

export const SupplierExclusion = { 
  name: 'supplierExclusion',
  label: 'SupplierExclusion',
  hide: false,
  create: CreateSupplierExclusion,
  edit: EditSupplierExclusion,
  list: ListSupplierExclusion,
  show: ShowSupplierExclusion,
}
