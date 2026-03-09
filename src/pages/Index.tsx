import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Globe, Server, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import profilePhoto from "@/assets/profile-photo.png";

const skills = [
  { icon: Code2, name: "Frontend", items: ["React.js", "Vue.js", "Tailwind CSS", "Bootstrap", "JavaScript"] },
  { icon: Server, name: "Backend", items: ["PHP", "Laravel", "CodeIgniter", "Python", "REST APIs"] },
  { icon: Database, name: "Database", items: ["MySQL", "Query Optimization", "Data Indexing"] },
  { icon: Globe, name: "CMS & Ecommerce", items: ["WordPress", "Shopify", "OpenCart"] },
  { icon: Shield, name: "Security", items: ["Malware Removal", "Firewalls", "SSL", "Hardening"] },
  { icon: Zap, name: "DevOps", items: ["Linux Admin", "cPanel", "VPS", "Git", "Performance"] },
];

const experience = [
  {
    role: "Webmaster / Web Developer",
    company: "SpaceCenter Systems",
    period: "Mar 2021 – Present",
    location: "Freelance",
    highlights: [
      "Develop and maintain WordPress websites for multiple business clients",
      "Implement performance optimizations and security improvements",
      "Manage VPS and dedicated server hosting environments",
    ],
  },
  {
    role: "Head of Web Development",
    company: "Staff India",
    period: "Mar 2017 – Oct 2023",
    location: "Bangladesh",
    highlights: [
      "Led web development team and delivered multiple client projects",
      "Managed 20+ client websites and dedicated servers",
      "Delivered custom solutions integrating third-party APIs",
    ],
  },
];

export default function Index() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl animate-pulse-slow" />

        <div className="container relative mx-auto px-4 pt-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono-display text-primary">
                📍 Warren, MI • Available for hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Omor Faruk</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              Full-Stack Web Developer with <span className="text-foreground font-medium">6+ years</span> of experience
              building scalable web applications, high-performance websites, and secure hosting environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="group flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-glow"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:mdomorfaruk.lu.cse@gmail.com"
                className="rounded-md border border-border px-6 py-3 font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Terminal snippet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 rounded-lg border border-border bg-card p-4 shadow-card max-w-lg"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
              </div>
              <pre className="font-mono-display text-sm text-muted-foreground">
                <span className="text-primary">$</span> whoami{"\n"}
                <span className="text-foreground">Full-Stack Developer | PHP | Laravel | React</span>{"\n"}
                <span className="text-primary">$</span> location{"\n"}
                <span className="text-foreground">Warren, Michigan, USA</span>{"\n"}
                <span className="text-primary">$</span> status{"\n"}
                <span className="text-primary">● Available for opportunities</span>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeading tag="// skills" title="Technical Expertise" description="Technologies and tools I work with to build robust web solutions." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-glow"
              >
                <skill.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-lg font-bold">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeading tag="// experience" title="Professional Journey" />
          <div className="mx-auto max-w-3xl space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative rounded-lg border border-border bg-card p-6 pl-8"
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-gradient-primary" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-primary font-mono-display text-sm">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono-display">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-12 shadow-card"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Let's Work Together</h2>
            <p className="mt-4 text-muted-foreground">
              Looking for a dedicated full-stack developer? I'm available for freelance projects and full-time opportunities.
            </p>
            <a
              href="mailto:mdomorfaruk.lu.cse@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-glow"
            >
              Send a Message
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
