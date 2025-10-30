import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "./components/Navbar";
import Ringkasan from "./components/Ringkasan";
import FormTransaksi from "./components/FormTransaksi";
import TabelTransaksi from "./components/TabelTransaksi";

export default function App() {
  const [transaksi, setTransaksi] = useState([]);
  const [form, setForm] = useState({
    tanggal: "",
    jumlah: "",
    jenis: "pemasukan",
    keterangan: "",
  });
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("semua");

  //Ambil Data 
  const ambilData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/transaksi");
      setTransaksi(res.data);
    } catch (err) {
      console.error("Gagal ambil data:", err);
    }
  };

  useEffect(() => {
    ambilData();
  }, []);

  //Simpan / Update 
  const simpanTransaksi = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/transaksi/${editId}`, form);
        Swal.fire("Berhasil", "Transaksi diperbarui", "success");
      } else {
        await axios.post("http://localhost:5000/api/transaksi", form);
        Swal.fire("Berhasil", "Transaksi ditambahkan", "success");
      }
      setForm({ tanggal: "", jumlah: "", jenis: "pemasukan", keterangan: "" });
      setEditId(null);
      ambilData();
    } catch {
      Swal.fire("Gagal", "Operasi gagal", "error");
    }
  };

  //Hapus 
  const hapusTransaksi = async (id) => {
    if (window.confirm("Yakin ingin menghapus transaksi ini?")) {
      await axios.delete(`http://localhost:5000/api/transaksi/${id}`);
      Swal.fire("Dihapus", "Transaksi dihapus", "success");
      ambilData();
    }
  };

  //Edit
  const mulaiEdit = (t) => {
    const tanggalFormat = new Date(t.tanggal).toISOString().split("T")[0];

    setForm({
      tanggal: tanggalFormat,
      jumlah: t.jumlah,
      jenis: t.jenis,
      keterangan: t.keterangan,
    });
    setEditId(t.id_transaksi);
  };


  //Ringkasan
  const totalPemasukan = transaksi
    .filter((t) => t.jenis === "pemasukan")
    .reduce((acc, cur) => acc + parseFloat(cur.jumlah), 0);
  const totalPengeluaran = transaksi
    .filter((t) => t.jenis === "pengeluaran")
    .reduce((acc, cur) => acc + parseFloat(cur.jumlah), 0);
  const saldo = totalPemasukan - totalPengeluaran;

  const transaksiTampil =
    filter === "semua"
      ? transaksi
      : transaksi.filter((t) => t.jenis === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <Ringkasan
          totalPemasukan={totalPemasukan}
          totalPengeluaran={totalPengeluaran}
          saldo={saldo}
        />

        <FormTransaksi
          form={form}
          setForm={setForm}
          editId={editId}
          simpanTransaksi={simpanTransaksi}
        />

        <TabelTransaksi
          transaksiTampil={transaksiTampil}
          filter={filter}
          setFilter={setFilter}
          mulaiEdit={mulaiEdit}
          hapusTransaksi={hapusTransaksi}
        />
      </div>
    </div>
  );
}
