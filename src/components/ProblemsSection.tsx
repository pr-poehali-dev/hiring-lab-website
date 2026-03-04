import Icon from "@/components/ui/icon";

const problems = [
  {
    icon: "TrendingDown",
    title: "Бюджет тратится, заявок нет",
    description: "Деньги уходят на нецелевые клики, а продаж не прибавляется. Реклама работает «в минус».",
  },
  {
    icon: "EyeOff",
    title: "Сайт не виден в поиске",
    description: "Конкуренты занимают топ Яндекса, а ваш сайт — на 5-й странице, куда никто не доходит.",
  },
  {
    icon: "Settings",
    title: "Прошлый подрядчик пропал",
    description: "Агентство или фрилансер взял деньги, сделал непонятно что и исчез. Результата ноль.",
  },
  {
    icon: "BarChart2",
    title: "Нет понимания, что работает",
    description: "Непрозрачная отчётность, размытые KPI. Невозможно понять, за что вообще платите.",
  },
  {
    icon: "Clock",
    title: "Слишком долго ждёте результат",
    description: "Месяцами ждёте эффекта, а трафик и заявки не растут. Время — это тоже деньги.",
  },
  {
    icon: "AlertTriangle",
    title: "Высокая стоимость заявки",
    description: "Цена лида неоправданно высокая и съедает всю маржу. Бизнес работает на рекламный бюджет.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Узнаёте <span className="gradient-primary-text">себя?</span>
          </h2>
          <p className="font-body text-gray-400 text-lg">
            Типичные проблемы бизнеса с интернет-рекламой, которые мы решаем каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <Icon name={problem.icon as "TrendingDown"} size={24} className="text-red-400" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">
                {problem.title}
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-gray-300 text-lg mb-6">
            Если хотя бы один пункт — про вас, нам есть что предложить
          </p>
          <button
            className="gradient-primary text-white font-body font-semibold rounded-xl px-8 h-12 border-0 hover:opacity-90 transition-opacity"
            onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
          >
            Разобраться с проблемой
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
