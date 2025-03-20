import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

console.log("🔍 Connecting to MySQL...");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
});

pool.getConnection()
  .then(() => console.info("✅ MySQL connection successful!"))
  .catch((err) => console.error("❌ MySQL connection error:", err));

export default pool;
