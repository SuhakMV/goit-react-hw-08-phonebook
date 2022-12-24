import { Modal } from 'components/Modal/Modal';
import { useDispatch} from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { setShowModal } from 'redux/contacts/slice';
import css from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const showModal = () => dispatch(setShowModal(true));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}: {number}</p>
      <button type="button" className={css.button} onClick={showModal}>
        Edit
      </button>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
