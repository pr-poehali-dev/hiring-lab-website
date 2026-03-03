import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Подход", href: "#approach" },
  { label: "Кейсы", href: "#cases" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/80 backdrop-blur-xl shadow-lg shadow-dark/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/37cee2e2-53a5-4b06-a0a0-fb53f1ff84f4/bucket/f5a34b6b-33d0-41a4-8a5a-9a1547e11920.PNG"
              alt="НаймLab"
              className="h-10 w-10 object-contain"
              style={{ mixBlendMode: "multiply", filter: "brightness(1.2)" }}
            />
            <span className="font-heading text-xl md:text-2xl font-bold">
              <span className="text-white">Найм</span>
              <span className="text-accent">Lab</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:gradient-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="gradient-primary text-white font-body font-semibold rounded-xl px-6 h-10 border-0 hover:opacity-90 transition-opacity"
            >
              Оставить заявку
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? "X" : "Menu"}
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark/95 backdrop-blur-xl border-t border-white/10 px-4 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-base text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="gradient-primary text-white font-body font-semibold rounded-xl mt-2 w-full border-0 hover:opacity-90"
            >
              Оставить заявку
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;