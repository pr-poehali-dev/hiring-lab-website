const steps = [
  {
    number: "01",
    title: "Бесплатный аудит",
    description: "Анализируем текущую рекламу, сайт и нишу. Находим точки роста и потери бюджета. Занимает 24 часа.",
  },
  {
    number: "02",
    title: "Стратегия и семантика",
    description: "Формируем структуру кампаний, подбираем целевые ключевые слова, минус-слова и аудитории.",
  },
  {
    number: "03",
    title: "Запуск и тестирование",
    description: "Создаём объявления, настраиваем аналитику и цели. Запускаем рекламу и фиксируем базовые метрики.",
  },
  {
    number: "04",
    title: "Оптимизация",
    description: "Ежедневно следим за кампаниями, отключаем неэффективное, масштабируем то, что приносит заявки.",
  },
  {
    number: "05",
    title: "Отчётность и рост",
    description: "Еженедельные отчёты с понятными цифрами: заявки, стоимость лида, ROI. Ставим цели на следующий месяц.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            <span className="gradient-primary-text">Как мы</span> работаем
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Прозрачный процесс из 5 шагов — от аудита до стабильного потока заявок
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />
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
                <div
                  className={`hidden md:block md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
                  }`}
                >
                  <div className={`bg-light rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 ${isEven ? "ml-auto" : "mr-auto"}`}>
                    <h3 className="font-heading font-semibold text-xl text-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-primary items-center justify-center shadow-lg shadow-primary/30 z-10">
                  <span className="font-heading font-bold text-white text-sm">{step.number}</span>
                </div>

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />

                <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                  <span className="font-heading font-bold text-white text-sm">{step.number}</span>
                </div>

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
