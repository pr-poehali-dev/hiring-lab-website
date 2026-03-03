import Icon from "@/components/ui/icon";

const serviceLinks = [
  { label: "Подбор линейного персонала", href: "#services" },
  { label: "Подбор управленцев", href: "#services" },
  { label: "Executive Search", href: "#services" },
  { label: "HR-аудит", href: "#services" },
  { label: "Построение HR-системы", href: "#services" },
];

const companyLinks = [
  { label: "О нас", href: "#approach" },
  { label: "Кейсы", href: "#cases" },
  { label: "Блог", href: "#" },
  { label: "Контакты", href: "#contacts" },
];

const socialLinks = [
  { icon: "MessageCircle", href: "#", label: "Telegram" },
  { icon: "Phone", href: "#", label: "WhatsApp" },
  { icon: "Linkedin", href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-3 font-heading text-2xl font-bold mb-4">
              <img
                src="https://cdn.poehali.dev/projects/37cee2e2-53a5-4b06-a0a0-fb53f1ff84f4/bucket/404d8d31-8e4a-4b46-a411-84ade1802785.jpg"
                alt="НаймLab"
                className="h-9 w-9 rounded-xl object-cover"
              />
              <span className="text-white">Найм</span>
              <span className="text-accent">Lab</span>
            </a>
            <p className="font-body text-sm text-gray-400 leading-relaxed mb-6">
              Системный подбор персонала для бизнеса. Находим людей, которые
              усиливают компании.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Услуги
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Компания
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon
                  name="Phone"
                  size={16}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <a
                  href="tel:+74950000000"
                  className="font-body text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +7 (495) 000-00-00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Mail"
                  size={16}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <a
                  href="mailto:hello@naimlab.ru"
                  className="font-body text-sm text-gray-400 hover:text-white transition-colors"
                >
                  hello@naimlab.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="MapPin"
                  size={16}
                  className="text-accent mt-0.5 flex-shrink-0"
                />
                <span className="font-body text-sm text-gray-400">
                  Москва, ул. Пресненская наб., 12
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-gray-500">
              &copy; 2025 НаймLab. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-body text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="font-body text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
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