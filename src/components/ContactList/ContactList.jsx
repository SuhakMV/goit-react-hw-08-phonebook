import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  //const dispatch = useDispatch();
  //const { items, filter } = useSelector(state => state.contacts);
  const items = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  let foundContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <ul>
        {items.length > 0 ? (
          foundContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))
        ) : (
          <p>Contact list is empty</p>
        )}
      </ul>
    </div>
  );
};
