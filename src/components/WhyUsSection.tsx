import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Target",
    title: "Платите за результат",
    description: "KPI прописываем в договоре. Не достигли — возвращаем деньги. Никаких отговорок.",
  },
  {
    icon: "Eye",
    title: "Полная прозрачность",
    description: "Доступ к рекламному кабинету всегда у вас. Еженедельные отчёты с понятными цифрами.",
  },
  {
    icon: "Zap",
    title: "Первые заявки от 7 дней",
    description: "Запускаем рекламу быстро. Уже через неделю после старта вы получаете первые обращения.",
  },
  {
    icon: "UserCheck",
    title: "Личный менеджер",
    description: "Один человек ведёт ваш проект от А до Я. Всегда на связи, знает всё о вашем бизнесе.",
  },
  {
    icon: "TrendingUp",
    title: "Рост, а не топтание на месте",
    description: "Постоянно тестируем гипотезы, оптимизируем и снижаем стоимость заявки каждый месяц.",
  },
  {
    icon: "Shield",
    title: "Опыт в вашей нише",
    description: "Работали с более чем 30 нишами. Знаем особенности вашего рынка и конкурентов.",
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
            Мы не просто настраиваем рекламу — мы отвечаем за ваш результат
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
