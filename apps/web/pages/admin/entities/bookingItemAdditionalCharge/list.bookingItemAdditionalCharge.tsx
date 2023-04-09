import {
  List,
  DatagridConfigurable,
  NumberField,
  ReferenceField,
  TextField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListBookingItemAdditionalCharge(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <ReferenceField source="bookingItemId" reference="bookingItem" />
        <TextField source="description" />
        <NumberField source="price" />
        <TextField source="currency" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
