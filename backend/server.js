import express from "express";
import cors from "cors";
import db from "../backend/config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/transaksi", (req, res) => {
    db.query("SELECT * FROM transaksi ORDER BY tanggal DESC", (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

app.post("/api/transaksi", (req, res) => {
    const { tanggal, jumlah, jenis, keterangan } = req.body;
    db.query(
        "INSERT INTO transaksi (tanggal, jumlah, jenis, keterangan) VALUES (?, ?, ?, ?)",
        [tanggal, jumlah, jenis, keterangan],
        (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Transaksi berhasil ditambahkan" });
        }
    );
});

app.put("/api/transaksi/:id", (req, res) => {
    const { id } = req.params;
    const { tanggal, jumlah, jenis, keterangan } = req.body;

    const sql = `UPDATE transaksi 
               SET tanggal = ?, jumlah = ?, jenis = ?, keterangan = ?
               WHERE id_transaksi = ?`;

    db.query(sql, [tanggal, jumlah, jenis, keterangan, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ message: "Gagal update transaksi" });
        }
        res.send({ message: "Transaksi berhasil diupdate" });
    });
});


app.delete("/api/transaksi/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM transaksi WHERE id_transaksi=?", [id], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Transaksi dihapus" });
    });
});

app.listen(5000, "0.0.0.0", () => console.log("🚀 Server running on port 5000"));
