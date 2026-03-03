import { Button } from "@/components/ui/button";

const stats = [
  { value: "350+", label: "проектов" },
  { value: "95%", label: "релевантных кандидатов" },
  { value: "21 день", label: "средний срок закрытия" },
  { value: "14 лет", label: "на рынке" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/projects/37cee2e2-53a5-4b06-a0a0-fb53f1ff84f4/files/1421a07f-7235-4b2a-9646-aba451df4caa.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-dark/85" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern-dark" />

      {/* Floating decorative elements */}
      <div className="absolute top-[15%] left-[8%] w-3 h-3 rounded-full bg-primary/40 animate-pulse-glow" />
      <div className="absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-accent/40 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[30%] left-[15%] w-4 h-4 rounded-full bg-primary/30 animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-[45%] right-[20%] w-2.5 h-2.5 rounded-full bg-accent/30 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-[40%] right-[8%] w-3 h-3 rounded-full bg-primary/20 animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[60%] left-[5%] w-2 h-2 rounded-full bg-accent/20 animate-pulse-glow" style={{ animationDelay: "0.8s" }} />
      <div className="absolute top-[20%] left-[40%] w-1.5 h-1.5 rounded-full bg-primary/30 animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
      <div className="absolute bottom-[25%] left-[60%] w-3.5 h-3.5 rounded-full bg-accent/25 animate-pulse-glow" style={{ animationDelay: "1.2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text */}
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in">
              Системный подбор{" "}
              <span className="gradient-primary-text">персонала</span> для роста
              бизнеса
            </h1>

            <p className="text-lg md:text-xl text-gray-300 font-body max-w-xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Закрываем ключевые вакансии за 14–30 дней. Подбираем сотрудников,
              которые усиливают компанию, а не создают текучку.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                className="gradient-primary text-white font-body font-semibold text-base rounded-xl h-14 px-8 border-0 hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
                size="lg"
              >
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white font-body font-semibold text-base rounded-xl h-14 px-8 bg-transparent hover:bg-white/10 hover:text-white transition-all"
                size="lg"
              >
                Рассчитать стоимость
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center md:text-left border-l-2 border-primary/40 pl-4"
                >
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

          {/* Right: Person with computer */}
          <div className="hidden lg:flex items-end justify-center relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Glow behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent/15 rounded-full blur-2xl" />
            <img
              src="https://cdn.poehali.dev/projects/37cee2e2-53a5-4b06-a0a0-fb53f1ff84f4/files/c999717d-9e42-4e90-9b7d-5f226a751c58.jpg"
              alt="HR специалист за компьютером"
              className="relative z-10 w-full max-w-lg object-cover"
              style={{
                mixBlendMode: "screen",
                maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
};

export default HeroSection;