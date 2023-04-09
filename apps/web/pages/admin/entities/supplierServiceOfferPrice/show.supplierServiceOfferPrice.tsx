import { 
  Show,
  NumberField,
  TextField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowSupplierServiceOfferPrice(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <NumberField source="price" />
        <TextField source="currency" />
        <ReferenceField source="serviceOfferId" reference="serviceOffer" />
      </SimpleShowLayout>
    </Show>
  )
}
