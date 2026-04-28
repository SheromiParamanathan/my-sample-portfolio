import clsx from "clsx";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={clsx("relative px-5 sm:px-6", className)}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
