import { 
  Show,
  NumberField,
  ReferenceField,
  TextField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowBookingItem(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <ReferenceField source="bookingId" reference="booking" />
        <TextField source="supplier" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <NumberField source="price" />
        <TextField source="currency" />
        <ChipField source="serviceType" />
      </SimpleShowLayout>
    </Show>
  )
}
