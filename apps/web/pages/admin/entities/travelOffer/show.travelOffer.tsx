import { 
  Show,
  NumberField,
  ReferenceField,
  ChipField,
  DateField,
  BooleanField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowTravelOffer(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <ChipField source="dietary" />
        <DateField source="departureDate" />
        <DateField source="returnDate" />
        <BooleanField source="isDisabled" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  )
}
