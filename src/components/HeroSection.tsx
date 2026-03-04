import { Button } from "@/components/ui/button";

const stats = [
  { value: "200+", label: "проектов запущено" },
  { value: "3.2x", label: "средний рост трафика" },
  { value: "от 7 дней", label: "до первых заявок" },
  { value: "8 лет", label: "на рынке" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-dark overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark" />

      <div className="absolute top-[15%] left-[8%] w-3 h-3 rounded-full bg-primary/40 animate-pulse-glow" />
      <div className="absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-accent/40 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[30%] left-[15%] w-4 h-4 rounded-full bg-primary/30 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-[45%] right-[20%] w-2.5 h-2.5 rounded-full bg-accent/30 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-[40%] right-[8%] w-3 h-3 rounded-full bg-primary/20 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] left-[5%] w-2 h-2 rounded-full bg-accent/20 animate-pulse-glow" style={{ animationDelay: "0.8s" }} />

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-body text-sm text-accent font-medium">Яндекс Директ · SEO · Контекстная реклама</span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in">
              Приводим{" "}
              <span className="gradient-primary-text">клиентов</span>{" "}
              из интернета — системно
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-body max-w-xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Настраиваем Яндекс Директ и продвигаем сайты в поиске. Без слива бюджета — только целевые заявки и рост продаж.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                className="gradient-primary text-white font-body font-semibold text-base rounded-xl h-14 px-8 border-0 hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
                size="lg"
                onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
              >
                Получить бесплатный аудит
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white font-body font-semibold text-base rounded-xl h-14 px-8 bg-transparent hover:bg-white/10 hover:text-white transition-all"
                size="lg"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              >
                Посмотреть тарифы
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left border-l-2 border-primary/40 pl-4">
                  <div className="font-heading font-bold text-2xl md:text-3xl gradient-primary-text mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-end justify-center relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-accent/20 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRoZ3k4cWE2b3VzcDk1dXNkd3R2ajU4ZjR5aG41aWI4b2lnMHh2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IfFmnaxJzjzD6wFMls/giphy.gif"
              alt="Реклама и продвижение"
              className="relative z-10 w-full max-w-lg object-contain rounded-2xl"
              style={{
                mixBlendMode: "screen",
                filter: "brightness(1.0) contrast(1.1)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
