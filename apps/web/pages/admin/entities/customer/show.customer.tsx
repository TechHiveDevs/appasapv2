import { 
  Show,
  NumberField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowCustomer(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <ReferenceField source="userId" reference="user" />
      </SimpleShowLayout>
    </Show>
  )
}
