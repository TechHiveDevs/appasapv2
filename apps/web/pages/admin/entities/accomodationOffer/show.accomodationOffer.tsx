import { 
  Show,
  NumberField,
  ReferenceField,
  DateField,
  BooleanField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowAccomodationOffer(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <NumberField source="numberOfRooms" />
        <DateField source="checkInDate" />
        <DateField source="checkOutDate" />
        <BooleanField source="isDisabled" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  )
}
