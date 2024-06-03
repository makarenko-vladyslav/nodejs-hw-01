import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify([]), "utf8");
        console.log("Контакти успішно видалені з файлу.");
    } catch (err) {
        console.error("Помилка видалення з файлу:", err);
    }
};

await removeAllContacts();

// npm run remove-all
