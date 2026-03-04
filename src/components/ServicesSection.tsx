import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Users",
    title: "Подбор линейного персонала",
    description:
      "Операционисты, менеджеры, специалисты — закрываем массовые вакансии быстро и качественно.",
    features: [
      "Скрининг резюме",
      "Телефонные интервью",
      "Проверка рекомендаций",
      "Срок 7–14 дней",
    ],
    accent: "primary",
  },
  {
    icon: "Briefcase",
    title: "Подбор управленцев",
    description:
      "Руководители среднего звена, директора направлений — находим лидеров, которые строят команды.",
    features: [
      "Глубинные интервью",
      "Оценка по компетенциям",
      "Психологическое тестирование",
      "Срок 14–21 день",
    ],
    accent: "accent",
  },
  {
    icon: "Crown",
    title: "Executive Search",
    description:
      "Топ-менеджмент и C-level — конфиденциальный прямой поиск среди пассивных кандидатов.",
    features: [
      "Headhunting",
      "Полная конфиденциальность",
      "Персональный партнёр",
      "Срок 21–30 дней",
    ],
    accent: "primary",
  },
  {
    icon: "ClipboardList",
    title: "HR-аудит и консультации",
    description:
      "Диагностика системы найма, разработка профилей должностей и стандартов оценки кандидатов.",
    features: [
      "Аудит HR-процессов",
      "Профили должностей",
      "Скрипты интервью",
      "Онбординг-программы",
    ],
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
            Комплексные решения по подбору персонала для любых задач бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.accent === "primary" ? "bg-primary/10" : "bg-accent/10"
                }`}
              >
                <Icon
                  name={service.icon as "Users"}
                  size={28}
                  className={
                    service.accent === "primary" ? "text-primary" : "text-accent"
                  }
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
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        service.accent === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                    <span className="font-body text-sm text-gray-600">
                      {feature}
                    </span>
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
