import mysql from "mysql2";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Chikaalea0102$",
    database: "keuangan_db",
});

db.connect((err) => {
    if (err) throw err;
    console.log("✅ Database connected!");
});

export default db;



