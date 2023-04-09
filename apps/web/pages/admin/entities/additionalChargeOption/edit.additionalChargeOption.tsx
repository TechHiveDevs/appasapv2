import { 
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function EditAdditionalChargeOption(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
        <NumberInput source="value" variant="outlined" validate={[required()]} />
        <ReferenceInput label="supplierAdditionalCharge" source="supplieradditionalChargeId" reference="supplierAdditionalCharge">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <AutocompleteInput 
          variant="outlined" 
          source="serviceType" 
          choices={[
            { id: 'Clinical', name: 'Clinical' },
            { id: 'Travel', name: 'Travel' },
            { id: 'Accommodation', name: 'Accommodation' },
          ]} 
          validate={[required()]} 
        />
      </SimpleForm>
    </Edit>
  )
}
