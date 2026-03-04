import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Target",
    title: "Точное попадание в профиль",
    description:
      "Глубоко изучаем бизнес, культуру и задачи — подбираем тех, кто действительно подходит.",
  },
  {
    icon: "Shield",
    title: "Гарантия замены",
    description:
      "Если кандидат не прошёл испытательный срок — заменим бесплатно. Работаем на результат.",
  },
  {
    icon: "Zap",
    title: "Скорость без потери качества",
    description:
      "Средний срок закрытия — 21 день. Отлаженный процесс позволяет не жертвовать качеством.",
  },
  {
    icon: "Eye",
    title: "Прозрачность на каждом шаге",
    description:
      "Регулярные отчёты, доступ к базе кандидатов, чёткие KPI — вы всегда в курсе.",
  },
  {
    icon: "Heart",
    title: "Долгосрочное партнёрство",
    description:
      "Не разовая сделка, а системная работа. Знаем ваш бизнес и растём вместе с вами.",
  },
  {
    icon: "Award",
    title: "Экспертиза в 20+ нишах",
    description:
      "IT, производство, ритейл, финансы — понимаем специфику вашей отрасли и рынка труда.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Почему выбирают <span className="gradient-primary-text">нас</span>
          </h2>
          <p className="font-body text-gray-500 text-lg">
            14 лет на рынке подбора — мы знаем, как нанимать правильно
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group flex gap-5 p-6 rounded-2xl hover:bg-light transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Icon name={adv.icon as "Target"} size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-dark mb-2">
                  {adv.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
