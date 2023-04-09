import { 
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function CreateClinicalServiceOption(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
        <TextInput source="description" variant="outlined"/>
        <ReferenceInput label="clinicalOffer" source="clinicalOfferId" reference="clinicalOffer">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="clinicalType" variant="outlined" validate={[required()]} />
        <TextInput source="clinicalSubType" variant="outlined" validate={[required()]} />
        <TextInput source="snomedCode" variant="outlined" validate={[required()]} />
        <TextInput source="snomedDescription" variant="outlined" validate={[required()]} />
        <TextInput source="keywords" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
