import Icon from "@/components/ui/icon";

const cases = [
  {
    badge: "Стоматология",
    badgeColor: "bg-primary/10 text-primary",
    company: "Сеть клиник",
    challenge: "Стоимость заявки была 4 200 ₽ при среднем чеке 6 000 ₽. Реклама работала в убыток.",
    solution: "Пересобрали семантику, отключили РСЯ-площадки с мусорным трафиком, переработали посадочные страницы.",
    result: "Стоимость заявки снизилась до 890 ₽, выручка выросла в 3 раза",
    metric: "−79% CPL",
  },
  {
    badge: "Интернет-магазин",
    badgeColor: "bg-accent/10 text-accent",
    company: "Магазин мебели",
    challenge: "Сайт был на 8-й странице Яндекса, органического трафика почти не было.",
    solution: "Провели технический SEO-аудит, написали 60 SEO-статей, нарастили ссылочную массу.",
    result: "Вышли в топ-5 по 120 ключевым запросам за 4 месяца",
    metric: "+340% трафик",
  },
  {
    badge: "B2B услуги",
    badgeColor: "bg-orange-100 text-orange-600",
    company: "Юридическая компания",
    challenge: "Запускали рекламу самостоятельно — тратили 80 000 ₽/мес, получали 3–5 заявок.",
    solution: "Настроили Директ с нуля: сегментация по услугам, ретаргетинг, look-alike аудитории.",
    result: "50+ заявок в месяц при том же бюджете",
    metric: "×10 заявок",
  },
  {
    badge: "Ремонт",
    badgeColor: "bg-emerald-100 text-emerald-600",
    company: "Строительная компания",
    challenge: "Сезонный бизнес, зимой заявок почти нет, летом не успевают обрабатывать.",
    solution: "Выстроили SEO под сезон + Директ с динамическим управлением ставками по времени суток.",
    result: "Выровняли поток заявок, зима выросла в 4 раза",
    metric: "+280% зима",
  },
];

const CasesSection = () => {
  return (
    <section id="cases" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
            <span className="gradient-primary-text">Кейсы</span>
          </h2>
          <p className="font-body text-gray-500 text-lg">
            Реальные цифры реальных клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((caseItem, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="h-1 gradient-primary" />

              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body ${caseItem.badgeColor}`}>
                    {caseItem.badge}
                  </span>
                  <span className="font-body text-sm text-gray-400">{caseItem.company}</span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="AlertCircle" size={16} className="text-red-400" />
                    <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">Проблема</span>
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{caseItem.challenge}</p>
                </div>

                <div className="flex items-center gap-2 my-3">
                  <div className="h-px bg-gray-200 flex-1" />
                  <Icon name="ArrowDown" size={14} className="text-gray-300" />
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Lightbulb" size={16} className="text-amber-400" />
                    <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">Решение</span>
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{caseItem.solution}</p>
                </div>

                <div className="flex items-center gap-2 my-3">
                  <div className="h-px bg-gray-200 flex-1" />
                  <Icon name="ArrowDown" size={14} className="text-gray-300" />
                  <div className="h-px bg-gray-200 flex-1" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="CheckCircle" size={16} className="text-accent" />
                      <span className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider">Результат</span>
                    </div>
                    <p className="font-body text-sm text-gray-600 leading-relaxed">{caseItem.result}</p>
                  </div>
                  <div className="flex-shrink-0 ml-4 w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-center">
                    <span className="font-heading font-bold text-white text-sm leading-tight">{caseItem.metric}</span>
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
