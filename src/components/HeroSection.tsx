import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), 
                             linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Premium Development Solutions from Romania
            </span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            Build Faster with{" "}
            <span className="text-gradient">Expert Engineers</span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Access Romania's top software talent. Developers, DevOps, QA, and Product Managers ready to accelerate your projects.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button variant="hero" size="xl" className="group">
              Start Building Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore Our Services
            </Button>
          </div>

          {/* Stats/Features */}
          <div 
            className="grid grid-cols-3 gap-8 max-w-xl animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            {[
              { icon: Code2, label: "Expert Developers" },
              { icon: Zap, label: "Fast Scaling" },
              { icon: Users, label: "Dedicated Teams" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-primary-foreground/80 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute right-0 top-1/3 w-96 h-96 hidden lg:block">
        <div className="relative w-full h-full">
          <div className="absolute top-0 right-20 w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center animate-float">
            <Code2 className="w-10 h-10 text-accent" />
          </div>
          <div 
            className="absolute top-32 right-0 w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center animate-float"
            style={{ animationDelay: '1s' }}
          >
            <Zap className="w-8 h-8 text-primary-foreground/60" />
          </div>
          <div 
            className="absolute bottom-0 right-32 w-24 h-24 rounded-2xl bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center animate-float"
            style={{ animationDelay: '2s' }}
          >
            <Users className="w-12 h-12 text-accent/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
