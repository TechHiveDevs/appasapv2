import { 
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function CreateTravelServiceOption(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
        <TextInput source="description" variant="outlined"/>
        <ReferenceInput label="travelOffer" source="travelOfferId" reference="travelOffer">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="travelMethod" variant="outlined" validate={[required()]} />
        <TextInput source="travelClass" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
