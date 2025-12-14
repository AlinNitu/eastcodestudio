import { Code2, Users, Shield, Cpu, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Software Developers",
    description: "Full-stack, frontend, and backend engineers skilled in modern technologies and best practices.",
  },
  {
    icon: Cpu,
    title: "DevOps Engineers",
    description: "Cloud infrastructure, CI/CD pipelines, and scalable architecture experts.",
  },
  {
    icon: Shield,
    title: "QA Engineers",
    description: "Comprehensive testing strategies to ensure quality at every stage of development.",
  },
  {
    icon: Users,
    title: "Test Automation",
    description: "Automated testing frameworks that accelerate releases while maintaining quality.",
  },
  {
    icon: ClipboardList,
    title: "Product Managers",
    description: "Strategic product leadership to drive vision, roadmaps, and stakeholder alignment.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Services We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access top-tier engineering talent from Romania, ready to integrate seamlessly with your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group bg-hero rounded-2xl p-8 flex flex-col justify-center items-start">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Need a custom solution?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Let's discuss how we can build the perfect team for your project.
            </p>
            <Button variant="hero" size="lg" className="group/btn">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
