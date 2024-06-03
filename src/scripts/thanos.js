import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const thanos = async () => {
    let contacts;

    try {
        const data = await fs.readFile(PATH_DB, "utf8");
        contacts = JSON.parse(data);
        console.log("До нападу Таноса", contacts);
    } catch (err) {
        console.error("Помилка читання файлу:", err);
    }

    contacts = contacts.filter(() => Math.random() > 0.5);

    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts), "utf8");
        console.log("Після нападу Таноса", contacts);
    } catch (err) {
        console.error("Помилка видалення з файлу:", err);
    }
};

await thanos();

// npm run thanos
