import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getFilter } from 'redux/contactSlice';
import { getContactItems } from 'redux/contactSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactItems);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContacts = data => {
    dispatch(deleteContact(data));
  };

  return (
    <div className={css.wrapperContactList}>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={css.contactListItem}>
              {contact.name} : {contact.number}
              <button
                type="button"
                className={css.contactListItemBtn}
                onClick={() => handleDeleteContacts({ id: contact.id })}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
