import '../../styles/Skills.css'
export default function Skills({ skills }) {
  const Card = ({ Icon, title, desc }) => {
    return (
      <div className="cardContainer">
        <Icon />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  };
  return (
      <div className='wrapper'>
    <div className="skillsWrapper">
      {skills.map((skill, i) => {
        const { icon, title, desc } = skill;
        return <Card Icon={icon} title={title} desc={desc} />;
      })}
    </div>
    </div>
  );
}
