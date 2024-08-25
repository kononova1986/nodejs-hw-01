import updateContacts from './updateContacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';

const generateContacts = async (number) => {
  const contactList = await getAllContacts();
  const newListContacts = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  const data = [...contactList, ...newListContacts];
  await updateContacts(data);
};
generateContacts(5);
