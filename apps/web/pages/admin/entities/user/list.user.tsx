import {
  List,
  DatagridConfigurable,
  NumberField,
  TextField,
  DateField,
  ChipField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListUser(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
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
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
