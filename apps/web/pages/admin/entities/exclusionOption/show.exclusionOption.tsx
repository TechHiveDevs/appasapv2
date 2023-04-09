import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowExclusionOption(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="name" />
        <ReferenceField source="supplierExclusionId" reference="supplierExclusion" />
        <ChipField source="serviceType" />
      </SimpleShowLayout>
    </Show>
  )
}
