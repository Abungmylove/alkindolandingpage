import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/alk.jpeg";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Our Partners", href: "#partners" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/40">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo - Centered */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a href="#hero" className="flex flex-col items-center gap-2">
            <img src={logo} alt="PT Nova Sindo Raya" className="h-10 md:h-14 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => navigate("/product-finder")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <Sparkles size={16} />
            Cari Produk
          </button>
          <button
            onClick={() => navigate("/coating-calculator")}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
          >
            <Calculator size={16} />
            Kalkulator Cat
          </button>
          <Button size="sm" variant="ocean" asChild>
            <a href="#contact">Request Quote</a>
          </Button>
        </div>

        {/* Mobile toggle - Right aligned */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  navigate("/product-finder");
                  setOpen(false);
                }}
                className="py-3 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors min-h-[44px] flex items-center gap-2"
              >
                <Sparkles size={16} />
                Cari Produk
              </button>
              <button
                onClick={() => {
                  navigate("/coating-calculator");
                  setOpen(false);
                }}
                className="py-3 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors min-h-[44px] flex items-center gap-2"
              >
                <Calculator size={16} />
                Kalkulator Cat
              </button>
              <Button variant="ocean" className="mt-2" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>Request Quote</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
