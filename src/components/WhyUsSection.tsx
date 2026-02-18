const metrics = [
  {
    value: "95%",
    title: "Релевантных кандидатов",
    description:
      "Точное попадание в профиль благодаря глубинной диагностике",
  },
  {
    value: "21 день",
    title: "Средний срок закрытия",
    description:
      "Отлаженные процессы позволяют работать быстро без потери качества",
  },
  {
    value: "350+",
    title: "Закрытых вакансий",
    description:
      "Опыт в IT, производстве, e-commerce, услугах и других отраслях",
  },
  {
    value: "90 дней",
    title: "Гарантия замены",
    description:
      "Бесплатная замена кандидата если он не прошёл испытательный срок",
  },
  {
    value: "3 дня",
    title: "До первых кандидатов",
    description:
      "Начинаем представлять релевантных кандидатов уже через 72 часа",
  },
  {
    value: "−40%",
    title: "Снижение текучки",
    description:
      "Системный подбор сокращает текучесть персонала в первый год",
  },
];

const WhyUsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-dark overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern-dark" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Почему выбирают{" "}
            <span className="text-white">Найм</span>
            <span className="text-accent">Lab</span>
          </h2>
          <p className="font-body text-gray-400 text-lg">
            Цифры, которые говорят за нас
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 group"
            >
              {/* Value */}
              <div className="font-heading font-bold text-3xl md:text-4xl gradient-primary-text mb-3">
                {metric.value}
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {metric.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
