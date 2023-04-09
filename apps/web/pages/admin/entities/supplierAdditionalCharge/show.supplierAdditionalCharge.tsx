import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  DateField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowSupplierAdditionalCharge(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <NumberField source="value" />
        <ReferenceField source="supplierId" reference="supplier" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <NumberField source="chargeValue" />
        <NumberField source="chargePercentValue" />
        <TextField source="currency" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  )
}
