import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowClinicalServiceOption(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <ReferenceField source="clinicalOfferId" reference="clinicalOffer" />
        <TextField source="clinicalType" />
        <TextField source="clinicalSubType" />
        <TextField source="snomedCode" />
        <TextField source="snomedDescription" />
        <TextField source="keywords" />
      </SimpleShowLayout>
    </Show>
  )
}
