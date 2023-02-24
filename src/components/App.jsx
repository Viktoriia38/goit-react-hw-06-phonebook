import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, addContact, filterContacts } from 'redux/contactsSlise';

export function App() {
  const contacts = useSelector(state => state.contactsData.contacts);
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();

  const sendContact = contact => {
    const repeatName = contacts.find(({ name }) => {
      return contact.name === name;
    });
    if (repeatName) {
      alert(`${contact.name} is already in your contacts!`);
      return;
    }
    dispatch(addContact({ id: nanoid(), ...contact }));
  };

  const onBtnDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  const handleFilter = e => {
    const { value } = e.target;
    dispatch(filterContacts(value));
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div action="" className={css.phonebook}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm onSubmit={sendContact} />
        <h1 className={css.contactTitle}>Contacts</h1>
        <Filter onChange={handleFilter} value={filter} />
        <ContactList contacts={filterContact} onBtnDelete={onBtnDelete} />
      </div>
    </div>
  );
}
