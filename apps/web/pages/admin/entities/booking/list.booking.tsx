import {
  List,
  DatagridConfigurable,
  NumberField,
  DateField,
  ReferenceField,
  ChipField,
  TextField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListBooking(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <DateField source="date" />
        <NumberField source="totalAmount" />
        <ReferenceField source="customerId" reference="customer" />
        <ChipField source="bookingStatus" />
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
