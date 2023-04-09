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

export function ListClinicalServiceOption(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <ReferenceField source="clinicalOfferId" reference="clinicalOffer" />
        <TextField source="clinicalType" />
        <TextField source="clinicalSubType" />
        <TextField source="snomedCode" />
        <TextField source="snomedDescription" />
        <TextField source="keywords" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
