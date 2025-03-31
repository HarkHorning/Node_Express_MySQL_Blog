import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()
const envi = process.env

const pool = mysql.createPool({
    host: envi.host,
    user: envi.user,
    password: envi.password,
    database: envi.db
}).promise()

// const newPracDemo =
export async function getPosts() {
    const [result] = await pool.query("SELECT * FROM posts");
    return result
} const posts = await getPosts()

export async function getThisPost(id) {
    const [result] = await pool.query("SELECT * FROM posts WHERE post_id = ?", [id]);
    return result
} const post = await getThisPost(1)