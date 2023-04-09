import { 
  Show,
  NumberField,
  ReferenceField,
  DateField,
  BooleanField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowClinicalOffer(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <DateField source="appointmentDate" />
        <BooleanField source="isPrivateRoomAvailable" />
        <ChipField source="dietary" />
        <BooleanField source="isChaperoneAvailable" />
        <BooleanField source="requirePreconsultation" />
        <BooleanField source="offerTelehealthConsultation" />
        <BooleanField source="isDisabled" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  )
}
