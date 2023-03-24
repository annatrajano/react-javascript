import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// # Style
import "./card.css";

const Card = ({ user, data, userDelete, makeFavoriteUser }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        onClick={() => userDelete(user.id)}
        className="deletar"
      />
      <div className="cabecalho" style={{ backgroundColor: `${data.color}` }}>
        <img src={user.imageValue} alt={user.imageValue}></img>
      </div>
      <div className="rodape">
        <h4>{user.nameValue}</h4>
        <h5>{user.positionValue}</h5>
        <div className="favoritar">
          {user.favorite ? (
            <AiFillHeart onClick={makeFavoriteUser(user.id)} size={25} />
          ) : (
            <AiOutlineHeart onClick={makeFavoriteUser(user.id)} size={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
