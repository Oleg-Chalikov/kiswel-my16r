
import { useRef } from "react";

export default function LandingPage() {
  const formRef = useRef(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 md:p-12 space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-b from-black to-gray-900 py-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-green-500">Электрод KISWEL MY-16R</h1>
        <p className="text-lg md:text-xl text-gray-200">Покрытый электрод для сварки корневого шва труб</p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/Электрод KISWEL MY-16R Технический отчет.pdf"
            download
            className="bg-green-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-green-400 transition"
          >
            Скачать техотчёт
          </a>
          <button
            onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="border border-green-500 text-green-500 px-6 py-2 rounded-xl hover:bg-green-500 hover:text-black transition"
          >
            Запросить цену
          </button>
        </div>
      </section>

      <section className="max-w-xl mx-auto text-center space-y-4" ref={formRef}>
        <h2 className="text-2xl font-semibold text-green-500">Оставить заявку</h2>
        <p className="text-gray-300">Рассчитаем цену и дадим техническую консультацию за 1 рабочий день</p>
        <form
  action="https://formsubmit.co/o.chalikov@gmail.com"
  method="POST"
  data-honeypot="phone_confirm"
  className="space-y-4"
>
  <input type="hidden" name="_next" value="https://kiswel-my16r.vercel.app/thank-you.html" />
  <input
    type="text"
    name="name"
    placeholder="Ваше имя"
    className="w-full p-2 border rounded text-white bg-yellow-200"
    required
  />
  <input
    type="text"
    name="contact"
    placeholder="Телефон или Email"
    className="w-full p-2 border rounded text-white bg-yellow-200"
    required
  />
  <textarea
    name="message"
    placeholder="Сообщение"
    rows="4"
    className="w-full p-2 border rounded text-white bg-white"
    required
  ></textarea>
  <input type="text" name="phone_confirm" style="display:none" tabIndex="-1" autoComplete="off" />
  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full">
    Отправить
  </button>
</form>
      </section>
    </div>
  );
}
