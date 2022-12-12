import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  //const dispatch = useDispatch();
  const { items, filter } = useSelector(state => state.contacts);

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
