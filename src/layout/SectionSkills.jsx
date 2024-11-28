import { skillList as skills } from "../utils/data.js";
import Skill from "../components/skill.jsx";

const SectionSkills = () => {
  return (
    <section className="section-skills">
      <ul className="section-skills__list">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            topic={skill.topic}
            yearsOfExperience={skill.yearsOfExperience}
          />
        ))}
      </ul>
    </section>
  );
};

export default SectionSkills;
