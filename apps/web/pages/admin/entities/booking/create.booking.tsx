import { 
  Create,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  AutocompleteInput,
  ReferenceInput,
  TextInput,
  required,
} from 'react-admin'

export function CreateBooking(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="date" variant="outlined" validate={[required()]} />
        <NumberInput source="totalAmount" variant="outlined" validate={[required()]} />
        <ReferenceInput label="customer" source="customerId" reference="customer">
          <AutocompleteInput variant="outlined" optionText="id" />
        </ReferenceInput>
        <AutocompleteInput 
          variant="outlined" 
          source="bookingStatus" 
          choices={[
            { id: 'Unpaid', name: 'Unpaid' },
            { id: 'Upcoming', name: 'Upcoming' },
            { id: 'Complete', name: 'Complete' },
          ]} 
          validate={[required()]} 
        />
        <NumberInput source="price" variant="outlined" validate={[required()]} />
        <TextInput source="currency" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
