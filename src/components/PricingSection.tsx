import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Стандарт",
    subtitle: "Линейный персонал",
    price: "от 30 000 \u20BD",
    priceNote: "фикс + 8% от оклада",
    popular: false,
    features: [
      "До 5 вакансий",
      "Срок 7\u201314 дней",
      "1 рекрутер",
      "Гарантия 60 дней",
      "Еженедельные отчёты",
    ],
  },
  {
    name: "Бизнес",
    subtitle: "Управленцы и эксперты",
    price: "от 60 000 \u20BD",
    priceNote: "фикс + 15% от оклада",
    popular: true,
    features: [
      "Без ограничений",
      "Срок 14\u201330 дней",
      "Выделенная команда",
      "Гарантия 90 дней",
      "Оценка компетенций",
      "Сопровождение адаптации",
    ],
  },
  {
    name: "Executive",
    subtitle: "C-level и топ-менеджмент",
    price: "Индивидуально",
    priceNote: "по результатам брифа",
    popular: false,
    features: [
      "Конфиденциальный поиск",
      "Headhunting",
      "Персональный партнёр",
      "Гарантия 120 дней",
      "Полная оценка",
      "Коучинг при входе",
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-light overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            <span className="gradient-primary-text">Тарифы</span>
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Прозрачные условия без скрытых платежей
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-white shadow-2xl shadow-primary/15 md:scale-105 border-2 border-primary/20 z-10"
                  : "bg-white shadow-sm hover:shadow-lg border border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="gradient-primary text-white text-xs font-body font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                    Популярный
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-1">
                  {plan.name}
                </h3>
                <p className="font-body text-sm text-gray-400">
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="font-heading font-bold text-3xl text-dark mb-1">
                  {plan.price}
                </div>
                <p className="font-body text-sm text-gray-400">
                  {plan.priceNote}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular
                          ? "gradient-primary"
                          : "bg-accent/15"
                      }`}
                    >
                      <Icon
                        name="Check"
                        size={12}
                        className={plan.popular ? "text-white" : "text-accent"}
                      />
                    </div>
                    <span className="font-body text-sm text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {plan.popular ? (
                <Button className="w-full gradient-primary text-white font-body font-semibold rounded-xl h-12 border-0 hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Выбрать тариф
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary font-body font-semibold rounded-xl h-12 hover:bg-primary/5 hover:text-primary transition-all"
                >
                  Выбрать тариф
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
