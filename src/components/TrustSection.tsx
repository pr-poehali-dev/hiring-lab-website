import Icon from "@/components/ui/icon";

const trustItems = [
  {
    icon: "FileText",
    title: "Работа по договору",
    description: "Официальное оформление с чёткими KPI и сроками",
  },
  {
    icon: "Shield",
    title: "NDA",
    description: "Подписываем соглашение о неразглашении информации",
  },
  {
    icon: "Lock",
    title: "Конфиденциальность",
    description: "Данные кандидатов и компании под защитой",
  },
  {
    icon: "Star",
    title: "Отзывы клиентов",
    description: "Более 50 рекомендаций от собственников бизнеса",
  },
];

const testimonials = [
  {
    quote:
      "НаймLab закрыл нам 5 позиций senior-разработчиков за 3 недели. Раньше мы тратили на это месяцы. Качество кандидатов превзошло все ожидания.",
    author: "Алексей Петров",
    position: "CEO",
    company: "TechVision",
  },
  {
    quote:
      "Благодаря системному подходу к подбору мы снизили текучку с 50% до 12% за полгода. Это лучшая инвестиция в HR, которую мы сделали.",
    author: "Мария Иванова",
    position: "HR-директор",
    company: "E-mart",
  },
  {
    quote:
      "Искали операционного директора полгода. НаймLab нашёл идеального кандидата за 3 недели. Работает у нас уже 2 года — лучший найм в истории компании.",
    author: "Дмитрий Козлов",
    position: "Основатель",
    company: "ProdGroup",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            Работаем{" "}
            <span className="gradient-primary-text">прозрачно</span> и
            безопасно
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Гарантируем профессионализм и конфиденциальность на каждом этапе
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl hover:bg-light transition-colors duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
                <Icon name={item.icon as "FileText"} size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-light rounded-2xl p-7 relative">
              <div className="text-5xl font-heading text-primary/20 leading-none mb-3">"</div>
              <p className="font-body text-sm text-gray-600 leading-relaxed mb-6 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-sm">
                    {t.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-heading font-semibold text-dark text-sm">{t.author}</div>
                  <div className="font-body text-xs text-gray-400">{t.position}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
