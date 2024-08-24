import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';

const getAllContacts = async () => {
  const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB);
  const allContact = JSON.parse(await fs.readFile(PATH_DB, encoding));
  return allContact;
};
export default getAllContacts;
console.log(await getAllContacts());
