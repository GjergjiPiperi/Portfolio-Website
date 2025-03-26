import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "My weather app with changing background",
    tags: ["API", "React", "Tailwind"],
    projectLink: "https://weather-go-beta.vercel.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "E-commerce store with a simple chatbot",
    tags: ["API", "React", "Chatbot"],
    projectLink: "https://shop-sphere-delta.vercel.app/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Favorite movies app",
    tags: ["Development", "API"],
    projectLink: "https://film-verse-theta.vercel.app/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Full stack project coming soon",
    tags: ["Web-design", "Next-js"],
    projectLink: "",
  },
];

function Work() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-8 headline-2">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
