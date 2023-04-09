import { 
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function EditTravelServiceOption(_props: any) {
  return (
    <Edit>
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
    </Edit>
  )
}
