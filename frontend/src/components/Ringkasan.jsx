export default function Ringkasan({ totalPemasukan, totalPengeluaran, saldo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-white border border-green-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-sm text-green-600 font-semibold">Total Pemasukan</h3>
        <p className="text-3xl font-bold text-green-700 mt-1">
          Rp {totalPemasukan.toLocaleString()}
        </p>
      </div>

      <div className="bg-white border border-red-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-sm text-red-600 font-semibold">Total Pengeluaran</h3>
        <p className="text-3xl font-bold text-red-700 mt-1">
          Rp {totalPengeluaran.toLocaleString()}
        </p>
      </div>

      <div className="bg-white border border-blue-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-sm text-blue-600 font-semibold">Saldo Akhir</h3>
        <p className="text-3xl font-bold text-blue-700 mt-1">
          Rp {saldo.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
