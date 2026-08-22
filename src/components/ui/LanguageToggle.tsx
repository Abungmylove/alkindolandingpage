import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./button";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-background/10 p-1 rounded-full">
      <Button
        variant={language === "id" ? "ocean" : "ghost"}
        size="sm"
        onClick={() => setLanguage("id")}
        className="w-9 h-9 p-0 rounded-full"
      >
        ID
      </Button>
      <Button
        variant={language === "en" ? "ocean" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="w-9 h-9 p-0 rounded-full"
      >
        EN
      </Button>
    </div>
  );
};
