import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Users",
    title: "Подбор линейного персонала",
    description:
      "Массовый и точечный подбор специалистов для операционных задач бизнеса",
    features: [
      "От 5 вакансий одновременно",
      "Срок: 7–14 дней",
      "Гарантия замены 60 дней",
    ],
  },
  {
    icon: "Briefcase",
    title: "Подбор управленцев",
    description:
      "Поиск руководителей отделов, директоров и C-level позиций",
    features: [
      "Оценка лидерских компетенций",
      "Срок: 14–30 дней",
      "Гарантия замены 90 дней",
    ],
  },
  {
    icon: "Crown",
    title: "Executive Search",
    description:
      "Конфиденциальный поиск топ-менеджеров и редких специалистов",
    features: [
      "Прямой поиск по рынку",
      "Headhunting из конкурентов",
      "Полная конфиденциальность",
    ],
  },
  {
    icon: "ClipboardCheck",
    title: "HR-аудит",
    description:
      "Диагностика HR-процессов и рекомендации по оптимизации системы найма",
    features: [
      "Анализ воронки найма",
      "Оценка HR-метрик",
      "План улучшений на 90 дней",
    ],
  },
  {
    icon: "Settings",
    title: "Построение HR-системы",
    description:
      "Создание HR-отдела под ключ: процессы, инструменты, обучение команды",
    features: [
      "Регламенты и скрипты",
      "Настройка ATS",
      "Обучение HR-команды",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-light overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            <span className="gradient-primary-text">Услуги</span>
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Полный спектр HR-решений для бизнеса любого масштаба
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden border-b-4 border-transparent hover:border-b-4 hover:border-primary"
            >
              {/* Gradient top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                <Icon
                  name={service.icon}
                  size={26}
                  className="text-primary"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl text-dark mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="font-body text-sm text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Подробнее
                <Icon name="ArrowRight" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
