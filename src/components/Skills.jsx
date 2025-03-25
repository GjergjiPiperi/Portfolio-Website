function Skills() {
  const frontendSkills = ["React", "Javascript", "Tailwind", "TypeScript"];

  const backendSkills = ["Node.js", "Next.js", "MongoDB", "PostgreSQL"];

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="mt-3 mb-8 text-zinc-400 ">
          Explore the tools and technologies I have learned, as well as those I
          am currently mastering, to create innovative and high-quality web
          applications.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="p-6 transition-all rounded-xl hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-bold">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech) => (
                <span
                  key={tech}
                  className="py-1 text-sm text-zinc-200 rounded-full bg-zinc-200/10 px-3 hover:bg-zinc-200/20 hover:shadow-[0_2px_8px_rgba(168,169,173,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 transition-all rounded-xl hover:-translate-y-1">
            <h3 className="mb-4 text-xl font-bold">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech) => (
                <span
                  key={tech}
                  className="py-1 text-sm text-zinc-200 rounded-full bg-zinc-200/10 px-3 hover:bg-zinc-200/20 hover:shadow-[0_2px_8px_rgba(168,169,173,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
