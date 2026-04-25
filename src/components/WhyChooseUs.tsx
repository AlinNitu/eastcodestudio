import { CheckCircle, Globe, Clock, Award, Shield } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "EU & US Time Zone Overlap",
    description: "Eastern European based engineers who work your hours. Real-time collaboration, not async handoffs.",
  },
  {
    icon: Shield,
    title: "Vetted QA Specialists",
    description: "Every engineer is pre-screened for test automation expertise. No generalists, no manual-only testers.",
  },
  {
    icon: Clock,
    title: "Start in Days, Not Months",
    description: "Skip the 3-month hiring cycle. Get matched with available QA engineers within a week.",
  },
  {
    icon: Award,
    title: "Startup & Scaleup Focus",
    description: "We understand fast-moving teams. Our engineers adapt quickly and hit the ground running.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why East Code Studio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              QA Engineers Who Actually Ship
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Hiring strong test automation engineers is hard. We've already done the vetting. Our QA engineers integrate into your existing workflows, write stable tests, and help your developers move faster — not slower.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {["Selenium, Playwright, Cypress", "Java, Python, TypeScript", "CI/CD Pipeline Experts", "Flexible Contractor Model"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
