import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-mono-display text-lg font-bold">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-foreground">omor</span>
            <span className="text-primary">.dev</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/mdomor-faruk" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:mdomorfaruk.lu.cse@gmail.com" className="text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground font-mono-display">
            © {new Date().getFullYear()} Md Omor Faruk. Warren, MI.
          </p>
        </div>
      </div>
    </footer>
  );
}
