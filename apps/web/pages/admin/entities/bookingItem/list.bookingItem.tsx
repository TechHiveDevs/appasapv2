import {
  List,
  DatagridConfigurable,
  NumberField,
  ReferenceField,
  TextField,
  ChipField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListBookingItem(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <ReferenceField source="bookingId" reference="booking" />
        <TextField source="supplier" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <NumberField source="price" />
        <TextField source="currency" />
        <ChipField source="serviceType" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
