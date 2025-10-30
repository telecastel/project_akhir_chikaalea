import TabelTransaksi from "./TabelTransaksi";

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Keuangan Ku 👧🏻
                    {/* <img src="src/assets/foto.svg" className="w-0.5 h-0.5" alt="" srcset="" /> */}
                </h1>
                <div className="flex space-x-4">
                    <button className="hover:bg-blue-700 px-3 py-1 rounded">Dashboard</button>
                </div>
            </div>
        </nav>
    );
}

