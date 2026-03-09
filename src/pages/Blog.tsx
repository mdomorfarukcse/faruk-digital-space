import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  {
    title: "Optimizing MySQL Queries for Large-Scale Ecommerce Data",
    excerpt: "How I optimized database queries to handle 100k+ records/month in a product data management system using indexing, query restructuring, and caching strategies.",
    date: "Feb 2025",
    readTime: "6 min",
    tags: ["MySQL", "Performance", "Backend"],
  },
  {
    title: "WordPress Security: A Developer's Guide to Malware Prevention",
    excerpt: "Lessons learned from years of managing production WordPress sites — covering firewalls, file integrity monitoring, and recovery procedures.",
    date: "Jan 2025",
    readTime: "8 min",
    tags: ["WordPress", "Security", "DevOps"],
  },
  {
    title: "Building REST APIs with Laravel: Best Practices",
    excerpt: "A practical guide to structuring Laravel APIs with proper authentication, validation, error handling, and API versioning for production applications.",
    date: "Dec 2024",
    readTime: "7 min",
    tags: ["Laravel", "PHP", "API"],
  },
  {
    title: "From PHP to React: A Backend Developer's Frontend Journey",
    excerpt: "My experience transitioning from server-rendered PHP applications to modern component-based frontends with React and Tailwind CSS.",
    date: "Nov 2024",
    readTime: "5 min",
    tags: ["React", "JavaScript", "Career"],
  },
  {
    title: "Modern Agricultural Farming Based on Robotics",
    excerpt: "Published in IEEE 2018 — exploring the intersection of robotics, IoT, and server-synced systems for modern agriculture automation.",
    date: "2018",
    readTime: "10 min",
    tags: ["IEEE", "Research", "IoT"],
    publication: true,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          tag="// blog"
          title="Thoughts & Insights"
          description="Writing about web development, performance, security, and my journey as a developer."
        />

        <div className="mx-auto max-w-3xl space-y-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-glow"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-display">
                  <Calendar className="h-3 w-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-display">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
                {post.publication && (
                  <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent font-mono-display">
                    IEEE Publication
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
