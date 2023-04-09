import { ShowClinicalServiceOption } from './show.clinicalServiceOption'
import { CreateClinicalServiceOption } from './create.clinicalServiceOption'
import { EditClinicalServiceOption } from './edit.clinicalServiceOption'
import { ListClinicalServiceOption } from './list.clinicalServiceOption'

export const ClinicalServiceOption = { 
  name: 'clinicalServiceOption',
  label: 'ClinicalServiceOption',
  hide: false,
  create: CreateClinicalServiceOption,
  edit: EditClinicalServiceOption,
  list: ListClinicalServiceOption,
  show: ShowClinicalServiceOption,
}
