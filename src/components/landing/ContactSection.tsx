import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

const BANNED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.id",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
];

const isBusinessEmail = (email: string) => {
  const domain = email.split("@")[1]?.toLowerCase();
  return !!domain && !BANNED_DOMAINS.includes(domain);
};

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [emailError, setEmailError] = useState<string>("");

  const productInterests = [
    { id: "construction", labelKey: "industryConstruction" },
    { id: "printing-packaging", labelKey: "industryPrintingPackaging" },
    { id: "plastic-coating", labelKey: "industryPlasticCoating" },
    { id: "metal-coating", labelKey: "industryMetalCoating" },
    { id: "wood-coating", labelKey: "industryWoodCoating" },
    { id: "additives", labelKey: "industryAdditives" },
  ];

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setSelectedInterests([...selectedInterests, interest]);
    } else {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    }
  };

  const { t } = useLanguage();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const domain = email.split("@")[1]?.toLowerCase();
    
    if (domain && BANNED_DOMAINS.includes(domain)) {
      setEmailError(t("contactFormErrorBusinessEmail"));
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    
    const fullName = data.get("fullName");
    const company = data.get("company");
    const email = data.get("email") as string;
    const phone = data.get("phone") || "-";
    const message = data.get("message");
    const interests = selectedInterests.length > 0 ? selectedInterests.join(", ") : "-";

    // VALIDASI EMAIL BISNIS - Secondary guard check
    if (!isBusinessEmail(email)) {
      setLoading(false);
      toast({
        title: t("contactFormErrorBusinessEmail"),
        description: t("contactFormEmailHelp"),
        variant: "destructive",
      });
      return;
    }

    // NOMOR WA (Ubah sesuai kebutuhan)
    const nomorWA = "6285123901305"; 

    const teksPesan = `Halo Alkindo Mitraraya, ada yang ingin kami diskusikan:%0A%0A` +
                      `*Nama:* ${fullName}%0A` +
                      `*Perusahaan:* ${company}%0A` +
                      `*Email:* ${email}%0A` +
                      `*No. HP:* ${phone}%0A` +
                      `*Product Interest:* ${interests}%0A%0A` +
                      `*Pesan:*%0A${message}`;

    setTimeout(() => {
      setLoading(false);
      window.open(`https://wa.me/${nomorWA}?text=${teksPesan}`, "_blank");
      toast({
        title: t("contactToastRedirectTitle"),
        description: t("contactToastRedirectDesc"),
      });
      target.reset();
      setSelectedInterests([]);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-ocean opacity-[0.03]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3 block">
            {t("contactSectionLabel")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {t("contactSectionTitle")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("contactSectionSubtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          
          {/* Info Bisnis Sebelah Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: MapPin, title: t("contactInfoAddress"), text: t("contactInfoAddress") },
              { icon: Phone, title: t("contactInfoPhone"), text: t("contactInfoPhone") },
              { icon: Mail, title: t("contactInfoEmail"), text: t("contactInfoEmail") },
            ].map((info, index) => (
              <div key={info.title} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <info.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">{info.title}</h4>
                  <p className="text-sm text-muted-foreground">{info.text}</p>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/6285123901305"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[hsl(142,70%,40%)] text-white font-medium hover:bg-[hsl(142,70%,35%)] transition-colors min-h-[48px]"
            >
              <MessageCircle size={20} />
              {t("whatsappChat")}
            </a>

            {/* GOOGLE MAPS AKTIF (Menggantikan kode placeholder kemarin) */}
            <div className="rounded-xl overflow-hidden border border-border h-48 w-full shadow-sm bg-muted">
              <iframe
                /* ⚠️ COPY-PASTE LINK DARI LANGKAH 1 KE DALAM SRC DI BAWAH INI */
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d599.5010487076747!2d106.56119133730444!3d-6.208279051836945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1780662359075!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alkindo Mitraraya Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Utama Sebelah Kanan */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card rounded-xl p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactFormFullName")}</label>
                <Input required name="fullName" placeholder={t("contactFormPlaceholderName")} className="min-h-[44px]" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactFormCompany")}</label>
                <Input required name="company" placeholder={t("contactFormPlaceholderCompany")} className="min-h-[44px]" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactFormEmail")}</label>
                <Input 
                  required 
                  name="email" 
                  type="email" 
                  placeholder={t("contactFormPlaceholderEmail")} 
                  className="min-h-[44px]" 
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="text-xs text-red-500 mt-1.5">
                    {emailError}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1.5">
                  {t("contactFormEmailHelp").replace("name@company.com", "name@company.com")}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactFormPhone")}</label>
                <Input name="phone" placeholder={t("contactFormPlaceholderPhone")} className="min-h-[44px]" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-3 block">{t("contactFormProductInterest")}</label>
              <div className="grid grid-cols-2 gap-3">
                {productInterests.map((interest) => (
                  <div key={interest.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={interest.id}
                      checked={selectedInterests.includes(interest.id)}
                      onCheckedChange={(checked) => handleInterestChange(interest.id, checked as boolean)}
                    />
                    <Label htmlFor={interest.id} className="text-sm font-normal cursor-pointer">
                      {t(interest.labelKey)}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactFormMessage")}</label>
              <Textarea required name="message" rows={4} placeholder={t("contactFormPlaceholderMessage")} />
            </div>
            
            <Button type="submit" variant="ocean" size="lg" className="w-full min-h-[48px]" disabled={loading || !!emailError}>
              {loading ? t("contactButtonRedirecting") : (
                <>{t("contactButtonSend")} <Send size={16} /></>
              )}
            </Button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
