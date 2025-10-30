export default function FormTransaksi({ form, setForm, editId, simpanTransaksi }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700 flex items-center gap-2">
        {editId ? "✏️ Edit Transaksi" : "➕ Tambah Transaksi"}
      </h2>

      <form
        onSubmit={simpanTransaksi}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input
          type="date"
          className="border border-gray-300 rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
          value={form.tanggal}
          onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
          required
        />

        <input
          type="number"
          min="0"
          className="border border-gray-300 rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
          placeholder="Jumlah"
          value={form.jumlah}
          onChange={(e) => {
            const val = e.target.value;
            if (val >= 0 || val === "") {
              setForm({ ...form, jumlah: val });
            }
          }}
          required
        />

        <select
          className="border border-gray-300 rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
          value={form.jenis}
          onChange={(e) => setForm({ ...form, jenis: e.target.value })}
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>

        <input
          type="text"
          className="border border-gray-300 rounded-xl px-3 py-2 w-full focus:ring-2 focus:ring-blue-300"
          placeholder="Keterangan"
          value={form.keterangan}
          onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
        />

        <div className="col-span-1 md:col-span-4">
          <button
            type="submit"
            className={`w-full py-3 rounded-xl text-white font-semibold shadow-md transition ${
              editId
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editId ? "Update Transaksi" : "Tambah Transaksi"}
          </button>
        </div>
      </form>
    </div>
  );
}
