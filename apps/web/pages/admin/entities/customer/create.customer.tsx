import { 
  Create,
  SimpleForm,
  NumberInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function CreateCustomer(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <ReferenceInput label="user" source="userId" reference="user">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
