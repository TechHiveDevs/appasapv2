import { 
  Show,
  NumberField,
  ReferenceField,
  ChipField,
  TextField,
  BooleanField,
  DateField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowSupplier(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  )
}
