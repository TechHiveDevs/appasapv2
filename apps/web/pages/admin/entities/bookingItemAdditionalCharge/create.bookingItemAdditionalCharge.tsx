import { 
  Create,
  SimpleForm,
  NumberInput,
  AutocompleteInput,
  ReferenceInput,
  TextInput,
  required,
} from 'react-admin'

export function CreateBookingItemAdditionalCharge(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <ReferenceInput label="bookingItem" source="bookingItemId" reference="bookingItem">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="description" variant="outlined"/>
        <NumberInput source="price" variant="outlined" validate={[required()]} />
        <TextInput source="currency" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
