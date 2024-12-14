import Button from "../components/Button.jsx";
import Project from "../components/Project.jsx";
import { customProjectsList as projects } from "../utils/data.js";

const SectionProjects = () => {
  return (
    <section className="section-projects">
      <header className="section-projects__header navbar">
        <h2 className="section-projects__heading heading heading--xl">
          Projects
        </h2>
        <Button />
      </header>
      <ul className="section-projects__list">
        {projects.map((project) => (
          <Project
            key={project.id}
            number={project.id}
            title={project.title}
            tagsList={project.tags}
            projectPreview={project.projectLink}
            codeLink={project.codeLink}
          />
        ))}
      </ul>
    </section>
  );
};

export default SectionProjects;
