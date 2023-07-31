import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const conn = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
    })
    .promise()

export async function getMenus() {
    const [test] = await conn.query("SELECT * FROM menu")
    return test
}

export async function getSpecMenu(id) {
    const [test] = await conn.query(`SELECT * FROM menu WHERE id = ?`, [id])
    return test
}

export async function insertMenu(name, price, description, image, sale) {
    const [test] = await conn.query(
        `INSERT INTO menu (name, price, description, image, sale) VALUES (?, ?, ?, ?, ?)`,
        [name, price, description, image, sale]
    )
    return test
}

export async function updateMenu(name, price, description, image, sale, id) {
    const [test] = await conn.query(
        `UPDATE menu SET name = ?, price = ?, description = ?, image = ?, sale = ? WHERE id = ?`,
        [name, price, description, image, sale, id]
    )
    return test
}

export async function deleteMenu(id) {
    const [test] = await conn.query(`DELETE FROM menu WHERE id = ?`, [id])
    return test
}

export async function truncateMenu() {
    const [test] = await conn.query(`TRUNCATE menu`, )
    return test
}
