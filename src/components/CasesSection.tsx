import Icon from "@/components/ui/icon";

const cases = [
  {
    badge: "IT",
    badgeColor: "bg-primary/10 text-primary",
    company: "Технологическая компания",
    challenge: "Не могли закрыть 3 позиции Senior-разработчиков 4 месяца",
    solution:
      "Провели глубинный анализ рынка, скорректировали оффер и запустили прямой поиск",
    result: "Закрыли все 3 вакансии за 18 дней",
    metric: "18 дней",
  },
  {
    badge: "E-commerce",
    badgeColor: "bg-accent/10 text-accent",
    company: "Маркетплейс",
    challenge: "Высокая текучка в отделе продаж — 60% за год",
    solution:
      "Перестроили профиль кандидата, внедрили оценку мотивации и системную адаптацию",
    result: "Снизили текучку до 15% за 6 месяцев",
    metric: "−45%",
  },
  {
    badge: "Производство",
    badgeColor: "bg-orange-100 text-orange-600",
    company: "Производственный холдинг",
    challenge: "Искали операционного директора 6 месяцев",
    solution:
      "Провели конфиденциальный executive search с оценкой по 15 параметрам",
    result: "Нашли и вывели кандидата за 24 дня",
    metric: "24 дня",
  },
  {
    badge: "Услуги",
    badgeColor: "bg-emerald-100 text-emerald-600",
    company: "Сеть клиник",
    challenge: "Нужно было набрать 20 специалистов за месяц",
    solution:
      "Выделили команду из 3 рекрутеров, запустили параллельный поиск по всем каналам",
    result: "Укомплектовали штат на 100% за 28 дней",
    metric: "100%",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            <span className="gradient-primary-text">Кейсы</span>
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Реальные результаты для реального бизнеса
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((caseItem, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Gradient accent bar */}
              <div className="h-1 gradient-primary" />

              <div className="p-8">
                {/* Badge + Company */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body ${caseItem.badgeColor}`}
                  >
                    {caseItem.badge}
                  </span>
                  <span className="font-body text-sm text-gray-400">
                    {caseItem.company}
                  </span>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      name="AlertCircle"
                      size={16}
                      className="text-red-400"
                    />
                    <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Проблема
                    </span>
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {caseItem.challenge}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 my-3">
                  <div className="h-px bg-gray-200 flex-1" />
                  <Icon
                    name="ArrowDown"
                    size={14}
                    className="text-gray-300"
                  />
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon
                      name="Lightbulb"
                      size={16}
                      className="text-amber-400"
                    />
                    <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Решение
                    </span>
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    {caseItem.solution}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 my-3">
                  <div className="h-px bg-gray-200 flex-1" />
                  <Icon
                    name="ArrowDown"
                    size={14}
                    className="text-gray-300"
                  />
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                {/* Result */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="text-accent"
                      />
                      <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Результат
                      </span>
                    </div>
                    <p className="font-body text-sm font-medium text-dark">
                      {caseItem.result}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="font-heading font-bold text-2xl md:text-3xl gradient-primary-text">
                      {caseItem.metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
