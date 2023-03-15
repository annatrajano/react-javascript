// # Style
import "./teams.css";
import Card from "../card";

const Teams = (props) => {
  const data = props.data;
  const users = props.users;

  return (
    users.length > 0 &&
    <section
      className="teams"
      style={{ backgroundColor: `${data.secondaryColor}` }}
    >
      <h3 style={{ borderBottomColor: `${data.primaryColor}` }}>{data.name}</h3>
      <div className="users">
        {users.map((user, index) => (
          <Card key={index} user={user} data={data}/>
        ))}
      </div>
    </section>
  );
};

export default Teams;
