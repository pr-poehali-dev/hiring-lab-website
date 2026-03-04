import Icon from "@/components/ui/icon";

const serviceLinks = [
  { label: "Яндекс Директ", href: "#services" },
  { label: "SEO-продвижение", href: "#services" },
  { label: "Аудит рекламы", href: "#services" },
  { label: "Комплексное продвижение", href: "#services" },
];

const companyLinks = [
  { label: "Как работаем", href: "#approach" },
  { label: "Кейсы", href: "#cases" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

const socialLinks = [
  { icon: "MessageCircle", href: "#", label: "Telegram" },
  { icon: "Phone", href: "#", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <Icon name="TrendingUp" size={20} className="text-white" />
              </div>
              <span className="font-heading text-xl font-bold">
                <span className="text-white">Траф</span>
                <span className="text-accent">фик</span>
              </span>
            </a>
            <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
              Настройка Яндекс Директ и SEO-продвижение. Приводим клиентов из интернета системно.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <Icon name={social.icon as "MessageCircle"} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Услуги
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Компания
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="Phone" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+74950000000" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  +7 (495) 000-00-00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@traffik.ru" className="font-body text-sm text-gray-400 hover:text-white transition-colors">
                  hello@traffik.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-gray-400">Москва, работаем по всей России</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-gray-500">
              &copy; 2026 Траффик. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="font-body text-sm text-gray-500 hover:text-gray-300 transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
