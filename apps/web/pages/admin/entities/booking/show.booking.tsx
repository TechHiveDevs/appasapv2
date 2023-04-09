import { 
  Show,
  NumberField,
  DateField,
  ReferenceField,
  ChipField,
  TextField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowBooking(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="date" />
        <NumberField source="totalAmount" />
        <ReferenceField source="customerId" reference="customer" />
        <ChipField source="bookingStatus" />
        <NumberField source="price" />
        <TextField source="currency" />
      </SimpleShowLayout>
    </Show>
  )
}
