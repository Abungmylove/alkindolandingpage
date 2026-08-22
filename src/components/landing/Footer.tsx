import logo from "@/assets/alk.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <img src={logo} alt="Alkindo Mitraraya" className="h-12 w-auto mb-3" />
            <p className="text-sm text-background/50 leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>
          <div>

          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-3">{t("company")}</h4>
            <ul className="space-y-2 text-sm text-background/50">
              <li><a href="#about" className="hover:text-background/80 transition-colors">{t("about")}</a></li>
              <li><a href="#industries" className="hover:text-background/80 transition-colors">{t("industries")}</a></li>
              <li><a href="#product" className="hover:text-background/80 transition-colors">{t("product")}</a></li>
              <li><a href="#contact" className="hover:text-background/80 transition-colors">{t("contact")}</a></li>
            </ul>
          </div>
          <div>
        
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Alkindo Mitraraya. {t("copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
