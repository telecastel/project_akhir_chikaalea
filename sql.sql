CREATE DATABASE keuangan_db;

USE keuangan_db;

CREATE TABLE transaksi (
  id_transaksi INT AUTO_INCREMENT PRIMARY KEY,
  tanggal DATE NOT NULL,
  jumlah DECIMAL(12,2) NOT NULL,
  jenis ENUM('pemasukan','pengeluaran') NOT NULL,
  keterangan VARCHAR(255)
);
 
 select * from transaksi;