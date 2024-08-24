import updateContacts from './updateContacts.js';
import getAllContacts from './getAllContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const contactList = await getAllContacts();
  const oneContact = createFakeContact();
  contactList.push(oneContact);
  await updateContacts(contactList);
};

addOneContact();
