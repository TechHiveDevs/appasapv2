import { 
  Create,
  SimpleForm,
  NumberInput,
  AutocompleteInput,
  ReferenceInput,
  TextInput,
  required,
} from 'react-admin'

export function CreateBookingItem(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <ReferenceInput label="booking" source="bookingId" reference="booking">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="supplier" variant="outlined"/>
        <ReferenceInput label="serviceOffer" source="serviceOfferId" reference="serviceOffer">
          <AutocompleteInput variant="outlined" optionText="id" />
        </ReferenceInput>
        <NumberInput source="price" variant="outlined" validate={[required()]} />
        <TextInput source="currency" variant="outlined" validate={[required()]} />
        <AutocompleteInput 
          variant="outlined" 
          source="serviceType" 
          choices={[
            { id: 'Clinical', name: 'Clinical' },
            { id: 'Travel', name: 'Travel' },
            { id: 'Accommodation', name: 'Accommodation' },
          ]} 
          validate={[required()]} 
        />
      </SimpleForm>
    </Create>
  )
}
