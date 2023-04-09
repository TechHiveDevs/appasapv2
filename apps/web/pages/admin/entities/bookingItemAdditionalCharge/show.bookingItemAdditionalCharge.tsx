import { 
  Show,
  NumberField,
  ReferenceField,
  TextField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowBookingItemAdditionalCharge(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <ReferenceField source="bookingItemId" reference="bookingItem" />
        <TextField source="description" />
        <NumberField source="price" />
        <TextField source="currency" />
      </SimpleShowLayout>
    </Show>
  )
}
