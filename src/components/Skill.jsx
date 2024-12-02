const Skill = ({ topic, yearsOfExperience, id }) => {
  return (
    <li key={id} className="skill">
      <h3 className="skill__topic heading heading--l">{topic}</h3>
      <p className="skill__desc paragraph">
        {yearsOfExperience} Years Experience
      </p>
    </li>
  );
};

export default Skill;
