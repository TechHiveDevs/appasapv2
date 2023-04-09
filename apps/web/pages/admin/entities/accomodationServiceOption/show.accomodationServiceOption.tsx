import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowAccomodationServiceOption(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <ReferenceField source="accomodationOfferId" reference="accomodationOffer" />
        <TextField source="accomodationType" />
        <TextField source="accomodationClass" />
        <TextField source="accomodationCapacity" />
      </SimpleShowLayout>
    </Show>
  )
}
