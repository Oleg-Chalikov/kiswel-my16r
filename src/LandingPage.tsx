export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4 bg-gradient-to-b from-black to-gray-900 py-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">Электрод KISWEL MY-16R</h1>
        <p className="text-lg md:text-xl text-gray-200">Покрытый электрод для сварки корневого шва труб</p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/Электрод KISWEL MY-16R Технический отчет.pdf"
            download
            className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-300 transition"
          >
            Скачать техотчёт
          </a>
          <button className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-xl hover:bg-yellow-400 hover:text-black transition">
            Запросить цену
          </button>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Преимущества KISWEL MY-16R</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          <li>Лучшая альтернатива Kobelco LB-52U</li>
          <li>Испытано в России в условиях Крайнего Севера</li>
          <li>Одобрено в Транснефти</li>
          <li>Положительные отзывы подрядчиков</li>
          <li>Цена в 2 раза ниже, чем у японских конкурентов</li>
        </ul>
      </section>

      {/* Технические характеристики */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Технические характеристики</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          <li>Электрод с пониженным содержанием водорода – надёжный корень шва без пор</li>
          <li>Отличный внешний вид шва и лёгкое удаление шлака</li>
          <li>Стабильная дуга на всём диапазоне сварочного тока</li>
        </ul>
      </section>

      {/* Одобрения и аттестации */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Одобрения и аттестации</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          <li>НАКС</li>
          <li>Транснефть</li>
          <li>ABS — 3Y H10</li>
          <li>BV — 3Y H10</li>
          <li>DNV — 3Y H10</li>
          <li>GL — 3Ym H10</li>
          <li>LR — 3Y H10</li>
        </ul>
      </section>

      <style>{`
        table {
          background-color: #1a1a1a;
          color: #f9f9f9;
        }
        th {
          background-color: #222;
          color: #FFD700;
        }
        td {
          border-color: #333;
        }
        input, textarea {
          background-color: #111;
          color: white;
          border-color: #444;
        }
      `}</style>
    </div>
  );
}