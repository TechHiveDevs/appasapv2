import { 
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function EditAccomodationServiceOption(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
        <TextInput source="description" variant="outlined"/>
        <ReferenceInput label="accomodationOffer" source="accomodationOfferId" reference="accomodationOffer">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="accomodationType" variant="outlined" validate={[required()]} />
        <TextInput source="accomodationClass" variant="outlined" validate={[required()]} />
        <TextInput source="accomodationCapacity" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Edit>
  )
}
