import {
  List,
  DatagridConfigurable,
  NumberField,
  TextField,
  ReferenceField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListAccomodationServiceOption(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <ReferenceField source="accomodationOfferId" reference="accomodationOffer" />
        <TextField source="accomodationType" />
        <TextField source="accomodationClass" />
        <TextField source="accomodationCapacity" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
