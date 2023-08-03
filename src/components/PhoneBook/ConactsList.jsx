import css from './PhoneBook.module.css';
import { ContactsItem } from './ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';

const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

export const ContactsList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  
  return (
    <ul className={css.contacts__list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
