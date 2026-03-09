import { motion } from "framer-motion";
import { ExternalLink, Database, ShoppingCart, Users, Globe, Code2, Monitor } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    icon: Database,
    title: "Ecommerce Data Management System",
    description: "Integrates Amazon and eBay APIs to collect and manage product sales data. Processes 50k–100k records/month with optimized database queries and custom reporting.",
    tags: ["PHP", "Laravel", "MySQL", "REST API", "Amazon API", "eBay API"],
    highlight: true,
  },
  {
    icon: ShoppingCart,
    title: "Restaurant EPOS System",
    description: "Complete order, kitchen, and admin system with dynamic food item filtering, auto-amount cart, and printable bills.",
    tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
  },
  {
    icon: Users,
    title: "HR Manager",
    description: "Full HR solution with attendance tracking, salary counting, task assigning, leave management, live messaging, and interview candidate tracking.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
  {
    icon: Globe,
    title: "Multi-Client WordPress Portfolio",
    description: "Developed and maintained WordPress sites for multiple business clients with performance optimization, SEO improvements, and security hardening.",
    tags: ["WordPress", "PHP", "cPanel", "SEO"],
  },
  {
    icon: Monitor,
    title: "City Guide Mobile App",
    description: "Android-based city guide showing nearby hospitals, bus stations, restaurants, and travel spots using GPS and maps integration.",
    tags: ["Android", "Java", "Google Maps API"],
  },
  {
    icon: Code2,
    title: "Office Management System",
    description: "Web-based system with admin/employee accounts, attendance management, task system, and dynamic messaging.",
    tags: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="// projects"
          title="Featured Work"
          description="A selection of projects I've built throughout my career."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative rounded-lg border bg-card p-6 transition-all hover:shadow-glow ${
                project.highlight
                  ? "border-primary/30 shadow-glow"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {project.highlight && (
                <span className="absolute -top-3 left-4 rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground">
                  Featured
                </span>
              )}
              <project.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
