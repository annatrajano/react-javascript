import { AiFillCloseCircle } from "react-icons/ai"

// # Style
import "./card.css";

const Card = ({ user, data, userDelete }) => {

  return (
    <div className="colaborador" >
      <AiFillCloseCircle size={25} onClick={userDelete} className="deletar"/>
      <div className="cabecalho" style={{ backgroundColor: `${data.color}` }} >
        <img src={user.imageValue} alt={user.imageValue}></img>
      </div>
      <div className="rodape">
        <h4>{user.nameValue}</h4>
        <h5>{user.positionValue}</h5>
      </div>
    </div>
  );
};

export default Card;
