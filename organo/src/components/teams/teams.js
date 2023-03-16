// # Style
import "./teams.css";
import Card from "../card";

const Teams = ({data, users, userDelete}) => {


  return (
    users.length > 0 &&
    <section
      className="teams"
      style={{ backgroundColor: `${data.secondaryColor}` }}
    >
      <h3 style={{ borderBottomColor: `${data.primaryColor}` }}>{data.name}</h3>
      <div className="users">
        {users.map((user, index) => {
          return <Card key={index} user={user} data={data} userDelete={userDelete}/>
})}
      </div>
    </section>
  );
};

export default Teams;
