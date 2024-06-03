import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";
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
    for (let i = 0; i < number; i++) contacts.push(createFakeContact());

    // Запис оновленого масиву назад у файл
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), "utf8");
        console.log("Контакти успішно записані у файл.");
    } catch (err) {
        console.error("Помилка запису у файл:", err);
    }
};

await generateContacts(5);

// npm run generate
