import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  items: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const {name, number, id} = action.payload;

        const isContactExists = state.items.some(contact => contact.name === name)

        if(isContactExists) {
          alert(`${name} is alredy in contacts`)
          return;
        }

        state.items.push({ name, number, id });
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    }
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistReduce = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export const getFilter = state => state.contacts.filter;
export const getContactItems = state => state.contacts.items;
