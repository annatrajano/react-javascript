// # Style
import "./card.css";

const Card = (props) => {

  const user = props.user;
  const data = props.data;

  return (
    <div className="colaborador" >
      <div className="cabecalho" style={{ backgroundColor: `${data.primaryColor}` }} >
        <img src={user.imageValue} alt={user.imageValue}></img>
      </div>
      <div className="rodape">
        <h4>{user.nameValue}</h4>
        <h5>{user.teamValue}</h5>
      </div>
    </div>
  );
};

export default Card;
