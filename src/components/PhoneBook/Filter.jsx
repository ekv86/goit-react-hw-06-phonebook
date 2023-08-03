import { useDispatch } from 'react-redux';
import css from './PhoneBook.module.css';
import PropTypes from 'prop-types';
import { filterContact } from 'components/redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onInputChange = (e) => {
    const value = e.target.value;
    const normalizedValue = value.toLowerCase();
    dispatch(filterContact(normalizedValue));
    
  }
  return(
  <label>
    Find contacts by name
    <input onChange={onInputChange} className={css.form__input} />
  </label>)
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange:PropTypes.func
};
