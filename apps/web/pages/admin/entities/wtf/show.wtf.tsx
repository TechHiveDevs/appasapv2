import { 
  Show,
  NumberField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowWtf(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
      </SimpleShowLayout>
    </Show>
  )
}
