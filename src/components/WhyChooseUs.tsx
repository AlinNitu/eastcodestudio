import { CheckCircle, Globe, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "EU & US Time Zone Coverage",
    description: "Our Romanian-based teams work hours that overlap with both European and American business schedules.",
  },
  {
    icon: Award,
    title: "Top Engineering Talent",
    description: "Romania ranks among the top countries for software engineering education and expertise.",
  },
  {
    icon: Clock,
    title: "Rapid Team Scaling",
    description: "Quickly scale your development capacity without the overhead of traditional hiring.",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "We've successfully delivered projects for startups and enterprises across multiple industries.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Development Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Based in Romania, East Code Studio bridges the gap between Eastern European engineering excellence and global business needs. We provide dedicated teams that feel like an extension of your own.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {["English Fluency", "Agile Methodology", "Transparent Communication", "Cultural Alignment"].map((item) => (
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
