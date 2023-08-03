import { Form } from './Form';
import { ContactsList } from './ConactsList';
import { Filter } from './Filter';

export function PhoneBook() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form  />
      <h2>Contacts</h2>
      <Filter/>
      <ContactsList/>
    </div>
  );
}
