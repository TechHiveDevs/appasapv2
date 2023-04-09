import { ShowClinicalOffer } from './show.clinicalOffer'
import { CreateClinicalOffer } from './create.clinicalOffer'
import { EditClinicalOffer } from './edit.clinicalOffer'
import { ListClinicalOffer } from './list.clinicalOffer'

export const ClinicalOffer = { 
  name: 'clinicalOffer',
  label: 'ClinicalOffer',
  hide: false,
  create: CreateClinicalOffer,
  edit: EditClinicalOffer,
  list: ListClinicalOffer,
  show: ShowClinicalOffer,
}
