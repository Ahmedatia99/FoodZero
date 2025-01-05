import React from "react";

const MainSubject = ({ subject, title, className }) => {
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
