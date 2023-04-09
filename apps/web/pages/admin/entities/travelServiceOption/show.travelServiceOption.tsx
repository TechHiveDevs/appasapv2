import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowTravelServiceOption(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <ReferenceField source="travelOfferId" reference="travelOffer" />
        <TextField source="travelMethod" />
        <TextField source="travelClass" />
      </SimpleShowLayout>
    </Show>
  )
}
