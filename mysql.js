import mysql from "mysql2";
import dotenv from 'dotenv'
dotenv.config()
const { host, user, password, db } = process.env;

const pool = mysql.createPool({
    host: host,
    // host: "localhost",
    user: user,
    password: password,
    database: db,
    connectionLimit: 10
})

// Get rid of this later
// async function closePool(pool) {
//     try {
//         await pool.end();
//         console.log('MySQL pool has been closed.');
//     } catch (error) {
//         console.error('Error closing MySQL pool:', error);
//     }
// }

export async function getPosts() {
    try {
        const [result] = await pool.promise().query("SELECT * FROM posts");
        return result
    } catch (err) {console.error("YOUR ERROR: getPosts()", err)}
} const posts = await getPosts()

export async function getThisPost(id) {
    try {
        const [result] = await pool.promise().query(
            "SELECT * FROM posts WHERE post_id = ?", [id]
        );
        return result
    } catch (err) {console.error("THIS IS YOUR ERROR: getThisPost()", err)}
} const post = await getThisPost(1)