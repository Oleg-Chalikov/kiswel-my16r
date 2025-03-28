import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Электрод KISWEL MY-16R</h1>
        <p className="text-lg md:text-xl">Покрытый электрод для сварки корневого шва труб</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button>Скачать техотчёт</Button>
          <Button variant="outline">Запросить цену</Button>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Преимущества KISWEL MY-16R</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Лучшая альтернатива Kobelco LB-52U</li>
          <li>Испытано в России в условиях Крайнего Севера</li>
          <li>Одобрено в Транснефти</li>
          <li>Положительные отзывы подрядчиков</li>
          <li>Цена в 2 раза ниже, чем у японских конкурентов</li>
        </ul>
      </section>

      {/* Технические характеристики */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Технические характеристики</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Электрод с пониженным содержанием водорода – надёжный корень шва без пор</li>
          <li>Отличный внешний вид шва и лёгкое удаление шлака</li>
          <li>Стабильная дуга на всём диапазоне сварочного тока</li>
        </ul>
      </section>

      {/* Механические свойства */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Типичные механические свойства наплавленного металла</h2>
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Показатель</th>
              <th className="p-2">Стандарт AWS</th>
              <th className="p-2">KISWEL MY-16R</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">Предел текучести (МПа)</td><td className="p-2">≥400</td><td className="p-2">540</td></tr>
            <tr><td className="p-2">Предел прочности (МПа)</td><td className="p-2">≥490</td><td className="p-2">630</td></tr>
            <tr><td className="p-2">Относительное удлинение (%)</td><td className="p-2">≥22</td><td className="p-2">29</td></tr>
            <tr><td className="p-2">Ударная вязкость (Дж при -30°C)</td><td className="p-2">≥27</td><td className="p-2">90</td></tr>
          </tbody>
        </table>
      </section>

      {/* Химический состав */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Типичный химический состав наплавленного металла</h2>
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Элемент</th>
              <th className="p-2">Стандарт AWS (%)</th>
              <th className="p-2">KISWEL MY-16R (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">C</td><td className="p-2">≤0.15</td><td className="p-2">0.07</td></tr>
            <tr><td className="p-2">Si</td><td className="p-2">≤0.75</td><td className="p-2">0.68</td></tr>
            <tr><td className="p-2">Mn</td><td className="p-2">≤1.60</td><td className="p-2">1.11</td></tr>
            <tr><td className="p-2">P</td><td className="p-2">≤0.035</td><td className="p-2">0.017</td></tr>
            <tr><td className="p-2">S</td><td className="p-2">≤0.035</td><td className="p-2">0.010</td></tr>
            <tr><td className="p-2">Ni</td><td className="p-2">≤0.30</td><td className="p-2">0.01</td></tr>
          </tbody>
        </table>
      </section>

      {/* Режимы сварки */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Рекомендуемые режимы сварки</h2>
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Диаметр (мм)</th>
              <th className="p-2">Нижнее положение (А)</th>
              <th className="p-2">Вертикальное "на подъём" (А)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-2">2.6</td><td className="p-2">60 - 100</td><td className="p-2">50 - 80</td></tr>
            <tr><td className="p-2">3.2</td><td className="p-2">80 - 130</td><td className="p-2">80 - 110</td></tr>
            <tr><td className="p-2">4.0</td><td className="p-2">130 - 180</td><td className="p-2">90 - 140</td></tr>
          </tbody>
        </table>
      </section>

      {/* Аттестации */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Одобрения и аттестации</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>ABS — 3Y H10</li>
          <li>BV — 3Y H10</li>
          <li>DNV — 3Y H10</li>
          <li>GL — 3Ym H10</li>
          <li>LR — 3Y H10</li>
        </ul>
      </section>

      {/* Обратная связь */}
      <section className="max-w-xl mx-auto text-center space-y-4">
        <h2 className="text-2xl font-semibold">Оставить заявку</h2>
        <p>Свяжитесь с нами, чтобы узнать цену или получить консультацию</p>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Ваше имя" />
          <input className="w-full p-2 border rounded" placeholder="Телефон или Email" />
          <textarea className="w-full p-2 border rounded" placeholder="Сообщение" rows="4" />
          <Button className="w-full">Отправить</Button>
        </form>
      </section>
    </div>
  );
}