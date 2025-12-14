import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-primary-foreground text-xl font-bold">East Code Studio</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed mb-6">
              Premium software development solutions from Romania, serving EU and US companies with excellence.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Bucharest, Romania</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["Software Developers", "DevOps Engineers", "QA Engineers", "Test Automation", "Product Managers"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Twitter className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors group"
              >
                <Mail className="w-5 h-5 text-primary-foreground group-hover:text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} East Code Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
