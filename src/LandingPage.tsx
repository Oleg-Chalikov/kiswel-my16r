export default function LandingPage() {
  function trackGoal(goal) {
    if (typeof ym !== 'undefined') {
      ym(100866025, 'reachGoal', goal);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-12 space-y-16">
      <section className="text-center space-y-4 py-12 rounded-2xl">
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
            onClick={() => trackGoal('download_pdf')}
            className="bg-[#7AC943] text-black font-semibold px-6 py-2 rounded-xl hover:bg-green-400 transition"
          >
            Скачать техотчёт
          </a>
          <button
            onClick={() => trackGoal('request_price')}
            className="border border-[#7AC943] text-[#7AC943] px-6 py-2 rounded-xl hover:bg-[#7AC943] hover:text-black transition"
          >
            Запросить цену
          </button>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#7AC943] mb-4">Преимущества KISWEL MY-16R</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          <li>Лучшая альтернатива Kobelco LB-52U</li>
          <li>Испытано в России в условиях Крайнего Севера</li>
          <li>Одобрено в Транснефти</li>
          <li>Положительные отзывы подрядчиков</li>
          <li>Цена в 2 раза ниже, чем у японских конкурентов</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#7AC943] mb-4">Технические характеристики</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          <li>Электрод с пониженным содержанием водорода – надёжный корень шва без пор</li>
          <li>Отличный внешний вид шва и лёгкое удаление шлака</li>
          <li>Стабильная дуга на всём диапазоне сварочного тока</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#7AC943] mb-4">Одобрения и аттестации</h2>
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

      <section className="max-w-xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold text-[#7AC943]">Оставить заявку</h2>
        <p>Свяжитесь с нами, чтобы узнать цену или получить консультацию</p>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            trackGoal('form_sent');
            alert('Заявка отправлена!');
          }}
        >
          <input className="w-full p-2 border rounded bg-[#111] text-white border-gray-600" placeholder="Ваше имя" />
          <input className="w-full p-2 border rounded bg-[#111] text-white border-gray-600" placeholder="Телефон или Email" />
          <textarea className="w-full p-2 border rounded bg-[#111] text-white border-gray-600" placeholder="Сообщение" rows="4" />
          <button className="bg-[#7AC943] text-black px-4 py-2 rounded hover:bg-green-400 w-full">
            Отправить
          </button>
        </form>
      </section>
    </div>
  );
}