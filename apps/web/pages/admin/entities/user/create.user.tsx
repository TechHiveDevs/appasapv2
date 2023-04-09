import { 
  Create,
  SimpleForm,
  NumberInput,
  required,
} from 'react-admin'

export function CreateUser(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}