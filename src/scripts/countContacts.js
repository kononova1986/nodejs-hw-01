import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
  const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
  return contacts.length;
};

console.log(await countContacts());
