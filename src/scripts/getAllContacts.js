import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Помилка читання файлу:", err);
    }
};

console.log(await getAllContacts());
