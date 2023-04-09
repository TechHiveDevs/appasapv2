import {
  List,
  DatagridConfigurable,
  NumberField,
  ReferenceField,
  DateField,
  BooleanField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListAccomodationOffer(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <NumberField source="numberOfRooms" />
        <DateField source="checkInDate" />
        <DateField source="checkOutDate" />
        <BooleanField source="isDisabled" />
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
