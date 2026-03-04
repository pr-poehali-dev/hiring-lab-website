import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    task: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contacts" className="relative py-20 md:py-28 gradient-primary overflow-hidden">
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Получите бесплатный аудит рекламы
          </h2>
          <p className="font-body text-lg text-white/80 mb-10">
            Проанализируем текущую ситуацию и покажем, сколько вы теряете. Без обязательств — за 24 часа.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded-xl px-5 py-3.5 font-body text-sm text-dark placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/50 transition-shadow"
              />
              <input
                type="text"
                name="company"
                placeholder="Компания / сайт"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white rounded-xl px-5 py-3.5 font-body text-sm text-dark placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/50 transition-shadow"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white rounded-xl px-5 py-3.5 font-body text-sm text-dark placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/50 transition-shadow"
            />
            <textarea
              name="task"
              placeholder="Что сейчас запущено? Какой бюджет? Какая цель?"
              rows={4}
              value={formData.task}
              onChange={handleChange}
              className="w-full bg-white rounded-xl px-5 py-3.5 font-body text-sm text-dark placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/50 transition-shadow resize-none"
            />
            <Button
              type="submit"
              className="w-full sm:w-auto bg-white text-primary font-body font-semibold text-base rounded-xl h-14 px-12 hover:bg-white/90 transition-colors shadow-lg"
            >
              Получить бесплатный аудит
            </Button>
          </form>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/60 font-body text-sm">
            <Icon name="Phone" size={16} />
            <span>Или позвоните: +7 (495) 000-00-00</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
