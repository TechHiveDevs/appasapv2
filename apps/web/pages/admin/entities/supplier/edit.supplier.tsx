import { 
  Edit,
  SimpleForm,
  NumberInput,
  AutocompleteInput,
  ReferenceInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  required,
} from 'react-admin'

export function EditSupplier(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <ReferenceInput label="user" source="userId" reference="user">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <ReferenceInput label="supplier" source="parentId" reference="supplier">
          <AutocompleteInput variant="outlined" optionText="id" />
        </ReferenceInput>
        <AutocompleteInput 
          variant="outlined" 
          source="supplierType" 
          choices={[
            { id: 'EviCareSubSupplier', name: 'EviCareSubSupplier' },
            { id: 'InternalSubSupplier', name: 'InternalSubSupplier' },
            { id: 'ParentSupplier', name: 'ParentSupplier' },
          ]} 
          validate={[required()]} 
        />
        <AutocompleteInput 
          variant="outlined" 
          source="serviceTypes" 
          choices={[
            { id: 'Clinical', name: 'Clinical' },
            { id: 'Travel', name: 'Travel' },
            { id: 'Accommodation', name: 'Accommodation' },
          ]} 
          validate={[required()]} 
        />
        <AutocompleteInput 
          variant="outlined" 
          source="authServices" 
          choices={[
            { id: 'Clinical', name: 'Clinical' },
            { id: 'Travel', name: 'Travel' },
            { id: 'Accommodation', name: 'Accommodation' },
          ]} 
          validate={[required()]} 
        />
        <TextInput source="companyRegistrationCode" variant="outlined" validate={[required()]} />
        <TextInput source="companyRegisterationCountry" variant="outlined" validate={[required()]} />
        <BooleanInput source="isDisabled" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Edit>
  )
}
