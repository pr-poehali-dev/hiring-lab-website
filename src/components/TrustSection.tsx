import Icon from "@/components/ui/icon";

const trustItems = [
  {
    icon: "FileText",
    title: "Работа по договору",
    description: "KPI и сроки прописаны официально. Никаких устных договорённостей.",
  },
  {
    icon: "Eye",
    title: "Доступ к кабинету",
    description: "Вы всегда видите рекламный кабинет и все расходы в реальном времени.",
  },
  {
    icon: "RotateCcw",
    title: "Гарантия возврата",
    description: "Не достигли KPI — вернём деньги за месяц работы. Без споров.",
  },
  {
    icon: "Star",
    title: "Отзывы клиентов",
    description: "Более 80 рекомендаций от собственников бизнеса по всей России.",
  },
];

const testimonials = [
  {
    quote: "До обращения тратили 100 000 ₽ в месяц на Директ и получали 8–10 заявок. После — те же деньги, но уже 60+ заявок. Результат говорит сам за себя.",
    author: "Андрей Соколов",
    position: "Владелец",
    company: "Сеть автосервисов",
  },
  {
    quote: "SEO-продвижение дало результат через 3 месяца — 200+ переходов в день из Яндекса. Сейчас органика приносит больше заявок, чем платная реклама.",
    author: "Елена Морозова",
    position: "Директор",
    company: "Юридическая компания",
  },
  {
    quote: "Наконец-то нашли подрядчика, которому не страшно доверить бюджет. Всё прозрачно, менеджер всегда на связи, результаты растут каждый месяц.",
    author: "Михаил Громов",
    position: "CEO",
    company: "Интернет-магазин",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Работаем{" "}
            <span className="gradient-primary-text">прозрачно</span> и честно
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Никаких чёрных ящиков — только чёткие условия и реальные результаты
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustItems.map((item, i) => (
            <div key={i} className="text-center p-6 rounded-2xl hover:bg-light transition-colors duration-300 group">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
                <Icon name={item.icon as "FileText"} size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-2">{item.title}</h3>
              <p className="font-body text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-light rounded-2xl p-7 relative">
              <div className="text-5xl font-heading text-primary/20 leading-none mb-3">"</div>
              <p className="font-body text-sm text-gray-600 leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-sm">
                    {t.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-dark text-sm">{t.author}</div>
                  <div className="font-body text-xs text-gray-400">{t.position}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
