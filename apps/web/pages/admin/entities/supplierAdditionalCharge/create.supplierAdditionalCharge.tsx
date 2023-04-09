import { 
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  DateTimeInput,
  required,
} from 'react-admin'

export function CreateSupplierAdditionalCharge(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
        <NumberInput source="value" variant="outlined" validate={[required()]} />
        <ReferenceInput label="supplier" source="supplierId" reference="supplier">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <ReferenceInput label="serviceOffer" source="serviceOfferId" reference="serviceOffer">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <NumberInput source="chargeValue" variant="outlined" validate={[required()]} />
        <NumberInput source="chargePercentValue" variant="outlined" validate={[required()]} />
        <TextInput source="currency" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
