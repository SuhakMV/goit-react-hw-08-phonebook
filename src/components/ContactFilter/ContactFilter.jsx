import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
import css from './ContactFilter.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <form className={css.form}>
        <label className={css.label}>
          Find contacts by name:
          <input type="name" onChange={onFilterChange}></input>
        </label>
      </form>
    </div>
  );
};
