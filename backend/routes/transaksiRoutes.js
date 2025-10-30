import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM transaksi ORDER BY tanggal DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Gagal mengambil data" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { tanggal, jumlah, jenis, keterangan } = req.body;

        if (!tanggal || !jumlah || !jenis) {
            return res.status(400).json({ msg: "Data tidak lengkap" });
        }

        await db.query( "INSERT INTO transaksi (tanggal, jumlah, jenis, keterangan, created_at) VALUES (?, ?, ?, ?, NOW())",
            [tanggal, jumlah, jenis, keterangan]
        );

        res.json({ msg: "Transaksi berhasil ditambahkan" });
    } catch (err) {
        console.error("❌ Error saat tambah transaksi:", err);
        res.status(500).json({ msg: "Gagal menambah transaksi" });
    }
});

export default router;
