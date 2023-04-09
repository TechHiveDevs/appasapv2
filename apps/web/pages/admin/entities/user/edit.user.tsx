import { 
  Edit,
  SimpleForm,
  NumberInput,
  required,
} from 'react-admin'

export function EditUser(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <NumberInput source="salary" variant="outlined" />
      </SimpleForm>
    </Edit>
  )
}
