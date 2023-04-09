import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  DateField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowSupplierExclusion(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <ReferenceField source="supplierId" reference="supplier" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  )
}
