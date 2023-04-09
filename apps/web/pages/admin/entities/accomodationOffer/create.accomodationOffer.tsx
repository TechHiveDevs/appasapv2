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

export function CreateAccomodationOffer(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <ReferenceInput label="serviceOffer" source="serviceOfferId" reference="serviceOffer">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <NumberInput source="numberOfRooms" variant="outlined" validate={[required()]} />
        <DateTimeInput source="checkInDate" variant="outlined" validate={[required()]} />
        <DateTimeInput source="checkOutDate" variant="outlined" validate={[required()]} />
        <BooleanInput source="isDisabled" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
