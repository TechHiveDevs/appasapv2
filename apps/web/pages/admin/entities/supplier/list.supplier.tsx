import {
  List,
  DatagridConfigurable,
  NumberField,
  ReferenceField,
  ChipField,
  TextField,
  BooleanField,
  DateField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListSupplier(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <ReferenceField source="userId" reference="user" />
        <ReferenceField source="parentId" reference="supplier" />
        <ChipField source="supplierType" />
        <ChipField source="serviceTypes" />
        <ChipField source="authServices" />
        <TextField source="companyRegistrationCode" />
        <TextField source="companyRegisterationCountry" />
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
