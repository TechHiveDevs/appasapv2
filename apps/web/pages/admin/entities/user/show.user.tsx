import { 
  Show,
  NumberField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowUser(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <NumberField source="salary" />
      </SimpleShowLayout>
    </Show>
  )
}
