import { motion } from "framer-motion";

interface Props {
  tag: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ tag, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <span className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono-display text-primary">
        {tag}
      </span>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
