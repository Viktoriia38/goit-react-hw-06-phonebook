import { createSlice } from '@reduxjs/toolkit';

const LOCAL_KEY = 'contacts';

const getLocalData = () => {
  const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  return localData;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: getLocalData() ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },

  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },

    deleteContact(state, action) {
      console.log(action.payload);

      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
