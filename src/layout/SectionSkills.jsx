import { customSkillList as skills } from "../utils/data.js";
import Skill from "../components/Skill";

const SectionSkills = () => {
  return (
    <>
      <div className="section-skills__background"></div>
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
    </>
  );
};

export default SectionSkills;
