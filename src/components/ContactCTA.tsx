import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Stop Letting QA Bottlenecks Slow Your Releases
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
            Tell us about your testing challenges. We'll match you with QA automation engineers who can start contributing within days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/alin-eastcodestudio/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                <Mail className="w-5 h-5" />
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-8">
            We respond within 24 hours. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
