import { 
  Show,
  NumberField,
  TextField,
  ChipField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowServiceOffer(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <ChipField source="serviceType" />
        <ReferenceField source="supplierId" reference="supplier" />
      </SimpleShowLayout>
    </Show>
  )
}
