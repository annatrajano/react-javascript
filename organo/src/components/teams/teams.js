import hexToRgba from "hex-to-rgba";

// # Style
import "./teams.css";
import Card from "../card";

const Teams = ({data, users, userDelete, changeColorTeam, makeFavoriteUser }) => {



  return (
    users.length > 0 &&
    <section
      className="teams"
      style={{  backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba( data.color, "0.6")}}
    >
      <input type="color" className="input-cor" value={data.color}  onChange={(e)=> changeColorTeam(e.target.value, data.id)} />
      <h3 style={{ borderBottomColor: `${data.color}` }}>{data.name}</h3>
      <div className="users">
        {users.map((user, index) => {
          return <Card key={index} user={user} data={data} userDelete={userDelete} makeFavoriteUser={makeFavoriteUser}/>
})}
      </div>
    </section>
  );
};

export default Teams;
