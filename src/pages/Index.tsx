import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d8da1f19-6d51-4761-b8ba-72bee78f3702/files/634d30cb-795e-4473-ae6e-226670215197.jpg";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "Прайс-лист", href: "#prices" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const BRANDS = ["Все", "HP", "Canon", "Epson", "Brother", "Samsung", "Xerox"];

const PRICE_DATA = [
  { brand: "HP", model: "HP 121 / 122 / 123", type: "Цветной", price: 350 },
  { brand: "HP", model: "HP 121 / 122 / 123", type: "Чёрный", price: 250 },
  { brand: "HP", model: "HP 650 / 651 / 652", type: "Цветной", price: 400 },
  { brand: "HP", model: "HP 650 / 651 / 652", type: "Чёрный", price: 300 },
  { brand: "HP", model: "HP LaserJet (лазерный)", type: "Лазерный", price: 600 },
  { brand: "Canon", model: "Canon PG-440 / CL-441", type: "Цветной", price: 380 },
  { brand: "Canon", model: "Canon PG-440 / CL-441", type: "Чёрный", price: 270 },
  { brand: "Canon", model: "Canon PG-445 / CL-446", type: "Цветной", price: 400 },
  { brand: "Canon", model: "Canon PG-445 / CL-446", type: "Чёрный", price: 290 },
  { brand: "Canon", model: "Canon i-SENSYS (лазерный)", type: "Лазерный", price: 650 },
  { brand: "Epson", model: "Epson T1282–T1285", type: "Цветной", price: 350 },
  { brand: "Epson", model: "Epson T0731–T0734", type: "Цветной", price: 380 },
  { brand: "Epson", model: "Epson L-серия (СНПЧ)", type: "Заправка", price: 200 },
  { brand: "Brother", model: "Brother LC-3617 / LC-3619", type: "Цветной", price: 420 },
  { brand: "Brother", model: "Brother TN-2080 / TN-2090", type: "Лазерный", price: 600 },
  { brand: "Samsung", model: "Samsung MLT-D101 / D104", type: "Лазерный", price: 550 },
  { brand: "Samsung", model: "Samsung CLP-310 / CLP-320", type: "Лазерный", price: 700 },
  { brand: "Xerox", model: "Xerox Phaser 3010 / 3020", type: "Лазерный", price: 580 },
  { brand: "Xerox", model: "Xerox WorkCentre 3025", type: "Лазерный", price: 620 },
];

const SERVICES = [
  { icon: "Printer", title: "Заправка лазерных картриджей", desc: "Заправляем лазерные картриджи всех популярных брендов: HP, Canon, Samsung, Xerox, Brother. Используем качественный тонер." },
  { icon: "Wrench", title: "Ремонт струйных принтеров Epson", desc: "Профессиональный ремонт струйных принтеров марки Epson: замена головок, чистка дюз, устранение подачи бумаги." },
  { icon: "Truck", title: "Выезд по СПб и ЛО", desc: "Работаем по всему Санкт-Петербургу и Ленинградской области. Заберём и привезём картридж сами." },
  { icon: "Clock", title: "Срочная заправка", desc: "Экспресс-заправка в день обращения. Не нужно ждать — уходите сразу с готовым картриджем." },
  { icon: "Shield", title: "Гарантия качества", desc: "Даём гарантию 30 дней на все работы. Если что-то пойдёт не так — переделаем бесплатно." },
  { icon: "Package", title: "Корпоративным клиентам", desc: "Обслуживание организаций: договоры, акты, счета-фактуры. Скидки при регулярном обслуживании." },
];

const STEPS = [
  { num: "01", title: "Позвоните или напишите", desc: "Оставьте заявку любым удобным способом — по телефону, в мессенджере или через форму на сайте." },
  { num: "02", title: "Приносите картридж", desc: "Привезите картридж к нам или закажите курьера — приедем сами." },
  { num: "03", title: "Получаете результат", desc: "Забираете заправленный картридж. Обычно занимает от 30 минут до 2 часов." },
];

const TYPE_COLORS: Record<string, string> = {
  "Цветной": "bg-blue-50 text-blue-700",
  "Чёрный": "bg-gray-100 text-gray-700",
  "Лазерный": "bg-orange-50 text-orange-700",
  "Заправка": "bg-green-50 text-green-700",
};

export default function Index() {
  const [activeBrand, setActiveBrand] = useState("Все");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = activeBrand === "Все"
    ? PRICE_DATA
    : PRICE_DATA.filter((p) => p.brand === activeBrand);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-golos text-ink">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Icon name="Printer" size={16} className="text-white" />
            </div>
            <span className="font-oswald font-semibold text-lg tracking-wide text-ink">ЧернилоСервис</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-slate-600 hover:text-brand transition-colors font-medium"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:+79001234567"
            className="hidden md:flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors"
          >
            <Icon name="Phone" size={14} />
            +7 (900) 123-45-67
          </a>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-base text-slate-700 hover:text-brand py-1">
                {l.label}
              </button>
            ))}
            <a href="tel:+79001234567" className="mt-2 flex items-center gap-2 bg-brand text-white px-4 py-3 rounded-lg text-sm font-semibold justify-center">
              <Icon name="Phone" size={14} />
              +7 (900) 123-45-67
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-slate-50/80" />

        <div className="relative max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-3 py-1 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
              <Icon name="Zap" size={12} />
              Санкт-Петербург и Ленинградская область
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold leading-tight text-ink mb-6">
              Заправка<br />
              <span className="text-brand">картриджей</span><br />
              в Санкт-Петербурге
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-md">
              Заправка лазерных картриджей и ремонт принтеров Epson. Работаем по СПб и Ленинградской области. Опыт более 15 лет.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("#contacts")}
                className="bg-brand text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-brand-dark transition-all hover:scale-105 flex items-center gap-2"
              >
                <Icon name="MessageCircle" size={16} />
                Оставить заявку
              </button>
              <button
                onClick={() => scrollTo("#prices")}
                className="bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-lg font-semibold text-base hover:border-brand hover:text-brand transition-all flex items-center gap-2"
              >
                <Icon name="List" size={16} />
                Смотреть прайс
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[["250+", "клиентов"], ["15 лет", "опыта"], ["30 дней", "гарантия"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-oswald text-2xl font-bold text-brand">{val}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={HERO_IMAGE} alt="Заправка картриджей" className="w-full h-[420px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Принимаем заказы сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Что мы делаем</p>
            <h2 className="font-oswald text-4xl font-bold text-ink">Наши услуги</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:border-brand/30 hover:shadow-md transition-all group">
                <div className="w-11 h-11 bg-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                  <Icon name={s.icon} fallback="Circle" size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-ink mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE LIST */}
      <section id="prices" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Стоимость работ</p>
            <h2 className="font-oswald text-4xl font-bold text-ink mb-4">Прайс-лист</h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Выберите бренд вашего принтера — и увидите актуальные цены на заправку
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {BRANDS.map((b) => (
              <button
                key={b}
                onClick={() => setActiveBrand(b)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activeBrand === b
                    ? "bg-brand text-white shadow-md shadow-brand/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200 px-4 py-3">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Бренд</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide col-span-2">Модель картриджа</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide text-right">Цена, ₽</div>
            </div>
            {filtered.map((item, i) => (
              <div key={i} className="grid grid-cols-4 px-4 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors items-center">
                <div className="text-sm font-semibold text-ink">{item.brand}</div>
                <div className="text-sm text-slate-600">{item.model}</div>
                <div className="flex items-center gap-2 pl-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${TYPE_COLORS[item.type] || "bg-gray-100 text-gray-600"}`}>
                    {item.type}
                  </span>
                </div>
                <div className="text-base font-bold text-brand text-right">{item.price} ₽</div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 mt-4 text-center">
            * Цены указаны за одну заправку. Возможны скидки при регулярном обслуживании.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Процесс работы</p>
            <h2 className="font-oswald text-4xl font-bold text-ink">Как это работает</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="font-oswald text-6xl font-bold text-brand/15 mb-2">{step.num}</div>
                <h3 className="font-oswald text-xl font-semibold text-ink mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">О компании</p>
            <h2 className="font-oswald text-4xl font-bold text-ink mb-6">Более 15 лет на рынке СПб</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              У вас не будет простоев при печати документов. Осуществляем полный цикл работ — от заправки картриджей до сервисного обслуживания оргтехники в Санкт-Петербурге и Ленинградской области.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Работы выполняются сервис-инженерами с опытом более 10 лет. При незначительной поломке — отремонтируем на месте. Если после ремонта или заправки по нашей вине появятся проблемы — исправим по гарантии за наш счёт.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Полный цикл обслуживания оргтехники",
                "Ремонт на месте при выезде",
                "Гарантия — за наш счёт",
                "Инженеры с опытом 10+ лет",
              ].map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={16} className="text-brand mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { val: "250+", label: "Довольных клиентов" },
              { val: "15 лет", label: "На рынке СПб" },
              { val: "1000+", label: "Картриджей в год" },
              { val: "СПб и ЛО", label: "Зона обслуживания" },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
                <div className="font-oswald text-3xl font-bold text-brand mb-1">{stat.val}</div>
                <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-2">Связаться с нами</p>
            <h2 className="font-oswald text-4xl font-bold">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (900) 123-45-67", href: "tel:+79001234567" },
              { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "Написать в мессенджер", href: "#" },
              { icon: "MapPin", label: "Адрес", value: "ул. Примерная, д. 15, офис 3", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-white/10 hover:border-brand/50 hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                  <Icon name={c.icon} fallback="Circle" size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wide mb-1">{c.label}</div>
                <div className="font-semibold text-white">{c.value}</div>
              </a>
            ))}
          </div>

          <div className="max-w-md mx-auto bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Clock" size={16} className="text-brand" />
              <span className="font-oswald font-semibold text-base">Режим работы</span>
            </div>
            <div className="space-y-2">
              {[
                ["Понедельник — Пятница", "9:00 — 20:00"],
                ["Суббота", "10:00 — 18:00"],
                ["Воскресенье", "Выходной"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-slate-400">{day}</span>
                  <span className={`font-medium ${time === "Выходной" ? "text-slate-500" : "text-white"}`}>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-500 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand rounded flex items-center justify-center">
              <Icon name="Printer" size={12} className="text-white" />
            </div>
            <span className="font-oswald font-semibold text-white">ЧернилоСервис</span>
          </div>
          <p>© 2024 ЧернилоСервис. Все права защищены.</p>
          <div className="flex gap-4">
            {NAV_LINKS.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="hover:text-brand transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}