import React from "react";

interface MainSubjectProps {
  subject: string;
  title: string;
  className?: string;
}
const MainSubject: React.FC<MainSubjectProps> = ({
  subject,
  title,
  className,
}) => {
  return (
    <section className={className}>
      <span className="text-xl text-primary !font-Lato font-bold tracking-wider">
        {subject}
      </span>
      <h1 className="text-4xl font-bold tracing-widest">{title}</h1>
    </section>
  );
};

export default MainSubject;
