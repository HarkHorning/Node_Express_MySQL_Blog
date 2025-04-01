import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()
const envi = process.env

const pool = mysql.createPool({
    host: envi.host,
    user: envi.user,
    password: envi.password,
    database: envi.db
})

// const newPracDemo =
export async function getPosts() {
    try {
        const [result] = await pool.query("SELECT * FROM posts");
        return result
    } catch (err) {console.log("THIS IS YOUR ERROR:", err)}
} const posts = await getPosts()

export async function getThisPost(id) {
    try {
        const [result] = await pool.query("SELECT * FROM posts WHERE post_id = ?", [id]);
        return result
    } catch (err) {console.log("THIS IS YOUR ERROR:", err)}
} const post = await getThisPost(1)