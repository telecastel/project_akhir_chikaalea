export default function TabelTransaksi({
    transaksiTampil,
    filter,
    setFilter,
    mulaiEdit,
    hapusTransaksi,
}) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-6">
                <h2 className="text-2xl font-semibold text-gray-700">
                    📋 Daftar Transaksi
                </h2>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-300"
                >
                    <option value="semua">Semua</option>
                    <option value="pemasukan">Pemasukan</option>
                    <option value="pengeluaran">Pengeluaran</option>
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-blue-500 text-white text-left">
                            <th className="p-3">Tanggal</th>
                            <th className="p-3">Jenis</th>
                            <th className="p-3">Jumlah</th>
                            <th className="p-3">Keterangan</th>
                            <th className="p-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaksiTampil.length > 0 ? (
                            transaksiTampil.map((t) => (
                                <tr
                                    key={t.id_transaksi}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="p-3">
                                        {new Date(t.tanggal).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </td>

                                    <td
                                        className={`p-3 font-medium ${t.jenis === "pemasukan" ? "text-green-600" : "text-red-500"
                                            }`}
                                    >
                                        {t.jenis}
                                    </td>
                                    <td className="p-3">Rp {parseFloat(t.jumlah).toLocaleString()}</td>
                                    <td className="p-3">{t.keterangan}</td>
                                    <td className="p-3 flex gap-2 justify-center">
                                        <button
                                            onClick={() => mulaiEdit(t)}
                                            className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500 transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => hapusTransaksi(t.id_transaksi)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-500 italic">
                                    Belum ada transaksi
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
