import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowDiscountOption(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <NumberField source="value" />
        <ReferenceField source="supplierDiscountId" reference="supplierDiscount" />
        <ChipField source="serviceType" />
      </SimpleShowLayout>
    </Show>
  )
}
