import { TestTube2, Workflow, Shield, Cpu, GitBranch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TestTube2,
    title: "End-to-End Test Automation",
    description: "Full test coverage with Selenium, Playwright, Cypress and others. We build frameworks from scratch or fix what's broken.",
  },
  {
    icon: Workflow,
    title: "CI/CD Test Integration",
    description: "Automated test suites wired into Jenkins, GitHub Actions, CircleCI, or your existing pipeline. Tests run on every push.",
  },
  {
    icon: Shield,
    title: "Test Strategy & Architecture",
    description: "Audit your current QA process, eliminate flaky tests, and design a testing strategy that actually scales.",
  },
  {
    icon: Cpu,
    title: "API & Performance Testing",
    description: "Automated API validation, load testing, and contract testing to catch issues before they reach production.",
  },
  {
    icon: GitBranch,
    title: "Multi-Stack Expertise",
    description: "Python, Java, TypeScript, and others; our engineers work in your stack. No retraining, no ramp-up friction.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Software Testing, Done Right
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From flaky test suites to full CI/CD integration, our engineers solve the QA problems slowing your team down.
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
              Not sure what you need?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Tell us about your QA challenges. We'll recommend the right engineers and approach.
            </p>
            <a href="https://calendly.com/alin-eastcodestudio/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="group/btn">
                Request Engineers
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
