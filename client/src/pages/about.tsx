import { Card } from "@/components/ui/card";
import { Target, Users, Zap, Globe } from "lucide-react";
import cityscapeImage from "@assets/generated_images/Global_cityscape_aerial_view_5fa70326.png";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver nothing but the highest quality in every project we undertake.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand their vision and bring it to life.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and modern development practices.",
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Creating solutions that make a real difference in businesses and communities.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cityscapeImage}
            alt="City skyline"
            className="w-full h-full object-cover"
            data-testid="img-about-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6" data-testid="text-about-title">
            About Milespace
          </h1>
          <p className="text-xl text-white/90" data-testid="text-about-subtitle">
            Pioneering digital excellence for global teams
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-6" data-testid="text-story-title">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Milespace was founded with a clear vision: to deliver world-class software development services that empower businesses to thrive in the digital age. We've built a reputation for excellence by combining technical expertise with creative problem-solving.
                </p>
                <p>
                  Our team of passionate developers, designers, and strategists works tirelessly to transform ideas into powerful digital solutions. We believe that great software should not only function flawlessly but also provide exceptional user experiences that drive business growth.
                </p>
                <p>
                  From startups to established enterprises, we've partnered with diverse clients across various industries, helping them navigate digital transformation and achieve their business objectives through innovative technology solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-8 text-center">
                <div className="font-display text-4xl font-bold text-primary mb-2" data-testid="text-stat-projects">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="font-display text-4xl font-bold text-primary mb-2" data-testid="text-stat-clients">
                  30+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="font-display text-4xl font-bold text-primary mb-2" data-testid="text-stat-years">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-8 text-center">
                <div className="font-display text-4xl font-bold text-primary mb-2" data-testid="text-stat-satisfaction">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4" data-testid="text-values-title">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover-elevate active-elevate-2 transition-all" data-testid={`card-value-${index}`}>
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" data-testid={`icon-value-${index}`} />
                <h3 className="font-semibold text-xl mb-3" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-semibold mb-6" data-testid="text-location-title">
            Globally connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We partner with clients across Africa, Europe, the Middle East, and North America—bringing local insight and international best practices to every engagement.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-lg" data-testid="text-location">Remote-first, collaborating worldwide</span>
          </div>
        </div>
      </section>
    </div>
  );
}
