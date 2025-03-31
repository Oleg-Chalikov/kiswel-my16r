export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-12 space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-b from-black to-gray-900 py-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-[#7AC943]">Электрод KISWEL MY-16R</h1>
        <p className="text-lg md:text-xl text-gray-200">Покрытый электрод для сварки корневого шва труб</p>
        <img
          src="/kiswel-banner-final.jpg"
          alt="KISWEL Banner"
          className="mx-auto max-w-full rounded-2xl shadow-xl"
        />
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/Электрод KISWEL MY-16R Технический отчет.pdf"
            download
            className="bg-[#7AC943] text-black font-semibold px-6 py-2 rounded-xl hover:bg-green-400 transition"
          >
            Скачать техотчёт
          </a>
          <button className="border border-[#7AC943] text-[#7AC943] px-6 py-2 rounded-xl hover:bg-[#7AC943] hover:text-black transition">
            Запросить цену
          </button>
        </div>
      </section>
    </div>
  );
}