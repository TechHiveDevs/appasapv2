import {
  List,
  DatagridConfigurable,
  NumberField,
  TextField,
  ReferenceField,
  DateField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListSupplierAdditionalCharge(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <TextField source="name" />
        <NumberField source="value" />
        <ReferenceField source="supplierId" reference="supplier" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <NumberField source="chargeValue" />
        <NumberField source="chargePercentValue" />
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
