import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';

import css from './ContactForm.module.css';

export const ContactForm = () => {

  const items = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    number: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    let savedName = false;

    items.forEach(element => {
      if (element.name.toLowerCase() === state.name.toLowerCase()) {
        alert(`${state.name} is already in contacts`);
        savedName = true;
        setState({
          name: '',
          number: '',
        });
      }
    });
    if (savedName) {
      return;
    }

    dispatch(addContact(state));
    setState({
      name: '',
      number: '',
    });
  };

  /* const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  }; */

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Name
        <input
        value={state.name}
        onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
        value={state.number}
        onChange={handleChange}
          type="text"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
