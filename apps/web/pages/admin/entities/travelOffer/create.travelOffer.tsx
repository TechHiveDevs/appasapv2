import { 
  Create,
  SimpleForm,
  NumberInput,
  AutocompleteInput,
  ReferenceInput,
  DateTimeInput,
  BooleanInput,
  required,
} from 'react-admin'

export function CreateTravelOffer(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <ReferenceInput label="serviceOffer" source="serviceOfferId" reference="serviceOffer">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <AutocompleteInput 
          variant="outlined" 
          source="dietary" 
          choices={[
            { id: 'Veagan', name: 'Veagan' },
            { id: 'Halal', name: 'Halal' },
            { id: 'GlutenFree', name: 'GlutenFree' },
            { id: 'Vegetarian', name: 'Vegetarian' },
            { id: 'Kosher', name: 'Kosher' },
          ]} 
          validate={[required()]} 
        />
        <DateTimeInput source="departureDate" variant="outlined" validate={[required()]} />
        <DateTimeInput source="returnDate" variant="outlined" validate={[required()]} />
        <BooleanInput source="isDisabled" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
