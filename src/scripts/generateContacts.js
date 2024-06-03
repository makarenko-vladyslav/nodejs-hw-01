import { PATH_DB } from "../constants/contacts.js";
import { faker } from "@faker-js/faker";
import fs from "fs/promises";

const generateContacts = async (number) => {
    let contacts = [];

    // Читання існуючого файлу
    try {
        const data = await fs.readFile(PATH_DB, "utf8");
        contacts = JSON.parse(data);
    } catch (err) {
        console.error("Помилка читання файлу:", err);
    }

    // Додавання нових контактів
    for (let i = 0; i < number; i++) {
        const contact = {
            id: faker.string.uuid(),
            name: faker.person.fullName(),
            phone: faker.string.octal({ length: 7, prefix: "380" }),
            email: faker.internet.email().toLowerCase(),
            job: faker.person.jobTitle(),
        };
        contacts.push(contact);
    }

    // Запис оновленого масиву назад у файл
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), "utf8");
        console.log("Дані успішно записані у файл.");
    } catch (err) {
        console.error("Помилка запису у файл:", err);
    }
};

await generateContacts(5);
