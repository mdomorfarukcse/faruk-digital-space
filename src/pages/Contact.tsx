import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  { icon: Mail, label: "Email", value: "mdomorfaruk.lu.cse@gmail.com", href: "mailto:mdomorfaruk.lu.cse@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 (313) 900-6241", href: "tel:+13139006241" },
  { icon: MapPin, label: "Location", value: "Warren, MI 48091, USA" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mdomor-faruk", href: "https://www.linkedin.com/in/mdomor-faruk" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:mdomorfaruk.lu.cse@gmail.com?subject=Message from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading tag="// contact" title="Get In Touch" description="Have a project in mind or looking for a developer? Let's connect." />

        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30">
                <item.icon className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-mono-display">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 rounded-lg border border-border bg-card p-6"
          >
            <div>
              <label className="mb-1 block text-sm font-mono-display text-muted-foreground">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-mono-display text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-mono-display text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-md border border-border bg-secondary px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:shadow-glow"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
