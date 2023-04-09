import { ShowAdditionalChargeOption } from './show.additionalChargeOption'
import { CreateAdditionalChargeOption } from './create.additionalChargeOption'
import { EditAdditionalChargeOption } from './edit.additionalChargeOption'
import { ListAdditionalChargeOption } from './list.additionalChargeOption'

export const AdditionalChargeOption = { 
  name: 'additionalChargeOption',
  label: 'AdditionalChargeOption',
  hide: false,
  create: CreateAdditionalChargeOption,
  edit: EditAdditionalChargeOption,
  list: ListAdditionalChargeOption,
  show: ShowAdditionalChargeOption,
}
