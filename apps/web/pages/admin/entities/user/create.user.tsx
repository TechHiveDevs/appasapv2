import { 
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  DateTimeInput,
  AutocompleteInput,
  required,
} from 'react-admin'

export function CreateUser(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <TextInput source="first_name" variant="outlined" validate={[required()]} />
        <TextInput source="last_name" variant="outlined" validate={[required()]} />
        <TextInput source="email" variant="outlined" validate={[required()]} />
        <TextInput source="phone" variant="outlined"/>
        <TextInput source="avatar" variant="outlined" validate={[required()]} />
        <DateTimeInput source="birthDate" variant="outlined" validate={[required()]} />
        <AutocompleteInput 
          variant="outlined" 
          source="role" 
          choices={[
            { id: 'Customer', name: 'Customer' },
            { id: 'Supplier', name: 'Supplier' },
          ]} 
          validate={[required()]} 
        />
        <TextInput source="language" variant="outlined" validate={[required()]} />
        <TextInput source="currency" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
