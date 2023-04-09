import { 
  Edit,
  SimpleForm,
  NumberInput,
  required,
} from 'react-admin'

export function EditWtf(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Edit>
  )
}
