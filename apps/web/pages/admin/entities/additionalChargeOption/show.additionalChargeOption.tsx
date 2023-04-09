import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowAdditionalChargeOption(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <NumberField source="value" />
        <ReferenceField source="supplieradditionalChargeId" reference="supplierAdditionalCharge" />
        <ChipField source="serviceType" />
      </SimpleShowLayout>
    </Show>
  )
}
