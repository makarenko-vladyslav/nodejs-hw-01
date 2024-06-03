import { PATH_DB } from "../constants/contacts.js";
import { faker } from "@faker-js/faker";
import fs from "fs/promises";

export const addOneContact = async () => {
    let contacts = [];

    // Читання існуючого файлу
    try {
        const data = await fs.readFile(PATH_DB, "utf8");
        contacts = JSON.parse(data);
    } catch (err) {
        console.error("Помилка читання файлу:", err);
    }

    // Додавання нового контакту
    contacts.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        phone: faker.string.octal({ length: 7, prefix: "380" }),
        email: faker.internet.email().toLowerCase(),
        job: faker.person.jobTitle(),
    });

    // Запис оновленого масиву назад у файл
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), "utf8");
        console.log("Контакти успішно записані у файл.");
    } catch (err) {
        console.error("Помилка запису у файл:", err);
    }
};

await addOneContact();

//  npm run add-one
