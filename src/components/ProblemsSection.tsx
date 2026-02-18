import Icon from "@/components/ui/icon";

const problems = [
  {
    icon: "UserX",
    title: "Кандидаты не доходят до финала",
    description:
      "70% кандидатов отсеиваются на этапе собеседования из-за нечёткого профиля вакансии",
  },
  {
    icon: "TrendingDown",
    title: "Высокая текучка в первый год",
    description:
      "40% новых сотрудников уходят в первые 6 месяцев без системной адаптации",
  },
  {
    icon: "Clock",
    title: "Собственник тратит время на найм",
    description:
      "До 30% рабочего времени руководителя уходит на процессы подбора вместо стратегии",
  },
  {
    icon: "AlertTriangle",
    title: "HR работает без системы",
    description:
      "Интуитивный подбор вместо оценки компетенций приводит к ошибкам найма",
  },
  {
    icon: "DollarSign",
    title: "Стоимость ошибки найма",
    description:
      "Неверный найм обходится компании в 3–5 окладов сотрудника",
  },
];

const ProblemsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-light overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Почему найм{" "}
            <span className="gradient-primary-text">мешает росту</span>{" "}
            бизнеса?
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Узнайте типичные проблемы, с которыми сталкиваются компании при
            подборе персонала
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group ${
                i >= 3 ? "lg:col-span-1 md:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon
                  name={problem.icon}
                  size={26}
                  className="text-primary"
                />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-lg text-dark mb-3">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-500 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
