import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    
    const fullName = data.get("fullName");
    const company = data.get("company");
    const email = data.get("email");
    const phone = data.get("phone") || "-";
    const message = data.get("message");

    // NOMOR WA (Ubah sesuai kebutuhan)
    const nomorWA = "6285123901305"; 

    const teksPesan = `Halo Nova Sindo Raya, ada yang ingin kami diskusikan:%0A%0A` +
                      `*Nama:* ${fullName}%0A` +
                      `*Perusahaan:* ${company}%0A` +
                      `*Email:* ${email}%0A` +
                      `*No. HP:* ${phone}%0A%0A` +
                      `*Pesan:*%0A${message}`;

    setTimeout(() => {
      setLoading(false);
      window.open(`https://wa.me/${nomorWA}?text=${teksPesan}`, "_blank");
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Please send the pre-filled message in your chat app.",
      });
      target.reset();
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
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Ready to Discuss?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our team is ready to help with your industrial coating and chemical needs. 
            Contact us for a free consultation.
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
              { icon: MapPin, title: "Address", text: "Jl. Jend Gatot Subroto KM. 8, Kadu Jaya, Tangerang, Kabupaten Tangerang, Banten 15810" },
              { icon: Phone, title: "Phone", text: "+62 xxx xxxx xxxx" },
              { icon: Mail, title: "Email", text: "info@novasindoraya.com" },
            ].map((info) => (
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
              Chat via WhatsApp
            </a>

            {/* GOOGLE MAPS AKTIF (Menggantikan kode placeholder kemarin) */}
            <div className="rounded-xl overflow-hidden border border-border h-48 w-full shadow-sm bg-muted">
              <iframe
                /* ⚠️ COPY-PASTE LINK DARI LANGKAH 1 KE DALAM SRC DI BAWAH INI */
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5212683908875!2d106.5647565!3d-6.1947264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fe1df21c8181%3A0x2db446bf9583b40e!2sJl.%20Raya%20Gatot%20Subroto%20Km.8%2C%20Kadu%20Jaya%2C%20Kec.%20Curug%2C%20Kabupaten%20Tangerang%2C%20Banten%2015810!5e0!3m2!1sid!2sid!4v1716584300000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nova Sindo Raya Location Map"
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
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input required name="fullName" placeholder="Your Name" className="min-h-[44px]" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <Input required name="company" placeholder="Company name" className="min-h-[44px]" />
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input required name="email" type="email" placeholder="email@company.com" className="min-h-[44px]" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                <Input name="phone" placeholder="+62 xxx xxxx" className="min-h-[44px]" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <Textarea required name="message" rows={4} placeholder="Tell us about your coating or product needs..." />
            </div>
            
            <Button type="submit" variant="ocean" size="lg" className="w-full min-h-[48px]" disabled={loading}>
              {loading ? "Redirecting..." : (
                <>Send Message <Send size={16} /></>
              )}
            </Button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;