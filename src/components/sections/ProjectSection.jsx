import ProjectComponent from "../common/ProjectComponent";

export default function ProjectSection() {
  const projects = [
    {
      title: "MetasApp",
      techStack: "React, TailwindCSS, Context API",
      description:
        "A goals application where you can record your daily/monthly/annual goals.",
      github: "https://github.com/cesar-js-23/metasapp",
      image: "MetasApp",
      link: "https://metas-app.netlify.app/",
    },
    {
      title: "TaskApp",
      techStack: "React, NodeJS, Express, Context API, MySQL",
      description:
        "A task application where you can register any goal with its respective description and you can check if the task has already been accomplished.",
      github: "https://github.com/cesar-js-23/tasks",
      image: "TaskApp",
      link: "https://task-cesar-js.netlify.app/",
    },
    {
      title: "ClimateApp",
      techStack: "React, TailwindCSS, Context API, OpenWeatherMap API",
      description:
        "A weather app that displays the current weather in a given location.",
      github: "https://github.com/cesar-js-23/open-water",
      image: "Climate",
      link: "https://clima-cesar-js.netlify.app/",
    },
    {
      title: "Auth Account",
      techStack: "React, TailwindCSS, Context API, Firebase",
      description:
        "An application where you can register with your gmail address or by filling out the form below.",
      github: "https://github.com/cesar-js-23/authenticacion.with-google",
      image: "AuthAccount",
      link: "https://auth-cesar-js.netlify.app/",
    },
    {
      title: "Rick & Morty",
      techStack: "React, CSS, Rick & Morty API",
      description:
        "A Rick & Morty application that shows the characters of the series.",
      image: "AppRickyMorty",
      github: "https://github.com/cesar-js-23/rick-morty",
      link: "https://rick-and-morty23.netlify.app/",
    },
    {
      title: "Portfolio",
      techStack: "React, TailwindCSS, Context API ",
      description: "This portfolio website. You can see the code here.",
      image: "Portfolio",
      github: "https://github.com/cesar-js-23/cesar-js-portfolio",
      link: "https://cesar-js-portfolio.netlify.app/",
    },
  ];

  return (
    <>
      <h2
        id="projects"
        className="my-10 text-4xl sm:text-5xl font-bold border-b-8 border-solid border-[#e63946] w-fit mx-auto"
      >
        PROJECTS
      </h2>
      <section className="grid items-center w-full min-h-screen grid-cols-1 grid-rows-5 gap-6 px-5 mb-16 sm:px-10 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 sm:mt-0">
        {projects.map((project) => (
          <ProjectComponent
            key={project.title}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            github={project.github}
            img={project.image}
          />
        ))}
      </section>
    </>
  );
}
