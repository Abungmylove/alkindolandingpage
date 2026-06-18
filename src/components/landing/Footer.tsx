import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <img src={logo} alt="PT Nova Sindo Raya" className="h-12 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm text-background/50 leading-relaxed">
              High-quality industrial coating and chemical solutions for various industry sectors.
            </p>
          </div>
          <div>

          </div>
          <div>
            <h4 className="font-heading font-semibold text-background mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-background/50">
              <li><a href="#about" className="hover:text-background/80 transition-colors">About Us</a></li>
              <li><a href="#industries" className="hover:text-background/80 transition-colors">Industries</a></li>
              <li><a href="#product" className="hover:text-background/80 transition-colors">Product</a></li>
              <li><a href="#contact" className="hover:text-background/80 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
        
          </div>
        </div>
        <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
          © {new Date().getFullYear()} PT Nova Sindo Raya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
