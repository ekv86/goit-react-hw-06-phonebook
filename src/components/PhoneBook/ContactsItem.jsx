import { useDispatch } from 'react-redux';
import css from './PhoneBook.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'components/redux/contactsSlice';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <li className={css.contacts__item}>
      <span className={css.contacts__text}>{name}:</span>
      <span className={css.contacts__text}>{number}</span>
      <button className={css.form__btn} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
