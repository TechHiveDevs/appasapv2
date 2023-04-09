import { 
  Edit,
  SimpleForm,
  NumberInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function EditCustomer(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <ReferenceInput label="user" source="userId" reference="user">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
