import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactForm } from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from "redux/contacts/operations";

const Contacts = () => {
    const dispatch = useDispatch();
    //const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return(
        <div>
            <ContactForm />
            <ContactFilter />
            <ContactList />
        </div>
    )
}

export default Contacts;