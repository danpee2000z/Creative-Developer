import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Smartphone, Palette, Zap, Code, Mail, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Beautiful, responsive websites built with modern technologies. From landing pages to full web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver seamless experiences on iOS and Android.",
  },
  {
    icon: Palette,
    title: "Graphics & AI",
    description: "Stunning visuals and designs powered by the latest AI tools. Logos, branding, and digital assets.",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern online store with seamless checkout experience",
    tags: ["React", "Node.js", "Stripe"],
    category: "Web",
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts and nutrition goals",
    tags: ["React Native", "Firebase"],
    category: "Mobile",
  },
  {
    title: "Brand Identity Package",
    description: "Complete visual identity for a tech startup",
    tags: ["AI Design", "Branding"],
    category: "Graphics",
  },
  {
    title: "Task Management Dashboard",
    description: "Productivity app with real-time collaboration features",
    tags: ["Next.js", "PostgreSQL"],
    category: "Web",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-lg font-semibold tracking-tight" data-testid="text-logo">
              Creative Developer
            </span>
            <div className="hidden items-center gap-6 md:flex">
              <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid="link-about">
                About
              </a>
              <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid="link-services">
                Services
              </a>
              <a href="#work" className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid="link-work">
                Work
              </a>
              <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid="link-contact">
                Contact
              </a>
            </div>
            <Button size="sm" data-testid="button-hire-me">
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col items-center text-center">
            <Badge variant="secondary" className="mb-6" data-testid="badge-location">
              Based in Nigeria
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl" data-testid="text-hero-title">
              Creative Developer
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl" data-testid="text-hero-subtitle">
              Full-stack digital creator building stunning websites, mobile apps, and graphics using the latest AI tools.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#work">
                <Button size="lg" data-testid="button-view-work">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" data-testid="button-get-in-touch">
                  Get in Touch
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* Subtle gradient background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/30 to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl" data-testid="text-about-title">
              About Me
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl" data-testid="text-about-description">
              I'm Creative Developer – a full-stack digital creator based in Nigeria. I build stunning websites, mobile apps, and graphics using the latest AI tools. Fast delivery. Clean code. Zero stress.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code className="h-5 w-5" />
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Badge variant="outline" className="text-sm">Zero Stress</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl" data-testid="text-services-title">
              What I Do
            </h2>
            <p className="text-muted-foreground" data-testid="text-services-subtitle">
              End-to-end digital solutions for modern businesses
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={service.title} className="border-card-border bg-background" data-testid={`card-service-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl" data-testid="text-work-title">
              Featured Work
            </h2>
            <p className="text-muted-foreground" data-testid="text-work-subtitle">
              A selection of recent projects
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={project.title} className="group overflow-visible hover-elevate" data-testid={`card-project-${index}`}>
                <CardContent className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground" data-testid={`text-project-description-${index}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tag} variant="outline" className="text-xs" data-testid={`badge-tag-${index}-${tagIndex}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl" data-testid="text-contact-title">
              Let's Build Something Amazing
            </h2>
            <p className="mb-8 max-w-xl text-muted-foreground" data-testid="text-contact-subtitle">
              Ready to bring your ideas to life? Get in touch and let's create something extraordinary together.
            </p>
            <a href="mailto:hello@creativedeveloper.com">
              <Button size="lg" data-testid="button-contact-cta">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} Creative Developer. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" data-testid="button-social-github">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
