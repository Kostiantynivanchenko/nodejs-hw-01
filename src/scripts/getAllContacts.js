import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return data;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await getAllContacts());
