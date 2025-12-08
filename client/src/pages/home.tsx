import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
import { Globe, Smartphone, Palette, Zap, Code, ArrowRight, Github, Linkedin, Twitter, Quote, ExternalLink } from "lucide-react";

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
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern online store with seamless checkout experience",
    longDescription: "Built a complete e-commerce solution featuring product catalog, cart management, secure Stripe payments, and an admin dashboard. Implemented real-time inventory tracking and email notifications for orders.",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    category: "Web",
    results: "40% increase in conversion rate",
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts and nutrition goals",
    longDescription: "Developed a cross-platform fitness application with workout logging, nutrition tracking, progress charts, and social features. Integrated with health APIs for automatic step counting and heart rate monitoring.",
    tags: ["React Native", "Firebase", "HealthKit"],
    category: "Mobile",
    results: "50K+ downloads in first month",
  },
  {
    id: 3,
    title: "Brand Identity Package",
    description: "Complete visual identity for a tech startup",
    longDescription: "Created comprehensive brand guidelines including logo design, color palette, typography system, and marketing collateral. Used AI tools to generate unique visual elements and mockups.",
    tags: ["AI Design", "Branding", "Figma"],
    category: "Graphics",
    results: "Brand recognition increased 3x",
  },
  {
    id: 4,
    title: "Task Management Dashboard",
    description: "Productivity app with real-time collaboration features",
    longDescription: "Built a collaborative task management platform with real-time updates, team workspaces, project timelines, and automated reporting. Features include drag-and-drop kanban boards and integrations with popular tools.",
    tags: ["Next.js", "PostgreSQL", "WebSockets"],
    category: "Web",
    results: "25% team productivity boost",
  },
  {
    id: 5,
    title: "Food Delivery App",
    description: "On-demand food ordering and delivery platform",
    longDescription: "Created a full-featured food delivery application with restaurant listings, real-time order tracking, payment processing, and driver management. Includes both customer and restaurant partner apps.",
    tags: ["React Native", "Node.js", "Maps API"],
    category: "Mobile",
    results: "10K orders in first week",
  },
  {
    id: 6,
    title: "AI Marketing Assets",
    description: "Automated social media graphics generation",
    longDescription: "Developed an AI-powered system for generating consistent social media graphics, ad creatives, and promotional materials. Trained custom models for brand-specific visual styles.",
    tags: ["AI Generation", "Automation", "Design"],
    category: "Graphics",
    results: "80% reduction in design time",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "CEO, TechStart Lagos",
    content: "Creative Developer transformed our outdated website into a modern, conversion-focused platform. The attention to detail and quick turnaround exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    role: "Founder, FitLife App",
    content: "The mobile app they built for us is absolutely stunning. Our users love the intuitive design and smooth performance. Highly recommend for any app project.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Marketing Director, BrandCo",
    content: "The AI-generated graphics and brand identity work was exceptional. Fast delivery and the results speak for themselves - our brand looks premium and professional.",
    rating: 5,
  },
];

type FilterCategory = "All" | "Web" | "Mobile" | "Graphics";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filterCategories: FilterCategory[] = ["All", "Web", "Mobile", "Graphics"];

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
              <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid="link-testimonials">
                Testimonials
              </a>
              <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground" data-testid="link-contact">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a href="#contact">
                <Button size="sm" data-testid="button-hire-me">
                  Hire Me
                </Button>
              </a>
            </div>
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

      {/* Portfolio/Work Section with Filtering */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl" data-testid="text-work-title">
              Featured Work
            </h2>
            <p className="mb-8 text-muted-foreground" data-testid="text-work-subtitle">
              A selection of recent projects
            </p>
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  data-testid={`button-filter-${category.toLowerCase()}`}
                  className="toggle-elevate"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-visible hover-elevate cursor-pointer" 
                data-testid={`card-project-${project.id}`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-6">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    {project.results && (
                      <span className="text-xs text-muted-foreground">{project.results}</span>
                    )}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                    {expandedProject === project.id ? project.longDescription : project.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tag} variant="outline" className="text-xs" data-testid={`badge-tag-${project.id}-${tagIndex}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      type="button"
                      variant="ghost" 
                      size="sm" 
                      className="text-xs" 
                      data-testid={`button-view-case-study-${project.id}`}
                    >
                      {expandedProject === project.id ? "Less" : "Case Study"}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl" data-testid="text-testimonials-title">
              What Clients Say
            </h2>
            <p className="text-muted-foreground" data-testid="text-testimonials-subtitle">
              Feedback from people I've worked with
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="border-card-border bg-background" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6">
                  <Quote className="mb-4 h-8 w-8 text-muted-foreground/30" />
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground" data-testid={`text-testimonial-content-${index}`}>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl" data-testid="text-contact-title">
              Let's Build Something Amazing
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground" data-testid="text-contact-subtitle">
              Ready to bring your ideas to life? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <ContactForm />
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
