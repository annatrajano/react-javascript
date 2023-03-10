// # Style
import "./teams.css";

const Teams = (props) => {
  const data = props.data;

  return (
    <section
      className="teams"
      style={{ backgroundColor: `${data.secondaryColor}` }}
    >
      <h3 style={{ borderBottomColor: `${data.primaryColor}` }}>{data.name}</h3>
    </section>
  );
};

export default Teams;
