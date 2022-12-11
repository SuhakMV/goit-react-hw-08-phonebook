import { deleteContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, filter } = useSelector(state => state.contacts);

  let foundContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul>
        {items.length > 0 ? (
          foundContacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="submit" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>Contact list is empty</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
