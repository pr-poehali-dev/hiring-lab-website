import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "MousePointerClick",
    title: "Яндекс Директ",
    description: "Настройка и ведение контекстной рекламы. Поиск, РСЯ, ретаргетинг. Максимум заявок при минимальном бюджете.",
    features: ["Анализ конкурентов", "Подбор 500+ ключей", "A/B тесты объявлений", "Еженедельные отчёты"],
    accent: "primary",
  },
  {
    icon: "Search",
    title: "SEO-продвижение",
    description: "Вывод сайта в топ Яндекса и Google. Органический трафик, который работает 24/7 без оплаты за клик.",
    features: ["Технический аудит", "Написание SEO-текстов", "Ссылочное продвижение", "Рост позиций от 3 мес"],
    accent: "accent",
  },
  {
    icon: "BarChart3",
    title: "Аудит рекламы",
    description: "Найдём, куда утекает бюджет. Покажем конкретные точки роста и дадим план исправления за 24 часа.",
    features: ["Анализ текущих кампаний", "Оценка семантики", "Проверка посадочных", "Готовый план действий"],
    accent: "primary",
  },
  {
    icon: "Globe",
    title: "Комплексное продвижение",
    description: "Директ + SEO в одном пакете. Быстрые заявки сразу и стабильный органический поток в перспективе.",
    features: ["Единая стратегия", "Один менеджер", "Сквозная аналитика", "Оплата за результат"],
    accent: "accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Наши <span className="gradient-primary-text">услуги</span>
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Всё для привлечения клиентов из интернета — от настройки до аналитики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                service.accent === "primary" ? "bg-primary/10" : "bg-accent/10"
              }`}>
                <Icon
                  name={service.icon as "MousePointerClick"}
                  size={28}
                  className={service.accent === "primary" ? "text-primary" : "text-accent"}
                />
              </div>

              <h3 className="font-heading font-bold text-xl text-dark mb-3">
                {service.title}
              </h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      service.accent === "primary" ? "bg-primary" : "bg-accent"
                    }`} />
                    <span className="font-body text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
