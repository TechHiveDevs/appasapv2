import {
  List,
  DatagridConfigurable,
  NumberField,
  ReferenceField,
  DateField,
  BooleanField,
  ChipField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListClinicalOffer(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
        <DateField source="appointmentDate" />
        <BooleanField source="isPrivateRoomAvailable" />
        <ChipField source="dietary" />
        <BooleanField source="isChaperoneAvailable" />
        <BooleanField source="requirePreconsultation" />
        <BooleanField source="offerTelehealthConsultation" />
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
