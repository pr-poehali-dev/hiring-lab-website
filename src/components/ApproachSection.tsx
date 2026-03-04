const steps = [
  {
    number: "01",
    title: "Диагностика бизнеса",
    description:
      "Анализируем структуру компании, культуру, задачи позиции и критерии успеха",
  },
  {
    number: "02",
    title: "Формирование профиля",
    description:
      "Создаём детальный профиль кандидата с hard и soft skills, ценностями и мотивацией",
  },
  {
    number: "03",
    title: "Глубинное интервью",
    description:
      "Проводим структурированные интервью по компетенциям с оценкой по 12 параметрам",
  },
  {
    number: "04",
    title: "Оценка компетенций",
    description:
      "Тестирование, кейсы, проверка рекомендаций — комплексная верификация",
  },
  {
    number: "05",
    title: "Сопровождение",
    description:
      "Помогаем с адаптацией первые 3 месяца, гарантия замены кандидата",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            <span className="gradient-primary-text">Системный</span> подход к
            подбору
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Отлаженный процесс из 5 этапов, который гарантирует точное попадание
            в профиль
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />
          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card - Desktop */}
                <div
                  className={`hidden md:block md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
                  }`}
                >
                  <div
                    className={`bg-light rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 ${
                      isEven ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Circle Node - Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-primary items-center justify-center shadow-lg shadow-primary/30 z-10">
                  <span className="font-heading font-bold text-white text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Empty spacer - Desktop */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />

                {/* Circle Node - Mobile */}
                <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                  <span className="font-heading font-bold text-white text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Content Card - Mobile */}
                <div className="md:hidden flex-1">
                  <div className="bg-light rounded-2xl p-6">
                    <h3 className="font-heading font-semibold text-lg text-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
