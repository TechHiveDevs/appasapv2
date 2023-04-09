import { 
  Show,
  NumberField,
  TextField,
  DateField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowUser(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="email" />
        <TextField source="phone" />
        <TextField source="avatar" />
        <DateField source="birthDate" />
        <ChipField source="role" />
        <TextField source="language" />
        <TextField source="currency" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  )
}
