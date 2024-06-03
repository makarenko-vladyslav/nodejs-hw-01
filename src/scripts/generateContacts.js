import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  const contacts = [];

  for (let i = 0; i < number; i++) {
    contacts.push({
      name: faker.person.fullName(),
      phone: faker.string.octal({ length: 7, prefix: '479-' }),
      email: faker.internet.email().toLowerCase(),
      job: faker.person.jobTitle(),
    });
  }
  console.log(contacts);
};

await generateContacts(5);
